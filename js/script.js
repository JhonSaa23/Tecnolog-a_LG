let currentSlide = 0;


function showMenu() {
    const details = document.getElementById('details');
    details.classList.add('fade-out');

    setTimeout(() => {
        details.style.display = 'none';
        document.querySelector('main').style.display = 'block';
        document.querySelector('main').classList.add('fade-in');
        details.classList.remove('fade-out');
    }, 1000);
}

function showDetails(tvNumber) {
    currentSlide = tvNumber - 1;
    const main = document.querySelector('main');
    main.classList.add('fade-out');

    indice(currentSlide);
    setTimeout(() => {
        main.style.display = 'none';
        const details = document.getElementById('details');
        details.style.display = 'block';
        details.classList.add('fade-in');
        main.classList.remove('fade-out');
        updateSlide();
    }, 1000);
}
function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    indice (currentSlide)
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    indice (currentSlide)
}

function updateSlide() {
    const slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentSlide) {
            slide.classList.add('active');
        }
    });
}

function showIconInfo(iconNumber) {
    alert(`Información del icono ${iconNumber}`);
}

const svgs = document.querySelectorAll('.slide > .content-img-boxes svg, .slide > .content-img-boxes .info-box img');
const boxes = document.querySelectorAll('.info-box');

function showBox(index){
    boxes[index].classList.toggle('prueba');
}
svgs.forEach((svg, index)=>{
    svg.addEventListener('click', ()=>{
        event.stopPropagation()
        showBox(index);
    })
});
document.addEventListener('click',()=>{
    boxes.forEach(box=>{
        box.classList.remove('prueba');
    })
});

const videoUrls = {
    0: 'https://www.youtube.com/embed/r7GBGZ004vQ?si=nSjWplNJoaVoU5T8',
    1: 'https://www.youtube.com/embed/YUXH2DqVOC8?si=jUAWSpEPyNHygh9G',
    // Agrega más URLs según sea necesario
};

const videoPopup = document.getElementById('videoPopup');
const videoFrame = document.getElementById('videoFrame');
const closeVideo = document.getElementById('closeVideo');
const verVideoBtn = document.getElementById('verVideoBtn');
let endece = 0;
function indice (i) {
    endece = i;
    console.log(endece);
}
verVideoBtn.addEventListener('click', ()=>{
    console.log(endece);
    showVideoPopup(endece);
});
function showVideoPopup(numberTv) {
    const videoUrl = videoUrls[numberTv];
    if (videoUrl) {
        videoPopup.classList.add('pepe');
        videoPopup.style.display = 'block';
        videoFrame.src = videoUrl;
    } else {
        console.error("No video URL found for slide:", currentSlide);
    }
}

closeVideo.addEventListener('click',()=>{
    videoPopup.style.display = 'none';
    videoPopup.classList.remove('pepe');
    videoFrame.src = '';
})

window.onclick = function(event) {
    if (event.target === videoPopup) {
        videoPopup.forEach((pop)=>{
            pop.classList.remove('pepe');
        })
        videoPopup.style.display = 'none';
        videoFrame.src = ''; // Detiene la reproducción del video al cerrar el popup
    }
}

