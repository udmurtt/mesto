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

function openPopup(evt) {
  evt.classList.add('popup_is-opened');
}
function openPropfilePopup() { 
  inputName.value = nameContent.textContent;
  inputBio.value = aboutMeContent.textContent;
  openPopup(profilePopup);
}

buttonEdit.addEventListener('click', openPropfilePopup);

function closePopup() {
  document.querySelector('.popup_is-opened').classList.remove('popup_is-opened');
}
buttonClose.addEventListener('click', closePopup);

function submitEditProfileForm (evt) {
  evt.preventDefault(); 
  nameContent.textContent = inputName.value;
  aboutMeContent.textContent = inputBio.value;
  closePopup();
}
formProfileEdit.addEventListener('submit', submitEditProfileForm);

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
const cardTemplate = document.querySelector('.template').content.querySelector('.element');
const cardsEditButton = document.querySelector('.profile__add-button');
const cardsEditCloseBatton = cardsPopup.querySelector('.popup__close');
const cardsEditForm = cardsPopup.querySelector('.popup__conteiner');
const inputPlaceName = cardsEditForm.querySelector('.popup__user-name');
const inputImageSrc = cardsEditForm.querySelector('.popup__user-bio');

//созданиее карточки
const generateCard = (cardData) => {
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.element__image').src = cardData.link;
  newCard.querySelector('.element__title').textContent = cardData.name;
  return newCard;
}
// добавление карточки
const addCard = (cardData) => {
  cardsConteiner.prepend(generateCard(cardData));
  const cardDeleteButton = cardsConteiner.querySelector('.element__delete');
  cardDeleteButton.addEventListener('click', handleDeleteCard);
  const likeButton = cardsConteiner.querySelector('.element__like');
  likeButton.addEventListener('click', toggleLike);
  const cardImg = cardsConteiner.querySelector('.element__image');
  cardImg.addEventListener('click', openImagePopup);
}
  const handleDeleteCard = (event) => {
    event.target.closest('.element').remove();
  }
initialCards.forEach((cardData) => {
  addCard(cardData);
});
function openPopupForCardsEdit() {
  openPopup(cardsPopup);
}
cardsEditButton.addEventListener('click', openPopupForCardsEdit);
cardsEditCloseBatton.addEventListener('click', closePopup);

// поставить лайк
function toggleLike (evt) {
  evt.target.closest('.element__like').classList.toggle('element__like_active');
}
function handlerCardsEditFormSubmit (evt) {
  evt.preventDefault();
  addCard({ name: inputPlaceName.value, link: inputImageSrc.value });
  closePopup();
  inputPlaceName.value = '';
  inputImageSrc.value = '';
}
cardsEditForm.addEventListener('submit', handlerCardsEditFormSubmit);
const popupImgBacground = imagePopup.querySelector('.popup__image');
const popupImgTitle = imagePopup.querySelector('.popup__img-title');
const popupImgCloseBatton = imagePopup.querySelector('.popup__close');

function openImagePopup(event) {
  openPopup(imagePopup);
  popupImgBacground.src = event.target.closest('.element__image').src;
  popupImgBacground.alt = event.target.closest('.element__image').alt;
  popupImgTitle.textContent = event.target.closest('.element').querySelector('.element__title').textContent;
}
popupImgCloseBatton.addEventListener('click', closePopup);

