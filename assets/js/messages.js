const form = document.querySelector('.contact__email-form');
const messagesBox = document.getElementById('messages')

let clientMessages = JSON.parse(localStorage.getItem("client_messages")) || [];

function clearFields() {
    const fields = document.querySelectorAll('#form-field');

    fields.forEach((field) => {
        field.value = '';
    })
}

function makeMessagesBoxHTML() {
    clientMessages.forEach((client) => {
        messagesBox.innerHTML += `
        <div class="messages__box">
            <p><span class="bold">Nome: </span>${client.name}</p>
            <p><span class="bold">E-mail: </span>${client.email}</p>
            <p class=messages__box-message><span class="bold">Mensagem: </span>${client.message}</p>
        </div>
        `
    })
}

if (form) {
    form.addEventListener('submit', (ev) => {
        ev.preventDefault();

        let name = ev.target.elements['name'].value;
        let email = ev.target.elements['email'].value;
        let message = ev.target.elements['message'].value;

        let client_message = {
            'name': name,
            'email': email,
            'message': message
        }

        clientMessages.push(client_message);
        localStorage.setItem('client_messages', JSON.stringify(clientMessages));

        clearFields();
    });
}

if (clientMessages.length >= 1) {
    makeMessagesBoxHTML();
}