const menuItems = document.querySelectorAll('li');

menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation();
        this.classList.toggle('active');
    });
});