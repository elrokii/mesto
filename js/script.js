const editProfile = document.querySelector('.profile__edit');
const popup = document.querySelector('.popup');
const closeEditProfile = document.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profilePost = document.querySelector('.profile__post');
let formElement = document.querySelector('.popup__form-edit');
let nameInput = document.querySelector('.popup__input:nth-of-type(1)');
let jobInput = document.querySelector('.popup__input:nth-of-type(2)');

function togglePopup() {
    if (popup.classList.contains('popup_active')) {
        popup.classList.toggle('popup_active');
    } else {
        popup.classList.toggle('popup_active');
        nameInput.value = profileName.textContent;
        jobInput.value = profilePost.textContent;
    };
};

function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = nameInput.value;
    profilePost.textContent = jobInput.value;
    togglePopup();
};
editProfile.addEventListener('click', togglePopup);
closeEditProfile.addEventListener('click', togglePopup);
popup.addEventListener('click', function (ev) {
    if (ev.target === ev.currentTarget) {
        popup.classList.toggle('popup_active');
    }
});
formElement.addEventListener('submit', formSubmitHandler);