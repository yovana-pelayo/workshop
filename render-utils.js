export function renderConcert(concert) {
    const div = document.createElement('div');
    div.classList.add('concert');

    const p = document.createElement('p');
    p.classList.add('name');
    p.textContent = concert.name;
    div.append(p);
    return div;
}