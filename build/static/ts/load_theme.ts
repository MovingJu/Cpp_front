function load_theme(){
    const themeMap = {
        'default-dark': {
        'background-color': '#222',
        'text-color': 'white',
        'highlight-color': '#2e2e2e'
        } 
    };
    const savedTheme = localStorage.getItem('theme') || 'default-dark';
    const theme = themeMap['default-dark'];
    const html = document.documentElement;
    (Object.keys(theme) as Array<keyof typeof theme>).forEach((key) => {
        html.style.setProperty(`--primary-${key}`, theme[key]);
    });
}