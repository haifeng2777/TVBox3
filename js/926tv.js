var rule = {
    title: '926tv',
    host: 'https://www.926003.tv/',
    url: '/fyclass',
    searchUrl: '',
    searchable: 1,
    quickSearch: 0,
    class_name: '全部',
    class_url: '/',
    //class_url:'?live',
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    timeout: 5000,
    play_parse: true,
    lazy: $js.toString(() => {
        let html = jsp.html;
        let pd = jsp.pd;
        let pdfh = jsp.pdfh;
        
        // 提取iframe实际地址并修复编码问题
        let iframeSrc = pdfh(html, '#iframeplayer&&src').replace(/&amp;/g, '&');
        
        // 构造带Referer的完整播放地址（自动携带UA和Referer）
        let playUrl = iframeSrc + '@Referer=https://play.926003.tv/';
        
        // 返回标准格式的播放地址（支持多个header参数）
        JSON.stringify({
            parse: 0, // 直接播放
            url: playUrl,
            header: {
                "User-Agent": "MOBILE_UA",
                "Referer": "https://play.926003.tv/"
            }
        });
    }),
    limit: 6,
    double: false,
    推荐: '*',
    一级: $js.toString(() => {
        let d = [];
        pd=jsp.pd;
        pdfh=jsp.pdfh;
        pdfa=jsp.pdfa;
       
        let html = request(input);
        let tabs = pdfa(html, '.list_content&&a');
        tabs.forEach((it) => {
            let ps = pdfh(it, '.eventtime&&em&&Text');
            let pz = pdfh(it, '.zhudui&&p&&Text');
            let pk = pdfh(it, '.kedui&&Text');
            let img = pd(it, 'img&&op-zfr-a-g');
            let timer = pdfh(it, '.eventtime&&i&&Text');
            let url = pd(it, 'a.clearfix&&href');
            d.push({
                title: pz + '' + pk,
                desc: timer + '' + ps,
                img: img,
                url: url
            });
        });
        setResult(d);
    }),
    二级: {
    title: "h2.biaoti&&Text",
    img: "img&&src",
    desc: "",
    content: "title&&Text",
    "tabs": "js:TABS=['道长在线']",
    lists: $js.toString(() => {
        LISTS = [];
        let pd = jsp.pd;
        let pdfh = jsp.pdfh;
        let html = jsp.html;
        // 获取iframe播放地址并处理编码问题
        let iframeSrc = pdfh(html, '#iframeplayer&&src').replace(/&amp;/g, '&');
        // 构造带Referer的播放地址
        let playUrl = iframeSrc + '@Referer=' + encodeURIComponent('https://play.926003.tv/');
        // 生成播放列表
        LISTS.push(['在线播放$' + playUrl]);
    }),
},
    搜索: '',
}



