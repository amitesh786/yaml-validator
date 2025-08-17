const validateBtnClass = document.querySelector('.btn-success');
const resetBtnClass = document.querySelector('.btn-primary');
const fileContentId = document.getElementById('fileContent');
const fileContent = document.getElementById('contentPreview');
const fileInput = document.getElementById('yamlFile');
const fileList = document.getElementById('fileList');
const result = document.getElementById('result');

validateBtnClass.disabled = true;
resetBtnClass.disabled = true;
result.textContent = '';
result.className = '';
fileContent.textContent = '';

const showToast = (message, type = 'primary') => {
    const toastEl = document.getElementById('toastMessage');
    const toastBody = toastEl.querySelector('.toast-body');

    toastBody.textContent = message;
    toastEl.className = `toast align-items-center text-bg-${type} border-0`;

    const toast = new bootstrap.Toast(toastEl, {
        delay: 5000
    });
    toast.show();
}

document.getElementById('yamlFile').addEventListener('change', function () {
  const fileInput = this;
  const file = fileInput.files[0];
  fileContentId.classList.add('d-none'); 

  fileList.innerHTML = '';

  if (file) {
    validateBtnClass.disabled = false;
    resetBtnClass.disabled = false;
    const listItem = document.createElement('li');
    listItem.className = "list-group-item d-flex justify-content-between align-items-center";
    listItem.textContent = file.name;

    const fileSize = document.createElement('span');
    fileSize.className = "badge bg-primary rounded-pill";
    fileSize.textContent = `${(file.size / 1024).toFixed(2)} KB`;
    
    listItem.appendChild(fileSize);
    fileList.appendChild(listItem);
    fileList.classList.remove('d-none');
    result.className = "";
    result.textContent = "";
  } else {
    fileList.classList.add('d-none');
    validateBtnClass.disabled = true;
    resetBtnClass.disabled = true;
  }
});

document.getElementById('validateBtn').addEventListener('click', function () {
  const fileInput = document.getElementById('yamlFile');
  const file = fileInput.files[0];  
  fileContentId.classList.remove('d-none');
  
  if (!file) {
    result.textContent = 'Please select a YAML file.';
    result.className = 'text-warning';
    showToast('Please select a YAML file.', 'warning');
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const content = e.target.result;
    fileContent.textContent = content;

    try {
      const data = jsyaml.load(content);

      if (!data || typeof data !== 'object') {
        showToast('YAML is empty or has an invalid structure.', 'danger');
      }

      result.textContent = 'YAML is valid ✅';
      result.className = 'text-success';
      showToast('YAML is valid.', 'success');
    } catch (err) {
      result.textContent = 'Invalid YAML ❌: ' + err.message;
      result.className = 'text-danger';
      showToast('Invalid YAML.', 'danger');
    }
  };

  reader.readAsText(file);
});

document.getElementById('resetBtn').addEventListener('click', function () {
  resetAll();
});

const resetAll = () => {
  fileInput.value = '';
  result.textContent = '';
  result.className = '';
  fileContent.textContent = '';
  fileList.innerHTML = '';
  fileList.classList.add('d-none');
  validateBtnClass.disabled = true;
  resetBtnClass.disabled = true;
  fileContentId.classList.add('d-none');
  showToast('Reset all fields.', 'success');
}
