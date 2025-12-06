var mode_te_st = localStorage['mode_te_st'];
var page_mytest = 'page_mytest';
var nav_bottomm = 'show';
var isHereExamLoaded;
var countPDF = 0;
var admob_mode;
var no_no = '"no"';
var kind_me;

function send_saved_direct() { localStorage_tafaseel_Student_Data = localStorage['tafaseel_Student_Data'];
    localStorage_number_exam = localStorage['number_exam'];
    localStorage_exam_data_for_std = localStorage['exam_data_for_std']; if (localStorage['mode_send_ans'] == 'no') { $('#exam_saved_st table thead td:first')['html']('<p onclick="send_ans(localStorage_tafaseel_Student_Data, localStorage_number_exam, localStorage_exam_data_for_std)" style="float: right; margin-right: 5px; margin-left: -70px; font-size: 14px; margin-top: 2px; margin-bottom: 0px;">' + lan_SendExam_tbl_std + '</p><span>' + lan_My_Exams_For_Student + '</span>');
        go_page('prev_exam');
        send_ans(localStorage['tafaseel_Student_Data'], localStorage['number_exam'], localStorage['exam_data_for_std']) } } setTimeout(function() { send_saved_direct() }, 3500);
if ((/(ipad|iphone|ipod|android)/i ['test'](navigator['userAgent']))) {} else { networkState = 1;
    kind_me = 'electron'; var navigator_info = window['navigator']; var screen_info = window['screen']; var uid = navigator_info['mimeTypes']['length'];
    uid += navigator_info['userAgent']['replace'](/\D+/g, '');
    uid += navigator_info['plugins']['length'];
    uid += screen_info['height'] || '';
    uid += screen_info['width'] || '';
    uid += screen_info['pixelDepth'] || '';
    uid = uid['substr'](uid['length'] - 40);
    num_device = 'uuid: ' + uid };
window['indexedDB'] = window['indexedDB'] || window['mozIndexedDB'] || window['webkitIndexedDB'] || window['msIndexedDB'] || window['shimIndexedDB'];
window['IDBTransaction'] = window['IDBTransaction'] || window['webkitIDBTransaction'] || window['msIDBTransaction'];
window['IDBKeyRange'] = window['IDBKeyRange'] || window['webkitIDBKeyRange'] || window['msIDBKeyRange'];
device_not_support_indexedDB = 'support';
if (!window['indexedDB']) { document['addEventListener']('deviceready', onDeviceReady2, false);

    function onDeviceReady2() { deviceManufacturer = device['manufacturer']; if (deviceManufacturer == 'Apple' || deviceManufacturer == 'APPLE' || deviceManufacturer == 'apple' || deviceManufacturer == 'Android' || deviceManufacturer == 'android' || deviceManufacturer == 'ANDROID') { device_not_support_indexedDB = 'device_not_support_indexedDB' } else { device_not_support_indexedDB = 'device_not_support_indexedDB' } } } else { var db; var request = window['indexedDB']['open']('MyExsams236', 1);
    request['onerror'] = function(_0x9f58x10) { alert('لم يتم الاتصال بقاعدة البيانات') };
    request['onsuccess'] = function(_0x9f58x10) { db = request['result'];
        setTimeout(function() { readAll();
            readAll_exam_saveded() }, 1000) };
    request['onupgradeneeded'] = function(_0x9f58x10) { var db = _0x9f58x10['target']['result']; var _0x9f58x11 = db['createObjectStore']('myTestLoaded', { keyPath: 'id' }); var _0x9f58x12 = db['createObjectStore']('myans', { keyPath: 'id' }); var _0x9f58x13 = db['createObjectStore']('myexam', { keyPath: 'id' }); var _0x9f58x14 = db['createObjectStore']('blobs', { keyPath: 'id' }) } };

function alertDismissed() {} setTimeout(function() { readAll_exam_saveded_new() }, 1000);
setTimeout(function() { readAll_ans_saveded() }, 3000);
document['addEventListener']('deviceready', onDeviceReady4, false);

