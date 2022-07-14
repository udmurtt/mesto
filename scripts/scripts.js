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

function openPopup(popup) {
  popup.classList.add('popup_is-opened');
}
function openPropfilePopup() { 
  inputName.value = nameContent.textContent;
  inputBio.value = aboutMeContent.textContent;
  openPopup(profilePopup);
}

buttonEdit.addEventListener('click', openPropfilePopup);

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
}
buttonClose.addEventListener('click', closePopup(profilePopup));

function submitEditProfileForm (evt) {
  evt.preventDefault(); 
  nameContent.textContent = inputName.value;
  aboutMeContent.textContent = inputBio.value;
  closePopup(profilePopup);
}
formProfileEdit.addEventListener('submit', submitEditProfileForm);

// массив
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'высокогорье'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'водоем в горах'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'серые многоэтажки'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'вид на вулкан'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'железная дорога в лесу'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'скалистый берег'
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
  newCard.querySelector('.element__image').alt = cardData.alt;
  const cardDeleteButton = newCard.querySelector('.element__delete');
  cardDeleteButton.addEventListener('click', handleDeleteCard);
  const likeButton = newCard.querySelector('.element__like');
  likeButton.addEventListener('click', toggleLike);
  const cardImg = newCard.querySelector('.element__image');
  cardImg.addEventListener('click', openImagePopup);
  return newCard;
}
// добавление карточки
const addCard = (cardData) => {
  cardsConteiner.prepend(generateCard(cardData));
  
}

initialCards.forEach(function (cardData) {
    addCard(cardData);
  });
function openPopupForCardsEdit() {
  openPopup(cardsPopup);
}
cardsEditButton.addEventListener('click', openPopupForCardsEdit);
cardsEditCloseBatton.addEventListener('click', closePopup(cardsPopup));
//удалить карточку
function handleDeleteCard(event) {
  event.target.closest('.element').remove();
}
// поставить лайк
function toggleLike (evt) {
  evt.target.closest('.element__like').classList.toggle('element__like_active');
}
function handlerCardsEditFormSubmit (evt) {
  evt.preventDefault();
  addCard({ name: inputPlaceName.value, link: inputImageSrc.value });
  closePopup(cardsPopup);
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
function closeImgPopup() {
  closePopup(imagePopup);
}
popupImgCloseBatton.addEventListener('click', closeImgPopup);

