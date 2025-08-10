// let sidebar = document.getElementById('sidebar');
// let menuButton = document.getElementById('menuButton');
// let closeButton = document.getElementById('closeButton');

// menuButton.addEventListener('click', () => {
//     sidebar.classList.add('active');
// });

// closeButton.addEventListener('click', () => {
//     sidebar.classList.remove('active');
// });


let sidebar = document.getElementById('sidebar');
let menuButton = document.getElementById('menuButton');
let closeButton = document.getElementById('closeButton');

menuButton.addEventListener('click', () => {
    sidebar.classList.add('active');
    menuButton.style.display = 'none';
    closeButton.style.display = 'inline-block';
});

closeButton.addEventListener('click', () => {
    sidebar.classList.remove('active');
    closeButton.style.display = 'none';
    menuButton.style.display = 'inline-block';
});