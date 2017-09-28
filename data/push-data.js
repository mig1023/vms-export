self.port.on("push",function(app) {

	var countries_selectable = {
		18: '65184',	25: '65641',	57: '67841',	64: '68966', 	// AUS BEL DNK EST
		72: '69611',	73: '69877',	78: '67572',	85: '70840', 	// FIN FRA DEU GRC
		105:'72802',	133:'72822',	143:'75767',	147:'75368', 	// ISL ITA LVA LIE
		148:'75725',	149:'75759',	156:'76437',	181:'77489', 	// LTU LUX MLT NOR
		186:'77382',	197:'79405',	198:'79506',	204:'67246', 	// NLD POL PRT CZE
		236:'82504',	237:'82507',	241:'68962',	247:'82529', 	// SVK SVN ESP SWE
		248:'66688',	271:'71905', 					// CHE HUN
	};

	var countries = {
		1:  'AFG',	2:  'UNA',	3:  'ALA',	4:  'ALB',
		5:  'DZA',	6:  'XXC',	7:  'AND',	8:  'AGO',
		9:  'AIA',	10: 'ATA',	11: 'ATG',	12: 'ANT',
		13: 'XXA',	14: 'SAU',	15: 'ARG',	16: 'ARM',
		17: 'ABW',	18: 'AUS',	19: 'AUT',	20: 'AZE',
		21: 'BHS',	22: 'BHR',	23: 'BGD',	24: 'BRB',
		25: 'BEL',	26: 'BLZ',	27: 'BEN',	28: 'BMU',
		29: 'BTN',	30: 'BLR',	31: 'BOL',	32: 'BES',
		33: 'BIH',	34: 'BWA',	35: 'BRA',	36: 'BRN',
		37: 'BGR',	38: 'BFA',	39: 'BDI',	40: 'KHM',
		41: 'CMR',	42: 'CAN',	43: 'CSK',	44: 'TCD',
		45: 'CHL',	46: 'CHN',	47: 'CYP',	48: 'GBO',
		49: 'COL',	50: 'CRC',	51: 'COG',	52: 'CIV',
		53: 'CRI',	54: 'HRV',	55: 'CUB',	56: 'CUW',
		57: 'DNK',	58: 'DMA',	59: 'ECU',	60: 'EGY',
		61: 'SLV',	62: 'ARE',	63: 'ERI',	64: 'EST',
		65: 'ETH',	66: 'XYU',	67: 'TYD',	68: 'XXG',
		69: 'MKD',	70: 'RUS',	71: 'PHL',	72: 'FIN',
		73: 'FRA',	74: 'GAB',	75: 'GMB',	76: 'GEO',
		77: 'DSL',	78: 'DEU',	79: 'GHA',	80: 'JAM',
		81: 'JPN',	82: 'GIB',	83: 'DJI',	84: 'JOR',
		85: 'GRC',	86: 'GRD',	87: 'GRL',	88: 'GLP',
		89: 'GUM',	90: 'GTM',	91: 'GGY',	92: 'GIN',
		93: 'GNB',	94: 'GNQ',	95: 'GUY',	96: 'GUF',
		97: 'HTI',	98: 'HND',	99: 'HKG',	100:'IND',
		101:'IDN',	102:'IRN',	103:'IRQ',	104:'IRL',
		105:'ISL',	106:'IMN',	107:'BVT',	108:'CYM',
		109:'CXR',	110:'CCK',	111:'COM',	112:'COK',
		113:'CPV',	114:'FLK',	115:'FRO',	116:'FJI',
		117:'SGS',	118:'HMD',	119:'MNP',	120:'MHL',
		121:'UMI',	122:'NFK',	123:'PCN',	124:'SLB',
		125:'SYC',	126:'SJM',	127:'TKL',	128:'TCA',
		129:'VGB',	130:'VIR',	131:'WLF',	132:'ISR',
		133:'ITA',	134:'JEY',	135:'YUG',	136:'KAZ',
		137:'KEN',	138:'KGZ',	139:'KIR',	140:'KWT',
		141:'LAO',	142:'LSO',	143:'LVA',	144:'LBN',
		145:'LBR',	146:'LBY',	147:'LIE',	148:'LTU',
		149:'LUX',	150:'MAC',	151:'MDG',	152:'MWI',
		153:'MYS',	154:'MDV',	155:'MLI',	156:'MLT',
		157:'MAR',	158:'MTQ',	159:'MRT',	160:'MUS',
		161:'MYT',	162:'MEX',	163:'FSM',	164:'MDA',
		165:'MCO',	166:'MNG',	167:'MNE',	168:'MSR',
		169:'MOZ',	170:'MMR',	171:'NAM',	172:'NRU',
		173:'GBN',	174:'XXX',	175:'XXY',	176:'NPL',
		177:'NIC',	178:'NER',	179:'NGA',	180:'NIU',
		181:'NOR',	182:'NCL',	183:'NZL',	184:'OMN',
		185:'UNO',	186:'NLD',	187:'PAK',	188:'PLW',
		189:'PSE',	190:'XXP',	191:'PAN',	192:'PNG',
		193:'PRY',	194:'GBP',	195:'PER',	196:'PYF',
		197:'POL',	198:'PRT',	199:'PRI',	200:'QAT',
		201:'GBR',	202:'ZAR',	203:'COD',	204:'CZE',
		205:'CAF',	206:'XXD',	207:'XXK',	208:'YMD',
		209:'PRK',	210:'KOR',	211:'DOM',	212:'REU',
		213:'XXB',	214:'ROM',	215:'ROU',	216:'BYS',
		217:'RWA',	218:'ESH',	219:'SPM',	220:'VCT',
		221:'BLM',	222:'MAF',	223:'WSM',	224:'ASM',
		225:'KNA',	226:'SMR',	227:'LCA',	228:'VAT',
		229:'SHN',	230:'STP',	231:'SEN',	232:'SRB',
		233:'SLE',	234:'SGP',	235:'SYR',	236:'SVK',
		237:'SVN',	238:'GBS',	239:'SOM',	240:'XOM',
		241:'ESP',	242:'LKA',	243:'USA',	244:'ZAF',
		245:'SDN',	246:'SUR',	247:'SWE',	248:'CHE',
		249:'SWZ',	250:'TJK',	251:'TWN',	252:'TZA',
		253:'GBD',	254:'ATF',	255:'FXX',	256:'IOT',
		257:'THA',	258:'XXT',	259:'TLS',	260:'TMP',
		261:'TGO',	262:'TON',	263:'TTO',	264:'TUN',
		265:'TUR',	266:'TKM',	267:'TUV',	268:'UKR',
		269:'UNR',	270:'UGA',	271:'HUN',	272:'SUN',
		273:'URY',	274:'UZB',	275:'VUT',	276:'VEN',
		277:'VNM',	278:'YEM',	279:'ZMB',	280:'ZWE',
		281:'NTZ'
	};

	var page = document.getElementsByName('page');
	
	if (page[0].value === '1') {
	//////////////////////////////////////////////////
	
		var email = document.getElementsByName('email');
		var cid = app.EmailCenterID;
		if (!email[0].value) {
			if (cid == 30) {
				email[0].value='psk@';
			}
			else if (cid == 34) {
				email[0].value='king@';
			}
			else if (cid == 32) {
				email[0].value='ivg@';
			}
			else if ( (cid == 39) || (cid == 50) ||	(cid == 37) || (cid == 29) ) {
				email[0].value='spb@';
			}
			else {
				email[0].value='hod@'; 
			}
		}
			

	} else if (page[0].value === '2') {
	//////////////////////////////////////////////////

		// фамилия при рождении
		if (app.PrevLName == '') {
			submit_line('birth_familynames', app.LName);
		}
		else {
			submit_line('birth_familynames', app.PrevLName);
		}

		// все остальные поля
		var submit2 = {
			'familynames' : app.LName,
			'firstnames' : app.FName,
			'birthday_year' : parseInt(app.BthDate.split('.')[2]),
			'birthday_month' : parseInt(app.BthDate.split('.')[1]),
			'birthday_day' : parseInt(app.BthDate.split('.')[0]),
			'person_code' : app.IDNumber,
			'birth_country' : countries[app.BrhCountry],
			'birth_city' : app.BrhPlace
		}
	
		for (var k in submit2) { submit_line(k, submit2[k]); }
		
		// предупреждение о том, что нист-файл не добавлен 
		var form_prev = document.getElementsByName('data');
		add_event(form_prev[0], 'submit', check_nist_file);

		var next_button = document.getElementsByName('go_next');
		add_event(next_button[0], 'click', it_clicked);

	} else if (page[0].value=='3') {
	//////////////////////////////////////////////////
		
		var mt = 'marital_status_';
		
		//пол
		if (clear('gender_M') && clear('gender_N')) {
			if (app.Gender == '1') {
				check_on('gender_M');
			}
			else if (app.Gender == '2') {
				check_on('gender_N');
			}
		}

		//семейное положение
		if (
			clear(mt+'1') && clear(mt+'2') && clear(mt+'3') && 
			clear(mt+'4') && clear(mt+'5') && clear(mt+'6')
		) {
			if (app.Family == '2') { check_on(mt+'1'); }
			else if (app.Family == '1') { check_on(mt+'2'); }
			else if (app.Family == '4') { check_on(mt+'3'); }
			else if (app.Family == '5') { check_on(mt+'4'); }
			else if (app.Family == '3') { check_on(mt+'5'); }
			else if (app.Family == '6') { check_on(mt+'6'); }
		}

		// все остальные поля
		var submit3_1 = {
			'citizenship' : countries[app.Citizenship],
			'birth_citizenship' : countries[app.PrevCitizenship],
			'parent_familyname': app.app_kinderdata_1,
			'parent_firstname': app.app_kinderdata_2,
			'parent_citizenship': countries[app.app_kinderdata_3],
		}

		for (var k in submit3_1) { submit_line(k, submit3_1[k]); }

		var submit3_2 = {
			'street': app.app_kinderdata_4,
			'house_nr': app.app_kinderdata_5,
			'postindex': app.app_kinderdata_6,
			'unit': app.app_kinderdata_7,
			'city': app.app_kinderdata_8,
			'country': countries[app.app_kinderdata_9],
		}

		for (var k in submit3_2) { submit_line('parent_address_'+k, submit3_2[k]); }
		
	} else if (page[0].value=='4') {
	//////////////////////////////////////////////////

		var pt = 'passport_type_';

		//тип паспорта
		if (
			clear(pt+'10') && clear(pt+'102') && clear(pt+'301') && 
			clear(pt+'101') && clear(pt+'6') && clear('radioOther')
		) {
			if (app.PassType1 == '1') { check_on(pt+'10'); }
			else if (app.PassType2 == '1') { check_on(pt+'102'); }
			else if (app.PassType3 == '1') { check_on(pt+'301'); }
			else if (app.PassType4 == '1') { check_on(pt+'101'); }
			else if (app.PassType5 == '1') { check_on(pt+'6'); }
			else if (app.PassType6 == '1') { check_on(pt+'radioOther'); }
		}

		// все остальные поля
		var submit4 = {
			'number' : app.PassNum,
			'institution' : app.PassWhom,
			'country' : countries[app.PassCountry],
			'date_year' : parseInt(app.PassDate.split('-')[0]),
			'date_month' : parseInt(app.PassDate.split('-')[1]),
			'date_day' : parseInt(app.PassDate.split('-')[2]),
			'valid_year' : parseInt(app.PassTill.split('-')[0]),
			'valid_month' : parseInt(app.PassTill.split('-')[1]),
			'valid_day' : parseInt(app.PassTill.split('-')[2]),
			'other' : app.PassType_other,
		}
	
		for (var k in submit4) { submit_line('passport_'+k, submit4[k]); }

	} else if (page[0].value=='5') {
	//////////////////////////////////////////////////

		// является ли заявитель гражданином страны проживания
		if (clear('living_in_homecountry_0') && clear('toHide2_trigger')) {
			if (app.VidNo) {
				check_on('living_in_homecountry_0');
				check_on('return_permission_1');
			}
			else {	check_on('toHide2_trigger');
				document.getElementById('toHide2').style.display='none';
			}
		}

		// неработающий заявитель
		if ((!app.ProfActivity) && (!app.WorkOrg_name)) {
			check_on('toHide_trigger');
			document.getElementById('toHide').style.display='none';
			}

		// все остальные поля
		var submit5_1 = {
			'return_number' : app.Permi_number,
			'return_valid_year' : parseInt(app.Permi_till.split('-')[0]),
			'return_valid_month' : parseInt(app.Permi_till.split('-')[1]),
			'return_valid_day' : parseInt(app.Permi_till.split('-')[2]),
			'occupation' : app.ProfActivity,
		}

		for (var k in submit5_1) { submit_line(k, submit5_1[k]); }

		var submit5_2 = {
			'institution' : app.WorkOrg_name,
			'street' : app.WorkOrg_street,
			'house_nr' : app.WorkOrg_build,
			'postindex' : app.WorkOrg_index,
			'city' : app.WorkOrg_city,
			'unit' : app.WorkOrg_region,
			'country' : countries[app.WorkOrg_country],
			'phone' : app.WorkOrg_phone,
		}

		for (var k in submit5_2) { submit_line('occupation_'+k, submit5_2[k]); }
	
	} else if (page[0].value=='6') {
	//////////////////////////////////////////////////

		// кол-во въездов
		if (clear('toUnselect') && clear('visa_multiple_1') && clear('visa_multiple_8')) {
			if (app.VisaNum == '0') { 
				check_on('visa_multiple_1'); 
			}
			else if (app.VisaNum == '1') { 
				check_on('toUnselect'); 
			}
			else if (app.VisaNum == '2') { 
				check_on('visa_multiple_8'); 
			}
		}

		// страна назначения
		$('#'+countries_selectable[app.Countries]+'-selectable').addClass('ms-selected')
			.children('.ms-elem-selected').show();
		$('#target_countries option[value="'+countries[app.Countries]+'"]').prop('selected', true);

		// все остальные поля
		var submit6 = {
			'first_entry' : countries[app.FirstCountry],
			'days_count' : app.CalcDuration,
		}
	
		for (var k in submit6) { submit_line(k, submit6[k]); }
	
	} else if (page[0].value=='7') {
	//////////////////////////////////////////////////

		// родственник в ЕС
		if (clear('toHide2_trigger') && clear('related_eu_1')) {
			if ((!app.EuFName) && (!app.EuPassNum)) {
				check_on('toHide2_trigger'); 
			}
			else {  check_on('related_eu_1');
			}
		}

		// предыдущих виз нет
		if (!app.visa_1_fd) {
			check_on('toHide_trigger');
			document.getElementById('toHide').style.display='none';
		}

		// вносим все предыдущие визы
		var VisaCounter = 0;
		var visasalready = document.getElementsByTagName("input"); 
		for(var i=0; i < visasalready.length; i++) {
			if (visasalready[i].name.indexOf("del__visa__")+1) {
				VisaCounter++;
			}
		}
		
		// считаем все визы
		var old_visa_fuse = 0;
		var visa_all_index = 0;
		
		while ('visa_'+(visa_all_index+1)+'_fd' in app) {
			// предохранитель против слишком старых виз
			if (old_visa(app['visa_'+(visa_all_index+1)+'_fd'], app['visa_'+(visa_all_index+1)+'_ld'])) {
				old_visa_fuse = 1;
			}
			visa_all_index++;
		}

		if (VisaCounter < visa_all_index) {
		
			var visa_index = VisaCounter+1;
			
			var visa_fd = app['visa_'+visa_index+'_fd'];
			var visa_ld = app['visa_'+visa_index+'_ld'];
			
			var visa_submit = {
				'out_year' : parseInt(visa_fd.split('-')[0]),
				'out_month' : parseInt(visa_fd.split('-')[1]),
				'out_day' : parseInt(visa_fd.split('-')[2]),
				'valid_year' : parseInt(visa_ld.split('-')[0]),
				'valid_month' : parseInt(visa_ld.split('-')[1]),
				'valid_day' : parseInt(visa_ld.split('-')[2]),
			}
	
			for (var k in visa_submit) { submit_line('visa_'+k, visa_submit[k]); }
			
			var button = document.getElementsByName("add_visa");
			if (old_visa_fuse) {
				alert('Обнаружена слишком cтарая виза. Её экспорт невозможен. '+
				'Во избежание ошибок экспорт виз производиться не будет.');
			}
			else {
				simulate(button[0], "click");
			}
		}
		
		
		if (app.Fingers == "2") {
			check_on('toHide3_trigger2');
			document.getElementById('toHide3').style.display='';
			
			var finger_submit = { 
				'year' : parseInt(app.FingersDate.split('-')[0]),
				'month' : parseInt(app.FingersDate.split('-')[1]),
				'day' : parseInt(app.FingersDate.split('-')[2]),
			}
	
			for (var k in finger_submit) { 
				submit_line('earlier_fingerprints_date_'+k, finger_submit[k]);
			}
		}
		else {  
			check_on('toHide3_trigger');
			document.getElementById('toHide3').style.display='none';
		}
	
	} else if (page[0].value=='8') {
	//////////////////////////////////////////////////

		var tr = 'travel_goal_id_';

		// цель поездки
		if (
			clear(tr+'1') && clear(tr+'2') && clear(tr+'4') && clear(tr+'10') &&
			clear(tr+'12') && clear(tr+'47') && clear(tr+'48') && 
			clear('toShow_trigger1') && clear(tr+'50') && clear('toShow_trigger2') &&
			(document.getElementById('travel_goal_other_text').value == '')
		) {
			if (app.visa_purpose_1 == '1') { // транзит
				check_on('toShow_trigger2');
				document.getElementById('toShow').style.display='';
			}; 
			if (app.visa_purpose_2 == '1') { check_on(tr+'4'); }; // оф.поездка
			if (app.visa_purpose_3 == '1') { check_on(tr+'1'); }; // деловая
			if (app.visa_purpose_4 == '1') { // тр.аэропорта
				check_on('toShow_trigger1'); 
				document.getElementById('toShow').style.display='';
			}; 
			if (app.visa_purpose_5 == '1') { check_on(tr+'48'); }; // учёба
			if (app.visa_purpose_6 == '1') { check_on(tr+'12'); }; // медицина
			if (app.visa_purpose_7 == '1') { check_on(tr+'2'); }; // туризм
			if (app.visa_purpose_8 == '1') { check_on(tr+'47'); }; // культура
			if (app.visa_purpose_9 == '1') { check_on(tr+'50'); }; // спорт
			if (app.visa_purpose_10 == '1') { check_on(tr+'10'); }; // семья или друзья
			if (app.visa_purpose_11 == '1') { check_on('radioOther'); }; // другая
		}
		
		var purpose_submit = { 
				'travel_goal_other' : app.VisaOther,
			}
		for (var k in purpose_submit) { submit_line(k, purpose_submit[k]); }

	} else if (page[0].value=='9') {
	//////////////////////////////////////////////////

		// даты въезда и выезда, гостиница
		var submit9_1 = {
			'arrive_year' : parseInt(app.AppSDate.split('-')[0]),
			'arrive_month' : parseInt(app.AppSDate.split('-')[1]),
			'arrive_day' : parseInt(app.AppSDate.split('-')[2]),
			'leave_year' : parseInt(app.AppFDate.split('-')[0]),
			'leave_month' : parseInt(app.AppFDate.split('-')[1]),
			'leave_day' : parseInt(app.AppFDate.split('-')[2]),
			
			'stay_name' : app.Hotels,
			'stay_phone' : app.hotel_info_2,
			'stay_country' : countries[app.hotel_info_3],
			'stay_postindex' : app.hotel_info_4,
			'stay_city' : app.hotel_info_6,
			'stay_street' : app.hotel_info_7,
			'stay_house_nr' : app.hotel_info_8,
			'stay_email' : app.hotel_info_9,
			'stay_phone' : app.hotel_info_10,
			'stay_fax' : app.hotel_info_10,
		}

		for (var k in submit9_1) { submit_line(k, submit9_1[k]); }

		// принимающая организация		
		var submit9_2 = {		
			'name' : app.app_company_1,
			'address_street' : app.app_company_5,
			'address_house_nr' : app.app_company_6,
			'address_postindex' : app.app_company_3,
			'address_city' : app.app_company_4,
			'address_country' : countries[app.app_company_2],
			'phone' : app.ACompanyPhone,
			'fax' : app.ACompanyPhone,
			'contact_firstname' : app.app_person_2,
			'contact_familyname' : app.app_person_1,
			'contact_phone' : app.app_person_5,
			'contact_fax' : app.app_person_5,
			'contact_address' : app.app_person_3,
			'contact_email' : app.app_person_4,
		}
	
		for (var k in submit9_2) { submit_line('visiting_company_'+k, submit9_2[k]); }
	
	} else if (page[0].value=='10') {
	//////////////////////////////////////////////////

		var sf = 'self__travel_expense_resource_id__';
		var sp = 'sponsor__travel_expense_resource_id__';

		// оплата расходов
		if (
			clear(sf+'1') && clear(sf+'2') && clear(sf+'3') &&
			clear(sf+'4') && clear(sf+'6') && clear(sf+'5') &&
			clear(sp+'1') && clear(sp+'4') && clear(sp+'7') &&
			clear(sp+'6') && clear(sp+'5')
		) {

			if ( 
				(app.mezzi_type_1 == '1') || (app.mezzi_type_2 == '1') ||
				(app.mezzi_type_3 == '1') || (app.mezzi_type_4 == '1') ||
				(app.mezzi_type_5 == '1') || (app.mezzi_type_6 == '1')
			) {
				check_on('self_expense_source');
				document.getElementById('self_resources').style.display = '';
			}
			
			if ( 
				(app.mezzi_type_7 == '1') || (app.mezzi_type_8 == '1') ||
				(app.mezzi_type_9 == '1') || (app.mezzi_type_10 == '1') ||
				(app.mezzi_type_11 == '1')
			) {
				if (app.MezziWhom == 1) {
					check_on('sponsor_expense_source_1');
				}
				else {	
					check_on('sponsor_expense_source_2'); 
					document.getElementById('sponsor_specify').style.display = '';
				}
				document.getElementById('sponsor_resources').style.display = '';
			}
			
			// сам человек
			if (app.mezzi_type_1 == '1') { check_on(sf+'1'); };
			if (app.mezzi_type_2 == '1') { check_on(sf+'2'); };
			if (app.mezzi_type_3 == '1') { check_on(sf+'3'); };
			if (app.mezzi_type_4 == '1') { check_on(sf+'4'); };
			if (app.mezzi_type_5 == '1') { check_on(sf+'6'); };
			if (app.mezzi_type_6 == '1') { check_on(sf+'5'); };
			
			// спонсор
			if (app.mezzi_type_7 == '1') { check_on(sp+'1'); };
			if (app.mezzi_type_8 == '1') { check_on(sp+'4'); };
			if (app.mezzi_type_9 == '1') { check_on(sp+'7'); };
			if (app.mezzi_type_10 == '1') { check_on(sp+'6'); };
			if (app.mezzi_type_11 == '1') { check_on(sp+'5'); };
		
			var mezzi_submit = { 
				'travel_expense_source_text' : app.MezziWhomOther,
				'travel_expense_resource_text__self' : app.Mezzi_other_1,
				'travel_expense_resource_text__sponsor' : app.Mezzi_other_2,
				'assurance_valid_year' : parseInt(app.InsDate.split('-')[0]),
				'assurance_valid_month' : parseInt(app.InsDate.split('-')[1]),
				'assurance_valid_day' : parseInt(app.InsDate.split('-')[2]),
			}
	
			for (var k in mezzi_submit) { submit_line(k, mezzi_submit[k]); }
			
			if ((app.InsDate == '0000-00-00') || (app.InsDate == '')) {
				check_on('toHide_trigger');
				document.getElementById('toHide').style.display='none';
			}
		}
	
	} else if (page[0].value=='11') {
	//////////////////////////////////////////////////

		// родственники
		var submit11 = {
			'familyname' : app.EuLName,
			'firstname' : app.EuFName,
			'birthday_year' : parseInt(app.EuBDate.split('-')[0]),
			'birthday_month' : parseInt(app.EuBDate.split('-')[1]),
			'birthday_day' : parseInt(app.EuBDate.split('-')[2]),
			'citizenship' : countries[app.EuCitizen],
			'passport_number' : app.EuPassNum,
			'related_id' : app.FamRel_id, 
		}
	
		for (var k in submit11) { submit_line('depend_'+k, submit11[k]); }
	
	} else if (page[0].value=='12') {
	//////////////////////////////////////////////////

		// домашний адрес
		var submit12 = {
			'home_street' : app.fulladdress_1,
			'home_house_nr' : app.fulladdress_2,
			'home_city' : app.fulladdress_3,
			'home_postindex' : app.fulladdress_4,
			'home_unit' : app.fulladdress_5,
			'home_country' : countries[app.fulladdress_6],
			'applicant_email' : app.fulladdress_7,
			'applicant_phone' : app.AppPhone,
			'apply_place_id' : app.CenterID,
		}
	
		for (var k in submit12) { submit_line(k, submit12[k]); }
	}
});

