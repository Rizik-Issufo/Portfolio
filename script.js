const sendbtn = document.querySelector('#submit')
const header = document.querySelector('#sucessComment')

sendbtn.addEventListener("click", function (event) {
    event.preventDefault()
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const number = document.querySelector('#number').value;
    const topic = document.querySelector('#topic').value;
    const comments = document.querySelector('#comments').value;
    
    console.table([name, email, number, topic, comments])

    header.innerHTML = "Comentario enviado com sucesso! Obrigado por me ajudar a crescer. Muito Obrigado " + name;
    // window.alert(name)
    // console.log(name);
    // console.log(email);
    // console.log(number);
    // console.log(topic);
    // console.log(comments)
})