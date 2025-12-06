var num_device;
var isHereAns;
var state_exam;
var kind_download_for_start_exam;
scriptPopup_st = '<script>$(\'#ans_saved_forAdd .fa-caret-square-down\').click(function (){	$(this).siblings().fadeIn(200);}); $(\'.popup_st\').click(function (){	$(\'.popup_st\').fadeOut(200);}); $(\'.popup_st .inner\').click(function (e){	e.stopPropagation()}); $(\'.popup_st button\').click(function(){$(\'.popup_st\').fadeOut(200); $(\'.popup_st .inner\').click(function (e){e.stopPropagation()});}); </' + 'script>';
scriptPopup_te = '<script>$(\'#exam_saved_forAdd .fa-caret-square-down\').click(function (){	$(this).siblings().fadeIn(200);}); $(\'.popup_te\').click(function (){	$(\'.popup_te\').fadeOut(200);}); $(\'.popup_te .inner\').click(function (e){	e.stopPropagation()}); $(\'.popup_te button\').click(function(){$(\'.popup_te\').fadeOut(200); $(\'.popup_te .inner\').click(function (e){e.stopPropagation()});}); </' + 'script>';
forNotReplay_ans_qed = 0;
forNotReplay_ans_send = 0;

function showMsg_showDegree() { Swal['fire']({ html: lan_not_see_degree, confirmButtonText: lan_ok }) }

function readAll_ans_saveded_new() { if (deviceManufacturer == 'Apple' || deviceManufacturer == 'APPLE' || deviceManufacturer == 'apple' || deviceManufacturer == 'Android' || deviceManufacturer == 'android' || deviceManufacturer == 'ANDROID') { num_device = 'uuid: ' + device['uuid'] };
    $('#ans_saved_forAdd')['empty']();
    $('#ans_saved_forAdd')['append']('<tr id="tr_load"><td colspan="3"><img id="load_login" style="display: block;" src="img/load.gif" /></td></tr>');
    $['ajax']({ type: 'POST', url: 'https://app-exams.com/new_exam/get_result_exam_one_std.php', data: { num_device: num_device + '' }, success: function(_0x29bex7) { if (_0x29bex7 == '') { $('#ans_saved_forAdd')['empty']();
                $('#ans_saved_forAdd')['append']('<tr><td id="lan_No_exam_yet_std" colspan="3">لم تقم بدخول أي اختبار حتى الآن</td></tr>');
                $('#lan_No_exam_yet_std')['html'](lan_No_exam_yet_std) } else { $('#ans_saved_forAdd')['empty']();
                $('#ans_saved_forAdd')['append'](_0x29bex7);
                $('#ans_saved_forAdd')['append'](scriptPopup_st) } }, error: function() { $('#ans_saved_forAdd')['empty']();
            $('#ans_saved_forAdd')['append']('<tr><td colspan="3"><i class="fas fa-exclamation-triangle"></i> <i class="fas fa-wifi"></i></td></tr>') } }) }

function readAll_ans_saveded() { if (device_not_support_indexedDB == 'support') { var _0x29bex9 = db['transaction']('myans')['objectStore']('myans');
        _0x29bex9['openCursor']()['onsuccess'] = function(_0x29bexa) { var _0x29bexb = _0x29bexa['target']['result']; if (_0x29bexb) { xz = _0x29bexb['value'];
                cursorValueExam_data = '"' + _0x29bexb['value']['exam_data'] + '"';
                cursorValueTafaseel_Student_Data = '"' + _0x29bexb['value']['tafaseel_Student_Data'] + '"';
                obj_ans = JSON['parse'](_0x29bexb['value']['tafaseel_Student_Data']);
                obj_ans_te = JSON['parse'](_0x29bexb['value']['exam_data']); if (obj_ans['send_ans'] == 'no' && networkState == 0) { $('#exam_saved_st table thead td:first')['html']('<p style="float: right; margin-right: 5px; margin-left: -70px; font-size: 14px; margin-top: 2px; margin-bottom: 0px;">' + lan_SendExam_tbl_std + '</p><span>' + lan_My_Exams_For_Student + '</span>');
                    cursor_value_tafaseel_Student_Data = _0x29bexb['value']['tafaseel_Student_Data'];
                    cursor_key = _0x29bexb['key'];
                    cursor_value_exam_data = _0x29bexb['value']['exam_data'];
                    $('body')['append']('<script> var _0xe004=["html","#exam_saved_st table thead td:first","click","#exam_saved_st table thead td:first p:first"];$(_0xe004[3])[_0xe004[2]](function(){$(_0xe004[1])[_0xe004[0]](lan_My_Exams_For_Student);send_ans(cursor_value_tafaseel_Student_Data,cursor_key,cursor_value_exam_data)})</' + 'script>');
                    go_page('prev_exam');
                    $('html,body')['animate']({ scrollTop: $('#exam_saved_st table thead td:first')['offset']()['top'] }, 'slow'); if (forNotReplay_ans_qed == 0) { forNotReplay_ans_qed++;
                        Swal['fire']({ html: lan_connect_Internet_to_send, confirmButtonText: lan_ok }) } else { setTimeout(function() { forNotReplay_ans_qed = 0 }, 2000) } } else { if (obj_ans['send_ans'] == 'no' && networkState == 1) { if (forNotReplay_ans_send == 0) { forNotReplay_ans_send++;
                            send_ans(_0x29bexb['value']['tafaseel_Student_Data'], _0x29bexb['key'], _0x29bexb['value']['exam_data']) } else { setTimeout(function() { forNotReplay_ans_send = 0 }, 2000) };
                        $('#ans_saved_forAdd')['append'](scriptPopup_st) } else { $('#exam_saved_st table thead td:first')['html']('<p style="float: right; margin-right: 5px; margin-left: -70px; font-size: 14px; margin-top: 2px; margin-bottom: 0px;" onclick="readAll_ans_saveded_new(); readAll_ans_saveded()">' + lan_update + '</p><span>' + lan_My_Exams_For_Student + '</span>') } };
                _0x29bexb['continue']() } } } }

