document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('dragstart', e => {
        e.currentTarget.classList.add('dragging');
    });

    card.addEventListener('dragend', e => {
        e.currentTarget.classList.remove('dragging')
    })

});

document.querySelectorAll('.column').forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
        e.currentTarget.classList.add('cards-hover');
    })

    column.addEventListener('dragleave', e => {
        e.preventDefault();
        e.currentTarget.classList.remove('cards-hover');
    })

    column.addEventListener('drop', e => {
    const card = document.querySelector('.dragging');
    e.currentTarget.classList.remove('cards-hover');
    column.appendChild(card); // Move o card para a nova coluna
    column.classList.remove('cards-hover');
  });
})
