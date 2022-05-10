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

// массив
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// дом элементы

const cardsConteiner = document.querySelector('.elements');
const popupForCardsEdit = document.querySelector('.popup_cards');
const cardsEditButton = document.querySelector('.profile__add-button');
const cardsEditCloseBatton = popupForCardsEdit.querySelector('.popup__close');
const cardsEditForm = popupForCardsEdit.querySelector('.popup__conteiner');
const inputPlaceName = cardsEditForm.querySelector('.popup__user-name');
const inputImageSrc = cardsEditForm.querySelector('.popup__user-bio');

// рендер карточки
const renderInitialCards = (initialCardsData) => {
		cardsConteiner.insertAdjacentHTML('afterbegin', `
		<div class="element">
								<button class="element__delete" type="button" aria-label="удалить карточку"></button>
                <img class="element__image" src="${initialCardsData.link}" alt="">
                <div class="element__footer">
                    <h2 class="element__title">${initialCardsData.name}</h2>
                    <button class="element__like" type="button" aria-label="поставить лайк"></button>
                </div>
            </div>
		`)
		let likeButton = document.querySelector('.element__like');
		likeButton.addEventListener('click', cardIsLiked);
		function cardIsLiked(evt) {
			evt.target.closest('.element__like').classList.toggle('element__like_active');
		}
    const cardDeleteButton = document.querySelector('.element__delete');
    cardDeleteButton.addEventListener('click', handleDeleteCard);

    const cardImg = document.querySelector('.element__image');
    cardImg.addEventListener('click', popupImgOpen);
    //const cardImgTitle =document.querySelector('.element__title');
}

    const handleDeleteCard = (event) => {
      event.target.closest('.element').remove();
    }

initialCards.forEach((initialCardsData) => {
		renderInitialCards(initialCardsData);
});

function popupForCardsEditOpen() {
	popupForCardsEdit.classList.add('popup_is-opened');
}
cardsEditButton.addEventListener('click', popupForCardsEditOpen);

function popupForCardsEditClose() {
	popupForCardsEdit.classList.remove('popup_is-opened');
}
cardsEditCloseBatton.addEventListener('click', popupForCardsEditClose);

function cardsEditFormSubmitHandler (evt) {
	evt.preventDefault();
	renderInitialCards({ name: inputPlaceName.value, link: inputImageSrc.value });
	popupForCardsEditClose();
}
cardsEditForm.addEventListener('submit', cardsEditFormSubmitHandler);

const popupImg = document.querySelector('.popup_img');
const popupImgBacground = popupImg.querySelector('.popup__image');
const popupImgTitle = popupImg.querySelector('.popup__img-title');
const popupImgCloseBatton = popupImg.querySelector('.popup__close');

function popupImgOpen(event) {
	popupImg.classList.add('popup_is-opened');
  popupImgBacground.src = event.target.closest('.element__image').src;
  popupImgTitle.textContent = event.target.closest('.element').querySelector('.element__title').textContent;
}


function popupImgClose() {
	popupImg.classList.remove('popup_is-opened');
}

popupImgCloseBatton.addEventListener('click', popupImgClose);