function onDeviceReady4() { if (deviceManufacturer == 'Apple' || deviceManufacturer == 'APPLE' || deviceManufacturer == 'apple' || deviceManufacturer == 'Android' || deviceManufacturer == 'android' || deviceManufacturer == 'ANDROID') { readAll_ans_saveded_new() } }
if (kind_me == 'elctron') { setTimeout(function() { readAll_ans_saveded_new() }, 500) };

function downloadExam_new() { if (myObj['kind_download'] == 'indexedDB') { if (device_not_support_indexedDB == 'device_not_support_indexedDB') { if (myObj['kind_download'] == 'indexedDB') { if (deviceManufacturer == 'Apple' || deviceManufacturer == 'APPLE' || deviceManufacturer == 'apple' || deviceManufacturer == 'Android' || deviceManufacturer == 'android' || deviceManufacturer == 'ANDROID') { navigator['notification']['alert'](lan_msg_non_support, alertDismissed, lan_word_please, lan_ok) } else { alert('عفوا جهازك لا يدعم تحميل هذا الاختبار .. استخدم جهاز آخر أو تواصل مع معلمك ليقوم بتغيير إعدادات الاختبار') } } } else { downloadExam() } } else { $('#exam_loaded_forAdd')['empty']();
        exam_data = JSON['stringify'](myObj);
        exam_data2 = '' + exam_data + '';
        kind_download_for_start_exam = '"direct"';
        num = $('#num_exam')['val']();
        $('#exam_loaded_forAdd')['append']('' + '<tr><td width=\'50%\' onclick=\'start_exam(' + num + ',' + exam_data2 + ', ' + no_no + ', ' + no_no + ', ' + kind_download_for_start_exam + ' )\'>' + exam_name + '<br>' + lan_word_start + ' <i class=\'fas fa-sign-in-alt gre animated infinite wobble\'></i>' + '</td><td style=\'padding: 5px;\'>' + num + '</td><td width=\'50%\' onclick=\'remove_exam(' + +num + ')\'>' + exam_info + '<br>' + lan_word_delete + ' <i class=\'fas fa-minus-circle rem\'></i>' + '</td></tr>');
        show_search();
        $('#load')['css']('display', 'none') } }

function readAll() { $('#exam_loaded_forAdd')['empty'](); var _0x9f58x11 = db['transaction']('myTestLoaded')['objectStore']('myTestLoaded');
    _0x9f58x11['openCursor']()['onsuccess'] = function(_0x9f58x10) { var _0x9f58x19 = _0x9f58x10['target']['result']; if (_0x9f58x19) { cursorValueExam_data = '' + _0x9f58x19['value']['exam_data'] + '';
            $('#exam_loaded_forAdd')['append']('' + '<tr><td width=\'50%\' onclick=\'start_exam(' + _0x9f58x19['key'] + ',' + cursorValueExam_data + ' )\'>' + _0x9f58x19['value']['exam_name'] + '<br>' + lan_word_start + ' <i class=\'fas fa-sign-in-alt gre animated infinite wobble\'></i>' + '</td><td style=\'padding: 5px;\'>' + _0x9f58x19['key'] + '</td><td width=\'50%\' onclick=\'remove_exam(' + +_0x9f58x19['key'] + ')\'>' + _0x9f58x19['value']['exam_info'] + '<br>' + lan_word_delete + ' <i class=\'fas fa-minus-circle rem\'></i>' + '</td></tr>');
            isHereExamLoaded = 'yes';
            _0x9f58x19['continue']() } else { if (isHereExamLoaded != 'yes') { $('#exam_loaded_forAdd')['append']('<td colspan=\'5\'>' + lan_You_have_not_downloaded_any_exam_yet + '</td>') } } } }
var one_blob = {};
slove = '<script> add_script_blob_loop(); </' + 'script> ';

function downloadExam() { $('#load')['css']('display', 'inline-block');
    $('#btnDown')['parent']()['css']('display', 'none');
    $('#btnDown')['parent']()['next']()['attr']('colspan', 2);
    myObj = JSON['parse'](exam_data);
    load_blob = 0;
    load_blob_yes = 0;
    count_blob = 0;
    add_script_blobs() }

