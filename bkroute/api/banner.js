const express = require("express");
const { addBannerController, allBannerController, updateBannerController, deleteBannerController } = require("../../controller/banner.controller");
const upload = require("../../utils/upload");
const { isAuthoraize } = require("../../middleware/isAuthoraize");
const { isAdminorMarchen } = require("../../middleware/isAdminorMarchent");
const router = express.Router();


// localhost:5100/api/v1/api/banner/add-banner
router.post("/add-banner",upload.single('image'),isAuthoraize,isAdminorMarchen('admin'), addBannerController);

// localhost:5100/api/v1/api/banner/all-banner
router.get("/all-banners" ,allBannerController);

// localhost:5100/api/v1/api/banner/update-banner
router.patch("/update-banner/:id" ,upload.single('image'),updateBannerController);

// localhost:5100/api/v1/api/banner/delete-banner
router.delete("/delete-banner/:id" ,deleteBannerController);




module.exports = router;
 