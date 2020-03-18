window.onload = init;

function init() {
    const randomUrl = 'http://api.icndb.com/jokes/random?escape=javascript';
    const nerdyUrl = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]&escape=javascript';

    document.querySelector('#random')
        .addEventListener('click', () => sendRequest(randomUrl));
    
    document.querySelector('#nerdy-jokes')
        .addEventListener('click', () => sendRequest(nerdyUrl));
}

function sendRequest(url) {
    event.preventDefault;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = handleData;
    xhr.send();
}

function handleData(event) {
    const rawData = JSON.parse(event.target.responseText);
    const {value} = rawData;
    const {joke} = value;
    document.querySelector('#joke').innerText = joke;
}
