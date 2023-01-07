const btnAdd = document.querySelector('.btn-add');
const addModal = document.querySelector('.add-modal');

btnAdd.addEventListener('click', () => {
    addModal.classList.add('modal-show')
})

// Uuario click qualquer lugar fora do modal para fechar o mesmo

window.addEventListener('click', e => {
    console.log(e.target, addModal);
})