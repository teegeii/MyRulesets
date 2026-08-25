const customRules = [
    // 在此添加自定义代理规则。
    // 例如：
    //"DOMAIN-SUFFIX,gstatic.com,节点选择",
];

// 默认测试网址
const test_url = "http://www.google.com/generate_204";
// 测试网址检测间隔
const test_interval = 240;
// 测试网址的间隔差值，超过这个差值就会切换节点，越小切换越频繁
const test_tolerance = 80;

// 国内DNS服务器,只写最快的一个，写多了会导致访问速度变慢和内核内存占用变大
const domesticNameservers = [
    "tls://223.5.5.5", // 阿里云公共DNS
];
// 国外DNS服务器，同上
const foreignNameservers = [
    "tls://dns.opendns.com", // OpenDNS
];

// 规则集通用配置
const ruleProviderCommon = {
    type: "http",
    format: "mrs",
    interval: 86400,
};

// 代理组通用配置
const groupBaseOption = {
    "interval": 300,
    "timeout": 3000,
    "url": test_url,
    "lazy": true,
    "hidden": false,
    "disable-udp": false,
};

// 代理规则
const rules = [
    // 自定义规则
    ...customRules,
    // 规则集
    "RULE-SET,ipdirect,全局直连,no-resolve",
    "RULE-SET,ipprivate,全局直连,no-resolve",
    "RULE-SET,telegramcidr,电报消息,no-resolve",
    "RULE-SET,direct,全局直连",
    "RULE-SET,private,全局直连",
    "RULE-SET,google,谷歌服务",
    "RULE-SET,apple,苹果服务",
    "RULE-SET,bing,Bing",
    "RULE-SET,github,Github",
    "RULE-SET,onedrive,Onedrive",
    "RULE-SET,microsoft,微软服务",
    "RULE-SET,ai,AI",
    "RULE-SET,youtube,YouTube",
    "RULE-SET,netflix_ip,Netflix",
    "RULE-SET,netflix_site,Netflix",
    "RULE-SET,tiktok,TikTok",
    "RULE-SET,adobe,Adobe",
    "RULE-SET,pornhub,Pornhub",
    "RULE-SET,spotify,Spotify",
    "RULE-SET,games,游戏服务",
    "RULE-SET,speedtest,网速测试",
    "RULE-SET,bilibili,Bilibili",
    "RULE-SET,proxy,节点选择",
    "RULE-SET,gfw,节点选择",
    "RULE-SET,tld-not-cn,节点选择",
    // 未匹配的规则
    "MATCH,漏网之鱼",
];

// 规则集配置
const ruleProviders = {
    ipdirect: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/cn.mrs",
        path: "./ruleset/cncidr.mrs",
    },
    ipprivate: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geoip/private.mrs",
        path: "./ruleset/lancidr.mrs",
    },
    direct: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/cn.mrs",
        path: "./ruleset/direct.mrs",
    },
    private: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://testingcf.jsdelivr.net/gh/MetaCubeX/meta-rules-dat@meta/geo/geosite/private.mrs",
        path: "./ruleset/private.mrs",
    },
    google: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/google.mrs",
        path: "./ruleset/google.mrs",
    },
    microsoft: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/microsoft.mrs",
        path: "./ruleset/microsoft.mrs",
    },
    apple: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/apple.mrs",
        path: "./ruleset/apple.mrs",
    },
    bing: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/bing.mrs",
        path: "./ruleset/bing.mrs",
    },
    github: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/github.mrs",
        path: "./ruleset/github.mrs",
    },
    onedrive: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/onedrive.mrs",
        path: "./ruleset/onedrive.mrs",
    },
    youtube: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/youtube.mrs",
        path: "./ruleset/youtube.mrs",
    },
    pornhub: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/pornhub.mrs",
        path: "./ruleset/pornhub.mrs",
    },
    netflix_ip: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/netflix.mrs",
        path: "./ruleset/netflix-ip.mrs",
    },
    netflix_site: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/netflix.mrs",
        path: "./ruleset/netflix-site.mrs",
    },
    adobe: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/adobe.mrs",
        path: "./ruleset/adobe.mrs",
    },
    ai: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/ai.mrs",
        path: "./ruleset/ai.mrs",
    },
    bilibili: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/bilibili.mrs",
        path: "./ruleset/bilibili.mrs",
    },
    tiktok: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/tiktok.mrs",
        path: "./ruleset/tiktok.mrs",
    },
    spotify: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/spotify.mrs",
        path: "./ruleset/spotify.mrs",
    },
    speedtest: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/speedtest.mrs",
        path: "./ruleset/speedtest.mrs",
    },
    games: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/DustinWin/ruleset_geodata/releases/download/mihomo-ruleset/games-cn.mrs",
        path: "./ruleset/games.mrs",
    },
    telegramcidr: {
        ...ruleProviderCommon,
        behavior: "ipcidr",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/telegram.mrs",
        path: "./ruleset/telegramcidr.mrs",
    },
    proxy: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo-lite/geosite/proxy.mrs",
        path: "./rulesets/loyalsoldier/proxy.mrs",
    },
    gfw: {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/gfw.mrs",
        path: "./ruleset/gfw.mrs",
    },
    "tld-not-cn": {
        ...ruleProviderCommon,
        behavior: "domain",
        url: "https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/tld-!cn.mrs",
        path: "./ruleset/tld-not-cn.mrs",
    },
};


