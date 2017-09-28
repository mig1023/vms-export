	var buttons = require('sdk/ui/button/action');
	var tabs = require("sdk/tabs");

	const {Cc, Ci} = require('chrome');
	const VERBOSE = true;

	let simplePrefs = require('sdk/simple-prefs');
	let observerService = Cc['@mozilla.org/observer-service;1'].getService(Ci.nsIObserverService);

	var app=[];
	var buffer = 0;

	var pageMod = require("sdk/page-mod");

	var PluginEnabled = 1;

	var button = buttons.ActionButton({
		id: "ee-export",
		label: "Estonia Export",
		icon: {
			"16": "./estonia-16.jpg",
			"32": "./estonia-32.gif",
			"64": "./estonia-64.jpg",
	  	},
	  	badge: 1,
	  	badgeColor: "#04B404",
	  	onClick: handleClick
	});

	function handleClick(state) {
		PluginEnabled = !PluginEnabled;
		if (PluginEnabled) {
			button.badgeColor = "#04B404";
			button.badge = 1;
		}
		else {
			button.badgeColor = "#FF0000";
			button.badge = 0;
		}
	}

	pageMod.PageMod({
		include: ["http://", "http://"],

		contentScriptFile: "./content-script.js",
		onAttach: function(worker) {

			worker.port.on("export", function(appinfo) {
				tabs.open({
					url:"https://eelviisataotlus.vm.ee/fingerprint",
					onLoad: function onLoad(tab) {
						app[tab.id]=appinfo;
					}
				});
			});
		}
	});

	pageMod.PageMod({
		include: ["https://eelviisataotlus.vm.ee/*"],
		onAttach: function(worker) {
			if (PluginEnabled) {
				if (tabs.activeTab.readyState == "complete") {
					worker = tabs.activeTab.attach({contentScriptFile: ["./jquery.min.js","./push-data.js"]});
					worker.port.emit("push",app[tabs.activeTab.id]);
		    		} else {
					alert("document not ready yet");
		   		 }
		   	} 
		}
	});

	var httpRequestObserver = {
		observe: function (subject, topic, data) {
			if (topic !== 'http-on-modify-request') {
				return;
			}

			var headers = {"Referer": "https://"};
			if (!headers) {
				VERBOSE && console.log('No request headers to modify (got "' + headers + '")');
				return;
			}

			var httpChannel = subject.QueryInterface(Ci.nsIHttpChannel);
			var url = (httpChannel.URI && httpChannel.URI.spec) ? httpChannel.URI.spec : null;

			if (!url || 0 !== url.indexOf('https://')) {
				VERBOSE && console.log('Not modifying request headers on non-HTTP url: "' + (url || 'unknown') + '"');
				return;
			}

			for (var name in headers) {
				var msg = {
					"topic": topic,
					"name": name,
					"value": headers[name],
					"url": url,
				};

				try {
					httpChannel.setRequestHeader(name, headers[name], false);
					VERBOSE && console.log('Set request header: ' + JSON.stringify(msg));
				} catch (e) {
					msg.err = e;
					console.log('Failed to set request header' + JSON.stringify(msg));
				}
			}
		}
	};