function add_script_blobs() { count_blob++;
    add_scr_blob = '<script> if (myObj.img_val_ASK' + count_blob + ' != \'\' && myObj.img_val_ASK' + count_blob + ' != \'undefined\') {load_blob_yes++; fetch(myObj.img_val_ASK' + count_blob + ').then(function(response) { return response.blob(); }).then(function(myBlob) { one_blob.img_ASK' + count_blob + ' = myBlob; load_blob++; }).catch(function(error) {load_blob_yes--; myObj.img_val_ASK' + count_blob + ' = \'\'; console.log(\'error = \' + error)}); } </' + 'script>';
    $('body')['append'](add_scr_blob);
    add_script_blob_loop() }

function add_script_blob_loop() { if (myObj['count_ask'] > count_blob) { add_script_blobs() } else { setTimeout(function() { if (load_blob == load_blob_yes) { if (load_blob_yes == 0) { downloadExam2() } else { loopLoad() } } else { loopLoad() } }, 500) } }

function loopLoad() { if (load_blob == load_blob_yes) { add_blob = '<script> all_blob = one_blob; </' + 'script>';
        $('body')['append'](add_blob);
        setTimeout(function() { add_scr_blob_save = '<script> var request = db.transaction([\'blobs\'], \'readwrite\').objectStore(\'blobs\').add({ id: num, blob: all_blob }); request.onsuccess = function(event) { downloadExam2() }; request.onerror = function() { var request = db.transaction([\'blobs\'], \'readwrite\').objectStore(\'blobs\').put({ id: num, blob: all_blob }); request.onsuccess = function(event) { downloadExam2() } }; </' + 'script>';
            $('body')['append'](add_scr_blob_save) }, 500) } else { loopLoad2() } }

function loopLoad2() { setTimeout(function() { loopLoad() }, 3000) }

function downloadExam2() { $('#btnDown')['parent']()['css']('display', 'table-cell');
    $('#btnDown')['parent']()['next']()['attr']('colspan', 1);
    exam_data = JSON['stringify'](myObj); var request = db['transaction'](['myTestLoaded'], 'readwrite')['objectStore']('myTestLoaded')['add']({ id: document['getElementById']('num_exam')['value'], exam_name: exam_name, exam_info: exam_info, exam_data: exam_data });
    request['onsuccess'] = function(_0x9f58x10) { Swal['fire']({ type: 'success', title: lan_msg_success_download_exam1, text: lan_msg_success_download_exam2, confirmButtonText: lan_ok });
        $('#load')['css']('display', 'none');
        $('#result_search')['fadeOut']();
        $('#show_search')['delay'](400)['fadeIn']();
        readAll() };
    request['onerror'] = function(_0x9f58x10) { var request = db['transaction'](['myTestLoaded'], 'readwrite')['objectStore']('myTestLoaded')['put']({ id: document['getElementById']('num_exam')['value'], exam_name: exam_name, exam_info: exam_info, exam_data: exam_data });
        request['onsuccess'] = function(_0x9f58x10) { Swal['fire']({ type: 'success', title: lan_msg_success_download_exam1, text: lan_msg_success_download_exam2, confirmButtonText: lan_ok });
            $('#load')['css']('display', 'none');
            $('#result_search')['fadeOut']();
            $('#show_search')['delay'](400)['fadeIn']();
            readAll() } } }

function remove_exam(_0x9f58x22) { if (device_not_support_indexedDB != 'device_not_support_indexedDB') { var request = db['transaction'](['myTestLoaded'], 'readwrite')['objectStore']('myTestLoaded')['delete'](_0x9f58x22.toString());
        request['onsuccess'] = function() { if (state_exam != 'now') { Swal['fire']({ type: 'error', text: lan_msg_success_exam_deleted, showConfirmButton: false, timer: 1500 }) };
            readAll(); var request = db['transaction'](['blobs'], 'readwrite')['objectStore']('blobs')['delete'](_0x9f58x22.toString());
            request['onsuccess'] = function() {} } } else { readAll() } }
var fast_lan;
var chaneg_lan;