function start_exam(_0x29bexd, _0x29bexe, _0x29bexf, _0x29bex10, kind_download_for_start_exam) { _0x29bexe = JSON['stringify'](_0x29bexe);
    _0x29bexe = _0x29bexe['replace'](/`/g, '\'');
    $('#add_ask_here')['empty']();
    obj1 = _0x29bexe;
    obj = JSON['parse'](obj1);
    exam_data_for_std = _0x29bexe;
    count_ask_for_start = 0;
    count_ask_for_end = 0;
    count_ask_for_check_ans_empty = 0;
    count_bank = 0;
    count_blob_for_put = 0;
    degrSTD = 0;
    true1 = 'true1';
    false1 = 'false1';
    anserAllMqali = '';
    count_ask_for_get_mqali = 0;
    askType1 = null;
    askMqali = '';
    anserMqali = '';
    num_device = 0;
    studentGashWifi = 0;
    studentGashOUT = 0;
    studentGashCAP = 0;
    number_exam = +_0x29bexd;
    kind_show = _0x29bexf;
    kind_download_for_start_exam = kind_download_for_start_exam; if (kind_show == 'demo') { $('#shows_name')['val'](obj['name_std']);
        $('#shows_num')['val'](obj['num_std']);
        $('#shows_info')['val'](obj['info_std']);
        $('#btn_save_one_std')['remove']();
        $('#tbl_data_std')['parent']()['append']('<div onclick="save_pdf_one_std()" id="btn_save_one_std" class="desine-btn" style="width: 190px; padding: 5px; margin: 12px auto;">' + lan_save_result_PDF + '</div>');
        go_exam();
        go_page(page_mytest) } else { if (kind_show == 'pdf') { $('#shows_name')['val'](obj['name_std']);
            $('#shows_num')['val'](obj['num_std']);
            $('#shows_info')['val'](obj['info_std']);
            go_exam() } else { $('#btn_save_one_std')['remove']();
            state_exam = 'now';
            check_con_wifi() } } }

function check_con_wifi() { if (obj['Wifi_test'] == 'true1') { if (networkState == 1) { setTimeout(function() { if (networkState == 1) { Swal['fire']({ type: 'warning', title: lan_word_warning, html: lan_Disconnect_internet_before, confirmButtonText: lan_ok });
                    state_exam = 'finish' } else { check_pass_start() } }, 500) } else { check_pass_start() } } else { check_pass_start() } }

function check_pass_start() { if (obj['Pass_test_state'] == 'true1') {
        function _0x29bex13(_0x29bex14) { if (_0x29bex14['buttonIndex'] == 2) { if (_0x29bex14['input1'] == obj['t_pass_start'] || parseArabic(obj['t_pass_start'])
                    .toString() == _0x29bex14['input1'] || parseArabic(_0x29bex14['input1'])
                    .toString() == obj['t_pass_start']) { go_exam();
                    go_page(page_mytest) } else { Swal['fire']({ type: 'warning', title: lan_word_please, html: lan_password_is_wrong, confirmButtonText: lan_ok }) } } else {} } if (deviceManufacturer == 'Apple' || deviceManufacturer == 'APPLE' || deviceManufacturer == 'apple' || deviceManufacturer == 'Android' || deviceManufacturer == 'android' || deviceManufacturer == 'ANDROID') { navigator['notification']['prompt']('', _0x29bex13, lan_Enter_password, [lan_btn_back, lan_ok], '') } else { if (obj['Pass_test_state'] == 'true1') { var _0x29bex15 = prompt(lan_Enter_password, ''); if (_0x29bex15 == obj['t_pass_start'] || parseArabic(obj['t_pass_start'])
                    .toString() == _0x29bex15 || parseArabic(_0x29bex15)
                    .toString() == obj['t_pass_start']) { go_exam();
                    go_page(page_mytest) } else { alert(lan_password_is_wrong) } } else { go_exam();
                go_page(page_mytest) } } } else { go_exam();
        go_page(page_mytest) } }

function go_exam() { readAll();
    $('#Takeed')['show'](); if (number_exam != 10) { document['getElementById']('show_numExam')['innerHTML'] = number_exam;
        obj['t_num'] = number_exam.toString() } else { document['getElementById']('show_numExam')['innerHTML'] = obj['t_num'] };
    document['getElementById']('show_nameExam')['innerHTML'] = obj['t_name'];
    document['getElementById']('show_nobzaExam')['innerHTML'] = obj['t_info']; if (kind_show != 'pdf') { nav_bottomm = 'hide';
        $('#nav-bottom')['slideUp']() } else { nav_bottomm = 'show' };
    setTimeout(function() { if (deviceManufacturer == 'Apple' || deviceManufacturer == 'APPLE' || deviceManufacturer == 'apple' || deviceManufacturer == 'Android' || deviceManufacturer == 'android' || deviceManufacturer == 'ANDROID') { window['plugins']['insomnia']['keepAwake']() } }, 1000);
    document['addEventListener']('online', _0x29bex17, false);

    function _0x29bex17() { if (obj['Wifi_test'] == 'true1' && state_exam == 'now') { Swal['fire']({ type: 'warning', title: lan_word_warning, html: lan_Internet_not_allowed, confirmButtonText: lan_ok });
            studentGashWifi++ } } document['addEventListener']('resume', _0x29bex18, false);

    function _0x29bex18() { if (obj['OUT_test'] == 'true1' && state_exam == 'now') { Swal['fire']({ type: 'warning', title: lan_word_warning, html: lan_Exit_not_allowed, confirmButtonText: lan_ok });
            studentGashOUT++ } } if (deviceManufacturer == 'Android' || deviceManufacturer == 'android' || deviceManufacturer == 'ANDROID') { if (obj['CAP_test'] == 'true1' && state_exam == 'now') { document['addEventListener']('deviceready', function() { var _0x29bex19 = function() { console['log']('The screenshots are not allowed now.') }; var _0x29bex1a = function(_0x29bex1b) { console['error']('An error ocurred : ' + _0x29bex1b) };
                OurCodeWorldpreventscreenshots['disable'](_0x29bex19, _0x29bex1a) }, false) } };
    document['addEventListener']('screenshot', function() { if (obj['CAP_test'] == 'true1' && state_exam == 'now') { Swal['fire']({ type: 'warning', title: lan_word_warning, html: lan_capture_not_allowed, confirmButtonText: lan_ok });
            studentGashCAP++ } }, false); if (kind_show != 'demo' && kind_show != 'pdf') { admob_mode = 'hide'; if (deviceManufacturer == 'Apple' || deviceManufacturer == 'APPLE' || deviceManufacturer == 'apple' || deviceManufacturer == 'Android' || deviceManufacturer == 'android' || deviceManufacturer == 'ANDROID') {};
        document['addEventListener']('deviceready', _0x29bex1c, false);

        function _0x29bex1c() { document['addEventListener']('backbutton', _0x29bex1d, false) }

        function _0x29bex1d(_0x29bex1e) { _0x29bex1e['preventDefault']();
            Swal['fire']({ type: 'warning', title: lan_word_warning, html: lan_Internet_not_allowed, confirmButtonText: lan_ok }) } }; if (kind_show != 'demo' && kind_show != 'pdf') { TimeFinish = 'ok'; if (obj['Time_test_state'] == 'true1') { Time_test = +obj['Time_test'];
            document['getElementById']('navTimeTest')['style']['display'] = 'block';
            Time_test = Time_test++;
            _0x29bex1f();

            function _0x29bex1f() { Time_test -= 1; if (Time_test > 2) { setTimeout(_0x29bex1f, 60000);
                    $('#showTimeHere')['html'](Time_test) } else { Time_test = 120;
                    $('#xoo')['html'](lan_Seconds_remaining);
                    document['getElementById']('navTimeTest')['style']['backgroundColor'] = '#fd5c63';
                    _0x29bex20() } }

            function _0x29bex20() { Time_test -= 1; if (Time_test > -1) { setTimeout(_0x29bex20, 1000);
                    $('#showTimeHere')['html'](Time_test) } else { TimeFinish = 'finish';
                    $('#xoo')['html'](lan_time_is_over);
                    $('#add_ask_here')['fadeOut']() } } } };
    go_exam1() }

function go_exam1() { count_ask_for_start = count_ask_for_start + 1;
    choice_kind = '<div class=\'AskRandom\' style=\'display:none; padding: 10px;\'><table width =\'98%\' id=\'group' + count_ask_for_start + '\'><tr class=\'Dnone\'><td colspan=\'2\'><img src=\'\' style=\'max-width:100%; margin:auto\' id=\'imgAsk' + count_ask_for_start + '\'></td></tr><tr><td colspan=\'2\'><div  id=\'showask' + count_ask_for_start + '\'></div></td></tr><tr class=\'ch1_' + count_ask_for_start + '\'><td class=\'right1\'><input type=\'radio\' id=\'a1q' + count_ask_for_start + '\' value=\'0\' name=\'radio' + count_ask_for_start + '\' onClick=\'checked_choice_q' + count_ask_for_start + '=1\'></td>  <td><div  class=\'left22\' id=\'showask' + count_ask_for_start + 'A\'></div></td></tr><tr class=\'ch2_' + count_ask_for_start + '\'><td class=\'right1\'><input type=\'radio\' id=\'a2q' + count_ask_for_start + '\' value=\'0\' name=\'radio' + count_ask_for_start + '\' onChange=\'checked_choice_q' + count_ask_for_start + '=2\'></td>  <td><div  class=\'left22\' id=\'showask' + count_ask_for_start + 'B\'></div></td></tr><tr class=\'ch3_' + count_ask_for_start + '\'><td class=\'right1\'><input type=\'radio\' id=\'a3q' + count_ask_for_start + '\' value=\'0\' name=\'radio' + count_ask_for_start + '\' onChange=\'checked_choice_q' + count_ask_for_start + '=3\'></td>  <td><div  class=\'left22\' id=\'showask' + count_ask_for_start + 'C\'></div></td></tr><tr class=\'ch4_' + count_ask_for_start + '\'><td class=\'right1\'><input type=\'radio\' id=\'a4q' + count_ask_for_start + '\' value=\'0\' name=\'radio' + count_ask_for_start + '\' onChange=\'checked_choice_q' + count_ask_for_start + '=4\'></td>  <td><div  class=\'left22\' id=\'showask' + count_ask_for_start + 'D\'></div></td></tr><tr class=\'ch5_' + count_ask_for_start + '\'><td class=\'right1\'><input type=\'radio\' id=\'a5q' + count_ask_for_start + '\' value=\'0\' name=\'radio' + count_ask_for_start + '\' onChange=\'checked_choice_q' + count_ask_for_start + '=5\'></td>  <td><div  class=\'left22\' id=\'showask' + count_ask_for_start + 'E\'></div></td></tr></table><script> checked_choice_q' + count_ask_for_start + '= 0; $(\'#showask' + count_ask_for_start + '\').html(obj.ask_' + count_ask_for_start + ');$(\'#showask' + count_ask_for_start + 'A\').html(obj.choice1_' + count_ask_for_start + ');$(\'#showask' + count_ask_for_start + 'B\').html(obj.choice2_' + count_ask_for_start + ');$(\'#showask' + count_ask_for_start + 'C\').html(obj.choice3_' + count_ask_for_start + ');$(\'#showask' + count_ask_for_start + 'D\').html(obj.choice4_' + count_ask_for_start + ');$(\'#showask' + count_ask_for_start + 'E\').html(obj.choice5_' + count_ask_for_start + '); ccc1_' + count_ask_for_start + '();function ccc1_' + count_ask_for_start + '(){ if (obj.choice1_' + count_ask_for_start + ' == \'\'){$(\'.ch1_' + count_ask_for_start + '\').css(\'display\', \'none\');} } ccc2_' + count_ask_for_start + '();function ccc2_' + count_ask_for_start + '(){ if (obj.choice2_' + count_ask_for_start + ' == \'\'){$(\'.ch2_' + count_ask_for_start + '\').css(\'display\', \'none\');} } ccc3_' + count_ask_for_start + '();function ccc3_' + count_ask_for_start + '(){ if (obj.choice3_' + count_ask_for_start + ' == \'\'){$(\'.ch3_' + count_ask_for_start + '\').css(\'display\', \'none\');} } ccc4_' + count_ask_for_start + '();function ccc4_' + count_ask_for_start + '(){ if (obj.choice4_' + count_ask_for_start + ' == \'\'){$(\'.ch4_' + count_ask_for_start + '\').css(\'display\', \'none\');} } ccc5_' + count_ask_for_start + '();function ccc5_' + count_ask_for_start + '(){ if (obj.choice5_' + count_ask_for_start + ' == \'\'){$(\'.ch5_' + count_ask_for_start + '\').css(\'display\', \'none\');} } group' + count_ask_for_start + '=\'choice\';</' + 'script></div>';
    box_kind = '<div class=\'AskRandom\' style=\'display:none; padding: 10px;\'><table width =\'98%\' id=\'group' + count_ask_for_start + '\'><tr class=\'Dnone\'><td colspan=\'2\'><img src=\'\' style=\'max-width:100%; margin:auto\' id=\'imgAsk' + count_ask_for_start + '\'></td></tr><tr><td colspan=\'2\'><div  id=\'showask' + count_ask_for_start + '\'></div></td><tr class=\'ch1_' + count_ask_for_start + '\'><td class=\'right1\'><input class=\'checkbox' + count_ask_for_start + '\' type=\'checkbox\' id=\'Ba1q' + count_ask_for_start + '\' onChange=\'if (this.checked == true){checked_BOX_1q' + count_ask_for_start + ' = ' + true1 + '}else{checked_BOX_1q' + count_ask_for_start + ' = ' + false1 + '}\'></td><td><div id=\'showask' + count_ask_for_start + 'A\' class=\'left22\'></div></td></tr><tr class=\'ch2_' + count_ask_for_start + '\'><td class=\'right1\'><input class=\'checkbox' + count_ask_for_start + '\' type=\'checkbox\' id=\'Ba2q' + count_ask_for_start + '\' onChange=\'if (this.checked == true){checked_BOX_2q' + count_ask_for_start + ' = ' + true1 + '}else{checked_BOX_2q' + count_ask_for_start + ' = ' + false1 + '}\'></td><td><div id=\'showask' + count_ask_for_start + 'B\' class=\'left22\'></div></td></tr><tr class=\'ch3_' + count_ask_for_start + '\'><td class=\'right1\'><input class=\'checkbox' + count_ask_for_start + '\' type=\'checkbox\' id=\'Ba3q' + count_ask_for_start + '\' onChange=\'if (this.checked == true){checked_BOX_3q' + count_ask_for_start + ' = ' + true1 + '}else{checked_BOX_3q' + count_ask_for_start + ' = ' + false1 + '}\'></td><td><div id=\'showask' + count_ask_for_start + 'C\' class=\'left22\'></div></td></tr><tr class=\'ch4_' + count_ask_for_start + '\'><td class=\'right1\'><input class=\'checkbox' + count_ask_for_start + '\' type=\'checkbox\' id=\'Ba4q' + count_ask_for_start + '\' onChange=\'if (this.checked == true){checked_BOX_4q' + count_ask_for_start + ' = ' + true1 + '}else{checked_BOX_4q' + count_ask_for_start + ' = ' + false1 + '}\'></td><td><div id=\'showask' + count_ask_for_start + 'D\' class=\'left22\'></div></td></tr><tr class=\'ch5_' + count_ask_for_start + '\'><td class=\'right1\'><input class=\'checkbox' + count_ask_for_start + '\' type=\'checkbox\' id=\'Ba5q' + count_ask_for_start + '\' onChange=\'if (this.checked == true){checked_BOX_5q' + count_ask_for_start + ' = ' + true1 + '}else{checked_BOX_5q' + count_ask_for_start + ' = ' + false1 + '}\'></td><td><div id=\'showask' + count_ask_for_start + 'E\' class=\'left22\'></div></td></tr></table><script> checked_BOX_1q' + count_ask_for_start + '= ' + false1 + '; checked_BOX_2q' + count_ask_for_start + '= ' + false1 + '; checked_BOX_3q' + count_ask_for_start + '= ' + false1 + '; checked_BOX_4q' + count_ask_for_start + '= ' + false1 + '; checked_BOX_5q' + count_ask_for_start + '= ' + false1 + '; $(\'#showask' + count_ask_for_start + '\').html(obj.ask_' + count_ask_for_start + ');$(\'#showask' + count_ask_for_start + 'A\').html(obj.choice1_' + count_ask_for_start + ');$(\'#showask' + count_ask_for_start + 'B\').html(obj.choice2_' + count_ask_for_start + ');$(\'#showask' + count_ask_for_start + 'C\').html(obj.choice3_' + count_ask_for_start + ');$(\'#showask' + count_ask_for_start + 'D\').html(obj.choice4_' + count_ask_for_start + ');$(\'#showask' + count_ask_for_start + 'E\').html(obj.choice5_' + count_ask_for_start + ');ccc1_' + count_ask_for_start + '();function ccc1_' + count_ask_for_start + '(){ if (obj.choice1_' + count_ask_for_start + ' == \'\'){$(\'.ch1_' + count_ask_for_start + '\').css(\'display\', \'none\')} }ccc2_' + count_ask_for_start + '();function ccc2_' + count_ask_for_start + '(){ if (obj.choice2_' + count_ask_for_start + ' == \'\'){$(\'.ch2_' + count_ask_for_start + '\').css(\'display\', \'none\')} }ccc3_' + count_ask_for_start + '();function ccc3_' + count_ask_for_start + '(){ if (obj.choice3_' + count_ask_for_start + ' == \'\'){$(\'.ch3_' + count_ask_for_start + '\').css(\'display\', \'none\')} }ccc4_' + count_ask_for_start + '();function ccc4_' + count_ask_for_start + '(){ if (obj.choice4_' + count_ask_for_start + ' == \'\'){$(\'.ch4_' + count_ask_for_start + '\').css(\'display\', \'none\')} }ccc5_' + count_ask_for_start + '();function ccc5_' + count_ask_for_start + '(){ if (obj.choice5_' + count_ask_for_start + ' == \'\'){$(\'.ch5_' + count_ask_for_start + '\').css(\'display\', \'none\')} } group' + count_ask_for_start + '=\'box\'; </' + 'script></div>';
    mqali_kind = '<div class=\'AskRandom\' style=\'display:none\'; padding: 10px;><table width =\'98%\' id=\'group' + count_ask_for_start + '\'><tr class=\'Dnone\'><td colspan=\'2\'><img src=\'\' style=\'max-width:100%; margin:auto\' id=\'imgAsk' + count_ask_for_start + '\'></td></tr><tr><td colspan=\'2\'><div  id=\'showask' + count_ask_for_start + '\'></div></td><tr class=\'mq1\'><td colspan=\'2\'><textarea style=\'border:1px solid #835003; background-color: #fff; border-radius: 6px; padding:7px 5px; width: 95%\' rows=\'4\' id = \'anser' + count_ask_for_start + '\' type= \'text\' placeholder=\'' + lan_enter_ans_mqali + '\' ></textarea></td></tr></table><script>$(\'#showask' + count_ask_for_start + '\').html(obj.ask_' + count_ask_for_start + '); group' + count_ask_for_start + '=\'mqali\'; </' + 'script></div>';
    fun_start = '<script>go_exam2(); function go_exam2(){	if (count_ask_for_start <= obj.count_ask){		if (obj.kindQ' + count_ask_for_start + ' == \'choice\'){			data_start_exam = choice_kind;			go_examForAddLoop();		count_ask_for_start = count_ask_for_start + 1;		} else if (obj.kindQ' + count_ask_for_start + ' == \'box\'){			data_start_exam = box_kind;			go_examForAddLoop();			count_ask_for_start = count_ask_for_start + 1;		} else {			data_start_exam = mqali_kind;			go_examForAddLoop();			count_ask_for_start = count_ask_for_start + 1;		}	} else {go_examRandom();}}</' + 'script>';
    $('#add_ask_here')['append'](fun_start) }

function go_examForAddLoop() { $('#add_ask_here')['append'](data_start_exam); if (count_ask_for_start <= obj['count_ask']) { go_exam1() } }

function go_examBank() { if (deviceManufacturer == 'Apple' || deviceManufacturer == 'APPLE' || deviceManufacturer == 'apple') {} else { $('.right1 [type=checkbox], .right1 [type=radio]')['css']('width', '100%') }; if (obj['direction_ask'] == 'ltr') { $('body')['append']('<style>.AskRandom table, .AskRandom div, .AskRandom textarea { direction: ltr } </style>') } else { $('body')['append']('<style>.AskRandom table, .AskRandom div, .AskRandom textarea { direction: rtl } </style>') }; if (kind_show != 'demo' && kind_show != 'pdf') { if (obj['Bank_test_state'] == 'true1') { count_bank = parseArabic(obj.Bank_test);
            $('.AskRandom')['slice'](0, count_bank)['css']('display', 'block');
            go_examBank_for_check() } else { $('.AskRandom')['css']('display', 'block') } } }

function go_examBank_for_check() { var _0x29bex25; for (_0x29bex25 = 0; _0x29bex25 < obj['count_ask']; _0x29bex25++) { if ($('.AskRandom')['eq'](_0x29bex25)['css']('display') == 'block') { id_ask_bank = $('.AskRandom')['eq'](_0x29bex25)['children']()['attr']('id');
            id_ask_bank = id_ask_bank['replace'](/group/g, '');
            bank_bank = '<script> obj.AskRandom_for_bank' + id_ask_bank + ' = \'Bank_show\' </' + 'script>';
            $('#add_ask_here')['append'](bank_bank) } } }

function go_examRandom() { if (obj['RandomAsk'] == 'true1' && kind_show != 'demo') { if (kind_show != 'pdf') { var _0x29bex27 = $('.AskRandom'); for (var _0x29bex28 = 0; _0x29bex28 < _0x29bex27['length']; _0x29bex28++) { var _0x29bex29 = Math['floor'](Math['random']() * _0x29bex27['length'] - 1) + 1; var _0x29bex2a = Math['floor'](Math['random']() * _0x29bex27['length'] - 1) + 1;
                _0x29bex27['eq'](_0x29bex29)['before'](_0x29bex27['eq'](_0x29bex2a)) };
            get_blob_put() } else { get_blob_put() } } else { get_blob_put() } }

function get_blob_put() { if (kind_show == 'pdf' || kind_show == 'demo' || kind_download_for_start_exam == '"direct"') { var _0x29bex2c; for (_0x29bex2c = 0; _0x29bex2c <= obj['count_ask']; _0x29bex2c++) { put_img_srcc = '<script> if (obj.img_val_ASK' + _0x29bex2c + ' != \'\') { $(\'#imgAsk' + _0x29bex2c + '\').parent().parent().css(\'display\',\'contents\'); $(\'#imgAsk' + _0x29bex2c + '\').attr(\'src\',obj.img_val_ASK' + _0x29bex2c + ')}; </' + 'script>';
            $('#add_ask_here')['append'](put_img_srcc); if (_0x29bex2c == obj['count_ask']) { go_examBank() } } } else { count_blob_for_put = count_blob_for_put + 1;
        scr_blob = '<script> if (obj.img_val_ASK' + count_blob_for_put + ' != \'\') { var transaction = db.transaction([\'blobs\']); var objectStore = transaction.objectStore(\'blobs\'); var request = objectStore.get(obj.t_num); request.onsuccess = function(event) { if(request.result) { $(\'#imgAsk' + count_blob_for_put + '\').parent().parent().css(\'display\',\'contents\'); imgFile = request.result.blob.img_ASK' + count_blob_for_put + '; imgURL = window.URL.createObjectURL(imgFile); $(\'#imgAsk' + count_blob_for_put + '\').attr(\'src\',imgURL); get_blob_put_loop(); } } } else {get_blob_put_loop();}</' + 'script>';
        $('#add_ask_here')['append'](scr_blob) } }

function get_blob_put_loop() { if (count_blob_for_put < obj['count_ask']) { get_blob_put() } else { go_examBank();
        remove_exam(number_exam) } }

function check_ans_empty() { count_ask_for_check_ans_empty = count_ask_for_check_ans_empty + 1;
    script_check_ans_empty = '<script> if ($(\'#shows_name\').val() == \'\') { Swal.fire({ title: \'' + lan_name_must_be_written + '\', type: \'warning\', confirmButtonColor: \'#3085d6\', confirmButtonText: \'' + lan_ok + '\', }).then(function (result) { if (result.value) { setTimeout (function(){ go_to_empty($(\'#tbl_data_std\')) },500); } }); } else if (parseArabic($(\'#shows_num\').val()) == \'\') {Swal.fire({ title: \'' + lan_num_must_be_written + '\', type: \'warning\', confirmButtonColor: \'#3085d6\', confirmButtonText: \'' + lan_ok + '\', }).then(function (result) { if (result.value) { setTimeout (function(){ go_to_empty($(\'#tbl_data_std\')) },500); } }); }	else { if (TimeFinish == \'ok\') { if (group' + count_ask_for_check_ans_empty + ' == \'choice\') { if (checked_choice_q' + count_ask_for_check_ans_empty + '<1 && $(\'#group' + count_ask_for_check_ans_empty + '\').parent().css(\'display\') == \'block\' ) { Swal.fire({ title: \'' + lan_You_have_shortage_answers + '\', text: \'' + lan_Do_you_want_back_find + '\', type: \'warning\', showCancelButton: true, confirmButtonColor: \'#d33\', cancelButtonColor: \'#3085d6\', confirmButtonText: \'' + lan_Exit_exam + '\', cancelButtonText: \'' + lan_Undo + '\' }).then(function (result) { if (result.value) { setTimeout (function(){ go_finish1(); },500); } else { setTimeout (function(){go_to_empty($(\'#group' + count_ask_for_check_ans_empty + '\'));},500); } }); } else{check_ans_empty();}	} else if (group' + count_ask_for_check_ans_empty + ' == \'box\') { if (checked_BOX_1q' + count_ask_for_check_ans_empty + ' == \'false1\' && checked_BOX_2q' + count_ask_for_check_ans_empty + ' == \'false1\' && checked_BOX_3q' + count_ask_for_check_ans_empty + ' == \'false1\' && checked_BOX_4q' + count_ask_for_check_ans_empty + ' == \'false1\' && checked_BOX_5q' + count_ask_for_check_ans_empty + ' == \'false1\' && $(\'#group' + count_ask_for_check_ans_empty + '\').parent().css(\'display\') == \'block\' ) { Swal.fire({ title: lan_lack_in_answers, text: lan_back_find_shortage, type: \'warning\', showCancelButton: true, confirmButtonColor: \'#d33\', cancelButtonColor: \'#3085d6\', confirmButtonText: lan_Exit_exam, cancelButtonText: lan_Undo }).then(function (result) { if (result.value) { setTimeout (function(){ go_finish1(); },500); } else { setTimeout (function(){go_to_empty($(\'#group' + count_ask_for_check_ans_empty + '\'));},500); } }); } else{ check_ans_empty(); }  } else if (group' + count_ask_for_check_ans_empty + ' == \'mqali\') { if ($(\'#group' + count_ask_for_check_ans_empty + '\').parent().css(\'display\') == \'block\') { if ($(\'#anser' + count_ask_for_check_ans_empty + '\').val() == \'\' || $(\'#anser' + count_ask_for_check_ans_empty + '\').val() == \' \' || $(\'#anser' + count_ask_for_check_ans_empty + '\').val() == \'  \' ) { Swal.fire({ title: lan_You_have_shortage_answers, text: lan_Do_you_want_back_find, type: \'warning\', showCancelButton: true, confirmButtonColor: \'#d33\', cancelButtonColor: \'#3085d6\', confirmButtonText: lan_Exit_exam, cancelButtonText: lan_Undo }).then(function (result) { if (result.value) { setTimeout (function(){ go_finish1(); },500); } else { setTimeout (function(){go_to_empty($(\'#group' + count_ask_for_check_ans_empty + '\'));},500); } }); } else { check_ans_empty(); } } else {check_ans_empty();} } } else { go_finish1(); }	} </' + 'script>'; if (count_ask_for_check_ans_empty <= obj['count_ask']) { $('#add_ask_here')['append'](script_check_ans_empty) } else { go_finish1() } }

function go_to_empty(_0x29bex30) { heightWin = $(window)['height']() / 2;
    elHeight = _0x29bex30['height']() / 2;
    _0x29bex30['css']('background-color', 'rgba(255, 0, 0, 0.5)');
    $([document['documentElement'], document['body']])['animate']({ scrollTop: _0x29bex30['offset']()['top'] - heightWin + elHeight }, 200);
    _0x29bex30['animate']({ backgroundColor: 'rgba(255, 0, 0, 0)' }, 3000);
    count_ask_for_check_ans_empty = 0 }

function replaceANS(_0x29bex32) { _0x29bex32 = _0x29bex32['replace'](/"/g, '″');
    _0x29bex32 = _0x29bex32['replace'](/'/g, '′');
    _0x29bex32 = _0x29bex32['replace'](/\n/g, ' <br> ');
    _0x29bex32 = _0x29bex32['replace'](/\\n/g, ' <br> '); return _0x29bex32 }

function REreplaceANS(_0x29bex32) { _0x29bex32 = _0x29bex32['replace'](/<br>/g, '\x0A'); return _0x29bex32 }

function go_finish1() { $('#add_ask_here')['fadeOut']();
    document['getElementById']('navTimeTest')['style']['display'] = 'none';
    count_ask_for_end = count_ask_for_end + 1;
    sscriptt = '<script> 	if (group' + count_ask_for_end + ' == \'choice\') {		degrChoice1_' + count_ask_for_end + ' = +obj.degrChoice1_' + count_ask_for_end + ';				degrChoice2_' + count_ask_for_end + ' = +obj.degrChoice2_' + count_ask_for_end + ';				degrChoice3_' + count_ask_for_end + ' = +obj.degrChoice3_' + count_ask_for_end + ';				degrChoice4_' + count_ask_for_end + ' = +obj.degrChoice4_' + count_ask_for_end + ';				degrChoice5_' + count_ask_for_end + ' = +obj.degrChoice5_' + count_ask_for_end + ';							if (obj.currq' + count_ask_for_end + ' == checked_choice_q' + count_ask_for_end + ' && checked_choice_q' + count_ask_for_end + ' == 1){							degrSTD = degrSTD + degrChoice1_' + count_ask_for_end + ';			obj.currq' + count_ask_for_end + ' = checked_choice_q' + count_ask_for_end + ';		} 		if (obj.currq' + count_ask_for_end + ' == checked_choice_q' + count_ask_for_end + ' && checked_choice_q' + count_ask_for_end + ' == 2){							degrSTD = degrSTD + degrChoice2_' + count_ask_for_end + ';			obj.currq' + count_ask_for_end + ' = checked_choice_q' + count_ask_for_end + ';		}		if (obj.currq' + count_ask_for_end + ' == checked_choice_q' + count_ask_for_end + ' && checked_choice_q' + count_ask_for_end + ' == 3){							degrSTD = degrSTD + degrChoice3_' + count_ask_for_end + ';			obj.currq' + count_ask_for_end + ' = checked_choice_q' + count_ask_for_end + ';		}		if (obj.currq' + count_ask_for_end + ' == checked_choice_q' + count_ask_for_end + ' && checked_choice_q' + count_ask_for_end + ' == 4){							degrSTD = degrSTD + degrChoice4_' + count_ask_for_end + ';			obj.currq' + count_ask_for_end + ' = checked_choice_q' + count_ask_for_end + ';		}		if (obj.currq' + count_ask_for_end + ' == checked_choice_q' + count_ask_for_end + ' && checked_choice_q' + count_ask_for_end + ' == 5){							degrSTD = degrSTD + degrChoice5_' + count_ask_for_end + ';			obj.currq' + count_ask_for_end + ' = checked_choice_q' + count_ask_for_end + ';		}			askType' + count_ask_for_end + ' = \'noMqali\';						obj.currq' + count_ask_for_end + ' = checked_choice_q' + count_ask_for_end + ';			go_finish1();									} else if (group' + count_ask_for_end + ' == \'box\') {		degrbox1_' + count_ask_for_end + ' = +obj.degrbox1_' + count_ask_for_end + ';					degrbox2_' + count_ask_for_end + ' = +obj.degrbox2_' + count_ask_for_end + ';					degrbox3_' + count_ask_for_end + ' = +obj.degrbox3_' + count_ask_for_end + ';					degrbox4_' + count_ask_for_end + ' = +obj.degrbox4_' + count_ask_for_end + ';					degrbox5_' + count_ask_for_end + ' = +obj.degrbox5_' + count_ask_for_end + ';											if (checked_BOX_1q' + count_ask_for_end + ' == \'true1\') {							degrSTD = degrSTD + degrbox1_' + count_ask_for_end + ';			obj.currbox1q' + count_ask_for_end + ' = \'true2\';		}					if (checked_BOX_2q' + count_ask_for_end + ' == \'true1\') {							degrSTD = degrSTD + degrbox2_' + count_ask_for_end + ';			obj.currbox2q' + count_ask_for_end + ' = \'true2\';		}					if (checked_BOX_3q' + count_ask_for_end + ' == \'true1\') {							degrSTD = degrSTD + degrbox3_' + count_ask_for_end + ';			obj.currbox3q' + count_ask_for_end + ' = \'true2\';		}					if (checked_BOX_4q' + count_ask_for_end + ' == \'true1\') {							degrSTD = degrSTD + degrbox4_' + count_ask_for_end + ';			obj.currbox4q' + count_ask_for_end + ' = \'true2\';		}					if (checked_BOX_5q' + count_ask_for_end + ' == \'true1\') {							degrSTD = degrSTD + degrbox5_' + count_ask_for_end + ';			obj.currbox5q' + count_ask_for_end + ' = \'true2\';		}					askType' + count_ask_for_end + ' = \'noMqali\';					go_finish1();					} else if (group' + count_ask_for_end + ' == \'mqali\') {	askType' + count_ask_for_end + ' = \'yesMqali\'; askMqali' + count_ask_for_end + ' = obj.ask_' + count_ask_for_end + '; 	obj.anserMqali' + count_ask_for_end + ' = replaceANS(document.getElementById(\'anser' + count_ask_for_end + '\').value);		go_finish1();	}						</' + 'script>'; if (count_ask_for_end <= obj['count_ask']) { $('#add_ask_here')['append'](sscriptt) } else { count_ask_for_end--;
        obj['name_std'] = replaceANS($('#shows_name')['val']());
        obj['num_std'] = parseArabic($('#shows_num')['val']());
        obj['info_std'] = replaceANS($('#shows_info')['val']());
        obj['degre_std'] = degrSTD;
        time_ex = obj['time_ex'] = formatAMPM(new Date);
        $('#Takeed')['hide']();
        state_exam = 'finish'; if (obj['close_Barcode'] == 'auto') { get_ans_data() } else { $('#Tasleem')['show']() } } }

function get_ans_data() { $('#add_ask_here')['hide']();
    obj['count_Wifi_test'] = studentGashWifi;
    obj['count_OUT_test'] = studentGashOUT;
    obj['count_CAP_test'] = studentGashCAP;
    tafaseel_Student_Data = JSON['stringify'](obj); if (obj['close_Barcode'] == 'barcode') { cordova['plugins']['barcodeScanner']['scan'](function(_0x29bex36) { if (_0x29bex36['text'] == getBarcode(obj['t_num'])) { save_ans() } else { Swal['fire']({ type: 'warning', html: lan_barcode_incorrect, confirmButtonText: lan_ok }) } }, function(_0x29bex37) {}) } else { save_ans() } }

function save_ans() { if (kind_download_for_start_exam == '"direct"') { localStorage['tafaseel_Student_Data'] = tafaseel_Student_Data;
        localStorage['number_exam'] = number_exam;
        localStorage['exam_data_for_std'] = exam_data_for_std;
        localStorage['mode_send_ans'] = 'no';
        send_ans(tafaseel_Student_Data, number_exam, exam_data_for_std);
        go_page('prev_exam') } else { var _0x29bex39 = db['transaction'](['myans'], 'readwrite')['objectStore']('myans')['add']({ id: new Date()['getTime'](), tafaseel_Student_Data: tafaseel_Student_Data, allow_show: obj['allow_show'], exam_data: exam_data_for_std, time: time_ex, order: ' ', degree: degrSTD });
        _0x29bex39['onsuccess'] = function(_0x29bexa) { nav_bottomm = 'show';
            $('#nav-bottom')['slideDown']();
            localStorage['router'] = 'prev_exam';
            setTimeout(function() { location['reload']() }, 1000) };
        _0x29bex39['onerror'] = function(_0x29bexa) { Swal['fire']({ type: 'warning', html: 'Error', confirmButtonText: lan_ok }) } } }

function send_ans(_0x29bex3b, _0x29bex3c, _0x29bex3d) { if (deviceManufacturer == 'Apple' || deviceManufacturer == 'APPLE' || deviceManufacturer == 'apple' || deviceManufacturer == 'Android' || deviceManufacturer == 'android' || deviceManufacturer == 'ANDROID') { num_device = 'uuid: ' + device['uuid'] } else { num_device = '123' };
    tafaseel_Data = _0x29bex3b;
    obj_save = JSON['parse'](_0x29bex3b);
    time_ex = '"' + obj_save['time_ex'] + '"';
    name_std = obj_save['name_std'];
    info_std = obj_save['info_std'];
    degre_std = obj_save['degre_std'];
    $['ajax']({ type: 'POST', url: 'https://app-exams.com/new_exam/insert_new_answer.php', data: { num_exam: obj_save['t_num'] + '', answers_data: tafaseel_Data + '', num_device: num_device + '', name_std: name_std + '', info_std: info_std + '', degre_std: degre_std + '' }, success: function(_0x29bex7) { localStorage['mode_send_ans'] = 'yes';
            orderANDdegree = JSON['parse'](_0x29bex7);
            obj_save['send_ans'] = 'yes';
            obj_save['answers_id'] = orderANDdegree['answers_id'];
            x = JSON['stringify'](obj_save);
            readAll_ans_saveded_new(); if (device_not_support_indexedDB == 'support') { var _0x29bex39 = db['transaction'](['myans'], 'readwrite')['objectStore']('myans')['put']({ id: _0x29bex3c, tafaseel_Student_Data: x, allow_show: obj_save['allow_show'], exam_data: _0x29bex3d, time: time_ex, order: orderANDdegree['order'], degree: degre_std });
                _0x29bex39['onsuccess'] = function(_0x29bexa) { setTimeout(function() { readAll_ans_saveded() }, 4000) } };
            setTimeout(function() { Swal['fire']({ type: 'success', title: lan_Answers_sent_successfully, confirmButtonText: lan_ok });
                $('html, body')['animate']({ scrollTop: $(document)['height']() - $(window)['height']() }) }, 400) }, error: function() { if (localStorage['mode_send_ans'] == 'no') { if (forNotReplay_ans_qed == 0) { forNotReplay_ans_qed++;
                    Swal['fire']({ html: lan_connect_Internet_to_send, confirmButtonText: lan_ok });
                    setTimeout(function() { forNotReplay_ans_qed = 0 }, 1000) } else { setTimeout(function() { forNotReplay_ans_qed = 0 }, 1000) } } else { Swal['fire']({ type: 'info', html: lan_Answers_sent_Failed, confirmButtonText: lan_ok });
                readAll_ans_saveded() } } }) }

function update_degree_order(_0x29bex3b, _0x29bex3c, _0x29bex3d) { tafaseel_Data = _0x29bex3b;
    obj_save = JSON['parse'](_0x29bex3b);
    time_ex = '"' + obj_save['time_ex'] + '"';
    name_std = obj_save['name_std'];
    info_std = obj_save['info_std'];
    degre_std = obj_save['degre_std'];
    $['ajax']({ type: 'POST', url: 'https://app-exams.com/new_exam/getOrderAndUpdateDegree.php', data: { num_exam: obj_save['t_num'] + '', answers_id: obj_save['answers_id'] + '' }, success: function(_0x29bex7) { if (_0x29bex7 == null || _0x29bex7 == 'null') { console['log']('هذه النتيجة محذوفة');
                setTimeout(function() { readAll_ans_saveded();
                    setTimeout(function() { Swal['fire']({ type: 'success', text: lan_update_done, showConfirmButton: false, timer: 1800 }) }, 300) }, 300) } else { orderANDdegree = JSON['parse'](_0x29bex7);
                x = JSON['stringify'](obj_save);
                _0x29bex3d = JSON['parse'](orderANDdegree['exam_data_te']);
                _0x29bex3d = _0x29bex3d['exam_data']; var _0x29bex39 = db['transaction'](['myans'], 'readwrite')['objectStore']('myans')['put']({ id: _0x29bex3c, tafaseel_Student_Data: x, allow_show: obj_save['allow_show'], exam_data: _0x29bex3d, time: time_ex, order: orderANDdegree['order'], degree: orderANDdegree['degree'] });
                _0x29bex39['onsuccess'] = function(_0x29bexa) { setTimeout(function() { readAll_ans_saveded();
                        setTimeout(function() { Swal['fire']({ type: 'success', text: lan_update_done, showConfirmButton: false, timer: 1800 }) }, 300) }, 300) } } }, error: function() { Swal['fire']({ type: 'info', html: lan_There_is_problem_connecting_network, showConfirmButton: false, timer: 1500 }) } }) }

function remove_ans(_0x29bex40) { _0x29bex40 = _0x29bex40;
    Swal['fire']({ title: lan_You_about_delete, html: lan_not_see_your_answers, type: 'warning', showCancelButton: true, confirmButtonColor: '#d33', cancelButtonColor: '#3085d6', confirmButtonText: lan_word_delete, cancelButtonText: lan_Undo })['then'](function(_0x29bex36) { if (_0x29bex36['value']) { _0x29bex41() } });

    function _0x29bex41() { if (device_not_support_indexedDB != 'device_not_support_indexedDB') { var _0x29bex39 = db['transaction'](['myans'], 'readwrite')['objectStore']('myans')['delete'](_0x29bex40);
            _0x29bex39['onsuccess'] = function() { reset_App_tbl() } } else {} } }
