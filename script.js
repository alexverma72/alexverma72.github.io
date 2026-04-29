<script>
let selectedFile;

document.getElementById("fileInput").addEventListener("change", (e) => {
  selectedFile = e.target.files[0];
});

async function compressPDF() {

  if (!selectedFile) return alert("File select karo");

  const apiKey = "alexverma72@gmail.com_F0zGgDsFAnSyDQIpD8nRIVE6tSkD0YP1g3YsjcGPkEH7ygcpROMl0dhLUrLtgmyN";

  const formData = new FormData();
  formData.append("file", selectedFile);

  document.getElementById("loader").style.display = "block";

  const response = await fetch("https://api.pdf.co/v1/pdf/optimize", {
    method: "POST",
    headers: {
      "x-api-key": apiKey
    },
    body: formData
  });

  const data = await response.json();

  document.getElementById("loader").style.display = "none";

  if (data.url) {
    window.open(data.url);
  } else {
    alert("Error: " + data.message);
  }
}
</script>
