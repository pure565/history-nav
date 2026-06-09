const categories = [
  {
    title: "史学前沿",
    links: [
      { name: "全国哲学社会科学工作办公室", url: "http://www.nopss.gov.cn/GB/index.html" },
      { name: "国家版本数据中心", url: "https://pdc.capub.cn/" },
      { name: "中国社会科学院哲学研究所", url: "http://philosophy.cass.cn/tushudangan/zxxkfw/202305/t20230510_5637193.html" },
    ],
  },
  {
    title: "论文投稿",
    links: [
      { name: "万维书刊网", url: "https://www.eshukan.com/?_d_id=2da568659942fcd3da09772d782e23" },
      { name: "集刊全文数据库", url: "https://www.jikan.com.cn/" },
      { name: "中国近现代史专业期刊推荐", url: "https://www.xueshuwenhai.com/zzList/sflzgjxds" },
    ],
  },
  {
    title: "各地图书馆免费电子资源",
    links: [
      { name: "中国国家图书馆", url: "https://www.nlc.cn/web/index.shtml" },
      { name: "广西壮族自治区图书馆", url: "https://www.gxlib.org.cn/" },
      { name: "浙江图书馆", url: "https://www.zjlib.cn/" },
      { name: "福建图书馆", url: "https://www.fjlib.net/#page2" },
      { name: "河北图书馆", url: "http://www.helib.net/index.htm" },
      { name: "贵州数字图书馆", url: "https://www.gzlib.org/" },
      { name: "长春市图书馆", url: "https://ccelib.cn/" },
      { name: "上海图书馆", url: "https://www.library.sh.cn/" },
      { name: "高校与图书馆导航", url: "https://szsyw.cn/libs" },
      { name: "山东省图书馆", url: "http://www.sdlib.com/?ref=https://szsyw.cn" },
      { name: "湖北省图书馆（最好用）", url: "https://www.library.hb.cn/" },
      { name: "日本国立公文书馆", url: "https://www.digital.archives.go.jp/" },
    ],
  },
  {
    title: "历史电子书找书",
    links: [
      { name: "全国图书馆参考咨询联盟", url: "http://www.ucdrs.superlib.net/" },
      { name: "龙源网络图书馆", url: "http://www.ly.superlib.net" },
      { name: "读秀", url: "http://www.duxiu.com" },
      { name: "找书网", url: "https://www.findbooks.eu.org/" },
      { name: "识典古籍", url: "https://www.shidianguji.com/?page_from=home_page" },
      { name: "书格", url: "https://www.shuge.org/" },
      { name: "查籍得", url: "https://www.chajide.com/" },
      { name: "安娜的档案", url: "https://zh.annas-archive.org/" },
      { name: "Z-Library", url: "https://z-library.sk/" },
    ],
  },
  {
    title: "AI助手",
    links: [
      { name: "元宝", url: "https://yuanbao.tencent.com" },
      { name: "DeepSeek", url: "https://www.deepseek.com" },
      { name: "豆包", url: "https://www.doubao.com" },
      { name: "通义千问", url: "https://tongyi.aliyun.com/qianwen" },
      { name: "智谱清言", url: "https://chatglm.cn" },
      { name: "Kimi", url: "https://kimi.moonshot.cn" },
      { name: "Gemini", url: "https://gemini.google.com" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Grok", url: "https://grok.x.ai" },
      { name: "GitHub", url: "https://github.com" },
    ],
  },
  {
    title: "工具箱",
    links: [
      { name: "类聚", url: "https://ancientbooks.cn/" },
      { name: "PDFcraft", url: "https://pdfcraft-55m.pages.dev/zh/" },
      { name: "人物传记资料库", url: "https://newarchive.ihp.sinica.edu.tw/sncaccgi/sncacFtp?@@0.6242090490582928" },
      { name: "两千年中西历转换", url: "https://sinocal.sinica.edu.tw/" },
      { name: "经籍指掌", url: "https://bib.pkudh.org/statistic" },
      { name: "中国历代人物传记资料库", url: "https://db1.ihp.sinica.edu.tw/cbdbc/ttsweb?@0:0:1:cbdbkm@@0.47946741292253137" },
      { name: "白云深处", url: "http://www.homeinmists.com/indexComputing.htm" },
      { name: "知识图谱", url: "https://cnkgraph.com/Calendar" },
      { name: "中华文史网", url: "http://www.historychina.net/" },
    ],
  },
  {
    title: "常用导航站",
    links: [
      { name: "效率集", url: "https://www.xiaolvji.com/u/ljyandlwl" },
      { name: "烟海导航", url: "http://www.yanhainav.cn/" },
      { name: "数字素养网", url: "https://szsyw.cn/" },
      { name: "喜欢书签", url: "https://www.likebookmark.com/" },
      { name: "古籍聚宝", url: "https://guji99.com/" },
      { name: "籍合网", url: "https://ancientbooks.cn/" },
    ],
  },
  {
    title: "清史专题",
    links: [
      { name: "档案馆馆藏检索系统", url: "https://archivesonline.mh.sinica.edu.tw/" },
      { name: "清代档案检索系统", url: "https://qingarchives.npm.edu.tw/" },
      { name: "中央研究院近代史研究所", url: "https://www.mh.sinica.edu.tw/Index.aspx" },
      { name: "中华古籍智慧化服务平台", url: "https://guji.nlc.cn/" },
      { name: "中国第一历史档案馆", url: "https://fhac.com.cn/index.html" },
      { name: "中国历史研究院", url: "http://hrczh.cass.cn/bygl/zzjg/" },
      { name: "抗日战争平台", url: "https://www.modernhistory.org.cn/#/" },
      { name: "明清档案工作室", url: "https://newarchive.ihp.sinica.edu.tw/" },
      { name: "国家哲学社会科学中心", url: "https://www.ncpssd.cn/" },
      { name: "清季职官表查询", url: "http://ssop.digital.ntu.edu.tw/index.php" },
      { name: "晚清民国文献平台", url: "https://lateqr.ancientbooks.cn/docWenxian/" },
    ],
  },
  {
    title: "轻松娱乐",
    links: [
      { name: "红白机游戏盒", url: "https://nes.heheda.cn/" },
      { name: "小霸王游戏机", url: "https://www.yikm.net/" },
    ],
  },
  {
    title: "网盘资源",
    links: [
      { name: "懒盘资源", url: "https://www.lzpanx.com/" },
      { name: "Dac 导航", url: "https://dacdh.top/" },
      { name: "盘搜 Pro", url: "https://panso.pro/" },
      { name: "友友可云盘", url: "https://pan.uvooc.com/" },
    ],
  },
];

const searchInput = document.getElementById("searchInput");
const categoryContainer = document.getElementById("categoryContainer");
const resultCount = document.getElementById("resultCount");

function debounce(fn, delay) {
  let timer = null;

  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), delay);
  };
}

