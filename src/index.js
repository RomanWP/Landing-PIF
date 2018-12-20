import jquery from 'jquery';
const WOW = require('wowjs');

require('./js/libs.min.js');
require('./scss/main.scss');

window.wow = new WOW.WOW({
    mobile: false,
	live: false
});
wow.init();

jquery(()=>{
    jquery(document).ready(function(){
	jquery(".reason-text").hover(function() {
		var reasonId = jquery(this).data("reason");
		jquery(".reason-text").removeClass('active');
		jquery(this).addClass("active");
		jquery(".dot-cube").find("*[data-cube="+ reasonId + "]").addClass("cube-move");
	  	jquery(".reason-cube").find("*[data-cube="+ reasonId + "]").addClass("cube-hover");
	  	jquery(".reason-cube").find("*[data-cube="+ reasonId + "]").addClass("cube-move");
	}, function() {
	  jquery(".reason-text").removeClass('active');
	  jquery(".dot-cube").find(".dot").removeClass("cube-move");
	  jquery(".reason-cube").find(".cube").removeClass("cube-hover");
	  jquery(".reason-cube").find(".cube").removeClass("cube-move");
	});

	jquery(".reasons-wrap").hover(function() {
		var reasonId = 1;
	}, function() {
	  jquery(".reason-1").addClass("active");
	});

	if (matchMedia) {
		var mq = window.matchMedia("(max-width: 767px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}

	function WidthChange(mq) {
		if (mq.matches) {
			jquery("#inf-text").collapse('hide');
			jquery(".middle-footer .link-wrap .link").addClass("collapsed");
		} else {
			jquery("#inf-text").collapse('show');
			jquery(".middle-footer .link-wrap .link").removeClass("collapsed");
		}
	}
});
});