// 地区配置
const regionConfig = [
    {
        name: "🇺🇸 美国 📶",
        matcher: "美国|🇺🇸|US|United States|America",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/us.svg"
    },
    {
        name: "🇯🇵 日本 📶",
        matcher: "日本|🇯🇵|JP|Japan",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/jp.svg"
    },
    {
        name: "🇰🇷 韩国 📶",
        matcher: "韩|🇰🇷|kr|korea",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/kr.svg"
    },
    {
        name: "🇸🇬 新加坡 📶",
        matcher: "新加坡|🇸🇬|SG|狮城|Singapore",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/sg.svg"
    },
    {
        name: "🇭🇰 香港 📶",
        matcher: "香港|🇭🇰|HK|Hong Kong|HongKong",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/hk.svg"
    },
    {
        name: "🇹🇼 台湾 📶",
        matcher: "台湾|🇹🇼|tw|taiwan|tai wan",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/tw.svg"
    },
    {
        name: "🇬🇧 英国 📶",
        matcher: "英|🇬🇧|uk|united kingdom|great britain",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/gb.svg"
    },
    {
        name: "🇫🇷 法国 📶",
        matcher: "法国|🇫🇷|FR|France",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/fr.svg"
    },
    {
        name: "🇩🇪 德国 📶",
        matcher: "德国|🇩🇪|DE|germany",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/de.svg"
    },
    {
        name: "🇵🇱 波兰 📶",
        matcher: "波兰|🇵🇱|Poland|PL|Poland",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/pl.svg"
    },
    {
        name: "🇳🇱 荷兰 📶",
        matcher: "荷兰|🇳🇱|NL|Netherlands",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/nl.svg"
    },
    {
        name: "🇮🇪 爱尔兰 📶",
        matcher: "爱尔兰|🇮🇪|IE|Ireland",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ie.svg"
    },
    {
        name: "🇸🇪 瑞典 📶",
        matcher: "瑞典|🇸🇪|SE|Sweden",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/se.svg"
    },
    {
        name: "🇷🇺 俄罗斯 📶",
        matcher: "俄罗斯|🇷🇺|RU|Russia",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ru.svg"
    },
    {
        name: "🇮🇹 意大利 📶",
        matcher: "意大利|🇮🇹|IT|Italy",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/it.svg"
    },
    {
        name: "🇪🇸 西班牙 📶",
        matcher: "西班牙|🇪🇸|ES|Spain",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/es.svg"
    },
    {
        name: "🇵🇹 葡萄牙 📶",
        matcher: "葡萄牙|🇵🇹|PT|Portugal",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/pt.svg"
    },
    {
        name: "🇹🇷 土耳其 📶",
        matcher: "土耳其|🇹🇷|TR|Turkey",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/tr.svg"
    },
    {
        name: "🇦🇷 阿根廷 📶",
        matcher: "阿根廷|🇦🇷|AR|Argentina",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ar.svg"
    },
    {
        name: "🇨🇦 加拿大 📶",
        matcher: "加拿大|🇨🇦|CA|Canada",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ca.svg"
    },
    {
        name: "🇦🇺 澳大利亚 📶",
        matcher: "澳大利亚|🇦🇺|AU|Australia",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/au.svg"
    },
    {
        name: "🇮🇷 伊朗 📶",
        matcher: "伊朗|🇮🇷|IR|Iran",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ir.svg"
    },
    {
        name: "🇮🇩 印度尼西 📶",
        matcher: "印度尼西亚|印尼|🇮🇩|ID|Indonesia",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/id.svg"
    },
    {
        name: "🇲🇾 马来西亚 📶",
        matcher: "马来|🇲🇾|MY|Malaysia",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/my.svg"
    },
    {
        name: "🇵🇭 菲律宾 📶",
        matcher: "菲律宾|🇵🇭|PH|Philippines",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ph.svg"
    },
    {
        name: "🇮🇳 印度 📶",
        matcher: "印度|🇮🇳|IN|India",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/in.svg"
    },
    {
        name: "🇻🇳 越南 📶",
        matcher: "越南|🇻🇳|VN|Vietnam",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/vn.svg"
    },
    {
        name: "🇹🇭 泰国 📶",
        matcher: "泰国|🇹🇭|TH|Thailand",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/th.svg"
    },
    {
        name: "🇨🇳 中国 📶",
        matcher: "中国|🇨🇳|CN|cn|china",
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/cn.svg"
    },
    {
        name: "🌐 其他 📶",
        icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png"
    }
];

