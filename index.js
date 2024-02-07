
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');
// const sliderImg = document.querySelectorAll('.slider-img');


//     function setOrder() {
//         sliderImg.forEach((item, ind) => {
//             if (item.classList.contains('big')) {
//                 item.style.order = -1;
//             }
//             else {
//                 item.style.order = ind;
//             }
//         });
//     }


//     function changeBig(newBig, bigImg) {
//         bigImg.classList.remove('big');
//         newBig.classList.add('big');
//         setOrder();
//     }


//     function changeSlide(direction) {
//         let bigImg = document.querySelector('.big');
//         let bigInd = +bigImg.id;
//         console.log(bigInd);
//         let num;
//         if (direction === 'prev') {
//             num = (bigInd + 4) % 5;
//         } else {
//             num = (bigInd + 1) % 5;
//         }
//         changeBig(sliderImg[num], bigImg);
//     }


//     function changePicture(img, index) {
//         if (!img.classList.contains('big')){
//             let bigImg = document.querySelector('.big');
//             changeBig(img, bigImg);
//             bigImg.style.order = index;
//         }
//     }


//     prev.addEventListener('click', () => changeSlide('prev'));

//     next.addEventListener('click', () => changeSlide('next'));

//     sliderImg.forEach((img, index) => {
//         img.addEventListener('click', () => changePicture(img, index));
//     })




const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const sliderImg = document.querySelectorAll('.slider-img');


    function setOrder() {
        sliderImg.forEach((item, ind) => {
            if (item.classList.contains('big')) {
                item.style.order = -1;
            }
            else {
                item.style.order = ind;
            }
        });
    }


    function changeBig(newBig, bigImg) {
        bigImg.classList.remove('big');
        newBig.classList.add('big');
        setOrder();
    }


    function changeSlide(direction) {
        let bigImg = document.querySelector('.big');
        let bigInd = +bigImg.id;
        console.log(bigInd);
        let num;
        if (direction === 'prev') {
            num = (bigInd + 4) % 5;
        } else {
            num = (bigInd + 1) % 5;
        }
        changeBig(sliderImg[num], bigImg);
    }


    function changePicture(img, index) {
        if (!img.classList.contains('big')){
            let bigImg = document.querySelector('.big');
            changeBig(img, bigImg);
            bigImg.style.order = index;
        }
    }


    prev.addEventListener('click', () => changeSlide('prev'));

    next.addEventListener('click', () => changeSlide('next'));

    sliderImg.forEach((img, index) => {
        img.addEventListener('click', () => changePicture(img, index));
    })