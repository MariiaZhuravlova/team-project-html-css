(() => {
    const refs = {
      openModalBtn: document.querySelector('.windows-mobile__button--white'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
      openModalMaps: document.querySelector('.windows-mobile__button'),
      modalMaps:document.querySelector('.modal-maps'),
      closeModalMaps:document.querySelector('[modal-maps__close]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.openModalMaps.addEventListener('click', getModalMaps);
    refs.closeModalMaps.addEventListener('click', getModalMaps);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
    function getModalMaps (){
      refs.modalMaps.classList.toggle('is-hidden');
    }
})();