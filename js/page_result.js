function result_exam(_0xea69x2) { numForExcel = _0xea69x2;
    $('#showresult')['html']('<tr><td colspan="6"><img id="img_load_result" src="img/load.gif" /></td></tr>');
    $['ajax']({ type: 'GET', url: 'https://app-exams.com/new_exam/get_result_exam_new.php?id=' + _0xea69x2, success: function(_0xea69x3) { dataSavePDF = _0xea69x3;
            $('#showresult')['empty']();
            $('#showresult')['append'](_0xea69x3);
            $('#page_mytest')['clone']()['appendTo']('#copy_page_mytest'); if (+versionExam < 41) { $['ajax']({ type: 'GET', url: 'https://app-exams.com/result_s_num.php?id=' + _0xea69x2, success: function(_0xea69x3) { if (_0xea69x3 != '<tr><td colspan="6">' + lan_No_results_yet + ' !</td></tr>') { $('#showresult')['append'](_0xea69x3) } } }) } }, error: function() { Swal['fire']({ type: 'info', html: lan_There_is_problem_connecting_network, showConfirmButton: false, timer: 1500 }) } }) }

function result_exam_one_std(_0xea69x5, _0xea69x6, _0xea69x7) { if (_0xea69x6 == 'demo') { numForExcel = _0xea69x7 };
    $['ajax']({ type: 'POST', url: 'https://app-exams.com/new_exam/get_result_exam_one_std_2plus.php?id=' + _0xea69x5, data: { num_exam: numForExcel + '', demo_std: _0xea69x6 + '' }, success: function(_0xea69x3) { $('#showresult')['append'](_0xea69x3) }, error: function() { Swal['fire']({ type: 'info', html: lan_There_is_problem_connecting_network, showConfirmButton: false, timer: 1500 }) } }) }

function backToPrev_page() { go_page(localStorage['prev_page_demo']);
    $('#add_ask_here')['empty']();
    $('#nav-bottom')['slideDown']();
    nav_bottomm = 'show';
    $('#backToResult')['hide']();
    $('#shows_name')['val']('');
    $('#shows_name')['prop']('disabled', false);
    $('#shows_num')['val']('');
    $('#shows_num')['prop']('disabled', false);
    $('#shows_info')['val']('');
    $('#shows_info')['prop']('disabled', false);
    $('.AskRandom')['css']('display', 'block') }

function Correcting_Mqali() { count_Correcting_Mqali++;
    getDegreeAllMqali = '<script> if (std.kindQ' + count_Correcting_Mqali + ' == \'mqali\') { std.degreMqali' + count_Correcting_Mqali + ' = parseArabic($(\'#degreMqali' + count_Correcting_Mqali + '\').val()); std.degre_std_all_mqali += parseArabic($(\'#degreMqali' + count_Correcting_Mqali + '\').val()); }</' + 'script>';
    add_script_for_getDegreeAllMqali_loop() }

function add_script_for_getDegreeAllMqali_loop() { $('#add_ask_here')['append'](getDegreeAllMqali); if (obj['count_ask'] > count_Correcting_Mqali) { Correcting_Mqali() } else { tafaseel_Student_Data = JSON['stringify'](std);
        $['ajax']({ type: 'POST', url: 'https://app-exams.com/new_exam/update_answer.php?id=' + std['answers_id'], data: { answers_data: tafaseel_Student_Data + '', num_exam: numForExcel + '' }, success: function(_0xea69x3) { Swal['fire']({ type: 'success', html: lan_degree_added_student, showConfirmButton: false, timer: 1500 });
                examNum = JSON['parse'](data_exam);
                result_exam(examNum['t_num']) }, error: function() { Swal['fire']({ type: 'info', html: lan_There_is_problem_connecting_network, showConfirmButton: false, timer: 1500 }) } }) } }

function save_pdf() { $('#showresult')['empty']();
    $('#copy_page_mytest')['empty']();
    $('#showresult')['append'](dataSavePDF);
    $('#page_mytest')['clone']()['appendTo']('#copy_page_mytest');
    $('.page_mytest')['css']('display', 'block');
    $('.page_mytest:last-child')['css']('display', 'none');
    $('#copy_page_mytest')['fadeIn']();
    $('#page_mytest')['fadeOut']();
    $('#backToResult')['hide']();
    $('#nav-bottom')['slideUp']();
    setTimeout(function() { $('body')['css']('backgroundColor', '#fff');
        $('.page_mytest')['css']('margin-top', '-75px');
        $('hr')['css']('display', 'none');
        nav_bottomm = 'show'; if (deviceManufacturer == 'Android' || deviceManufacturer == 'android' || deviceManufacturer == 'ANDROID') { navigator['notification']['alert'](lan_how_save_pdf_from_cam, _0xea69xc, '', lan_ok) } else { if (deviceManufacturer == 'Apple' || deviceManufacturer == 'APPLE' || deviceManufacturer == 'apple') { navigator['notification']['alert'](lan_how_save_pdf, _0xea69xc, '', lan_ok) } else { window['print']() } } }, 1000);

    function _0xea69xc() { cordova['plugins']['printer']['print']() } }

