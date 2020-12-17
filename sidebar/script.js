document.getElementById('buttonsidebarclose').addEventListener('click', () => {
    document.getElementById('sidebar').style.left = '-450px';
    document.getElementById('buttonsidebaropen').style.display = 'block';
    console.log('Close');
});

document.getElementById('buttonsidebaropen').addEventListener('click', () => {
    document.getElementById('sidebar').style.left = '0';
    document.getElementById('buttonsidebaropen').style.display = 'none';
    console.log('Open');
});

document.getElementById('sidebar__item-4').addEventListener('click', () => {
    console.log(document.getElementById('dropdown__item-4').style.display);
    if(document.getElementById('dropdown__item-4').style.display == 'none') {
        document.getElementById('dropdown__item-4').style.display = 'block';
    } else {
        document.getElementById('dropdown__item-4').style.display = 'none';
    }
});

console.log('Javascript Successfully loaded');