const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close');
const saveButton = popup.querySelector('.popup');

function popupOpenToggle() {
    popup.classList.toggle('popup_closed')
}
editButton.addEventListener('click', popupOpenToggle)
closeButton.addEventListener('click', popupOpenToggle)
