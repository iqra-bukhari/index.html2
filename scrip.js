const promptEl = document.getElementById("prompt");
const ratioEl = document.getElementById("ratio");
const soundEl = document.getElementById("sound");
const button = document.getElementById("generate");
const statusEl = document.getElementById("status");
const result = document.getElementById("result");
const video = document.getElementById("video");
const download = document.getElementById("download");

function status(message) {
  statusEl.textContent = message;
  statusEl.classList.remove("hidden");
}

button.addEventListener("click", async () => {
  const prompt = promptEl.value.trim();

  if (!prompt) {
    status("Please write a video prompt first.");
    return;
  }

  button.disabled = true;
  result.classList.add("hidden");
  status("Starting video generation… This may take a few minutes.");

  try {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: prompt,
        aspectRatio: ratioEl.value,
        sound: soundEl.checked
      })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Generation failed.");
    }

    // FIXED LINE
   const src = data:${data.mimeType};base64,${data.videoBase64};

    video.src = src;
    download.href = src;

    result.classList.remove("hidden");
    status("Video generated successfully.");

    result.scrollIntoView({
      behavior: "smooth"
    });

  } catch (err) {
    status("Error: " + err.message);
  } finally {
    button.disabled = false;
  }
});
