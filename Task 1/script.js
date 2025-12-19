function setTheme(theme) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
}

function setFont(size) {
    document.body.classList.remove('small', 'medium', 'large');
    document.body.classList.add(size);
}

function setLayout(layout) {
    const container = document.querySelector('.container');
    container.classList.remove('grid', 'list');
    container.classList.add(layout);
}
