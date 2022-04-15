const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close');
let namecontent = document.querySelector('.profile__name');
let aboutmecontent = document.querySelector('.profile__about-me');
let form = popup.querySelector('.popup__conteiner');
let inputname = form.querySelector('.popup__user-name');
let inputbio = form.querySelector('.popup__user-bio');

function popupOpen() {
    popup.classList.add('popup_is-opened');
    inputname.value = namecontent.textContent;
    inputbio.value = aboutmecontent.textContent;
}
editButton.addEventListener('click', popupOpen);

function popupClose() {
	popup.classList.remove('popup_is-opened');
}
closeButton.addEventListener('click', popupClose);

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    namecontent.textContent = inputname.value;
    aboutmecontent.textContent = inputbio.value;
		popupClose();
}
form.addEventListener('submit', formSubmitHandler); 