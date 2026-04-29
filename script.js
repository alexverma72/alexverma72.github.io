let selectedFile;

// file select
document.getElementById("fileInput").addEventListener("change", (e) => {
  selectedFile = e.target.files[0];
  document.getElementById("fileName").innerText = selectedFile.name;
});

// drag drop
const dropArea = document.getElementById("dropArea");

dropArea.ondragover = (e) => {
  e.preventDefault();
};

dropArea.ondrop = (e) => {
  e.preventDefault();
  selectedFile = e.dataTransfer.files[0];
  document.getElementById("fileName").innerText = selectedFile.name;
};

// COMPRESS API
async function compressPDF() {

  if (!selectedFile) return alert("File select karo");

  const apiKey = "alexverma72@gmail.com_fh0K1ep0zjRqqAGMVghcIWhmvosbde9zlowF5ub4DREfJGJFsLD0LFuBT2LJcOjF"; // 🔴 yaha new key daalna

  const formData = new FormData();
  formData.append("file", selectedFile);

  document.getElementById("loader").style.display = "block";

  try {
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
      window.open(data.url, "_blank");
    } else {
      alert("Error: " + data.message);
    }

  } catch (error) {
    document.getElementById("loader").style.display = "none";
    alert("Network error");
    console.error(error);
  }
  function openTool(tool) {

  if (tool === "compress") {
    window.location.href = "index.html";
  }

  else if (tool === "merge") {
    window.location.href = "tools/merge.html";
  }

  else if (tool === "jpg") {
    window.location.href = "tools/pdf-to-jpg.html";
  }

  else {
    alert(tool + " coming soon");
  }
}
