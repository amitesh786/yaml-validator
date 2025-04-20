document.getElementById('yamlFile').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const result = document.getElementById('result');
    const fileContent = document.getElementById('contentPreview');
    result.textContent = '';
    result.className = '';
    fileContent.textContent = '';
  
    if (!file) return;
  
    const reader = new FileReader();  
    reader.onload = function(e) {
      const content = e.target.result;
      
      fileContent.textContent = content;
  
      try {
        const data = jsyaml.load(content);
        
        if (!data || typeof data !== 'object') {
          throw new Error("YAML is empty or invalid structure.");
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