// 显示节点配置
const proxyGroups = [
    {
        ...groupBaseOption,
        name: "节点选择",
        type: "select",
        proxies: ["延迟选优", "手动选择", "故障转移", "负载均衡(散列)", "负载均衡(轮询)"],
        icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Airport.png",
    },
    {
        ...groupBaseOption,
        name: "手动选择",
        type: "select",
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg",
    },
    {
        ...groupBaseOption,
        name: "漏网之鱼",
        type: "select",
        proxies: [
            "全局直连",
            "节点选择",
            "手动选择",
            "延迟选优",
            "故障转移",
        ],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg",
    },
    {
        ...groupBaseOption,
        name: "Bing",
        type: "select",
        proxies: [
            "全局直连",
            "节点选择",
            "手动选择",
            "延迟选优",
            "故障转移",
        ],
        icon: "https://www.bing.com/favicon.ico",
    },
    {
        ...groupBaseOption,
        name: "Github",
        type: "select",
        proxies: [
            "节点选择",
            "手动选择",
            "全局直连",
            "延迟选优",
            "故障转移",
        ],
        icon: "https://www.clashverge.dev/assets/icons/github.svg",
    },
    {
        ...groupBaseOption,
        name: "谷歌服务",
        type: "select",
        proxies: [
            "节点选择",
            "手动选择",
            "全局直连",
            "延迟选优",
            "故障转移",
        ],
        icon: "https://www.clashverge.dev/assets/icons/google.svg",
    },
    {
        ...groupBaseOption,
        name: "苹果服务",
        type: "select",
        proxies: [
            "全局直连",
            "节点选择",
            "手动选择",
            "延迟选优",
            "故障转移",
        ],
        icon: "https://www.clashverge.dev/assets/icons/apple.svg",
    },
    {
        ...groupBaseOption,
        name: "微软服务",
        type: "select",
        proxies: [
            "全局直连",
            "节点选择",
            "手动选择",
            "延迟选优",
            "故障转移",
        ],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg",
    },
    {
        ...groupBaseOption,
        name: "Onedrive",
        type: "select",
        proxies: [
            "全局直连",
            "节点选择",
            "手动选择",
            "延迟选优",
            "故障转移",
        ],
        icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/OneDrive.png",
    },
    {
        ...groupBaseOption,
        name: "AI",
        type: "select",
        proxies: [
            "全局直连",
            "节点选择",
            "手动选择",
            "延迟选优",
            "故障转移",
        ],
        icon: "https://www.clashverge.dev/assets/icons/chatgpt.svg",
    },
    {
        ...groupBaseOption,
        name: "Bilibili",
        type: "select",
        proxies: [
            "全局直连",
        ],
        icon: "https://fastly.jsdelivr.net/gh/Orz-3/mini@master/Color/Bili.png",
    },
    {
        ...groupBaseOption,
        name: "YouTube",
        type: "select",
        proxies: [
            "节点选择",
            "手动选择",
            "延迟选优",
            "故障转移",
        ],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg",
    },
    {
        ...groupBaseOption,
        name: "Netflix",
        type: "select",
        proxies: [
            "节点选择",
            "手动选择",
            "延迟选优",
            "故障转移",
        ],
        icon: "https://www.clashverge.dev/assets/icons/netflix.svg",
    },
    {
        ...groupBaseOption,
        name: "TikTok",
        type: "select",
        proxies: [
            "节点选择",
            "手动选择",
            "延迟选优",
            "故障转移",
        ],
        icon: "https://fastly.jsdelivr.net/gh/shindgewongxj/WHATSINStash@master/icon/tiktok.png",
    },
    {
        ...groupBaseOption,
        name: "Pornhub",
        type: "select",
        proxies: [
            "节点选择",
            "手动选择",
            "延迟选优",
            "故障转移",
        ],
        icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Pornhub_1.png",
    },
    {
        ...groupBaseOption,
        name: "Spotify",
        type: "select",
        proxies: [
            "全局直连",
            "节点选择",
            "手动选择",
            "延迟选优",
            "故障转移",
        ],
        icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Spotify.png",
    },
    {
        ...groupBaseOption,
        name: "Adobe",
        type: "select",
        proxies: [
            "全局直连",
            "REJECT",
            "节点选择",
        ],
        icon: "https://www.adobe.com/favicon.ico",
    },
    {
        ...groupBaseOption,
        name: "游戏服务",
        type: "select",
        proxies: [
            "全局直连",
            "节点选择",
            "手动选择",
            "延迟选优",
            "故障转移",
        ],
        icon: "https://www.clashverge.dev/assets/icons/steam.svg",
    },
    {
        ...groupBaseOption,
        name: "电报消息",
        type: "select",
        proxies: [
            "节点选择",
            "手动选择",
            "延迟选优",
            "故障转移",
        ],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg",
    },
    {
        ...groupBaseOption,
        name: "网速测试",
        type: "select",
        proxies: ["全局直连",],
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Speedtest.png",
    },
    {
        ...groupBaseOption,
        name: "负载均衡(轮询)",
        type: "load-balance",
        strategy: "round-robin",
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/balance.svg",
    },
    {
        ...groupBaseOption,
        name: "负载均衡(散列)",
        type: "load-balance",
        strategy: "consistent-hashing",
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/merry_go.svg",
    },
    {
        ...groupBaseOption,
        name: "故障转移",
        type: "fallback",
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/ambulance.svg",
    },
    {
        ...groupBaseOption,
        name: "全局直连",
        type: "select",
        proxies: [
            "DIRECT",
            "REJECT",
            "节点选择",
            "手动选择",
        ],
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg",
    },
    {
        ...groupBaseOption,
        name: "延迟选优",
        type: "url-test",
        interval: test_interval,
        tolerance: test_tolerance,
        "include-all": true,
        icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg",
    },
];

