var rule = {
    title: '星辰影院',
    host: 'https://www.xc8j.com',
    url: '/xc/fyfilter.html',
    searchUrl: '/search.php?page=fypage&searchword=**&searchtype=',
  searchable: 1,quickSearch: 0,filterable: 1,
  headers: {'User-Agent': 'MOBILE_UA',},
  play_parse: true,double: true,
  lazy: '',
class_name: '电影&剧集&综艺&动漫',
class_url: '1&2&3&4',
filter_url: '{{fl.cateId}}-fypage',
filter_def: {
'1': {cateId: '1'},'2': {cateId: '2'},'3': {cateId: '3'},'4': {cateId: '4'}},
    推荐: '*',
    一级: '.fed-list-info.fed-part-rows li;.fed-list-title&&Text;a&&data-original;.fed-list-remarks&&Text;a&&href',
     二级: {
    title: 'h1&&Text;',
    img: 'a&&data-original',
    //主要信息;年代;地区;演员;导演
    desc: '.fed-col-xs12&&.fed-col-xs6:eq(0)&&Text;.fed-col-xs12&&.fed-col-xs6:eq(3)&&Text;.fed-col-xs12&&.fed-col-xs6:eq(1)&&Text;.fed-col-xs12&&.fed-col-md6:eq(0)&&Text;.fed-col-xs12&&.fed-col-md6:eq(1)&&Text',
    content: '.fed-col-xs12&&.fed-part-esan&&Text',
    tabs: '.fed-list-head .fed-tabs-btns',
    lists: '.stui-content__playlist:eq(#id)&&a',
  },
  搜索: '*',
  filter:{"1":[{"key":"cateId","name":"类型","value":[{"n":"动作片","v":"5"},{"n":"爱情片","v":"6"},{"n":"科幻片","v":"7"},{"n":"恐怖片","v":"8"},{"n":"战争片","v":"9"},{"n":"喜剧片","v":"10"},{"n":"纪录片","v":"11"},{"n":"剧情片","v":"12"}]}],
"2":[{"key":"cateId","name":"类型","value":[{"n":"国产剧","v":"13"},{"n":"香港剧","v":"14"},{"n":"欧美剧","v":"15"},{"n":"韩国剧","v":"16"},{"n":"台湾剧","v":"25"},{"n":"日本剧","v":"26"},{"n":"泰国剧","v":"27"}]}]}
}