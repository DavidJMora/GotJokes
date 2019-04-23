window.onload = init;

function init() {
    console.log(`Requesting data.`);
    sendRequest(); 
    console.log('Displaying network response:');
}
function sendRequest() {
    const xhr = new XMLHttpRequest();
    const key = 'RGAPI-0dc5cd29-c852-4a4b-ad11-7179b7d04fe0'
    const byName = 'by-name'
    const userInput = 'MasianPersuasion';
    const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/${byName}/${userInput}?api_key=${key}`;
    xhr.open('GET', url);
    xhr.onload = handleData;
    xhr.send();
}
function handleData(event) {
    const person = JSON.parse(event.target.responseText);
    const {name} = person;
    console.log(name);
}