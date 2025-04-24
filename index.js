document.getElementById('yamlFile').addEventListener('change', function () {
  const fileInput = this;
  const file = fileInput.files[0];
  const fileList = document.getElementById('fileList');

  fileList.innerHTML = '';

  if (file) {   
    const listItem = document.createElement('li');
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.textContent = file.name;

    const fileSize = document.createElement('span');
    fileSize.className = "badge bg-primary rounded-pill";
    fileSize.textContent = `${(file.size / 1024).toFixed(2)} KB`;
    
    listItem.appendChild(fileSize);
    fileList.appendChild(listItem);
    fileList.classList.remove('d-none');
  } else {
    fileList.classList.add('d-none');
  }
});

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

document.getElementById('resetBtn').addEventListener('click', function () {
  const fileInput = document.getElementById('yamlFile');
  const result = document.getElementById('result');
  const fileContent = document.getElementById('contentPreview');
  const fileList = document.getElementById('fileList');

  fileInput.value = '';
  result.textContent = '';
  result.className = '';
  fileContent.textContent = '';
  fileList.innerHTML = '';
  fileList.classList.add('d-none');
});
