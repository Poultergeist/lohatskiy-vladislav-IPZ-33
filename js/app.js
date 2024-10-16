const openModalBtn = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);

function toggleModal(e) {
  modal.classList.toggle('modal-visible');
}

const termsBtn = document.getElementById('terms');

termsBtn.addEventListener('click', function(e) {
  e.preventDefault();
  this.classList.toggle('terms-agree');
})