function save_pdf_one_std() { $('textarea')['autogrow']();
    setTimeout(function() { $('#nav-bottom')['slideUp']() }, 500);
    setTimeout(function() { $('body')['css']('backgroundColor', '#fff');
        $('hr')['css']('display', 'none'); if (deviceManufacturer == 'Android' || deviceManufacturer == 'android' || deviceManufacturer == 'ANDROID') { navigator['notification']['alert'](lan_how_save_pdf_from_cam, _0xea69xc, '', lan_ok) } else { if (deviceManufacturer == 'Apple' || deviceManufacturer == 'APPLE' || deviceManufacturer == 'apple') { navigator['notification']['alert'](lan_how_save_pdf, _0xea69xc, '', lan_ok) } else { window['print']() } } }, 1000);

    function _0xea69xc() { cordova['plugins']['printer']['print']() } }

function save_excel() { if (loginState != 'login=OK') { Swal['fire']({ type: 'warning', html: 'Please login first' }) } else { $('#load')['css']('display', 'inline-block');
        $['ajax']({ type: 'GET', url: 'https://app-exams.com/new_exam/export_excel.php?id=' + numForExcel, success: function(_0xea69x3) { if (_0xea69x3 == 'null' || _0xea69x3 == 'false') { Swal['fire']({ type: 'warning', html: lan_There_is_no_exam_number }) } else { Swal['fire']({ title: lan_please_wait, html: lan_Preparing_file, onBeforeOpen: function _0xea69xf() { Swal['showLoading']() } });
                    ExportJSON(_0xea69x3) } }, error: function() { Swal['fire']({ type: 'info', html: lan_There_is_problem_connecting_network, showConfirmButton: false, timer: 1500 });
                $('#load')['css']('display', 'none') } }) } }

function ExportJSON(_0xea69x11) { var _0xea69x3 = '[' + _0xea69x11 + ']'; var _0xea69x12 = 'https://exporter.azurewebsites.net/api/export/ExportFromJSON/5';
    Export(_0xea69x12, _0xea69x3); return false }

function Export(_0xea69x14, _0xea69x3) { $['ajax']({ type: 'POST', url: _0xea69x14, data: JSON['stringify']({ 'data': _0xea69x3 }), datatype: 'JSON', contentType: 'application/json; charset=utf-8' })['done'](function(_0xea69x16) { var _0xea69x17 = 'https://exporter.azurewebsites.net/api/export/GetFile/' + _0xea69x16;
        _0xea69x17 += '?fileName=Results-' + numForExcel + '&extension=xlsx';
        toMail = localStorage['loginEmail'].toString();
        subject = lan_Temporary_link + numForExcel;
        msssg = _0xea69x17.toString(); if (deviceManufacturer == 'Apple' || deviceManufacturer == 'APPLE' || deviceManufacturer == 'apple' || deviceManufacturer == 'Android' || deviceManufacturer == 'android' || deviceManufacturer == 'ANDROID') { Swal['fire']({ title: lan_file_was_prepared, html: lan_will_ceate_link, type: 'success', confirmButtonText: lan_word_next })['then'](function() { cordova_save_Excel() }) } else { $('#load')['css']('display', 'none');
            Swal['fire']({ title: lan_file_was_prepared, html: lan_will_ceate_link, type: 'success', confirmButtonText: lan_word_next })['then'](function() { document['location']['href'] = 'mailto:' + localStorage['loginEmail'] + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(_0xea69x17) }) } })['fail'](function(_0xea69x15) { $('#load')['css']('display', 'none');
        Swal['fire']({ type: 'info', html: lan_Please_try_again_later }) }) }

function cordova_save_Excel() { $('#load')['css']('display', 'none');
    cordova['plugins']['email']['open']({ to: toMail, subject: subject, body: msssg }) }

function delete_result(_0xea69x1a, _0xea69x1b) { if (_0xea69x1a == 'deleteExam') { _0xea69x1b = _0xea69x1b;
        msg_delete = lan_msg_delete_examAndRes } else { _0xea69x1a = 'ansONLY';
        _0xea69x1b = numForExcel;
        msg_delete = lan_msg_delete_resultOnly };
    ss = _0xea69x1b;
    Swal['fire']({ title: lan_You_about_delete, html: msg_delete, type: 'warning', showCancelButton: true, confirmButtonColor: '#d33', cancelButtonColor: '#3085d6', confirmButtonText: lan_word_delete, cancelButtonText: lan_Undo })['then'](function(_0xea69x16) { if (_0xea69x16['value']) { $['ajax']({ type: 'POST', url: 'https://app-exams.com/new_exam/delete_exam_ans.php', data: { deleteExam: _0xea69x1a + '', num_deleteExam: _0xea69x1b + '' }, success: function(_0xea69x3) { if (_0xea69x3 == 'done_exam and ans') { readAll_exam_saveded_new();
                        Swal['fire']({ type: 'success', html: lan_msg_success_exam_deleted, showConfirmButton: false, timer: 1500 }) } else { if (_0xea69x3 == 'done_ans') { Swal['fire']({ type: 'success', html: lan_msg_success_exam_deleted, showConfirmButton: false, timer: 2000 }) } }; if (_0xea69x1a == 'deleteExam') { remove_exam_te(_0xea69x1b, 'deleteExam') } else { result_exam(numForExcel) } }, error: function() { Swal['fire']({ type: 'info', html: lan_There_is_problem_connecting_network, showConfirmButton: false, timer: 1500 }) } }) } }) }
