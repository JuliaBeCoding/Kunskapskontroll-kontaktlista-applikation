// Om textfälten är tomma samt addera kontakter.

let errorMessage = document.getElementById('errorMessage');

document.getElementById('create').addEventListener('click', function (e) {
  e.preventDefault();

  let firstName = document.getElementById('firstName').value;
  let phoneNumber = document.getElementById('phoneNumber').value;

  if (firstName === "" || phoneNumber === "") {
    errorMessage.textContent = "You need to fill both textboxes!";
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';

    let contactList = document.getElementById('contactList');
    let contactItem = document.createElement('li');
    contactItem.innerHTML = `
      ${firstName} ${phoneNumber}
      <button class="changeBtn">Change</button>
      <button class="deleteBtn">Delete</button>
      `

    contactList.appendChild(contactItem);

    document.getElementById('firstName').value = "";
    document.getElementById('phoneNumber').value = "";
  }
})

// Radera allt.

document.getElementById('delete').addEventListener('click', function (e) {
  e.preventDefault();

  let contactList = document.getElementById('contactList');

  if (!contactList.hasChildNodes()) {
    errorMessage.textContent = "Nothing to remove!"
    errorMessage.style.display = 'block';
  } else {
    contactList.innerHTML = "";
    errorMessage.style.display = 'none';
  }
})