function go_page(_0x73cbx2) { $('#' + _0x73cbx2)['siblings']()['hide']();
    $('#' + _0x73cbx2)['show'](); if (_0x73cbx2 == 'page_result') { localStorage['prev_page_demo'] = 'page_result' } else { if (_0x73cbx2 == 'prev_exam') { localStorage['prev_page_demo'] = 'prev_exam';
            $('#btnEditExam')['hide']();
            $('#btnAddExam')['show']();
            edit_ask_mode = '<script>moodeIs = undefined; </' + 'script>';
            $('#form_new_ask')['append'](edit_ask_mode) } else { if (_0x73cbx2 != 'page_newtest') { $('#btnEditExam')['hide']();
                $('#btnAddExam')['show']();
                edit_ask_mode = '<script>moodeIs = undefined; </' + 'script>';
                $('#form_new_ask')['append'](edit_ask_mode) } } }; if (_0x73cbx2 == 'page_home' || _0x73cbx2 == 'page_setting' || _0x73cbx2 == 'prev_exam') { setTimeout(function() { localStorage['router'] = '';
            reset_App() }, 1000) } }
