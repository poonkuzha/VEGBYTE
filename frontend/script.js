document.getElementById('scanButton').addEventListener('click', async () => {
    const fileInput = document.getElementById('imageUpload');
    if (!fileInput.files[0]) {
      alert('Please select an image first!');
      return;
    }
  
    const formData = new FormData();
    formData.append('image', fileInput.files[0]);
  
    try {
      const response = await fetch('http://localhost:3000/api/image-scan', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        const error = await response.json();
        alert(`Error: ${error.message}`);
        return;
      }
  
      const data = await response.json();
      document.getElementById('result').innerText = `Detected Food: ${data.scannedFood}`;
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to scan food!');
    }
  });