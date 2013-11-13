(function() {
	var body = document.getElementsByTagName('body')[0];
	var modal = document.createElement('div');
	//modal.style.background = "rgba(100%, 100%, 50%, 0.3)";
	modal.id = "fluxColor"
	modal.style.position = 'fixed';
	modal.style.top	= 0;
	modal.style.bottom = 0;
	modal.style.left = 0;
	modal.style.right = 0;
	modal.style.pointerEvents = "none";
	modal.style.zIndex = 999999999999999999;

	var button = document.createElement('div');
	button.innerHTML = "on"
	button.style.position = 'fixed';
	button.style.right = 0;
	button.style.top = 0;
	button.style.width = '32px';
	button.style.height = '32px';
	button.style.backgroundImage = "url('http://justgetflux.com/favicon.png')";
	button.style.backgroundRepeat = 'no-repeat';
	button.style.font = '12px Helvetica';
	button.style.textAlign = 'center';
	button.style.verticalAlign = 'middle';
	button.style.lineHeight = '32px';
	button.style.color = 'darkslategray';
	button.style.fontWeight = 'bold';
	button.style.textShadow = '0px 1px 0px #e5e5ee';
	button.style.cursor = 'pointer';
	button.style.webkitUserSelect = 'none';	
	button.style.zIndex = 999999999999999999;


	body.appendChild(modal)
	body.appendChild(button)
	isOn = true
	button.onclick = (function(button, modal, isOn) {
		return function(){
			if (isOn) {
				modal.style.background = "none";
				button.innerHTML = 'off'
				isOn = false
			} else {
				modal.style.background = "rgba(100%, 80%, 50%, 0.2)";
				button.innerHTML = 'on'
				isOn = true
			}

		};
	})(button, modal, isOn);

	setTimeout(function(){
		modal.style.visibility = "visible" // finally a use
		modal.style.background = "rgba(100%, 80%, 50%, 0.2)";
		modal.style.transition = "background 5s" //ease 1s";
	}, 1);

})();



