const express = require("express");
const client = require("../connection");

const rolesController = require("../controllers/rolesController/roles.js");
const router = express.Router();
const usersController = require("../controllers/usersController/users.js");
//const router = express.Router();
router.get("/getAllRoles", rolesController.getAllRoles);
router.post("/postALLRoles", rolesController.postAllRoles);
router.put("/updateALLRoles/:id", rolesController.updateAllRoles);
router.get("/getRoleById/:id", rolesController.getRoleById);
router.delete("/deleteRolesById/:id", rolesController.deleteRolesById);

router.get("/getAllUsers", usersController.getAllUsers);
router.post("/postALLUsers", usersController.postAllUsers);
router.put("/updateALLUsers/:id", usersController.updateAllUsers);
router.get("/getUsersById/:id", usersController.getUsersById);
router.delete("/deleteUsersById/:id", usersController.deleteUsersById)
module.exports = router;