// DNS配置
const dnsConfig = {
    "enable": true,
    "ipv6": true,
    "prefer-h3": false,
    "use-hosts": false,
    "use-system-hosts": true,
    "listen": "0.0.0.0:1053",
    "cache-algorithm": "arc",
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter-mode": "blacklist",
    "fake-ip-filter": [
        "+.lan",
        "+.local",
        "+.msftconnecttest.com",
        "+.msftncsi.com",
        "localhost.ptlogin2.qq.com",
        "localhost.sec.qq.com",
        "localhost.work.weixin.qq.com",
        "*.localdomain",
        "*.example",
        "*.invalid",
        "*.localhost",
        "*.test",
        "*.local",
        "*.home.arpa"
    ],
    "nameserver": [...domesticNameservers],
    "proxy-server-nameserver": [...foreignNameservers, ...domesticNameservers],
    "nameserver-policy": {},
};

// 域名嗅探
const snifferConfig = {
    "enable": true,
    "force-dns-mapping": true,
    "parse-pure-ip": true,
    "override-destination": true,
    "sniff": {
        "TLS": {
            "ports": [443, 8443],
        },
        "HTTP": {
            "ports": [80, "8080-8880"],
            "override-destination": true,
        },
        "QUIC": {
            "ports": [443, 8443]
        },
    }
};

// 添加地区分组
function addRegions(config) {
    let regions = [];
    if (!config.proxies) {
        if (!config["proxy-providers"]) return;
        const providers = Object.keys(config["proxy-providers"]);
        if (providers.length === 0) return;
        let exclude = "";
        for (const region of regionConfig) {
            if (!region.name) continue;
            if (region.matcher) {
                exclude += (exclude === "" ? region.matcher : `|${region.matcher}`)
                config["proxy-groups"].push({
                    ...groupBaseOption,
                    name: region.name,
                    type: "url-test",
                    interval: test_interval,
                    tolerance: test_tolerance,
                    use: providers,
                    filter: region.matcher,
                    icon: region.icon,
                });
            } else {
                config["proxy-groups"].push({
                    ...groupBaseOption,
                    name: region.name,
                    type: "url-test",
                    use: providers,
                    interval: test_interval,
                    tolerance: test_tolerance,
                    "exclude-filter": exclude,
                    icon: region.icon,
                });
            }
            regions.push(region.name)
        }
    } else {
        let names = config.proxies.map(p => p.name).filter(Boolean);
        if (names.length === 0) return;
        for (const region of regionConfig) {
            let proxies = [], noproxies = [];
            if (!region.matcher) {
                proxies = [...names];
                noproxies = [];
            } else {
                const matches = region.matcher.split("|");
                if (matches.length === 0) continue;
                const result = names.reduce((acc, name) => {
                    (matches.some(m => name.includes(m)) ? acc.proxies : acc.noproxies).push(name);
                    return acc;
                }, { proxies: [], noproxies: [] });
                proxies = result.proxies;
                noproxies = result.noproxies;
            }
            if (proxies.length === 0) continue;
            config["proxy-groups"].push({
                ...groupBaseOption,
                name: region.name,
                type: "url-test",
                interval: test_interval,
                tolerance: test_tolerance,
                proxies: proxies,
                icon: region.icon,
            });
            regions.push(region.name);
            if (noproxies.length === 0) break;
            names = noproxies;
        }
    }
    if (regions.length === 0) return;
    const entries = config["proxy-groups"];
    for (const entry of entries) {
        if (!entry || !entry.proxies) continue;
        if (entry.name === "节点选择") {
            if (entry.proxies.length > 1) {
                entry.proxies.splice(2, 0, "地区选择");
            }
        } else if (entry.name === "全局直连") {
            entry.proxies.push("地区选择");
        } else if (entry.type === "select" && !entry.hasOwnProperty("include-all")) {
            entry.proxies.push(...regions)
        }
    }
    if (entries.length > 0) {
        entries.splice(1, 0, {
            ...groupBaseOption,
            name: "地区选择",
            type: "select",
            proxies: regions,
            icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/World_Map.png",
        })
    }
    config["proxy-groups"] = entries;
}

