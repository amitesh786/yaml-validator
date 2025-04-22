document.getElementById('validateBtn').addEventListener('click', function () {
  const fileInput = document.getElementById('yamlFile');
  const file = fileInput.files[0];
  const result = document.getElementById('result');
  const fileContent = document.getElementById('contentPreview');

  result.textContent = '';
  result.className = '';
  fileContent.textContent = '';

  if (!file) {
    result.textContent = 'Please select a YAML file.';
    result.className = 'text-warning';
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const content = e.target.result;
    fileContent.textContent = content;

    try {
      const data = jsyaml.load(content);

      if (!data || typeof data !== 'object') {
        throw new Error("YAML is empty or has an invalid structure.");
      }

      result.textContent = 'YAML is valid ✅';
      result.className = 'text-success';
    } catch (err) {
      result.textContent = 'Invalid YAML ❌: ' + err.message;
      result.className = 'text-danger';
    }
  };

  reader.readAsText(file);
});
