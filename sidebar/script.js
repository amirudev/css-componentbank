document.getElementById('buttonsidebarclose').addEventListener('click', () => {
    document.getElementById('sidebar').style.display = 'none';
    document.getElementById('buttonsidebarclose').style.display = 'none';
    document.getElementById('buttonsidebaropen').style.display = 'block';
    console.log('Close');
});

document.getElementById('buttonsidebaropen').addEventListener('click', () => {
    document.getElementById('sidebar').style.display = 'block';
    document.getElementById('buttonsidebarclose').style.display = 'block';
    document.getElementById('buttonsidebaropen').style.display = 'none';
    console.log('Open');
});

console.log('Javascript Successfully loaded');