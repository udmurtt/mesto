const profilePopup = document.querySelector('.popup_profile');
const cardsPopup = document.querySelector('.popup_cards');
const imagePopup = document.querySelector('.popup_img');

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = profilePopup.querySelector('.popup__close');
const nameContent = document.querySelector('.profile__name');
const aboutMeContent = document.querySelector('.profile__about-me');
const formProfileEdit = profilePopup.querySelector('.popup__conteiner');
const inputName = formProfileEdit.querySelector('.popup__user-name');
const inputBio = formProfileEdit.querySelector('.popup__user-bio');

function popupOpen() {
  
  profilePopup.classList.add('popup_is-opened');
}

function openPropfilePopup() { 
  inputName.value = nameContent.textContent;
  inputBio.value = aboutMeContent.textContent;
  popupOpen();
}

buttonEdit.addEventListener('click', openPropfilePopup);

function popupClose() {
	document.querySelector('.popup_is-opened').classList.remove('popup_is-opened');
}
buttonClose.addEventListener('click', popupClose);

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    nameContent.textContent = inputName.value;
    aboutMeContent.textContent = inputBio.value;
		popupClose();
}
formProfileEdit.addEventListener('submit', formSubmitHandler);

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
const cardsEditButton = document.querySelector('.profile__add-button');
const cardsEditCloseBatton = cardsPopup.querySelector('.popup__close');
const cardsEditForm = cardsPopup.querySelector('.popup__conteiner');
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
}

    const handleDeleteCard = (event) => {
      event.target.closest('.element').remove();
    }

initialCards.forEach((initialCardsData) => {
		renderInitialCards(initialCardsData);
});

function popupForCardsEditOpen() {
	cardsPopup.classList.add('popup_is-opened');
}
cardsEditButton.addEventListener('click', popupForCardsEditOpen);


cardsEditCloseBatton.addEventListener('click', popupClose);

function cardsEditFormSubmitHandler (evt) {
	evt.preventDefault();
	renderInitialCards({ name: inputPlaceName.value, link: inputImageSrc.value });
	popupClose();
  inputPlaceName.value = '';
  inputImageSrc.value = '';
}
cardsEditForm.addEventListener('submit', cardsEditFormSubmitHandler);

const popupImgBacground = imagePopup.querySelector('.popup__image');
const popupImgTitle = imagePopup.querySelector('.popup__img-title');
const popupImgCloseBatton = imagePopup.querySelector('.popup__close');

function popupImgOpen(event) {
	imagePopup.classList.add('popup_is-opened');
  popupImgBacground.src = event.target.closest('.element__image').src;
  popupImgTitle.textContent = event.target.closest('.element').querySelector('.element__title').textContent;
}




popupImgCloseBatton.addEventListener('click', popupClose);

