this.modal = null

chrome.runtime.onMessage.addListener (
    function (request, sender, sendResponse) {
        console.log(request)
        if (request.command == "toggle") {
            if (request.isOn)
                if (modal)
                    this.modal.style.background = "rgba(100%, 80%, 50%, 0.2)";                
                else
                    insertDom()
            else
                this.modal.style.background = "none";
        }
    }
);

chrome.runtime.sendMessage ( {command: "getOnOffStatus"}, function (response) {
    console.log(response)
    if (response.isOn) {
            insertDom()
    }
});

var insertDom = function(){
    var body = document.getElementsByTagName('body')[0];
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

    body.appendChild(modal)

    setTimeout(function(){
        modal.style.visibility = "visible" // finally a use
        modal.style.background = "rgba(100%, 80%, 50%, 0.2)";
        modal.style.transition = "background 5s" //ease 1s";
    }, 1);
}

