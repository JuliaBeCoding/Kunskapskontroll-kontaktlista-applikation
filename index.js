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
    
    let firstNameInput = document.createElement('input');
    firstNameInput.type = 'text';
    firstNameInput.value = firstName;
    firstNameInput.disabled = true;

    let phoneNumberInput = document.createElement('input');
    phoneNumberInput.type = 'text';
    phoneNumberInput.value = phoneNumber;
    phoneNumberInput.disabled = true;

    let changeBtn = document.createElement('button');
    changeBtn.textContent = 'Change';
    changeBtn.className = 'changeBtn';

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'deleteBtn';

    contactItem.appendChild(firstNameInput);
    contactItem.appendChild(phoneNumberInput);
    contactItem.appendChild(changeBtn);
    contactItem.appendChild(deleteBtn);

    contactList.appendChild(contactItem);

    contactItemBtns(contactItem, firstNameInput, phoneNumberInput, changeBtn, deleteBtn);

    document.getElementById('firstName').value = "";
    document.getElementById('phoneNumber').value = "";
  }
})

function contactItemBtns(contactItem, firstNameInput, phoneNumberInput, changeBtn) {
  changeBtn.addEventListener('click', function () {
    if (changeBtn.textContent === 'Change') {
      firstNameInput.disabled = false;
      phoneNumberInput.disabled = false;
      changeBtn.textContent = 'Save';
    } else {
      if (firstNameInput.value === "" || phoneNumberInput.value === "") {
        errorMessage.textContent = 'Can´t be empty!';
        errorMessage.style.display = 'block';
        } else {
        errorMessage.style.display = 'none';
            
        firstNameInput.disabled = true;
        phoneNumberInput.disabled = true;
        changeBtn.textContent = 'Change';
      }
    }
  })

  contactItem.querySelector('.deleteBtn').addEventListener('click', function () {
    contactItem.remove();
  });
}

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

