export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const apiKey = process.env.PDF_API_KEY;

  try {
    const response = await fetch("https://api.pdf.co/v1/pdf/optimize", {
      method: "POST",
      headers: {
        "x-api-key": apiKey
      },
      body: req.body
    });

    const data = await response.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
