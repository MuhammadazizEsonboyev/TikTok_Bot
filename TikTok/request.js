const axios = require("axios");

async function tiktok_dowlander(tiktok_link) {
  try {
    const options = {
      method: "GET",
      url:
        "https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index",
      params: { url: tiktok_link },
      headers: {
        "X-RapidAPI-Key": "745f72ffe6mshcc89a002330d2fbp12e182jsn3c3f102060d6",
        "X-RapidAPI-Host":
          "tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com"
      }
    };

    const response = await axios.request(options);
    const tiktokLink = response.data.video[0];
    return tiktokLink;
  } catch (error) {
    console.error(error + "");
  }
}


module.exports = {
  tiktok_dowlander
};
