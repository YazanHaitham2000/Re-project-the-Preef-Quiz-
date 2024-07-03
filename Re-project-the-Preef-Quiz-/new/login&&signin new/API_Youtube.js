// =========================API Youtube ===========================

const apiKey = "AIzaSyAUa1va6hFCjTYzd8GwWeBinsoaXXAxBAY";
const videoId = "agnrsaSxp-I"; // Replace with the actual video ID

async function fetchVideoDetails() {
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,contentDetails,statistics&key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    displayVideoDetails(data.items[0]);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

function displayVideoDetails(video) {
  document.getElementById(
    "video"
  ).src = `https://www.youtube.com/embed/${video.id}`;
  document.getElementById("title").textContent = video.snippet.title;
}

//fetchVideoDetails();
