count_ask = 0;
data_ask = '';
RandomAsk = 'false1';
showAnserS = 'true1';
allow_show = 'yes';
Wifi_test = 'false1';
OUT_test = 'true1';
CAP_test = 'true1';
close_Barcode = 'auto';
direction_ask = 'rtl';
Pass_test_state = 'false1';
Time_test_state = 'false1';
Bank_test_state = 'false1';
IsHere_mqali = 'no';
true1 = 'true1';
false1 = 'false1';
var moodeIs;
var numExamEdit = 1;
var demo = '"demo"';
var isHereExam;
var deleteExam = 'deleteExam';
kind_download = 'direct';

function go_page_page_newtest_for_edit() { go_page('page_newtest');
    $('#btnEditExam')['show']();
    $('#btnAddExam')['hide']();
    edit_ask_mode = '<script>moodeIs = \'mode_edit\'; </' + 'script>';
    $('#form_new_ask')['append'](edit_ask_mode) }

function go_page_page_newtest_for_copy() { $('#btnEditExam')['hide']();
    $('#btnAddExam')['show']();
    copy_ask_mode = '<script>moodeIs = \'mode_copy\'; </' + 'script>';
    $('#form_new_ask')['append'](copy_ask_mode);
    go_page('page_newtest') }

function go_page_page_result(_0x961fx9) { versionExam = _0x961fx9['version'];
    $('#data_exam_delete')['empty']();
    _0x961fx9 = JSON['stringify'](_0x961fx9);
    _0x961fx9 = '<script>data_exam = \'' + _0x961fx9 + '\'; versionExam = \'' + versionExam + '\'; </' + 'script>';
    $('#data_exam_delete')['append'](_0x961fx9);
    go_page('page_result') }

function copyNumExamAndPastToInput(_0x961fxb) { $('#num_exam')['val'](_0x961fxb);
    Swal['fire']({ text: lan_exam_number_copied, showConfirmButton: false, timer: 1500 }) } $('#input_Pass')['fadeOut']();
$('#input_Time')['fadeOut']();

function readAll_exam_saveded_new(_0x961fxd) { loginState_te = localStorage['loginState']; if (loginState_te == 'login=OK') { loginEmail_te = localStorage['loginEmail'];
        $('#exam_saved_forAdd')['empty']();
        $('#exam_saved_forAdd')['append']('<tr id="tr_load"><td colspan="3"><img id="load_login" style="display: block;" src="img/load.gif" /></td></tr>');
        $['ajax']({ type: 'POST', url: 'https://app-exams.com/new_exam/get_result_exam_one_std555.php', data: { email: loginEmail_te + '' }, success: function(_0x961fxe) { if (_0x961fxe == '') { $('#exam_saved_forAdd')['empty']();
                    $('#exam_saved_forAdd')['append']('<tr><td id="lan_No_exam_yet" colspan="3">لم تقم بإنشاء أي اختبار حتى الآن</td></tr>');
                    $('#lan_No_exam_yet')['html'](lan_No_exam_yet) } else { $('#exam_saved_forAdd')['empty']();
                    $('#exam_saved_forAdd')['append'](_0x961fxe);
                    $('#exam_saved_forAdd')['append'](scriptPopup_te) } }, error: function() { $('#exam_saved_forAdd')['empty']();
                $('#exam_saved_forAdd')['append']('<tr><td colspan="3"><i class="fas fa-exclamation-triangle"></i> <i class="fas fa-wifi"></i></td></tr>') } }) } else { if (_0x961fxd == 'update') { Swal['fire']({ text: lan_Please_login_from_more_page, showConfirmButton: false, timer: 1500 }) } } }

function readAll_exam_saveded() {} add_ask();

