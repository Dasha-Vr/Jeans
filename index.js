const colors = document.querySelectorAll('.descr-color');
const sizes = document.querySelectorAll('.descr-size');


colors.forEach((color) => {
    color.addEventListener('click', () => {
        colors.forEach((color) => {
            color.classList.remove('descr-color--active');
        })
        color.classList.add('descr-color--active');
    })
})


sizes.forEach((size) => {
    size.addEventListener('click', () => {
        sizes.forEach((size) => {
            size.classList.remove('descr-size--active');
        })
        size.classList.add('descr-size--active');
    })
})


