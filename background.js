chrome.webRequest.onBeforeRequest.addListener(
    function () {
        return { cancel: true };
    },
    {
        urls: ["https://krunker.io/sound/ambient_*"]
    },
    ["blocking"]
);

chrome.browserAction.onClicked.addListener(function (activeTab) {
    var newURL = "https://yee.how";
    chrome.tabs.create({ url: newURL });
});