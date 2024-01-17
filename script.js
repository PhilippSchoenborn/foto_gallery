let images = ['./img/1.webp', 'img/2.webp', 'img/3.webp', 'img/4.webp', 'img/5.webp', 'img/6.webp', 'img/7.webp', 'img/8.webp', 'img/9.webp', 'img/10.webp', 'img/11.webp', 'img/12.webp', 'img/13.webp'];
let popup = document.getElementById('popup');
let currentImageIndex = 0;


function render() {
    let mainContainer = document.getElementById('mainContainer');
    for(let i = 0; i < images.length; i++) {
        mainContainer.innerHTML += /*html*/`
            <div onclick="openImage(${i})" class="imgbox" id="image(${i})">
                <img src="${images[i]}" class="img">
            </div>
        `;
    }
}


function openImage(i) {
    document.getElementById('popup').classList.remove('d-none');
    popup.innerHTML ='';
    currentImageIndex = i;
    popup.innerHTML = contentGallery(currentImageIndex);
}


function pictureBefore() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    popup.innerHTML = contentGallery(currentImageIndex);
}


function pictureBehind() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    popup.innerHTML = contentGallery(currentImageIndex);
}
        

function contentGallery(i){
    return /*html*/`
        <button onclick="closePopup()" class="button">
            <img src="./img/close.png" alt="Zurück" class="closeButton">
        </button>
        <div class="singleImgContainer">
            <img src="${images[i]}" alt="image" class="singleImg" id="closeImg">
        </div>
        <div class="next">
            <button onclick="pictureBefore()" class="button">
                <img src="./img/arrow_left.png" alt="vorheriges Bild" class="nextPicture">
            </button>
            <button onclick="pictureBehind()" class="button">
                <img src="./img/arrow_right.png" alt="nächstes Bild" class="nextPicture">
            </button>
        </div>
    `;
}


function closePopup() {
    document.getElementById('popup').classList.add('d-none');
}