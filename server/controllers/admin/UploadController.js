const UploadService = require("../../services/admin/UploadService.js");

const UploadController = {
  upload: async (req, res) => {
    // console.log(req.file,req.body);
    const fill = req.file ? `/uploads/${req.file.filename}` : "";
    const { src, alt, url, href } = req.body;
    //调用service进行增删改查
    await UploadService.upload({
      src,
      alt,
      url,
      href,
      fill
    });
    res.send({
      ActionType: "OK",
    });
  },
};

module.exports = UploadController;
