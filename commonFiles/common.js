const { google } = require("googleapis");
const { Readable } = require("stream");

const uploadFileHandler = async (file, buffer) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "./key.json",
    scopes: ["https://www.googleapis.com/auth/drive"],
  });
  const drive = google.drive({
    version: "v3",
    auth,
  });
  const response = await drive.files.create({
    requestBody: {
      name: file.originalname,
      mimeType: file.mimetype,
      parents: ["1Blf-H0LT8_R8fEovP3-3X75DQpsYUEzA"],
    },
    media: {
      body: Readable.from(buffer),
    },
  });
  return response;
};

module.exports = {
  uploadFileHandler,
};
