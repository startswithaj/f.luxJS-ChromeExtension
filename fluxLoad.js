this.modal = null
this.body = document.getElementsByTagName('body')[0];

chrome.runtime.onMessage.addListener (
    function (request, sender, sendResponse) {
        if (request.command == "toggle") {
            onOff(request.isOn)
        }
    }
);

chrome.runtime.sendMessage ( {command: "getOnOffStatus"}, function (response) {
    // console.log(response)
    onOff(response.isOn)
});



var onOff = function(isOn) {
    if (isOn)
        insertDom()
    else if (modal != null)
        body.removeChild(modal)
        modal = null
}

var insertDom = function(){
    modal = document.createElement('div');
    //modal.style.background = "rgba(100%, 100%, 50%, 0.3)";
    modal.id = "fluxColor"
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.bottom = 0;
    modal.style.left = 0;
    modal.style.right = 0;
    modal.style.pointerEvents = "none";
    modal.style.zIndex = 999999999999999999;
    modal.style.background = "rgba(100%, 80%, 50%, 0.2)";
    // modal.style.transition = "background 5s" //ease 1s";
    body.appendChild(modal)
}

