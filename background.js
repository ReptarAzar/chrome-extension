// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "http://socialcode.dev/"; // todo: add post/[post-id]
    chrome.tabs.create({ url: newURL });
});
