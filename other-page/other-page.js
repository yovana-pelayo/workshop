import { checkAuth, logout, getConcerts } from '../fetch-utils.js';
import { renderConcert } from '../render-utils.js';

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
    
        concertsList.append(concertEl);
    }
}

displayConcerts();