const formBlock = document.getElementById('submitForm');
const greetsBlock = document.getElementById('showGreeting');
const refresh = document.getElementById('refresh');


greetsBlock.style.display = 'none'
refresh.style.display = 'none'

function showGreeting(greeting, event, message) {
    formBlock.style.display = 'none'
    greetsBlock.style.display = 'block'
    refresh.style.display = 'block'

    const greet = document.createElement('h1');
    greet.style.color = 'whitesmoke';
    greet.style.fontWeight = 'bolder';
    greet.innerText = greeting;


    const eventTag = document.createElement('h2');
    eventTag.style.color = 'whitesmoke';
    eventTag.style.fontWeight = 'bolder';
    eventTag.innerText = `Happy ${event}!`;

    const messageTag = document.createElement('p');
    messageTag.style.color = 'whitesmoke';
    messageTag.style.fontWeight = 'bolder';
    messageTag.innerText = message;

    greetsBlock.appendChild(greet);
    greetsBlock.appendChild(eventTag);
    greetsBlock.appendChild(messageTag);

}

function showPictureGreets(data) {
    greetsBlock.style.backgroundImage = `url(${data.urls.raw})`
}

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()

    let clientID = '_FD-mF99FwuSjAobRxVRSW-a3RNvtHupj3df_a2ux34'

    const greeting = document.getElementById('greeting').value;
    const event = document.getElementById('event').value;
    const message = document.getElementById('message').value;


    fetch(`https://api.unsplash.com/photos/random/?client_id=${clientID}`)
        .then(res => res.json())
        .then(data => showPictureGreets(data))



    showGreeting(greeting, event, message)
})

refresh.addEventListener('click', () => {
    location.reload();
})