function add_ask() { count_ask = count_ask + 1;
    text_ask = '<div id=\'group' + count_ask + '\'><table width =\'100%\' border=\'0\' id=\'\'><tr><td>' + lan_Question_Num + ' ' + count_ask + '</td></tr><tr><td><div style=\'width: 290px; margin: auto;\'><div style=\'text-align:right; padding-right: 13px;\'><input type=\'radio\' id=\'kindQ' + count_ask + 'ch-radio\' name=\'radio_kind_ask' + count_ask + '\' onChange=\'kindQ' + count_ask + 'ch(); re_wrongCorrect(' + count_ask + ')\' checked> ' + lan_Choose_One + ' <span onClick=\'info_ask_type(1)\' style=\'color:blue\'>(' + lan_word_explanation + ' ؟) <i class=\'far fa-hand-pointer\'></i></span><br> <input type=\'radio\' id=\'kindQ' + count_ask + 'ch-radio\' name=\'radio_kind_ask' + count_ask + '\' onChange=\'kindQ' + count_ask + 'ch(); wrongCorrect(' + count_ask + ')\' > ' + lan_Choose_Correct_and_no + ' <br> <input type=\'radio\' id=\'kindQ' + count_ask + 'box-radio\' name=\'radio_kind_ask' + count_ask + '\' onChange=\'kindQ' + count_ask + 'box(); re_wrongCorrect(' + count_ask + ')\'> ' + lan_Multiple_Choice + ' <span onClick=\'info_ask_type(2)\' style=\'color:blue\'>(' + lan_word_explanation + ' ؟) <i class=\'far fa-hand-pointer\'></i></span><br> <input type=\'radio\' id=\'kindQ' + count_ask + 'mq-radio\' name=\'radio_kind_ask' + count_ask + '\' onChange=\'kindQ' + count_ask + 'mq()\'> ' + lan_Short_Answer + ' <span onClick=\'info_ask_type(3)\' style=\'color:blue\'>(' + lan_word_explanation + ' ؟) <i class=\'far fa-hand-pointer\'></i></span></div></div></td></tr><tr><td><img style=\'max-width:100%\' src=\'\' id=\'img_src_Ask' + count_ask + '\' /></td></tr><tr><td style=\'overflow: hidden;\'><button class=\'desine-btn\' style=\'padding: 5px 10px\' id=\'btn-addPic' + count_ask + '\' onclick=\'addPic' + count_ask + '()\'>' + lan_Choose_Picture + '</button><button class=\'desine-btn Dnone\' style=\'padding: 5px 10px; float: right; margin-right: 10px;\' id=\'btn-uploadPic' + count_ask + '\' onclick=\'uploadPic' + count_ask + '()\'>' + lan_Confirm_picture + '</button><button class=\'desine-btn Dnone\' style=\'padding: 5px 10px; float: left; margin-left: 10px;\' id=\'btn-deletePic' + count_ask + '\' onclick=\'deletePic' + count_ask + '()\'>' + lan_word_delete + '</button></td></tr><tr><td><textarea placeholder=\'' + lan_pl_Write_Question + '\' class=\'inputAsk\' rows=\'4\' id = \'ask' + count_ask + '\' type= \'text\'></textarea></td></tr></table><table id=\'hidee' + count_ask + '\' width=\'95%\'><tr><th style=\'width:75%\'>' + lan_the_Choices + '</th><th style=\'width:20%\'>' + lan_Answer + '</th><th><p class=\'col_dgreASK' + count_ask + '\' >' + lan_Degree + '</p></th></tr><tr><td><input placeholder=\'' + lan_First_choice + '\' class=\'inputAsk\' id=\'ta1q' + count_ask + '\' type= \'text\'/></td><td><input style=\'margin:auto\' class=\'radio' + count_ask + '\' type=\'radio\' id=\'a1q' + count_ask + '\' name=\'radio-ch' + count_ask + '\' onChange=\'currChq' + count_ask + ' = 1;\'><input style=\'display:none; margin: auto\' class=\'checkbox' + count_ask + '\' type=\'checkbox\' id=\'Ba1q' + count_ask + '\' name=\'Ba1q' + count_ask + '\' onChange=\'checkedBOX1q' + count_ask + '();\'></td><td class=\'col_dgre_sp' + count_ask + '\'><input  class=\'col_dgre' + count_ask + '\' style=\'width: 90%\' placeholder=\'' + lan_Degree + '\' id=\'degr1_' + count_ask + '\' value=\'0\' type=\'text\' onclick=\'$(this).select();\'/></td></tr><tr><td><input placeholder=\'' + lan_Second_choice + '\' class=\'inputAsk\' id=\'ta2q' + count_ask + '\' type= \'text\'/></td><td><input style=\'margin:auto\' class=\'radio' + count_ask + '\' type=\'radio\' id=\'a2q' + count_ask + '\' name=\'radio-ch' + count_ask + '\' onChange=\'currChq' + count_ask + ' = 2;\'><input style=\'display:none; margin: auto\' class=\'checkbox' + count_ask + '\' type=\'checkbox\' id=\'Ba2q' + count_ask + '\' name=\'Ba2q' + count_ask + '\' onChange=\'checkedBOX2q' + count_ask + '();\'></td><td><input  class=\'col_dgre' + count_ask + '\' style=\'width: 90%\' placeholder=\'' + lan_Degree + '\' id=\'degr2_' + count_ask + '\' value=\'0\' type=\'text\' onclick=\'$(this).select();\'/></td></tr><tr><td><input placeholder=\'' + lan_Third_choice + '\' class=\'inputAsk\' id=\'ta3q' + count_ask + '\' type= \'text\'/></td><td><input style=\'margin:auto\' class=\'radio' + count_ask + '\' type=\'radio\' id=\'a3q' + count_ask + '\' name=\'radio-ch' + count_ask + '\' onChange=\'currChq' + count_ask + ' = 3;\'><input style=\'display:none; margin: auto\' class=\'checkbox' + count_ask + '\' type=\'checkbox\' id=\'Ba3q' + count_ask + '\' name=\'Ba3q' + count_ask + '\' onChange=\'checkedBOX3q' + count_ask + '();\'></td><td><input  class=\'col_dgre' + count_ask + '\' style=\'width: 90%; \' placeholder=\'' + lan_Degree + '\' id=\'degr3_' + count_ask + '\' value=\'0\' type=\'text\' onclick=\'$(this).select();\'/></td></tr><tr><td><input placeholder=\'' + lan_Fourth_choice + '\' class=\'inputAsk\' id=\'ta4q' + count_ask + '\' type= \'text\'/></td><td><input style=\'margin:auto\' class=\'radio' + count_ask + '\' type=\'radio\' id=\'a4q' + count_ask + '\' name=\'radio-ch' + count_ask + '\' onChange=\'currChq' + count_ask + ' = 4;\'><input style=\'display:none; margin: auto\' class=\'checkbox' + count_ask + '\' type=\'checkbox\' id=\'Ba4q' + count_ask + '\' name=\'Ba4q' + count_ask + '\' onChange=\'checkedBOX4q' + count_ask + '();\'></td><td><input  class=\'col_dgre' + count_ask + '\' style=\'width: 90%; \' placeholder=\'' + lan_Degree + '\' id=\'degr4_' + count_ask + '\' value=\'0\' type=\'text\' onclick=\'$(this).select();\'/></td></tr><tr><td><input placeholder=\'' + lan_Fifth_choice + '\' class=\'inputAsk\' id=\'ta5q' + count_ask + '\' type= \'text\'/></td><td><input style=\'margin:auto\' class=\'radio' + count_ask + '\' type=\'radio\' id=\'a5q' + count_ask + '\' name=\'radio-ch' + count_ask + '\' onChange=\'currChq' + count_ask + ' = 5;\'><input style=\'display:none; margin: auto\' class=\'checkbox' + count_ask + '\' type=\'checkbox\' id=\'Ba5q' + count_ask + '\' name=\'Ba4q' + count_ask + '\' onChange=\'checkedBOX5q' + count_ask + '();\'></td><td><input  class=\'col_dgre' + count_ask + '\' style=\'width: 90%; \' placeholder=\'' + lan_Degree + '\' id=\'degr5_' + count_ask + '\' value=\'0\' type=\'text\' onclick=\'$(this).select();\'/></td></tr><tr><td colspan=\'3\' style=\'color:gray\'>' + lan_Note1 + '</td></tr></table><table style=\'margin:auto\'></tr></table><hr style=\'margin-top: 50px; margin-bottom: 50px;\'></div><script>kindQ' + count_ask + ' = \'choice\'; box1_' + count_ask + '= ' + false1 + '; box2_' + count_ask + '= ' + false1 + '; box3_' + count_ask + '= ' + false1 + '; box4_' + count_ask + '= ' + false1 + '; box5_' + count_ask + '= ' + false1 + '; currChq' + count_ask + ' = 0; img_val_ASK' + count_ask + ' = \'\'; function kindQ' + count_ask + 'ch() { $(\'#hidee' + count_ask + '\').fadeIn(1);$(\'.radio' + count_ask + '\').css(\'display\', \'block\');$(\'.checkbox' + count_ask + '\').fadeOut(1);kindQ' + count_ask + ' = \'choice\';}function kindQ' + count_ask + 'box() { $(\'#hidee' + count_ask + '\').css(\'display\', \'block\');$(\'.checkbox' + count_ask + '\').css(\'display\', \'block\');$(\'.radio' + count_ask + '\').css(\'display\', \'none\');$(\'.col_dgre' + count_ask + '\').css(\'display\', \'block\');$(\'.col_dgreASK' + count_ask + '\').css(\'display\', \'block\');kindQ' + count_ask + ' = \'box\';}function kindQ' + count_ask + 'mq() { $(\'#hidee' + count_ask + '\').css(\'display\', \'none\');kindQ' + count_ask + ' = \'mqali\';}function checkedBOX1q' + count_ask + '() {if (document.getElementById(\'Ba1q' + count_ask + '\').checked) {box1_' + count_ask + ' = ' + true1 + ';} else {box1_' + count_ask + ' = ' + false1 + ';}}function checkedBOX2q' + count_ask + '() {if (document.getElementById(\'Ba2q' + count_ask + '\').checked) {box2_' + count_ask + ' = ' + true1 + ';} else {box2_' + count_ask + ' = ' + false1 + ';}}function checkedBOX3q' + count_ask + '() {if (document.getElementById(\'Ba3q' + count_ask + '\').checked) {box3_' + count_ask + ' = ' + true1 + ';} else {box3_' + count_ask + ' = ' + false1 + ';}}function checkedBOX4q' + count_ask + '() {if (document.getElementById(\'Ba4q' + count_ask + '\').checked) {box4_' + count_ask + ' = ' + true1 + ';} else {box4_' + count_ask + ' = ' + false1 + ';}}function checkedBOX5q' + count_ask + '() {if (document.getElementById(\'Ba5q' + count_ask + '\').checked) {box5_' + count_ask + ' = ' + true1 + ';} else {box5_' + count_ask + ' = ' + false1 + ';}}function get_ask' + count_ask + '_data(){ask_' + count_ask + ' = $(\'#ask' + count_ask + '\').val();ta1q' + count_ask + ' = $(\'#ta1q' + count_ask + '\').val();ta2q' + count_ask + ' = $(\'#ta2q' + count_ask + '\').val();ta3q' + count_ask + ' = $(\'#ta3q' + count_ask + '\').val();ta4q' + count_ask + ' = $(\'#ta4q' + count_ask + '\').val();ta5q' + count_ask + ' = $(\'#ta5q' + count_ask + '\').val();degrASKChoice' + count_ask + ' = $(\'#degrASKChoice' + count_ask + '\').val();degr1_' + count_ask + ' = parseArabic($(\'#degr1_' + count_ask + '\').val()); degr2_' + count_ask + ' = parseArabic($(\'#degr2_' + count_ask + '\').val()); degr3_' + count_ask + ' = parseArabic($(\'#degr3_' + count_ask + '\').val()); degr4_' + count_ask + ' = parseArabic($(\'#degr4_' + count_ask + '\').val()); degr5_' + count_ask + ' = parseArabic($(\'#degr5_' + count_ask + '\').val()); if (kindQ' + count_ask + ' == \'choice\'){ data_ask_' + count_ask + ' = \'IlI1kindQ' + count_ask + 'IlI1:IlI1\' + kindQ' + count_ask + ' + \'IlI1,IlI1img_val_ASK' + count_ask + 'IlI1:IlI1\' + img_val_ASK' + count_ask + ' + \'IlI1,IlI1ask_' + count_ask + 'IlI1:IlI1\' + ask_' + count_ask + ' + \'IlI1,IlI1choice1_' + count_ask + 'IlI1:IlI1\' + ta1q' + count_ask + ' + \'IlI1,IlI1choice2_' + count_ask + 'IlI1:IlI1\' + ta2q' + count_ask + ' + \'IlI1,IlI1choice3_' + count_ask + 'IlI1:IlI1\' + ta3q' + count_ask + ' + \'IlI1,IlI1choice4_' + count_ask + 'IlI1:IlI1\' + ta4q' + count_ask + ' + \'IlI1,IlI1choice5_' + count_ask + 'IlI1:IlI1\' + ta5q' + count_ask + ' + \'IlI1,IlI1currq' + count_ask + 'IlI1:IlI1\' + currChq' + count_ask + ' + \'IlI1,IlI1degrChoice1_' + count_ask + 'IlI1:IlI1\' + degr1_' + count_ask + ' + \'IlI1,IlI1degrChoice2_' + count_ask + 'IlI1:IlI1\' + degr2_' + count_ask + ' + \'IlI1,IlI1degrChoice3_' + count_ask + 'IlI1:IlI1\' + degr3_' + count_ask + ' + \'IlI1,IlI1degrChoice4_' + count_ask + 'IlI1:IlI1\' + degr4_' + count_ask + ' + \'IlI1,IlI1degrChoice5_' + count_ask + 'IlI1:IlI1\' + degr5_' + count_ask + ' + \'IlI1,IlI1AskRandom_for_bank' + count_ask + 'IlI1:IlI1IlI1,\';} else if (kindQ' + count_ask + ' == \'box\'){ data_ask_' + count_ask + ' = \'IlI1kindQ' + count_ask + 'IlI1:IlI1\' + kindQ' + count_ask + ' + \'IlI1,IlI1img_val_ASK' + count_ask + 'IlI1:IlI1\' + img_val_ASK' + count_ask + ' + \'IlI1,IlI1ask_' + count_ask + 'IlI1:IlI1\' + ask_' + count_ask + ' + \'IlI1,IlI1choice1_' + count_ask + 'IlI1:IlI1\' + ta1q' + count_ask + ' + \'IlI1,IlI1choice2_' + count_ask + 'IlI1:IlI1\' + ta2q' + count_ask + ' + \'IlI1,IlI1choice3_' + count_ask + 'IlI1:IlI1\' + ta3q' + count_ask + ' + \'IlI1,IlI1choice4_' + count_ask + 'IlI1:IlI1\' + ta4q' + count_ask + ' + \'IlI1,IlI1choice5_' + count_ask + 'IlI1:IlI1\' + ta5q' + count_ask + ' + \'IlI1,IlI1currbox1q' + count_ask + 'IlI1:IlI1\' + box1_' + count_ask + ' +\'IlI1,IlI1currbox2q' + count_ask + 'IlI1:IlI1\' + box2_' + count_ask + ' + \'IlI1,IlI1currbox3q' + count_ask + 'IlI1:IlI1\' + box3_' + count_ask + ' +\'IlI1,IlI1currbox4q' + count_ask + 'IlI1:IlI1\' + box4_' + count_ask + ' +\'IlI1,IlI1currbox5q' + count_ask + 'IlI1:IlI1\' + box5_' + count_ask + ' + \'IlI1,IlI1degrbox1_' + count_ask + 'IlI1:IlI1\' + degr1_' + count_ask + ' + \'IlI1,IlI1degrbox2_' + count_ask + 'IlI1:IlI1\' + degr2_' + count_ask + ' + \'IlI1,IlI1degrbox3_' + count_ask + 'IlI1:IlI1\' + degr3_' + count_ask + ' + \'IlI1,IlI1degrbox4_' + count_ask + 'IlI1:IlI1\' + degr4_' + count_ask + ' + \'IlI1,IlI1degrbox5_' + count_ask + 'IlI1:IlI1\' + degr5_' + count_ask + ' + \'IlI1,IlI1AskRandom_for_bank' + count_ask + 'IlI1:IlI1IlI1,\';} else if (kindQ' + count_ask + ' == \'mqali\') { data_ask_' + count_ask + ' = \'IlI1kindQ' + count_ask + 'IlI1:IlI1\' + kindQ' + count_ask + ' + \'IlI1,IlI1img_val_ASK' + count_ask + 'IlI1:IlI1\' + img_val_ASK' + count_ask + ' + \'IlI1,IlI1ask_' + count_ask + 'IlI1:IlI1\' + ask_' + count_ask + '+\'IlI1,IlI1anserMqali' + count_ask + 'IlI1:IlI1IlI1,IlI1degreMqali' + count_ask + 'IlI1:IlI1IlI1,IlI1AskRandom_for_bank' + count_ask + 'IlI1:IlI1IlI1,\'; IsHere_mqali = \'yes\'; }} function addPic' + count_ask + '() { navigator.camera.getPicture(onSuccessGetPic' + count_ask + ', onFailGetPic' + count_ask + ', { quality: 20, sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,  allowEdit: true, destinationType: Camera.DestinationType.FILE_URI }); } function onSuccessGetPic' + count_ask + '(imageURIpic' + count_ask + ') { imageURI' + count_ask + ' = imageURIpic' + count_ask + '; document.getElementById(\'img_src_Ask' + count_ask + '\').src = imageURI' + count_ask + '  + \'?\' + Math.random(); $(\'#btn-addPic' + count_ask + '\').hide(); $(\'#btn-uploadPic' + count_ask + '\').show(); $(\'#btn-deletePic' + count_ask + '\').show(); } function onFailGetPic' + count_ask + '() {} function uploadPic' + count_ask + '() { $(\'#load\').css(\'display\',\'inline-block\'); $(\'#btn-uploadPic' + count_ask + '\').hide(); var options = new FileUploadOptions(); options.fileKey = \'file\'; options.fileName = imageURI' + count_ask + '.substr(imageURI' + count_ask + '.lastIndexOf(\'/\') + 1); options.mimeType = \'image/jpeg\'; var params = {}; params.value1 = \'test\'; params.value2 = \'param\'; options.params = params; options.chunkedMode = false; var ft = new FileTransfer(); ft.upload(imageURI' + count_ask + ', \'https://app-exams.com/new_exam/upload.php\', function(result){ img_val_ASK' + count_ask + ' = \'https://app-exams.com/new_exam/uploadIMG/\' + result.response; $(\'#load\').css(\'display\',\'none\');}, function(error){ $(\'#load\').css(\'display\',\'none\'); Swal.fire({ type: \'info\', html: \'' + lan_There_is_problem_connecting_network + '\', showConfirmButton: false, timer: 1500 }); $(\'#btn-uploadPic' + count_ask + '\').show();}, options); } function deletePic' + count_ask + '() {$(\'#btn-deletePic' + count_ask + '\').hide(); $(\'#btn-uploadPic' + count_ask + '\').hide(); $(\'#btn-addPic' + count_ask + '\').show(); document.getElementById(\'img_src_Ask' + count_ask + '\').src = \'\'; img_val_ASK' + count_ask + ' = \'\';} </' + 'script>';
    $('#form_new_ask')['append'](text_ask) }

