var i =0;
var images = [];
images[0] = "https://wallpaperaccess.com/full/81261.jpg";
images[1] = "https://wallpaperaccess.com/full/33115.jpg";
images[2] = "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80";
images[3] = "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80";
images[4] = "https://wallpapercave.com/wp/wp2872482.jpg";

setInterval(() => {
    document.querySelector('#slideImage1').src = images[i];
    if(i<images.length){
        i++;
    }
    else{
        i = 0;
    }
}, 1000);