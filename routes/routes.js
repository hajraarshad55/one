const express = require("express");
const client = require("../connection");

const rolesController = require("../controllers/rolesController/roles.js");
const router = express.Router();

router.get("/getAllRoles", rolesController.getAllRoles);
router.post("/postALLRoles", rolesController.postAllRoles);
// router.put("/updateALLRoles/:id", rolesController.updateALLRoles);
// router.get("/getRolesById/:id", rolesController.getRoleById);

module.exports = router;
