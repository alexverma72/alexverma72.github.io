async function compressPDF() {
  if (!selectedFile) return alert("File select karo");

  document.getElementById("loader").style.display = "block";

  const arrayBuffer = await selectedFile.arrayBuffer();
  const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer);

  const compressed = await pdfDoc.save({
    useObjectStreams: true
  });

  document.getElementById("loader").style.display = "none";

  const blob = new Blob([compressed], { type: 'application/pdf' });

  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "compressed.pdf";
  a.click();
}
let isHindi = false;

function toggleLang() {
  isHindi = !isHindi;

  if (isHindi) {
    document.querySelector("h1").innerText = "बाबाज़ोन PDF मशीन";
  } else {
    document.querySelector("h1").innerText = "BABAZONE PDF MACHINE";
  }
}
else if (tool === "jpg") {
  window.location.href = "tools/pdf-to-jpg.html";
}