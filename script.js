document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    var contextMenu = document.getElementById('menu');
    contextMenu.style.left = event.pageX + 'px';
    contextMenu.style.top = event.pageY + 'px';
    contextMenu.style.display = 'block';
})

document.addEventListener('click', function(event) {
    var contextMenu = document.getElementById('menu');
    contextMenu.style.display = 'none';
})