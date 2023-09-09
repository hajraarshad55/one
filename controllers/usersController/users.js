const client = require("../../connection");

exports.getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await client.query(`Select* from users`);
    res.status(200).json({
      success: true,
      message: "the users are:",
      data: allUsers.rows,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
};
exports.postAllUsers = async (req, res, next) =>{
  try{
    const {first_name,last_name,designation} = req.body;
    await client.query(`insert into users(first_name,last_name,designation) 
    values('${first_name}','${last_name}','${designation}')`)
    res.status(200).json({
      success: true,
      message: "new users data is:"
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
} ;
exports.updateAllUsers = async (req, res, next) =>{
  try{
    const {first_name,last_name,designation} = req.body;
    let user=req.body;
    await client.query(`update users
                         set first_name = '${user.first_name}',
                         last_name = '${user.last_name}',
                         designation = '${user.designation}'
                         where id = ${req.params.id}`
)
    res.status(200).json({
      success: true,
      message: "updated users data is:"
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
} ;
exports.getUsersById = async (req, res, next) => {
  try {
    const allUsers = await client.query(`Select* from users where id=${req.params.id}`);
    res.status(200).json({
      success: true,
      message: "the specfic id users are:",
      data: allUsers.rows,
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
};
exports.deleteUsersById = async (req, res, next) => {
    try {
      const allRoles = await client.query(`delete from users where id=${req.params.id}`);
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