/******************************************
*引用此js可根据页面宽度自动计算rem的基础值*
*默认基础值：width=320,font-size:20px;    *
*by：贾芮铭  2016-11-24
*
*PC页面用：window.screen.width(用户屏幕分辨率宽度)*
******************************************/

(function (doc, win) {
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc=function () {
		/*win.screen.width：获取用户屏幕分辨率宽度
		目的：将内容以用户屏幕分辨率宽度来显示，那样当用户放大、缩小浏览器时，内容大小不再变化*/
		var clientWidth = win.screen.width;
		if (!clientWidth) return;
		docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
	};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
