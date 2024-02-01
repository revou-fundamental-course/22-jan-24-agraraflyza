const inputName = document.getElementById ('input-name');
const inputEmail = document.getElementById ('input-email');

const button = document.getElementById('tombol-kirim')

button.addEventListener('click', function() {
    let nama = inputName.value;
    let email = inputEmail.value;

    console.log({nama, email})

    if(!nama) {
        const nameError = document.getElementById('name-error');
        nameError.classList.add('error-message');

        nameError.innerText = "Nama harus diisi!";
    }

    if(!email) {
        const emailError = document.getElementById('email-error');
        emailError.classList.add('error-message');

        emailError.innerText = "Email harus diisi!";
    }

});

let currentIndex = 0;

const totaSlides = document.querySelectorAll('.slide').length;
const slideWidth = document.querySelector('.slide').clientWidth;
const slideContainer = document.getElementById('slides')

function nexSlide() {
    currentIndex = (currentIndex + 1) % totaSlides;
    updateSlide();
}

function updateSlide() {
    slideContainer.style.transform = `translateX(${-currentIndex * slideWidth}px)`
}

setInterval(nexSlide, 2000);