function re_wrongCorrect(_0x961fx12) { $('#hidee' + _0x961fx12 + ' tr:nth-child(4)')['show']();
    $('#hidee' + _0x961fx12 + ' tr:nth-child(5)')['show']();
    $('#hidee' + _0x961fx12 + ' tr:nth-child(6)')['show']();
    $('#hidee' + _0x961fx12 + ' tr:nth-child(7)')['show']() }

function wrongCorrect(_0x961fx12) { $('#hidee' + _0x961fx12 + ' tr:nth-child(4)')['hide']();
    $('#hidee' + _0x961fx12 + ' tr:nth-child(4) input')['val']('');
    $('#hidee' + _0x961fx12 + ' tr:nth-child(5)')['hide']();
    $('#hidee' + _0x961fx12 + ' tr:nth-child(5) input')['val']('');
    $('#hidee' + _0x961fx12 + ' tr:nth-child(6)')['hide']();
    $('#hidee' + _0x961fx12 + ' tr:nth-child(6) input')['val']('');
    $('#hidee' + _0x961fx12 + ' tr:nth-child(7)')['hide']() }

function info_how_add_ask() { Swal['fire']({ html: lan_options_add_exam_why, confirmButtonText: lan_ok }) }

function info_Wifi_test() { Swal['fire']({ html: lan_lan_Internet_Connection_Attention, confirmButtonText: lan_ok }) }

