window.onload = init;

function init() {
    document.querySelector('#random')
        .addEventListener('click', randomJoke);
    
    document.querySelector('#nerdy-jokes')
        .addEventListener('click', nerdyJokes);
 
}
function randomJoke() {
    event.preventDefault();
    const url = 'http://api.icndb.com/jokes/random?escape=javascript';
    
    sendRequest(url)
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
    console.log(joke);
}

function nerdyJokes() {
    const url = 'http://api.icndb.com/jokes/random?limitTo=[nerdy]';
    sendRequest(url)
}