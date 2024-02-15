const UploadModel = require("../../models/UploadModel");
const UploadService = {
  upload: async ({ }) => {
    // console.log("成功");
    return UploadModel.create({
        src,
        alt,
        url,
        href,
        fill
    });
  },
};
module.exports = UploadService;