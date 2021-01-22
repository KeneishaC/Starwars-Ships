const BASE_URL = 'https://swapi.dev/api/';

function fetchStarships(pageUrl) {
    const url =pageUrl || BASE_URL + 'starships/'
    return fetch(url).then(res => res.json());
}

export {
    fetchStarships
};