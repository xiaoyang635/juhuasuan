
(function  (win,doc) {
    function change() {
        doc.documentElement.style.fontSize = doc.documentElement.clientWidth / 320 * 20 + 'px';
    }
    change();
    window.addEventListener('resize',change,false);
})(window,document);
