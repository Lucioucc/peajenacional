
function getProvinciaFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('provincia') || '';
}

const provincia = getProvinciaFromURL();
document.getElementById('provinciaDisplay').textContent =
  'Provincia seleccionada: ' + provincia;

const provincialBtn = document.getElementById('provincialBtn');
const nacionalBtn   = document.getElementById('nacionalBtn');
const provincialSection = document.getElementById('provincialSection');
const nacionalSection   = document.getElementById('nacionalSection');
const messageDiv = document.getElementById('message');


provincialBtn.addEventListener('click', () => {
  provincialSection.style.display = 'block';
  nacionalSection.style.display   = 'none';
  messageDiv.textContent = '';
});
nacionalBtn.addEventListener('click', () => {
  nacionalSection.style.display   = 'block';
  provincialSection.style.display = 'none';
  messageDiv.textContent = '';
});


document.getElementById('adherirProvBtn').addEventListener('click', () => {
  const marca = document.getElementById('marcaProv').value.trim();
  const patente = document.getElementById('patenteProv').value.trim();
  if (!marca || !patente) {
    alert('Por favor, complete todos los campos.');
    return;
  }
  messageDiv.textContent = 'Te has adherido al sistema de peajes provincial';
});


document.getElementById('adherirNacBtn').addEventListener('click', () => {
  const marca = document.getElementById('marcaNac').value.trim();
  const patente = document.getElementById('patenteNac').value.trim();
  if (!marca || !patente) {
    alert('Por favor, complete todos los campos.');
    return;
  }
  messageDiv.textContent = 'Te has adherido al sistema de peajes nacional';
});
