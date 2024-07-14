document.addEventListener('DOMContentLoaded', (event) => 
    {
  const initialContacts = 
  [
      { name: "Roaia Habashi",age: "19", email: "ro2ya.habashi@gmail.com", phone: "0525127600" },
      { name: "Rawan Habashi",age: "20", email: "rawan.hb18@gmail.com", phone: "050-3587185" },
      { name: "Buroog Sawaeed",age: "22", email: "brwgswd@gmail.com", phone: "0525822206" },
      { name: "Nebal Egbaria",age: "35", email: "nebal1234@gmail.com", phone: "0506566304" },
      { name: "Rihan Zoabe", age: "16",email: "rihanZ10@gmail.com", phone: "054-9270013" },
  ];

  let contacts = [...initialContacts];
  let editingContactIndex = null;

  const renderContacts = () => 
    
    {
      const contactList = document.getElementById("contactList");
      contactList.innerHTML = ""; // Clear existing list

      contacts.forEach((contact, index) =>
         {
          const li = document.createElement("li");
          li.classList.add("contact-item");
          li.innerHTML = `
              <div class="contact-details">
                  <div class="contact-name">${contact.name}</div>
                  <div class="contact-email">Email: ${contact.email}</div>
                  <div class="contact-phone">Phone: ${contact.phone}</div>
                 <div class="contact-age">age: ${contact.age}</div>
                  <button onclick="editContact(${index})">Edit</button>
              </div>`;
          contactList.appendChild(li);
      });
  }

  window.editContact = (index) => 
    {
      editingContactIndex = index;
      const contact = contacts[index];
      document.getElementById("name").value = contact.name;
      document.getElementById("email").value = contact.email;
      document.getElementById("phone").value = contact.phone;
      document.getElementById("age").value = contact.age;
      document.getElementById("popupTitle").textContent = "Edit Contact";
      document.getElementById("popup").style.display = "block";
  }

  document.getElementById("openPopupButton").addEventListener("click", () => 
    {
      editingContactIndex = null;
      document.getElementById("contactForm").reset();
      document.getElementById("popupTitle").textContent = "Add Contact";
      document.getElementById("popup").style.display = "block";
  });

  document.getElementById("closePopupButton").addEventListener("click", () => 
    {
      document.getElementById("popup").style.display = "none";
  });

  document.getElementById("contactForm").addEventListener("submit", (event) => 
    {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const age= document.getElementById("age").value;

      if (editingContactIndex === null)
      {
          contacts.push({ name, email, phone,age });
      } 
      else 
      {
          contacts[editingContactIndex] = { name, email, phone,age };
      }

      renderContacts();

      document.getElementById("contactForm").reset();
      document.getElementById("popup").style.display = "none";
  });

  window.deleteContacts = () => 
    {
      contacts = [];
      renderContacts();
  }

  renderContacts(); // Initial render of all contacts
});