// проверка на старую визу
function old_visa(start_date, end_date) {
	var date = new Date();
	var last_year = date.getFullYear();
	
	last_year = last_year - 3;
	
	start_year = parseInt(start_date.split('-')[0]);
	end_year = parseInt(end_date.split('-')[0]);

	if ((start_year < last_year) || (end_year < last_year)) {
		return true;
	}
	else {	
		return false
	};
}

// вывод строки большими и только если уже не заполненно
function submit_line(place, line) {
	var var_place = document.getElementsByName(place);
	var line_st = String(line);
	var line_up = line_st.toUpperCase();
	
	if (!var_place[0].value) {
		var_place[0].value = line_up;
	}
}

// проверяем флажок
function clear(place) {
	if (document.getElementById(place).checked) {
		return false
	}
	else {  
		return true
	};
}

// проставляем флажок
function check_on(place) {
	document.getElementById(place).checked = true;
}

// клик по элементу
function simulate(element, eventName) {

	var defOptions = {
		pointerX: 0,		pointerY: 0,		button: 0,		
		ctrlKey: false,		altKey: false,		shiftKey: false,
		metaKey: false,		bubbles: true,		cancelable: true
	}

	for (var property in arguments[2])
		defOptions[property] = arguments[2][property];
	var options = defOptions || {};
	var oEvent = null;

	oEvent = document.createEvent('MouseEvents');
		oEvent.initMouseEvent(eventName, options.bubbles, options.cancelable, document.defaultView,
		options.button, options.pointerX, options.pointerY, options.pointerX, options.pointerY,
		options.ctrlKey, options.altKey, options.shiftKey, options.metaKey, options.button, element);
	element.dispatchEvent(oEvent);

	return element;
}

// флаг перехода на сл.страницу со стр.загрузки ниста-файла
var click_next = 0;

function it_clicked() {
	clicked_next = 1;
}

// проверка того загружен ли нист-файл
function check_nist_file(event) {
	if (clicked_next) {
		var page_text = document.documentElement.innerHTML;
		if ( ! /файл с отпечатками пальцев добавлен/.test(page_text) ) {
			event.preventDefault();
			alert("Пожалуйста, добавьте нист-файл!");
		};
		clicked_next = 0;
	}
}

// добавление обработчика события
function add_event(obj, e, h) {
	if (obj.addEventListener) { 
		obj.addEventListener(e, h, false);
	}
	else if (obj.attachEvent) {
		obj.attachEvent('on'+e, h);
	}
	else { 
		obj['on'+e]=function() { h(); };
	};
}
