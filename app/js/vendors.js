// event listener: DOM ready
function addLoadEvent(func) {
    'use strict';
    var oldonload = window.onload;
    if (typeof window.onload !== 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        };
    }
}
addLoadEvent(
    // call plugins after DOM ready

    outdatedBrowser({
        bgColor: '#f25648',
        color: '#fff',
        lowerThan: 'transform',
        languagePath: 'lang/outdated_browser/en.html'
    }),

    $('#logo').downloadTip({ 'position': 'right' })
);