function check_mode_app_lan(_0x9f58x26) { if (_0x9f58x26 == undefined || _0x9f58x26 == 'undefined' || _0x9f58x26 == 'no') { $('.start_mode_app_lan')['show']();
        fast_lan = 'new';
        setTimeout(function() { lan_run() }, 2000) } else { foo_app_lan_ar(); if (fast_lan != 'new') { setTimeout(function() { lan_run() }, 2000) } else { location['reload']() };
        check_mode(mode_te_st) }; if (chaneg_lan == 'yes') { location['reload']() } }

function chaneg_check_mode_app_lan(_0x9f58x28) { app_lan = localStorage['app_lan'] = _0x9f58x28;
    $('.start_mode_app_lan')['fadeOut']();
    check_mode_app_lan(app_lan) } check_mode_app_lan(app_lan);

function check_mode(mode_te_st) { if (mode_te_st == 'teacher') { $('.teacher')['show']();
        $('.student')['hide']() } else { if (mode_te_st == 'student') { $('.teacher')['hide']();
            $('.student')['show']() } else { $('.start_mode')['show']() } } }

function chaneg_check_mode(_0x9f58x28) { var mode_te_st = localStorage['mode_te_st'] = _0x9f58x28;
    $('.start_mode')['fadeOut']();
    check_mode(mode_te_st) }

function formatAMPM(_0x9f58x2c) { var _0x9f58x2d = _0x9f58x2c['getDate'](); var _0x9f58x2e = _0x9f58x2c['getMonth']() + 1; var _0x9f58x2f = _0x9f58x2c['getFullYear'](); var _0x9f58x30 = _0x9f58x2c['getHours'](); var _0x9f58x31 = _0x9f58x2c['getMinutes'](); var _0x9f58x32 = _0x9f58x30 >= 12 ? 'pm' : 'am';
    _0x9f58x30 = _0x9f58x30 % 12;
    _0x9f58x30 = _0x9f58x30 ? _0x9f58x30 : 12;
    _0x9f58x31 = _0x9f58x31 < 10 ? '0' + _0x9f58x31 : _0x9f58x31; var _0x9f58x33 = _0x9f58x2d + '/' + _0x9f58x2e + '/' + _0x9f58x2f + ' ' + _0x9f58x30 + ':' + _0x9f58x31 + ' ' + _0x9f58x32; return _0x9f58x33 }

function parseArabic(_0x9f58x35) { return Number(_0x9f58x35['replace'](/[٠١٢٣٤٥٦٧٨٩]/g, function(_0x9f58x36) { return _0x9f58x36['charCodeAt'](0) - 1632 })['replace'](/[۰۱۲۳۴۵۶۷۸۹]/g, function(_0x9f58x36) { return _0x9f58x36['charCodeAt'](0) - 1776 })) }
var networkState;
forNotReplay_qed = 0;
forNotReplay_send = 0;
document['addEventListener']('offline', onOffline, false);
document['addEventListener']('online', onOnline, false);

function onOffline() { networkState = 0; if (forNotReplay_qed == 0) { forNotReplay_qed++; if (device_not_support_indexedDB == 'support') { readAll_ans_saveded() } } else { setTimeout(function() { forNotReplay_qed = 0 }, 1500) } }

function onOnline() { networkState = 1; if (forNotReplay_send == 0) { forNotReplay_send++;
        send_saved_direct(); if (device_not_support_indexedDB == 'support') { readAll_ans_saveded() } } else { setTimeout(function() { forNotReplay_send = 0 }, 1500) } }