// 主函数
function main(config) {
    const proxyCount = config?.proxies?.length ?? 0;
    const proxyProviderCount =
        typeof config?.["proxy-providers"] === "object"
            ? Object.keys(config["proxy-providers"]).length
            : 0;
    if (proxyCount === 0 && proxyProviderCount === 0) {
        throw new Error("配置文件中未找到任何代理");
    }

    // 配置
    config["profile"] = {
        "store-selected": true,
        "store-fake-ip": true,
    };
    // Geo设置
    config["geodata-loader"] = "standard";
    config["geosite-matcher"] = "mph";
    // 全局客户端指纹
    config["global-client-fingerprint"] = "chrome";
    config["global-ua"] = "chrome";
    // 统一延迟
    config["unified-delay"] = true;
    // TCP 并发
    config["tcp-concurrent"] = true;
    // 域名服务
    config["foreign_nameservers"] = foreignNameservers;
    config["domestic_nameservers"] = domesticNameservers;
    // DNS配置
    config["dns"] = dnsConfig;
    // 域名嗅探
    config["sniffer"] = snifferConfig;
    // 规则
    config["rule-providers"] = ruleProviders;
    config["rules"] = rules;
    // 代理组
    config["proxy-groups"] = proxyGroups;
    // 地区分组
    addRegions(config);
    // 返回修改后的配置
    return config;
}


//////////////////////////////////////////////////////////////////////////


