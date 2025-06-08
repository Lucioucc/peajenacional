document.getElementById('entrarBtn').addEventListener('click', function() {
  const provincia = document.getElementById('provinciaSelect').value;
  if (!provincia) {
    alert('Por favor, seleccione una provincia.');
    return;
  }
  window.location.href = 'registro.html?provincia=' + encodeURIComponent(provincia);
});
