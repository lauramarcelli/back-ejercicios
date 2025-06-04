const API_URL = '/api/contacts'

const form = document.getElementById('contact-form');
const contactsTable = document.getElementById('contacts-table');

async function fetchContacts(){
    const res = await fetch(API_URL);
    const contacts = await res.json();
    renderContacts(contacts); 
}

function renderContacts(contacts){
    contactsTable.innerHTML = contacts.map(contact =>
        `
        <tr>
            <td>${contact.name}</td>
            <td>${contact.email}</td>
            <td>${contact.phone}</td>
            <td>
                <button class="delete-btn" onclick="deleteContact('${contact.id}')">Eliminar</button>
            </td>
        </tr>
        `).join('');
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: Date.now().toString(),name, email, phone})
    });

    form.reset();
    fetchContacts();
});

async function deleteContact(id){
    await fetch(`${API_URL}/${id}`, {method: 'DELETE'})
    fetchContacts();
};

fetchContacts();