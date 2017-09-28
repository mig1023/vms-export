var apps = unsafeWindow.apps;

var links = document.getElementsByName("vmsexport");

for (i=0;i<links.length;i++) {
    links[i].innerHTML="<a href='#' id='link_"+links[i].id+"' onClick=\'exportinfo(\""+links[i].id+"\")\'>export</a>";
}

function exportinfo(appnum) {

    link = document.getElementById("link_"+appnum);
    link.style.backgroundColor = "#D93600";

    self.port.emit("export", apps[appnum]);
}

//экспортируем функцию в область видимости загруженной страницы
exportFunction(exportinfo, unsafeWindow, {defineAs: "exportinfo"});
