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

exports.postAllRoles = async (req, res, next) => {
  try {
    await client.query(`insert into roles( gender, age, designation),
     
            values('${gender}','${age}','${designation}')`);
            console.log(">.");

    res.status(200).json({
      success: true,
      message: "role posted successfully",
    });
  } catch (err) {
    return res.status(400).json({ success: false, message: err.message });
  }
  client.end;
};
