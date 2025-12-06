function search_exam() { num = $('#num_exam')['val'](); if (num != '') { $('#load')['css']('display', 'inline-block');
        $['ajax']({ type: 'GET', url: 'https://app-exams.com/new_exam/get_exam_data2.php?id=' + parseArabic(num), success: function(_0x5ab8x2) { obj = JSON['parse'](_0x5ab8x2); if (obj['exam_data'] == false || obj['exam_data'] == 'false') { Swal['fire']({ type: 'info', html: lan_There_is_no_exam_number, confirmButtonText: lan_ok });
                    $('#load')['css']('display', 'none') } else { if (obj['exam_name'] == '' && obj['exam_info'] == '' && obj['exam_email'] == '' && obj['exam_data'] == '') { get_prev_exam(num, obj['t_pass'], 'notYut', 'forUpdate') } else { exam_name = document['getElementById']('showName')['innerHTML'] = obj['exam_name'];
                        exam_info = document['getElementById']('showNobza')['innerHTML'] = obj['exam_info'];
                        exam_data = obj['exam_data'];
                        myObj = JSON['parse'](exam_data); if (myObj['allow_download'] == 'yes') { if (getFromHash == 'yes') { setTimeout(function() { go_page('page_home');
                                    downloadExam_new() }, 800) } else { $('#show_search')['hide']();
                                $('#result_search')['show']();
                                $('#load')['css']('display', 'none') } } else { Swal['fire']({ type: 'warning', html: lan_Downloading_not_allowed_at_this_time, confirmButtonText: lan_ok });
                            $('#load')['css']('display', 'none') } } } }, error: function() { Swal['fire']({ type: 'info', html: lan_There_is_problem_connecting_network, showConfirmButton: false, timer: 1500 });
                $('#load')['css']('display', 'none') } }) } else { Swal['fire']({ type: 'info', html: lan_Please_enter_exam_number, confirmButtonText: lan_ok }) } }

function show_search() { $('#result_search')['hide']();
    $('#show_search')['show']();
    $('#btnDown')['parent']()['css']('display', 'table-cell');
    $('#btnDown')['parent']()['next']()['attr']('colspan', 1) }
