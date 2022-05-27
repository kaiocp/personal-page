const form = document.querySelector('.contact__email-form');

let clientMessages = JSON.parse(localStorage.getItem("client_messages")) || [];

function clearFields() {
    const fields = document.querySelectorAll('#form-field');

    fields.forEach((field) => {
        field.value = '';
    })
}

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