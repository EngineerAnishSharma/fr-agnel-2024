import axios from "axios";

const converttoBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error:", error);
      reject(reader.result);
    };
  });
};

export const detectEmptySpaces = async (file: File) => {
  let base64Image = await converttoBase64(file);

  axios({
    method: "POST",
    url: "https://detect.roboflow.com/empty-spaces-detection-in-shelf-data/2",
    params: {
      api_key: "sUdXz4Nd3fmnAPNXEfTl",
    },
    data: base64Image,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error.message);
    });
};
