document.getElementById('buttonsidebarclose').addEventListener('click', () => {
    document.getElementById('sidebar').style.left = '-200px';
    document.getElementById('buttonsidebaropen').style.display = 'block';
    console.log('Close');
});

document.getElementById('buttonsidebaropen').addEventListener('click', () => {
    document.getElementById('sidebar').style.left = '0';
    document.getElementById('buttonsidebaropen').style.display = 'none';
    console.log('Open');
});

console.log('Javascript Successfully loaded');