const { apiResponse } = require("../utils/apiResponse");

exports.isAdminorMarchen = (...role) => {
    return (req, res, next) => {
    if (role.includes(req.session.user.role)) {
      next();
    } else {
      apiResponse(res, 401, "Access denied");
    }
  };
};
