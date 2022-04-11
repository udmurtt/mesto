const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close');
const saveButton = popup.querySelector('.popup__save');


function popupOpenToggle() {
    popup.classList.toggle('popup_closed');
    let namecontent = document.querySelector('.profile__name').textContent;
    let aboutmecontent = document.querySelector('.profile__about-me').textContent;
    popup.querySelector('.popup__user-name').value = namecontent;
    popup.querySelector('.popup__user-bio').value = aboutmecontent;
}
editButton.addEventListener('click', popupOpenToggle)
closeButton.addEventListener('click', popupOpenToggle)

function popupSaveToggle() {
    popup.classList.toggle('popup_closed');
}
saveButton.addEventListener('click', popupSaveToggle)

let form = popup.querySelector('.popup__conteiner');
let inputname = form.querySelector('.popup__user-name');
let inputbio = form.querySelector('.popup__user-bio');

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    document.querySelector('.profile__name').textContent = inputname.value;
    document.querySelector('.profile__about-me').textContent = inputbio.value;
}
form.addEventListener('submit', formSubmitHandler); 