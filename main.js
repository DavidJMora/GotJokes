window.onload = init;

function init() {
    document.querySelector('.button')
        .addEventListener('click', sendRequest);

    console.log(`Requesting data.`);
    sendRequest(); 
    console.log('Displaying network response:');
}
function sendRequest() {
    const xhr = new XMLHttpRequest();
    const url = 'http://api.icndb.com/jokes/56';
    xhr.open('GET', url);
    xhr.onload = handleData;
    xhr.send();
}
function handleData(event) {
    const joke = JSON.parse(event.target.responseText);
    
    console.log(joke);
}