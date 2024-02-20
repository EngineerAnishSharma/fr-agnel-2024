import axios from "axios";

const sendMessage = (message: string) => {
  const url = "https://graph.facebook.com/v18.0/144528362069356/messages";
  const accessToken =
    "EAAMZAoiJPdIsBOxBbByapOZB7qgATfWhqaDUc8Hyf2mcD3AjYohvCqp0QSRAfEtnpnnXytE2oiZBF0cX8xQIpZAZCZAJLiShfS8k4ZBIsTieHnppz2hIQS6MuiXbbVFyFrkQudulEMFfPIefhdXZBgSYENwa66kmdxLVCLTczLwsQdVs3dahM63Cu8B2eYY1srRXKmZAPuhJXQsBwuO0y4RQZD"; // Replace with your actual Facebook access token

  const data = {
    messaging_product: "whatsapp",
    to: "919821691991",
    type: "text",
    text: {
      body: message,
    },
  };

  const headers = {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  };

  axios
    .post(url, data, { headers })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.response.data);
    });
};

export default sendMessage;
