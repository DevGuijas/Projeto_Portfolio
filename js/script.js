document.addEventListener('DOMContentLoaded', () => {
    const imputName = document.getElementById('imputName');
    const textComment = document.getElementById('imputText');
    const form = document.getElementById('formulario');
    const commentPost = document.getElementById('commentPost');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let p = document.createElement('p');
        p.classList = 'p-2 d-flex text-wrap';
        p.innerHTML = `<strong>${imputName.value}: </strong> &nbsp ${textComment.value}`;
        commentPost.appendChild(p);
        imputName.value = '';
        textComment.value = '';
        imputName.focus();
    });
});