chrome.browserAction.onClicked.addListener( function(tab) {
    // chrome.tabs.executeScript(null, {file: 'abc.js'});
    chrome.tabs.sendMessage (tab.id, {command: "toggle"}, function (response) {
        console.log(response)
        chrome.browserAction.setBadgeText( { text: response.isOn ? "on" : "off", tabId: tab.id } );
        if (response.isOn) 
            chrome.browserAction.setBadgeBackgroundColor({ color: "#009900"});
        else
            chrome.browserAction.setBadgeBackgroundColor({color: "#F00"})
    });
});
chrome.runtime.onMessage.addListener (
    function (request, sender, sendResponse) {
        console.log(request)
        if (request.command == "setBadge") {
            console.log("setbadge")
            chrome.tabs.getSelected(null, function(tab) {
                chrome.browserAction.setBadgeText( { text: "on", tabId: tab.id } );
                chrome.browserAction.setBadgeBackgroundColor({ color: "#009900"});
                //sendResponse ({badge: true})
            });
            return true
        }

        if (request.command == "getLocation") {
            navigator.geolocation.getCurrentPosition (function (position) {
                sendResponse ( {
                    geoLocation: position.coords
                } );
            } );
            return true; // Needed because the response is asynchronous
        }
    }
);