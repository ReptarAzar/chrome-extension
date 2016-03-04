// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "http://socialcode.dev/post/" + postID;
    chrome.tabs.create({ url: newURL });
});