// 国内DNS服务器
const domesticNameservers = [
  "https://223.5.5.5/dns-query", // 阿里DoH
  "https://doh.pub/dns-query" // 腾讯DoH，因腾讯云即将关闭免费版IP访问，故用域名
];
// 国外DNS服务器
const foreignNameservers = [
  "https://cloudflare-dns.com/dns-query", // CloudflareDNS
  "https://77.88.8.8/dns-query", //YandexDNS
  "https://8.8.4.4/dns-query#ecs=1.1.1.1/24&ecs-override=true", // GoogleDNS
  "https://208.67.222.222/dns-query#ecs=1.1.1.1/24&ecs-override=true", // OpenDNS
  "https://9.9.9.9/dns-query", //Quad9DNS
];
// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  // "ipv6": true,
  "prefer-h3": false,
  "respect-rules": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    // 本地主机/设备
    "+.lan",
    "+.local",
    // // Windows网络出现小地球图标
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    // QQ快速登录检测失败
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    // 微信快速登录检测失败
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5","1.2.4.8"],
  "nameserver": [...foreignNameservers],
  "proxy-server-nameserver":[...domesticNameservers],
  "direct-nameserver":[...domesticNameservers],
  "direct-nameserver-follow-policy":false,
  "nameserver-policy": {
    "geosite:cn": domesticNameservers
  }
};
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};
// 规则集配置
const ruleProviders = {
  "reject": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/loyalsoldier/reject.yaml"
  },
  "icloud": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/loyalsoldier/icloud.yaml"
  },
  "apple": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/loyalsoldier/apple.yaml"
  },
  "google": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt",
    "path": "./ruleset/loyalsoldier/google.yaml"
  },
  "proxy": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt",
    "path": "./ruleset/loyalsoldier/proxy.yaml"
  },
  "direct": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/loyalsoldier/direct.yaml"
  },
  "private": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/loyalsoldier/private.yaml"
  },
  "gfw": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/loyalsoldier/gfw.yaml"
  },
  "tld-not-cn": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    "path": "./ruleset/loyalsoldier/tld-not-cn.yaml"
  },
  "telegramcidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/loyalsoldier/telegramcidr.yaml"
  },
  "cncidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/loyalsoldier/cncidr.yaml"
  },
  "lancidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml"
  },
  "applications": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml"
  },
  "openai": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/classical/openai.yaml",
    "path": "./ruleset/MetaCubeX/openai.yaml"
  },
  "bybit": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/classical/bybit.yaml",
    "path": "./ruleset/MetaCubeX/bybit.yaml"
  },
  "pikpak": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/classical/pikpak.yaml",
    "path": "./ruleset/MetaCubeX/pikpak.yaml"
  },
  "anthropic": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/classical/anthropic.yaml",
    "path": "./ruleset/MetaCubeX/anthropic.yaml"
  },
  "google-gemini": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/classical/google-gemini.yaml",
    "path": "./ruleset/MetaCubeX/google-gemini.yaml"
  },
  "xai": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/classical/xai.yaml",
    "path": "./ruleset/MetaCubeX/xai.yaml"
  },
  "perplexity": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/classical/perplexity.yaml",
    "path": "./ruleset/MetaCubeX/perplexity.yaml"
  },
  "microsoft": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/refs/heads/meta/geo/geosite/classical/microsoft.yaml",
    "path": "./ruleset/MetaCubeX/microsoft.yaml"
  },
};
// 规则
const rules = [
  // 额外自定义规则       //在此添加你想要的规则
  "PROCESS-NAME,steam.exe,🐬 自定义直连",
  "DOMAIN-SUFFIX,immersivetranslate.com,🐳 自定义代理",
  // "DOMAIN-SUFFIX,bing.com,🐳 自定义代理",
  // 自定义规则
  "DOMAIN-SUFFIX,googleapis.cn,🔰 模式选择", // Google服务
  "DOMAIN-SUFFIX,gstatic.com,🔰 模式选择", // Google静态资源
  "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,🔰 模式选择", // Google Play下载服务
  "DOMAIN-SUFFIX,github.io,🔰 模式选择", // Github Pages
  "DOMAIN,v2rayse.com,🔰 模式选择", // V2rayse节点工具
  // blackmatrix7 规则集
  
  // MetaCubeX 规则集
  "RULE-SET,openai,💸 ChatGPT-Gemini-XAI-Perplexity",
  "RULE-SET,pikpak,🅿️ PikPak",
  "RULE-SET,bybit,🪙 Bybit",
  "RULE-SET,anthropic,💵 Claude",
  "RULE-SET,google-gemini,💸 ChatGPT-Gemini-XAI-Perplexity",
  "RULE-SET,xai,💸 ChatGPT-Gemini-XAI-Perplexity",
  "RULE-SET,perplexity,💸 ChatGPT-Gemini-XAI-Perplexity",
  // Loyalsoldier 规则集
  "RULE-SET,applications,🔗 全局直连",
  "RULE-SET,private,🔗 全局直连",
  "RULE-SET,reject,🥰 广告过滤",
  "RULE-SET,microsoft,Ⓜ️ 微软服务",
  "RULE-SET,icloud,🍎 苹果服务",
  "RULE-SET,apple,🍎 苹果服务",
  "RULE-SET,google,📢 谷歌服务",
  "RULE-SET,proxy,🔰 模式选择",
  "RULE-SET,gfw,🔰 模式选择",
  "RULE-SET,tld-not-cn,🔰 模式选择",
  "RULE-SET,direct,🔗 全局直连",
  "RULE-SET,lancidr,🔗 全局直连,no-resolve",
  "RULE-SET,cncidr,🔗 全局直连,no-resolve",
  "RULE-SET,telegramcidr,📲 电报消息,no-resolve",
  // 其他规则
  "GEOIP,LAN,🔗 全局直连,no-resolve",
  "GEOIP,CN,🔗 全局直连,no-resolve",
  "MATCH,🐟 漏网之鱼"
];
// 代理组通用配置
const groupBaseOption = {
  "interval": 0,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

const landingNodeProxies = [
    {
      "name": "webshare", // 给你的落地节点起个名字
      "server": "", // 替换成你的落地节点 IP 或域名
      "port": 12345, // 替换成你的落地节点端口
      "type": "socks5",
      "username": "", // 替换成你的用户名
      "password": "", // 替换成你的密码
      "tls": false,
      "skip-cert-verify": true,
      "udp": true,
      "dialer-proxy": "⚙️ 节点选择"
    },
    // 如果有更多落地节点，在这里继续添加
    // {
    //   "name": "landing-node-2",
    //   ...
    //   "dialer-proxy": "⚙️ 节点选择"
    // }
];

const landingNodeNames = landingNodeProxies.map(p => p.name);

const proxyGroupsConfig = [
    {
        ...groupBaseOption,
        "name": "🔰 模式选择",
        "type": "select",
        "proxies": [
            "⚙️ 节点选择",
            "🕊️ 落地节点",
            "🔗 全局直连"
        ]
    },
    {
      ...groupBaseOption,
      "name": "⚙️ 节点选择",
      "type": "select",
      "proxies": ["♻️ 延迟选优", "🚑 故障转移", "⚖️ 负载均衡(散列)", "☁️ 负载均衡(轮询)"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
    },
    {
      ...groupBaseOption,
      "name": "🕊️ 落地节点", 
      "type": "select",
      "proxies": [...landingNodeNames], 
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/openwrt.svg"
    },
    {
      ...groupBaseOption,
      "name": "♻️ 延迟选优",
      "type": "url-test",
      "tolerance": 50,
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg"
    },
    {
      ...groupBaseOption,
      "name": "🚑 故障转移",
      "type": "fallback",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/ambulance.svg"
    },
    {
      ...groupBaseOption,
      "name": "⚖️ 负载均衡(散列)",
      "type": "load-balance",
      "strategy": "consistent-hashing",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/merry_go.svg"
    },
    {
      ...groupBaseOption,
      "name": "☁️ 负载均衡(轮询)",
      "type": "load-balance",
      "strategy": "round-robin",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/balance.svg"
    },
    {
      ...groupBaseOption,
      "name": "🌍 国外媒体",
      "type": "select",
      "proxies": ["🔰 模式选择", "⚙️ 节点选择", "🕊️ 落地节点", "♻️ 延迟选优", "🚑 故障转移", "⚖️ 负载均衡(散列)", "☁️ 负载均衡(轮询)", "🔗 全局直连"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg"
    },
    {
      ...groupBaseOption,
      "name": "💸 ChatGPT-Gemini-XAI-Perplexity",
      "type": "select",
      "proxies": ["🔰 模式选择", "⚙️ 节点选择", "🕊️ 落地节点", "🔗 全局直连", "♻️ 延迟选优", "🚑 故障转移", "⚖️ 负载均衡(散列)", "☁️ 负载均衡(轮询)"],
      "include-all": true,
      "exclude-filter": "(?i)港|hk|hongkong|hong kong|俄|ru|russia|澳|macao",
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg"
    },
    {
      ...groupBaseOption,
      "name": "💵 Claude",
      "type": "select",
      "proxies": ["🔰 模式选择", "⚙️ 节点选择", "🕊️ 落地节点", "🔗 全局直连", "♻️ 延迟选优", "🚑 故障转移", "⚖️ 负载均衡(散列)", "☁️ 负载均衡(轮询)"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/claude.svg"
    },
    {
      ...groupBaseOption,
      "name": "🪙 Bybit",
      "type": "select",
      "proxies": ["🔰 模式选择", "⚙️ 节点选择", "🕊️ 落地节点", "🔗 全局直连", "♻️ 延迟选优", "🚑 故障转移", "⚖️ 负载均衡(散列)", "☁️ 负载均衡(轮询)"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg"
    },
    {
      ...groupBaseOption,
      "name": "🅿️ PikPak",
      "type": "select",
      "proxies": ["🔰 模式选择", "⚙️ 节点选择", "🕊️ 落地节点", "🔗 全局直连", "♻️ 延迟选优", "🚑 故障转移", "⚖️ 负载均衡(散列)", "☁️ 负载均衡(轮询)"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg"
    },
    {
      ...groupBaseOption,
      "name": "📲 电报消息",
      "type": "select",
      "proxies": ["🔰 模式选择", "⚙️ 节点选择", "🕊️ 落地节点", "♻️ 延迟选优", "🚑 故障转移", "⚖️ 负载均衡(散列)", "☁️ 负载均衡(轮询)", "🔗 全局直连"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg"
    },
    {
      ...groupBaseOption,
      "name": "📢 谷歌服务",
      "type": "select",
      "proxies": ["🔰 模式选择", "⚙️ 节点选择", "🕊️ 落地节点", "♻️ 延迟选优", "🚑 故障转移", "⚖️ 负载均衡(散列)", "☁️ 负载均衡(轮询)", "🔗 全局直连"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/google.svg"
    },
    {
      ...groupBaseOption,
      "name": "🍎 苹果服务",
      "type": "select",
      "proxies": ["🔰 模式选择", "⚙️ 节点选择", "🕊️ 落地节点", "♻️ 延迟选优", "🚑 故障转移", "⚖️ 负载均衡(散列)", "☁️ 负载均衡(轮询)", "🔗 全局直连"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/apple.svg"
    },
    {
      ...groupBaseOption,
      "name": "Ⓜ️ 微软服务",
      "type": "select",
      "proxies": ["🔰 模式选择", "⚙️ 节点选择", "🕊️ 落地节点", "🔗 全局直连", "♻️ 延迟选优", "🚑 故障转移", "⚖️ 负载均衡(散列)", "☁️ 负载均衡(轮询)"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg"
    },
    {
      ...groupBaseOption,
      "name": "🥰 广告过滤",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg"
    },
    {
      ...groupBaseOption,
      "name": "🔗 全局直连",
      "type": "select",
      "proxies": ["DIRECT", "⚙️ 节点选择", "♻️ 延迟选优", "🚑 故障转移", "⚖️ 负载均衡(散列)", "☁️ 负载均衡(轮询)"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg"
    },
    {
      ...groupBaseOption,
      "name": "❌ 全局拦截",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg"
    },
    {
      ...groupBaseOption,
      "name": "🐬 自定义直连",
      "type": "select",
      "include-all": true,
      "proxies": ["🔗 全局直连", "🔰 模式选择", "⚙️ 节点选择", "♻️ 延迟选优", "🚑 故障转移", "⚖️ 负载均衡(散列)", "☁️ 负载均衡(轮询)"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/unknown.svg"
    },
    {
      ...groupBaseOption,
      "name": "🐳 自定义代理",
      "type": "select",
      "include-all": true,
      "proxies": ["🔰 模式选择", "⚙️ 节点选择", "🕊️ 落地节点", "♻️ 延迟选优", "🚑 故障转移", "⚖️ 负载均衡(散列)", "☁️ 负载均衡(轮询)", "🔗 全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/openwrt.svg"
    },
    {
      ...groupBaseOption,
      "name": "🐟 漏网之鱼",
      "type": "select",
      "proxies": ["🔰 模式选择", "⚙️ 节点选择", "🕊️ 落地节点", "♻️ 延迟选优", "🚑 故障转移", "⚖️ 负载均衡(散列)", "☁️ 负载均衡(轮询)", "🔗 全局直连"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
    }
  ];

// 多订阅合并，这里添加额外的地址
const proxyProviders = {
  "p1": {
    "type": "http",   // 订阅链接
    "url": "https://google.com",    
    "interval": 86400,  // 自动更新时间 86400 (秒) / 3600 = 24 小时
    "proxy": "🔰 模式选择",
    "override": { 
      "additional-prefix": "p1 |"  // 节点名称前缀 p1，用于区别机场节点
    }
  },
  // 其他订阅地址
}

// 程序入口
function main(config) {
  const originalProxies = config?.proxies ? [...config.proxies] : [];
  const proxyCount = originalProxies.length;
  const originalProviders = config?.["proxy-providers"] || {};
  const proxyProviderCount = originalProviders !== null && typeof originalProviders === 'object' ? Object.keys(originalProviders).length : 0;

  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  config["dns"] = dnsConfig;
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules; // Use the modified rules array defined above

  // Process original proxies (just ensure UDP)
  const processedProxies = originalProxies.map(proxy => {
      if (proxy && typeof proxy === 'object' && proxy.name) {
          proxy.udp = true;
          
          // 节点绑定的接口，从此接口发起连接，适用于部分vpn情况
          // proxy["interface-name"] = "WLAN"
          // proxy["interface-name"] = "以太网"
      } else {
          console.warn("警告：发现一个无效或缺少名称的原始代理配置:", proxy);
          return null;
      }
      return proxy;
  }).filter(p => p !== null);

  // Combine proxies
  config["proxies"] = [...processedProxies, ...landingNodeProxies];
  config["proxy-providers"] = {
    ...originalProviders,
    ...proxyProviders
  };

  // 转义正则元字符，保证名字按“字面量”匹配
  function escapeForRegExp(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // 取出所有落地节点的名字，并做转义
  const landingNodeNames = landingNodeProxies.map(p => p.name);
  const escapedNames = landingNodeNames
    .map(escapeForRegExp)
    .join('|');

  // 构造只匹配完全等于这些名字的正则
  const excludeLandingFilter = escapedNames
    ? `^(?:${escapedNames})$`
    : null;

  // 定义需要排除落地节点的组名
  const groupsToExcludeLandingNodes = [
      "⚙️ 节点选择",
      "♻️ 延迟选优",
      "⚖️ 负载均衡(散列)",
      "☁️ 负载均衡(轮询)"
  ];

  // 遍历所有代理组配置，为指定的组添加排除落地节点的过滤器
  const finalProxyGroups = proxyGroupsConfig.map(group => {
      // 检查当前组名是否在需要排除落地节点的列表中，并且确实有落地节点需要排除
      if (groupsToExcludeLandingNodes.includes(group.name) && excludeLandingFilter) {
          // 合并已有的 exclude-filter：只要旧规则 或 新排除规则 匹配，就排除
          // 如果 group["exclude-filter"] 已存在，则用 | 连接新旧规则
          // 否则直接使用新的 excludeLandingFilter
          const existingFilter = group["exclude-filter"];
          group["exclude-filter"] = existingFilter
              ? `(${existingFilter})|(${excludeLandingFilter})`
              : excludeLandingFilter;

          console.log(
              `信息：为组 [${group.name}] 添加或合并了落地节点排除过滤器: ${group["exclude-filter"]}`
          );
      }
      return group; // 返回（可能已修改的）组配置
  });

  config["proxy-groups"] = finalProxyGroups; // 使用处理过的代理组
  return config;
}
