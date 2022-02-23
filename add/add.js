import { checkAuth, logout, createTicket, getConcerts } from '../fetch-utils.js';


checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});
// we are saying that upon click of the logout button, user is logged out
//logout from supabase is given on fetch utils page
const form = document.querySelector('.person-form');
form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = new FormData(form);

//here we are setting new data we create to data var... still don't understand how. I get what we are saying and its to simplify but.. Is data an object now? idk ask TA
    const concertId = data.get('concert-id');
    const name = data.get('person-ticket');
    await createTicket({
        concert_id: concertId,
        name: name
    });

    form.reset();

});
// we are saying that when pressing on the submit button we are gathering the data and sending it to our table

window.addEventListener('load', async () => {
    const selectEl = document.getElementById('concert-id');

    const concerts = await getConcerts();
    // we are retrieving our list of concerts from out table and setting that function to concerts.. would it be making an object called concerts which carries all concerts or is it just a var? girl by its an object.. 

    for (let concert of concerts) {
        const option = document.createElement('option');
        option.value = concert.id;
        option.label = concert.name;
        selectEl.append(option);
    }
    // we created an element called option. I get what we are doing like created a label with the list of concerts but I am having a hard time in this section keeping track of the ids and names.
});