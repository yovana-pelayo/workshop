export function renderConcert(concert) {
    const div = document.createElement('div');
    div.classList.add('concert');

    const p = document.createElement('p');
    p.classList.add('name');
    p.textContent = concert.name;
    div.append(p);
    return div;
}

export function renderPerson(person) {
    const p = document.createElement('p');
    p.classList.add('person');
    p.textContent = person.name;
    return p;
}
// we created a render function for one person. we are adding that persons name to out list 'person'

//name makes sense but where exactly are we taking the name from? is that what I called the input box? and whatever we put in there is getting thrown to the persons_tickets table data? 