function createLinkItem(link) {
  const item = document.createElement("li");
  item.className = "link-item";
  item.dataset.search = `${link.name} ${link.url}`.toLowerCase();

  const anchor = document.createElement("a");
  anchor.className = "link-card";
  anchor.href = link.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.innerHTML = `<span class="link-title">${link.name}</span>`;

  item.appendChild(anchor);
  return item;
}

function createCategorySection(category) {
  const section = document.createElement("section");
  section.className = "category";

  const head = document.createElement("div");
  head.className = "category-head";

  const title = document.createElement("h2");
  title.textContent = category.title;

  const count = document.createElement("span");
  count.className = "category-count";

  head.appendChild(title);
  head.appendChild(count);

  const list = document.createElement("ul");
  list.className = "link-list";

  category.links.forEach((link) => {
    list.appendChild(createLinkItem(link));
  });

  section.appendChild(head);
  section.appendChild(list);
  section._countElement = count;

  return section;
}

function renderCategories(data) {
  categoryContainer.innerHTML = "";
  data.forEach((category) => {
    categoryContainer.appendChild(createCategorySection(category));
  });
}

function updateCounts() {
  let totalVisible = 0;

  document.querySelectorAll(".category").forEach((section) => {
    const items = Array.from(section.querySelectorAll(".link-item"));
    const visibleItems = items.filter((item) => !item.classList.contains("hidden"));
    const countElement = section._countElement;

    if (countElement) {
      countElement.textContent = `${visibleItems.length} / ${items.length}`;
    }

    section.classList.toggle("hidden", visibleItems.length === 0);
    totalVisible += visibleItems.length;
  });

  resultCount.textContent = `当前显示 ${totalVisible} 个资源`;
}

function filterCategories() {
  const keyword = searchInput.value.trim().toLowerCase();

  document.querySelectorAll(".link-item").forEach((item) => {
    const isMatch = !keyword || item.dataset.search.includes(keyword);
    item.classList.toggle("hidden", !isMatch);
  });

  updateCounts();
}

renderCategories(categories);
updateCounts();
searchInput.addEventListener("input", debounce(filterCategories, 120));
