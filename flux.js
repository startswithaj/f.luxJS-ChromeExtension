(function() 
{
	var body = document.getElementsByTagName('body')[0];
	var modal = document.createElement('div');
	//modal.style.background = "rgba(100%, 100%, 50%, 0.3)";
	modal.style.position = 'fixed';
	modal.style.top	= 0;
	modal.style.bottom = 0;
	modal.style.left = 0;
	modal.style.right = 0;
	modal.style.pointerEvents = "none"

	modal.style.zIndex = 999999999999999999
	modal.style.visibility = "hidden"

	body.appendChild(modal)

	now = new Date().getTime();
	if ( ((now < window.sunset) && (now < window.sunrise)) || ((now > window.sunrise) && (now > window.sunset)) ) {
		setTimeout(function(){
			modal.style.visibility = "visible" // finally a use
			modal.style.background = "rgba(100%, 100%, 50%, 0.3)";
			modal.style.transition = "background 5s" //ease 1s";
		}, 1);
	}

})();



