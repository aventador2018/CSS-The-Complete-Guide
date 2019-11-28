var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var closeModalButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

selectPlanButtons.forEach(element => {
    element.addEventListener('click', () => {
        // backdrop.style.display = 'block';
        // modal.style.display = 'block';
        backdrop.classList.add('open');
        modal.classList.add('open');
    });
});

backdrop.addEventListener('click', () => {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    backdrop.classList.remove('open');
    modal.classList.remove('open');
}

closeModalButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', () => {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});