function getStatistics() { $['ajax']({ type: 'POST', url: 'https://app-exams.com/new_exam/getStatistics.php', success: function(_0x9f58x3b) { Statistics = JSON['parse'](_0x9f58x3b);
            $('#num_All_use')['html'](Statistics.Ads);
            $('#num_All_test')['html'](Statistics.Exams);
            $('#num_All_ِAns')['html'](Statistics.Answers);
            $('#statistics .fa-spinner')['css']('display', 'none') }, error: function() { Swal['fire']({ type: 'info', html: lan_There_is_problem_connecting_network, showConfirmButton: false, timer: 1500 }) } }) } $(document)['ready'](function() { $('*')['on']('click', function(_0x9f58x3c) { $('body')['css']('backgroundColor', color_app); if (nav_bottomm != 'hide') { if (_0x9f58x3c['target']['tagName'] != 'INPUT' && _0x9f58x3c['target']['tagName'] != 'TEXTAREA') { $('#nav-bottom')['slideDown']() } else { $('#nav-bottom')['slideUp']() } } else { $('#nav-bottom')['slideUp']() } });
    $(document)['on']('click', 'input[type=\'text\']', function() { $(this)['focus']() });
    $(document)['on']('click', 'textarea', function() { $(this)['focus']() });
    $(document)['on']('click', 'input[type=\'number\']', function() { $(this)['focus']() }) });

function getBarcode(_0x9f58x3e) { barcode = '84193' + +_0x9f58x3e * 124 + '306145' + +_0x9f58x3e * 16; return barcode }

function showBarcode(_0x9f58x40, _0x9f58x3e) { $('#show_barcode')['empty']();
    height_Win = $(window)['height']() / 10;
    height_Win = $(window)['height']() - height_Win;
    width_Win = $(window)['width']() / 10;
    width_Win = $(window)['width']() - width_Win; if (width_Win > height_Win) { size = height_Win } else { size = width_Win };
    width_Win = $(window)['width']() / 10;
    width_Win = $(window)['width']() - width_Win;
    barcodeJSON = { render: 'canvas', minVersion: 7, maxVersion: 40, ecLevel: 'H', left: 0, top: 0, size: size, fill: '#000', background: null, text: _0x9f58x40, radius: 0.3, quiet: 4, mode: 2, mSize: 0.1, mPosX: 0.5, mPosY: 0.5, label: _0x9f58x3e, fontname: 'sans', fontcolor: '#ff9818', image: null };
    $('#show_barcode')['qrcode'](barcodeJSON);
    $('.popup_barcode')['fadeIn'](200) }
if (localStorage['router'] == 'prev_exam') { go_page('prev_exam') } else { if (localStorage['router'] == 'page_setting') { go_page('page_setting') } };

function reset_App_tbl() { if (device_not_support_indexedDB == 'support') { readAll_ans_saveded() } } setTimeout(function() {}, 4000);

function reset_App() { $('#mwb_list')['empty']();
    $('#form_new_ask')['empty']();
    $('#t_name')['val']('');
    $('#t_info')['val']('');
    $('#t_pass')['val']('');
    $('#t_email')['val']('');
    $('#auto_radio')['prop']('checked', true);
    close_Bar2();
    $('#Pass_start_ckeck')['prop']('checked', false);
    PassStart();
    $('#t_pass_start')['val']('');
    $('#Time_test_ckeck')['prop']('checked', false);
    TimeTest();
    $('#Time_test')['val']('');
    $('#Bank_test_ckeck')['prop']('checked', false);
    Bank_Test();
    $('#Bank_test')['val']('');
    $('#showAnserS')['prop']('checked', true);
    show_AnserSS();
    $('#allow_show')['prop']('checked', true);
    allow_showw();
    $('#RandomAsk')['prop']('checked', false);
    RandomAskk();
    $('#OUT_test')['prop']('checked', true);
    OUTtest();
    $('#Wifi_test')['prop']('checked', false);
    Wifitest();
    $('#CAP_test')['prop']('checked', true);
    CAPtest();
    $('#direct_radio')['prop']('checked', true);
    kind_download_direct();
    $('#direction_rtl_radio')['prop']('checked', true);
    direction_ask1();
    info_exam = '';
    data_ask = '';
    $('#data_exam_delete')['empty']();
    $('#add_ask_here')['empty']();
    $('#add_ask_here')['fadeIn']();
    $('#show_numExam')['empty']();
    $('#show_nameExam')['empty']();
    $('#show_nobzaExam')['empty']();
    $('#shows_name')['val']('');
    $('#shows_num')['val']('');
    $('#shows_info')['val']('');
    $('#shows_name')['prop']('disabled', false);
    $('#shows_num')['prop']('disabled', false);
    $('#shows_info')['prop']('disabled', false);
    $('#shows_num')['prop']('type', 'number');
    $('#form_new_ask')['empty']();
    $('#navTimeTest')['css']('display', 'none');
    nav_bottomm = 'show';
    $('#copy_page_mytest')['empty']();
    $('#showresult')['empty']();
    $('.page_mytest')['css']('margin-top', '0px');
    $('hr')['css']('display', 'block');
    count_ask = 0;
    add_ask() } setTimeout(function() { if (deviceManufacturer == 'Apple' || deviceManufacturer == 'APPLE' || deviceManufacturer == 'apple' || deviceManufacturer == 'Android' || deviceManufacturer == 'android' || deviceManufacturer == 'ANDROID') { window['plugins']['insomnia']['allowSleepAgain']() } }, 2000);
