function load_theme() {
    var themeMap = {
        'default-dark': {
            'background-color': '#222',
            'text-color': 'white',
            'highlight-color': '#2e2e2e'
        }
    };
    var savedTheme = localStorage.getItem('theme') || 'default-dark';
    var theme = themeMap['default-dark'];
    var html = document.documentElement;
    Object.keys(theme).forEach(function (key) {
        html.style.setProperty("--primary-".concat(key), theme[key]);
    });
}
