import { checkAuth, logout, getConcerts, deletePerson } from '../fetch-utils.js';
import { renderConcert, renderPerson } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const concertsList = document.querySelector('.concerts-container');

async function displayConcerts() {
    concertsList.textContent = '';
    const concerts = await getConcerts();
    console.log(concerts);
    for (let concert of concerts) {

        const concertEl = renderConcert(concert);
        for (let person of concert.person_ticket) {
            const personEl = renderPerson(person);

            personEl.addEventListener('click', async () => {
                await deletePerson(person.id);
                displayConcerts();
            });
            concertEl.append(personEl);
        }
        concertsList.append(concertEl);
    }
}

displayConcerts();