getFromHash = 'no';

function handleOpenURL(_0x9f58x44) { setTimeout(function() { langurl = _0x9f58x44['match'](/#(.*?)Z/);
        $('#num_exam')['val'](langurl[1]);
        getFromHash = 'yes';
        search_exam() }, 1000) } setTimeout(function() { ver = 58;
    $['ajax']({ type: 'GET', url: 'https://app-exams.com/new_exam/Add_Add.php', success: function(_0x9f58x3b) { data_Ad = JSON['stringify'](_0x9f58x3b);
            data_Ad = JSON['parse'](_0x9f58x3b); if ((/(ipad|iphone|ipod)/i ['test'](navigator['userAgent']))) { if (data_Ad['ver_ios'] > ver) { $('body')['append'](data_Ad['msg_ios']) } } else { if ((/(android)/i ['test'](navigator['userAgent']))) { if (data_Ad['ver_android'] > ver) { $('body')['append'](data_Ad['msg_android']) } } else { if (data_Ad['ver_android'] > ver) { $('body')['append'](data_Ad['msg_android']) } } } }, error: function() {} }) }, 2000);

function update_App() { $['ajax']({ type: 'GET', url: 'https://app-exams.com/new_exam/Add_Add.php', success: function(_0x9f58x3b) { data_Ad = JSON['parse'](_0x9f58x3b); if ((/(ipad|iphone|ipod)/i ['test'](navigator['userAgent']))) { $('body')['append'](data_Ad['msg_ios']) } else { if ((/(android)/i ['test'](navigator['userAgent']))) { $('body')['append'](data_Ad['msg_android']) } else { $('body')['append'](data_Ad['msg_ios']) } } } }) }
if ((/(android)/i ['test'](navigator['userAgent']))) { $('#page_setting')['append']('<button onclick=\'navigator.app.exitApp();\' class=\'desine-btn\' style=\'background:#770000; padding: 11px 58px;\'><i class=\'fas fa-power-off\'></i> ' + lan_close_app + '</button>') };
if ((/(ipad|iphone|ipod)/i ['test'](navigator['userAgent']))) { publisherId_ios_android = 'ca-app-pub-5984650256568061/6319187498' };
if ((/(android)/i ['test'](navigator['userAgent']))) { publisherId_ios_android = 'ca-app-pub-5984650256568061/5486190507' };

function initAd() { if (window['plugins'] && window['plugins']['AdMob']) { window['plugins']['AdMob']['setOptions']({ publisherId: publisherId_ios_android, bannerAtTop: true, overlap: false, offsetTopBar: false, isTesting: false }) } }

function show_AdMob() { setTimeout(function() { if (mode_te_st == 'student' && admob_mode != 'hide') { window['plugins']['AdMob']['createBannerView']();
            window['plugins']['AdMob']['showAd'](true) } }, 2500) }
if ((/(ipad|iphone|ipod|android)/i ['test'](navigator['userAgent']))) {} else {};
setTimeout(function() { document['addEventListener']('deviceready', function() { var _0x9f58x48 = function() { console['log']('The screenshots are allowed now again.') }; var _0x9f58x49 = function(_0x9f58x4a) { console['error']('An error ocurred : ' + _0x9f58x4a) };
        OurCodeWorldpreventscreenshots['enable'](_0x9f58x48, _0x9f58x49) }, false) }, 2000)
