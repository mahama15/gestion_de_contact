// Déclaration des variables
const formulaire = document.getElementById('contact-form');
const afficherBtn = document.getElementById('afficher');
const supprimerBtn = document.getElementById('supprimer');
const enregistrerBtn = document.getElementById('enregistrer');
const tableau = document.getElementById('tableau');
let contacts = [];

// Ajouter un contact
formulaire.addEventListener('submit', (e) => {
  e.preventDefault();
  const numero = document.getElementById('numero').value;
  const administration = document.getElementById('administration').value;
  const telephone = document.getElementById('telephone').value;
  const telephones = document.getElementById('telephones').value;
  const contact = {
    numero: numero,
    administration: administration,
    telephone_fixe: telephone,
    telephone_GSM: telephones
  };
  contacts.push(contact);
  formulaire.reset();
});

// Afficher les contacts
afficherBtn.addEventListener('click', () => {
  // Supprimer le contenu actuel du tableau
  tableau.innerHTML = '';
  // Ajouter une ligne d'en-tête
  const entete = tableau.createTHead();
  const ligneEntete = entete.insertRow();
  const colonneNom = ligneEntete.insertCell();
  colonneNom.innerText = 'Numero';
  const colonnePrenom = ligneEntete.insertCell();
  colonnePrenom.innerText = 'Administration';
  const colonneEmail = ligneEntete.insertCell();
  colonneEmail.innerText = 'Telephone fixe';
  const colonnetelephone = ligneEntete.insertCell();
  colonnetelephone.innerText = 'Telephone GSM';
  // Ajouter les données des contacts
  const corps = tableau.createTBody();
  contacts.forEach((contact) => {
    const ligneCorps = corps.insertRow();
    const colonneNumero = ligneCorps.insertCell();
    colonneNumero.innerText = contact.numero;
    const colonneAdministration = ligneCorps.insertCell();
    colonneAdministration.innerText = contact.administration;
    const colonneTelephone_fixe = ligneCorps.insertCell();
    colonneTelephone_fixe.innerText = contact.telephone;
    const colonneTelephone_GSM = ligneCorps.insertCell();
    colonneTelephone_GSM.innerText = contact.telephones;
  });
});

// Supprimer un contact
supprimerBtn.addEventListener('click', () => {
  const administration = prompt('Entrez le nom de l\'administration du contact à supprimer:');
  const index = contacts.findIndex((contact) => contact.administration === administration);
  if (index >= 0) {
    contacts.splice(index, 1);
    alert('Le contact a été supprimé.');
  } else {
    alert('Le contact n\'a pas été trouvé.');
  }
});

// Enregistrer les contacts
enregistrerBtn.addEventListener('click', () => {
  const json = JSON.stringify(contacts);
  localStorage.setItem('contacts', json);
  alert('Les contacts ont été enregistrés.');
});

// Charger les contacts enregistrés
window.addEventListener('load', () => {
  const json = localStorage.getItem('contacts');
  if (json !== null) {
    contacts = JSON.parse(json);
  }
});
JSON.parse(localStorage.getItem('contacts')) || [];
