(() => {
    const refs = {
      openModalBtn: document.querySelector('[franciza-modal-open]'),
      closeModalBtn: document.querySelector('[franciza-modal-close]'),
      modal: document.querySelector('[franciza-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('franciza-is-hidden');
    }
  })();