function info_direct_radio() { Swal['fire']({ html: lan_By_kind_download_direct_explanation, confirmButtonText: lan_ok }) }

function info_radio_indexedDB() { Swal['fire']({ html: lan_By_kind_download_indexedDB_explanation, confirmButtonText: lan_ok }) }

function info_barcode_radio() { Swal['fire']({ html: lan_By_Barcode_explanation, confirmButtonText: lan_ok }) }

function info_ask_type(_0x961fx1a) { if (_0x961fx1a == 1) { Swal['fire']({ html: lan_Choose_One_explanation, confirmButtonText: lan_ok }) } else { if (_0x961fx1a == 2) { Swal['fire']({ html: lan_Multiple_Choice_explanation, confirmButtonText: lan_ok }) } else { if (_0x961fx1a == 3) { Swal['fire']({ html: lan_Short_Answer_explanation, confirmButtonText: lan_ok }) } } } }

function delete_ask(_0x961fx1c) { if (count_ask == 0) { Swal['fire']({ html: lan_All_questions_deleted, showConfirmButton: false, timer: 1500 }) } else { $('#group' + count_ask)['remove'](); if (_0x961fx1c != 1) { Swal['fire']({ html: lan_questions_deleted + count_ask, showConfirmButton: false, timer: 1500 }) };
        count_ask = count_ask - 1 } }

