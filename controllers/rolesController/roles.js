const client = require("../../connection");

exports.getAllRoles = async (req, res, next) => {
  try {
    const allRoles = await client.query(`Select* from roles`);
    res.status(200).json({
      success: true,
      message: "the roles are:",
      data: allRoles.rows,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
};
exports.postAllRoles = async (req, res, next) =>{
  try{
    const {gender,age,designation} = req.body;
    await client.query(`insert into roles( gender, age, designation) 
    values('${gender}','${age}','${designation}')`)
    res.status(200).json({
      success: true,
      message: "new roles data is:"
      //data: allRoles.rows,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
} ;
exports.updateAllRoles = async (req, res, next) =>{
  try{
    const {gender,age,designation} = req.body;
    let role=req.body;
    await client.query(`update roles
                         set gender = '${role.gender}',
                         age = '${role.age}',
                         designation = '${role.designation}'
                         where id = ${req.params.id}`
)
    res.status(200).json({
      success: true,
      message: "updated roles data is:"
      //data: allRoles.rows,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
} ;
exports.getRoleById = async (req, res, next) => {
  try {
    const allRoles = await client.query(`Select* from roles  where id=${req.params.id}`);
    res.status(200).json({
      success: true,
      message: "the specfic id roles are:",
      data: allRoles.rows,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
};

exports.deleteRolesById = async (req, res, next) => {
  try {
    const allRoles = await client.query(`delete from roles where id=${req.params.id}`);
    res.status(200).json({
      success: true,
      message: "the deleted id roles are:",
      //data: allRoles.rows,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
};



