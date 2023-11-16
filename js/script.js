document.addEventListener('DOMContentLoaded', (event) => {
    const imputName = document.getElementById('imputName');
    const textComment = document.getElementById('imputText');
    const form = document.getElementById('formulario');
    const commentPost = document.getElementById('commentPost');
    
    // Carregar comentários salvos no armazenamento local ao iniciar a página
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    savedComments.forEach(comment => {
        commentPost.appendChild(createCommentElement(comment));
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const commentData = {
            name: imputName.value,
            text: textComment.value
        };

        // Adicionar comentário à lista de comentários salvos
        savedComments.push(commentData);
        localStorage.setItem('comments', JSON.stringify(savedComments));

        // Adicionar comentário ao DOM
        commentPost.appendChild(createCommentElement(commentData));

        // Limpar campos do formulário
        imputName.value = '';
        textComment.value = '';
    });

    function createCommentElement(comment) {
        let p = document.createElement('p');
        p.classList = 'p-2 d-flex text-wrap flex-warp';
        p.innerHTML = `<strong>${comment.name}: </strong> &nbsp ${comment.text}`;
        return p;
    }
});