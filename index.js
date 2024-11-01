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
    btnEvents(contactItem);

    // Redigera kontakt.

    function btnEvents(contactItem) {

    contactItem.querySelector('.changeBtn').addEventListener('click', function () {
      let contactText = contactItem.firstChild.textContent.trim();
      let [currentFirstName, currentPhoneNumber] = contactText.split(' ');

      let firstNameInput = document.createElement('input');
      firstNameInput.type = 'text';
      firstNameInput.value = currentFirstName;

      let firstPhoneNumberInput = document.createElement('input');
      firstPhoneNumberInput.type = 'text';
      firstPhoneNumberInput.value = currentPhoneNumber;

      contactItem.innerHTML = '';

      contactItem.appendChild(firstNameInput);
      contactItem.appendChild(firstPhoneNumberInput);
      
      let saveBtn = document.createElement('button');
      saveBtn.textContent = 'Save';
      contactItem.appendChild(saveBtn);

      saveBtn.addEventListener('click', function () {
        if (firstNameInput.value === "" || firstPhoneNumberInput.value === "") {
          errorMessage.textContent = "Can´t be empty!";
          errorMessage.style.display = 'block';
        } else {
          errorMessage.style.display = 'none';

          let updatedFirstName = firstNameInput.value;
          let updatedPhoneNumber = firstPhoneNumberInput.value;

          contactItem.innerHTML = `
          ${updatedFirstName} ${updatedPhoneNumber}
          <button class="changeBtn">Change</button>
          <button class="deleteBtn">Delete</button>        
          `;
          btnEvents(contactItem);
        }
      }) 
    })

    // Radera enskild kontakt.

    contactItem.querySelector('.deleteBtn').addEventListener('click', function () {
      contactList.removeChild(contactItem);
    });
  }

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