function kind_download_direct() { kind_download = 'direct' }

function kind_download_indexedDB() { kind_download = 'indexedDB' }

function direction_ask1() { direction_ask = 'rtl';
    $('body')['append']('<style> .inputAsk { direction: rtl } </style>') }

function direction_ask2() { direction_ask = 'ltr';
    $('body')['append']('<style> .inputAsk { direction: ltr } </style>') }

function close_Bar1() { close_Barcode = 'barcode' }

function close_Bar2() { close_Barcode = 'auto' }

function PassStart() { if (document['getElementById']('Pass_start_ckeck')['checked']) { Pass_test_state = 'true1';
        $('#input_Pass')['fadeIn']() } else { Pass_test_state = 'false1';
        $('#input_Pass')['fadeOut']() } }

function TimeTest() { if (document['getElementById']('Time_test_ckeck')['checked']) { Time_test_state = 'true1';
        $('#input_Time')['fadeIn']() } else { Time_test_state = 'false1';
        $('#input_Time')['fadeOut']() } }

function Bank_Test() { if (document['getElementById']('Bank_test_ckeck')['checked']) { Bank_test_state = 'true1';
        $('#input_Bank')['fadeIn']();
        $('#RandomAsk')['prop']('checked', true);
        RandomAskk();
        $('#RandomAsk')['attr']('disabled', true) } else { Bank_test_state = 'false1';
        $('#input_Bank')['fadeOut']();
        $('#RandomAsk')['removeAttr']('disabled') } }

function info_bank() { Swal['fire']({ html: lan_Bank_test_info, confirmButtonText: lan_ok }) }

function RandomAskk() { if (document['getElementById']('RandomAsk')['checked']) { RandomAsk = 'true1' } else { RandomAsk = 'false1' } }

function show_AnserSS() { if (document['getElementById']('showAnserS')['checked']) { showAnserS = 'true1' } else { showAnserS = 'false1' } }

function allow_showw() { if (document['getElementById']('allow_show')['checked']) { allow_show = 'yes' } else { allow_show = 'no' } }

function OUTtest() { if (document['getElementById']('OUT_test')['checked']) { OUT_test = 'true1' } else { OUT_test = 'false1' } }

function Wifitest() { if (document['getElementById']('Wifi_test')['checked']) { Wifi_test = 'true1' } else { Wifi_test = 'false1' } }

function CAPtest() { if (document['getElementById']('CAP_test')['checked']) { CAP_test = 'true1' } else { CAP_test = 'false1' } }

function get_exam_data() { t_name = $('#t_name')['val']();
    t_info = $('#t_info')['val']();
    t_email = localStorage['loginEmail'];
    t_pass_start = $('#t_pass_start')['val']();
    Time_test = parseArabic($('#Time_test')['val']());
    Bank_test = parseArabic($('#Bank_test')['val']());
    version = 42;
    get_ask_data() }

