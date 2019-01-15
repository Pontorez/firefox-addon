browser.webRequest.onBeforeRequest.addListener(
    function () {
        return {cancel: true};
    },
    {urls:[
        "*://counter.yadro.ru/*",
        "*://*.mail.ru/counter*",
        "*://*.mail.ru/tracker*",
        "*://kraken.rambler.ru/*",
        "*://*.giraff.io/*",
        "*://*.mytopf.com/*",
        "*://target.smi2.ru/*",
        "*://www.drivenetwork.ru/*",
        "*://www.lentainform.com/*",
        "*://sync.1dmp.io/*",
        "*://autocounter.lentainform.com/*",
        "*://s-img.lentainform.com/*",
        "*://rb.infox.sg/*",
        "*://static.rnet.plus/*",
        "*://static.smi2.net/*"
        ]},
    ["blocking"]
);
