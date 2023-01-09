const btnAdd = document.querySelector('.btn-add');
const addModal = document.querySelector('.add-modal');

btnAdd.addEventListener('click', () => {
    addModal.classList.add('modal-show')
})

// Uuario click qualquer lugar fora do modal para fechar o mesmo

window.addEventListener('click', e => {
    if (e.target === addModal) {
        // alert('Fechamos o modal-show')
        addModal.classList.remove('modal-show')
    }
})

// Let get all user
// let db = firebase.firestore();

// db.collection('users').get().then(querySnapshot => {
//     querySnapshot.forEach(doc => {
//         console.log(doc.data());
//     })
// })


// const addd = document.getElementById('addd')

// addd.addEventListener('click', e => {
//     addDoc(collection(db, "cities"), {
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
//     });
//         });

