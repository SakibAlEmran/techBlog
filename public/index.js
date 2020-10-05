//for navbar toggle button
const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    }else{
        menu.classList.add('hidden')
    }
})


//image slider js 
var i = 0; //start index
var images = [];
var time = 2000;

// image list
images [0] = 'img/slide1.jpg';
images [1] = 'img/slide2.jpg';
images [2] = 'img/slide3.jpg';

//change image
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length -1){
        i++;
    } else{
        i =0;
    }

    setTimeout("changeImg()", time);
}

//load image on the screen
window.onload = changeImg;