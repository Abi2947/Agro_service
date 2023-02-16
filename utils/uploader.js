const multer = require("multer");

const imageFilter = (req, file, cb) => {
  const type = file.mimetype.split("/")[0];
  if (type === "image") {
    // accepted file
    cb(null, true);
  } else {
    // rejected file
    cb(null, false);
  }
};

const myStorage = multer.diskStorage({
  filename: (req, file, cb) => {
    const fileName = Date.now() + file.originalname;
    cb(null, fileName);
  },
  destination: (req, file, cb) => {
    cb(null, process.cwd() + "/uploads");
  },
});

const upload = multer({
  storage: myStorage,
  fileFilter: imageFilter,
});

module.exports = upload;