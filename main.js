window.onload = init;

function init() {
    document.querySelector('.button')
        .addEventListener('click', sendRequest);

    sendRequest(); 
}
function sendRequest() {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    const url = 'http://api.icndb.com/jokes/random?escape=javascript';
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