function get_ask_data() { if (count_ask == 0) { Swal['fire']({ text: 'يجب إضافة الأسئلة أولا', showConfirmButton: false, timer: 1500 }) } else { for (count_ask_num = 1; count_ask >= count_ask_num; count_ask_num++) { scrAddAsk = '<script> get_ask' + count_ask_num + '_data(); data_ask = data_ask + data_ask_' + count_ask_num + '; </' + 'script>';
            $('body')['append'](scrAddAsk); if (count_ask == count_ask_num) { _0x961fx2f() } } };

    function _0x961fx2f() { info_exam = 'IlI1t_nameIlI1:IlI1' + t_name + 'IlI1,IlI1t_numIlI1:IlI1IlI1,IlI1t_infoIlI1:IlI1' + t_info + 'IlI1,IlI1t_emailIlI1:IlI1' + t_email + 'IlI1,IlI1Pass_test_stateIlI1:IlI1' + Pass_test_state + 'IlI1,IlI1t_pass_startIlI1:IlI1' + t_pass_start + 'IlI1,IlI1versionIlI1:IlI1' + version + 'IlI1,IlI1RandomAskIlI1:IlI1' + RandomAsk + 'IlI1,IlI1showAnserSIlI1:IlI1' + showAnserS + 'IlI1,IlI1allow_downloadIlI1:IlI1yesIlI1,IlI1allow_showIlI1:IlI1' + allow_show + 'IlI1,IlI1OUT_testIlI1:IlI1' + OUT_test + 'IlI1,IlI1Wifi_testIlI1:IlI1' + Wifi_test + 'IlI1,IlI1CAP_testIlI1:IlI1' + CAP_test + 'IlI1,IlI1close_BarcodeIlI1:IlI1' + close_Barcode + 'IlI1,IlI1direction_askIlI1:IlI1' + direction_ask + 'IlI1,IlI1Time_testIlI1:IlI1' + Time_test + 'IlI1,IlI1Time_test_stateIlI1:IlI1' + Time_test_state + 'IlI1,IlI1Bank_testIlI1:IlI1' + Bank_test + 'IlI1,IlI1Bank_test_stateIlI1:IlI1' + Bank_test_state + 'IlI1,IlI1IsHere_mqaliIlI1:IlI1' + IsHere_mqali + 'IlI1,IlI1kind_downloadIlI1:IlI1' + kind_download + 'IlI1,IlI1count_askIlI1:IlI1' + count_ask + 'IlI1,IlI1name_stdIlI1:IlI1IlI1,IlI1num_stdIlI1:IlI1IlI1,IlI1info_stdIlI1:IlI1IlI1,IlI1degre_stdIlI1:IlI1IlI1,IlI1degre_std_all_mqaliIlI1:IlI1IlI1,IlI1answers_idIlI1:IlI1IlI1,IlI1count_OUT_testIlI1:IlI10IlI1,IlI1count_Wifi_testIlI1:IlI10IlI1,IlI1count_CAP_testIlI1:IlI10IlI1,IlI1num_deviceIlI1:IlI1123456IlI1,IlI1send_ansIlI1:IlI1noIlI1,IlI1time_exIlI1:IlI1IlI1,';
        data_ask = '{' + info_exam + data_ask + '}';
        res_ask_exam = data_ask['replace'](/\n/g, '<br>');
        res_ask_exam = res_ask_exam['replace'](/\\n/g, '<br>');
        res_ask_exam = res_ask_exam['replace'](/\\/g, '/');
        res_ask_exam = res_ask_exam['replace'](/"/g, '″');
        res_ask_exam = res_ask_exam['replace'](/'/g, '′');
        res_ask_exam = res_ask_exam['replace'](/\t/g, ' ');
        res_ask_exam = res_ask_exam['replace'](/IlI1/g, '"');
        lastIndex = res_ask_exam['lastIndexOf'](',');
        res_ask_exam = res_ask_exam['substring'](0, lastIndex);
        res_ask_exam = res_ask_exam + '}';
        insert_new_exam() } }

function insert_new_exam(_0x961fx31, _0x961fx32, _0x961fx33) { $('#load')['css']('display', 'inline-block'); if (_0x961fx32 == 'yes') { url_mode = 'https://app-exams.com/new_exam/update_exam2.php?id=' + _0x961fx33;
        obbbj = JSON['parse'](_0x961fx31);
        t_name = obbbj['t_name'];
        t_info = obbbj['t_info'];
        t_email = obbbj['t_email'];
        res_ask_exam = _0x961fx31 } else { if (moodeIs == 'mode_edit') { url_mode = 'https://app-exams.com/new_exam/update_exam2.php?id=' + numExamEdit;
            msg_mode = lan_edited_successfully } else { url_mode = 'https://app-exams.com/new_exam/insert_new_exam2.php';
            msg_mode = lan_added_successfully } };
    $['ajax']({ type: 'POST', url: url_mode, data: { exam_name: t_name + '', exam_info: t_info + '', exam_email: t_email + '', exam_data: res_ask_exam + '' }, success: function(_0x961fxe) { _0x961fxe = _0x961fxe; if (_0x961fx32 == 'yes') { $('#load')['css']('display', 'none') } else { $('html, body')['animate']({ scrollTop: '0px' }, 10);
                Swal['fire']({ type: 'success', text: msg_mode, showConfirmButton: false, timer: 3000 });
                $('#load')['css']('display', 'none') };
            goToCreateExam = 'yes';
            $('#num_exam')['val'](_0x961fxe);
            readAll_exam_saveded_new();
            setTimeout(function() { go_page('prev_exam') }, 3000) }, error: function() { Swal['fire']({ type: 'info', html: lan_There_is_problem_connecting_network, showConfirmButton: false, timer: 1500 });
            $('#load')['css']('display', 'none') } }) }

function save_exam(_0x961fxe, _0x961fx35, _0x961fxb, _0x961fx36) { if (_0x961fx36 == 'prev') { _0x961fxe = _0x961fxb;
        _0x961fx35 = _0x961fx35['replace'](/\\n/g, '<br>');
        _0x961fx35 = _0x961fx35['replace'](/\n/g, '<br>');
        obj = JSON['parse'](_0x961fx35);
        console['log'](obj);
        t_name = obj['t_name'];
        t_info = obj['t_info'];
        newData = JSON['stringify'](obj) } else { obj = JSON['parse'](res_ask_exam);
        obj['t_num'] = _0x961fxe;
        newData = JSON['stringify'](obj) }; var _0x961fx37 = db['transaction'](['myexam'], 'readwrite')['objectStore']('myexam')['add']({ id: _0x961fxe, t_name: t_name, t_info: t_info, exam_data: newData });
    _0x961fx37['onsuccess'] = function(_0x961fx38) { $('#load')['css']('display', 'none'); if (goToCreateExam == 'no' || goToCreateExam == 'go') {} else { localStorage['router'] = 'prev_exam';
            setTimeout(function() {}, 1000) } };
    _0x961fx37['onerror'] = function() { var _0x961fx37 = db['transaction'](['myexam'], 'readwrite')['objectStore']('myexam')['put']({ id: _0x961fxe, t_name: t_name, t_info: t_info, exam_data: newData });
        _0x961fx37['onsuccess'] = function(_0x961fx38) { $('#load')['css']('display', 'none'); if (goToCreateExam == 'no' || goToCreateExam == 'go') {} else { localStorage['router'] = 'prev_exam';
                setTimeout(function() {}, 1000) } } } }

function remove_exam_te(_0x961fx3a, deleteExam) { var _0x961fx37 = db['transaction'](['myexam'], 'readwrite')['objectStore']('myexam')['delete'](_0x961fx3a.toString());
    _0x961fx37['onsuccess'] = function() { if (deleteExam == 'deleteExam') { Swal['fire']({ type: 'success', html: 'تم حذف الاختبار', showConfirmButton: false, timer: 1500 });
            reset_App_tbl() } else { if (deleteExam == 'mode_update_exam_te_new') {} else { Swal['fire']({ type: 'info', html: lan_exam_was_hidden, confirmButtonText: lan_ok });
                reset_App_tbl() } } } }

function allow_download(_0x961fxe) { obj_exam = JSON['parse'](_0x961fxe); if (obj_exam['allow_download'] == 'yes') { obj_exam['allow_download'] = 'no' } else { obj_exam['allow_download'] = 'yes' };
    data_aftre_edit = JSON['stringify'](obj_exam);
    Swal['fire']({ html: lan_exam_download_settings, timer: 2000, onBeforeOpen: (function() { Swal['showLoading']() }) });
    insert_new_exam(data_aftre_edit, 'yes', obj_exam['t_num']) } loginState = localStorage['loginState'];
loginEmail = localStorage['loginEmail'];
loginPass = localStorage['loginPass'];
var goToCreateExam;

function check_logen() { if (loginState == 'login=OK') { $('#loginEmail')['html']('<b>' + lan_Logged_in_as + '</b><div style="direction: ltr;">' + loginEmail + '</div><button class="desine-btn teacher" onclick="logOUT()">' + lan_sign_out + '</button>');
        setTimeout(function() { $('#t_email_input')['val'](loginEmail) }, 800) } else { if (loginState == 'login=OUT') { $('#email_te')['val'](localStorage['loginEmail']);
            $('#pass_te')['val'](localStorage['loginPass']);
            $('#loginEmail')['html']('<button class="desine-btn teacher" onclick="openlogenWIN()">' + lan_sign_in + '</button>') } else { loginState = localStorage['loginState'] = 'login=OUT';
            $('#loginEmail')['html']('<button class="desine-btn teacher" onclick="openlogenWIN()">' + lan_sign_in + '</button>') } };
    check_mode_app_lan(app_lan) } check_logen();

function openlogenWIN() { $('.popup_login')['css']('display', 'block') }

function logOUT() { loginState = localStorage['loginState'] = 'login=OUT';
    $('#exam_saved_forAdd')['empty']();
    check_logen() } $('.popup_login')['click'](function() { $('.popup_login')['fadeOut'](200) });
$('.popup_login .inner')['click'](function(_0x961fx40) { _0x961fx40['stopPropagation']() });

function login(_0x961fx42, _0x961fx43) { _0x961fx42 = _0x961fx42['toLowerCase']();
    $('.popup_login')['fadeOut'](200); if (_0x961fx42 == '' || _0x961fx43 == '') { Swal['fire']({ html: lan_fill_input, confirmButtonText: lan_ok }) } else { if (_0x961fx42['indexOf']('@') >= 0 && _0x961fx42['indexOf']('.') >= 0) { $('#load_login')['css']('display', 'block');
            $['ajax']({ type: 'POST', url: 'https://app-exams.com/new_exam/insert_new_user_plus.php', data: { email: _0x961fx42 + '', pass: _0x961fx43 + '', te_std: 'te' }, success: function(_0x961fxe) { if (_0x961fxe == 'no') { Swal['fire']({ type: 'warning', title: lan_pass_wrong1, html: lan_pass_wrong2, confirmButtonText: lan_ok });
                        $('#load_login')['hide']() } else { if (_0x961fxe == 'yes') { Swal['fire']({ type: 'success', html: lan_new_user_done, confirmButtonText: lan_ok });
                            $('.popup_login')['fadeOut'](200);
                            loginState = localStorage['loginState'] = 'login=OK';
                            loginEmail = localStorage['loginEmail'] = _0x961fx42;
                            loginPass = localStorage['loginPass'] = _0x961fx43;
                            check_logen(); if (goToCreateExam == 'go') { go_page('page_newtest') } else { goToCreateExam = 'no' };
                            $('#load_login')['hide']() } else { $('.popup_login')['fadeOut'](200);
                            loginState = localStorage['loginState'] = 'login=OK';
                            loginEmail = localStorage['loginEmail'] = _0x961fx42;
                            loginPass = localStorage['loginPass'] = _0x961fx43;
                            check_logen(); if (goToCreateExam == 'go') { go_page('page_newtest') } else { goToCreateExam = 'no' };
                            $('#load_login')['hide']();
                            $('body')['append'](_0x961fxe) } } }, error: function() { Swal['fire']({ type: 'info', html: lan_There_is_problem_connecting_network, showConfirmButton: false, timer: 1500 });
                    $('#load_login')['hide']() } }) } else { Swal['fire']({ type: 'warning', html: lan_email_wrong, confirmButtonText: lan_ok }) } } }

function check_logen_for_get_exam() { if (loginState == 'login=OK') { $('.popup_get_prev_exam')['fadeIn'](200) } else { Swal['fire']({ type: 'info', html: 'الرجاء تسجيل الدخول أولا ثم إعادة المحاولة لجلب اختباراتك السابقة', confirmButtonText: lan_ok }) } } $('.popup_get_prev_exam')['click'](function() { $('.popup_get_prev_exam')['fadeOut'](200) });
$('.popup_get_prev_exam .inner')['click'](function(_0x961fx40) { _0x961fx40['stopPropagation']() });

function get_prev_exam(_0x961fxb, _0x961fx43, _0x961fx42, _0x961fx46) { if (_0x961fxb == '' || _0x961fx43 == '') { Swal['fire']({ type: 'warning', html: 'يرجى ملء الحقول', confirmButtonText: lan_ok }) } else { $['ajax']({ type: 'POST', url: 'https://app-exams.com/new_exam/get_prev_exam.php?id=' + _0x961fxb, data: { num: _0x961fxb + '', pass: _0x961fx43 + '', email: _0x961fx42 + '' }, success: function(_0x961fxe) { if (_0x961fxe == 'noResult') { Swal['fire']({ type: 'warning', html: 'عفوا لا يوجد اختبار بهذا الرقم', confirmButtonText: lan_ok }) } else { if (_0x961fxe == 'no') { Swal['fire']({ type: 'warning', html: 'يرجى التأكد من رقم الاختبار وكلمة المرور', confirmButtonText: lan_ok }) } else { if (_0x961fx46 == 'forUpdate') { search_exam() } else { $('.popup_get_prev_exam')['fadeOut'](200);
                            Swal['fire']({ type: 'success', text: 'تمت استعادة الاختبار بنجاح', showConfirmButton: false, timer: 1500 });
                            save_exam(' ', _0x961fxe, _0x961fxb, 'prev') } } } }, error: function() { Swal['fire']({ type: 'info', html: lan_There_is_problem_connecting_network, showConfirmButton: false, timer: 1500 }) } }) } }

function tashveer(_0x961fxe) { dataTashveer = CryptoJS['AES']['encrypt'](_0x961fxe, _0x961fxe); return dataTashveer.toString() }

function simple_tashveer(_0x961fxe) { dataTashveer = CryptoJS['AES']['encrypt'](_0x961fxe, 'F2cQx5iu8LKGQ'); return dataTashveer.toString() }

function simple_tashveer2(_0x961fxe) { _0x961fxe = '"' + _0x961fxe + '"';
    dataTashveer = CryptoJS['AES']['encrypt'](_0x961fxe, 'F2cQx5iu8LKGQ'); return dataTashveer.toString() }

function tashveerFree(_0x961fxe) { fuk1 = CryptoJS['AES']['decrypt'](_0x961fxe, _0x961fxe);
    dataFree = fuk1.toString(CryptoJS['enc'].Utf8); return dataFree }

function tashveerFree_simple(_0x961fxe) { fuk1 = CryptoJS['AES']['decrypt'](_0x961fxe, 'F2cQx5iu8LKGQ');
    dataFree = fuk1.toString(CryptoJS['enc'].Utf8); return dataFree }

function strip_tags(_0x961fxe) { var _0x961fx4d = document['createElement']('div');
    _0x961fx4d['innerHTML'] = _0x961fxe;
    strip_tags = _0x961fx4d['textContent'] || _0x961fx4d['innerText'] || ''; return strip_tags }

function strip2_tags(_0x961fxe) { var _0x961fx4d = document['createElement']('div');
    _0x961fx4d['innerHTML'] = _0x961fxe;
    strip2_tags = _0x961fx4d['textContent'] || _0x961fx4d['innerText'] || '' }

function copyText1(_0x961fxb) { $('#copy_url_input')['css']('color', color_app);
    el_copy = _0x961fxb;
    $('#copy_url_input')['html']('https://app-exams.com/exam.html#' + _0x961fxb);
    el = document['getElementById']('copy_url_input');
    copyText(el) }

function copyText(_0x961fx51) { var _0x961fx52, _0x961fx53, _0x961fx54; if (document['body']['createTextRange']) { _0x961fx52 = document['body']['createTextRange']();
        _0x961fx52['moveToElementText'](_0x961fx51);
        _0x961fx52['select']() } else { if (window['getSelection']) { _0x961fx53 = window['getSelection']();
            _0x961fx52 = document['createRange']();
            _0x961fx52['selectNodeContents'](_0x961fx51);
            _0x961fx53['removeAllRanges']();
            _0x961fx53['addRange'](_0x961fx52) } }; try { document['execCommand']('copy');
        link_exam = 'https://app-exams.com/exam.html#' + el_copy;
        Swal['fire']({ type: 'success', title: lan_word_Great, html: lan_exam_ready_download_link + ': <br> <a href=' + link_exam + '>' + link_exam + '</a>', confirmButtonText: lan_Copy_link }) } catch (err) { Swal['fire']({ type: 'success', html: lan_exam_ready_download_link + ': <br> <a href=' + link_exam + '>' + link_exam + '</a>', confirmButtonText: lan_ok }) } }

function update_exam_te_new() { if (loginState == 'login=OK') { $('#email_te')['val'](localStorage['loginEmail']);
        $('#pass_te')['val'](localStorage['loginPass']);
        $('#exam_saved_forAdd')['empty'](); var _0x961fx56 = db['transaction']('myexam')['objectStore']('myexam');
        _0x961fx56['openCursor']()['onsuccess'] = function(_0x961fx38) { var _0x961fx57 = _0x961fx38['target']['result']; if (_0x961fx57) { remove_exam_te(_0x961fx57['key'], 'mode_update_exam_te_new');
                _0x961fx57['continue']() } };
        login($('#email_te')['val'](), $('#pass_te')['val']());
        Swal['fire']({ title: lan_please_wait, html: lan_list_updated, confirmButtonText: lan_ok, timer: 20000, onBeforeOpen: (function() { Swal['showLoading']() }) }) } else { Swal['fire']({ html: lan_Please_login_from_more_page, confirmButtonText: lan_ok }) } }
