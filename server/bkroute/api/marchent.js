const express = require("express");
const { marchentController, marchentApproveController } = require("../../controller/marchent.controller");
const { isAuthoraize } = require("../../middleware/isAuthoraize");
const { isAdminorMarchen } = require("../../middleware/isAdminorMarchent");
const router = express.Router();

router.post('/apply-marchent', marchentController)

router.post('/marchent-approve/:id',isAuthoraize,isAdminorMarchen('admin'), marchentApproveController)

module.exports = router;
 