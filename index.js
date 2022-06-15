function randomGreetPicture() {


    let clientID = '_FD-mF99FwuSjAobRxVRSW-a3RNvtHupj3df_a2ux34'
    fetch(`https://api.unsplash.com/photos/random/?client_id=${clientID}`)
    .then(res => res.json())
    .then(data => console.log(data))
}


document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()

    const greeting = document.getElementById('greeting').value;
    const event = document.getElementById('event').value
    const message = document.getElementById('message').value;


    console.log(greeting)
    console.log(event)
    console.log(message)

    randomGreetPicture()
})





