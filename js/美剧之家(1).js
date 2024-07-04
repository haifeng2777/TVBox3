var rule = {
            title: '美剧之家',
            host: 'https://www.mjzj.me',
            url: '/vod/fyclass--------fypage---.html',
            searchUrl: '/vodsearch/**----------fypage---.html',
            searchable: 2,
            quickSearch: 0,
            filterable: 1,
            filter: '',
            filter_url: '',
            filter_def: {},
            headers: {
                'User-Agent': 'MOBILE_UA',
            },
            timeout: 5000,
            class_parse: '.nav&&li;a&&Text;a&&href;/vod/(.*?)-----------.html',
            cate_exclude: '',
            play_parse: true,
            lazy: `js:input = {parse: 1, url: input, js: ''}`,
            double: true,
            推荐: '*',
            一级: 'body&&.pic;a&&title;img&&data-src;.s4&&Text;a&&href',
              二级: {
    重定向: $js.toString(() => {
            log('执行重定向:' + MY_URL);
            // let html = request(MY_URL);
            MY_URL = pd(html, '.play&&a&&href', MY_URL);
            log('二级重定向到:' + MY_URL);
            html = request(MY_URL);
        }),
        
        tabs: $js.toString(() => {
            log('tabs:MY_URL:' + MY_URL);
            TABS = [];
            let tabs = pdfa(html, '.xianlu&&a');
            log(tabs);
            tabs.forEach(it => {
                let _tt = pdfh(it, 'body&&Text');
                TABS.push(_tt);
            });
             }),
        lists: $js.toString(() => {
            LISTS = [];
            //log(input);
            let lists1 = pdfa(html, '.jisu&&a').map(it => {
                let _tt = pdfh(it, 'a&&Text');
                let _uu = pd(it, 'a&&href', MY_URL);
                return _tt + '$' + _uu
            });
        
         LISTS.push(lists1);
            let _urls = pdfa(html, '.jisu:eq(-1)&&a').map(it => {
                return pd(it, 'a&&href', MY_URL);
            });
            _urls = _urls.filter(it => it != MY_URL);
            _urls.forEach((_url) => {
                let html = request(_url);
                let lists1 = pdfa(html, '.jisu&&a').map(it => {
                    let _tt = pdfh(it, 'a&&Text');
                    let _uu = pd(it, 'a&&href', MY_URL);
                    return _tt + '$' + _uu
                });
                LISTS.push(lists1);
            });
           }),
                title: 'h1&&Text;.type&&span:eq(1)&&Text',
                img: 'img&&src',
                desc: '.zhuangtai&&Text;.type&&span:eq(2)&&Text;.type&&span:eq(3)&&Text;演员;导演',
                content: '.juqing&&Text',
                //tabs: '.xianlu&&a',
               // lists: '.jisu:eq(#id)&&a',
                tab_text: 'body&&Text',
                list_text: 'body&&Text',
                list_url: 'a&&href'
            },
            搜索: 'body&&.pic;a&&title;img&&data-src;;a&&href',
        }