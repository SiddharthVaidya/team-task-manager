const bcrypt = require('bcrypt')
const Validator = require("../utils/Validator");
const User = require("../model/UserModel")
const {v4: uuidv4} = require("uuid")

const signUpController = async (req, res) => {
    let request = req.body
  if (request == null || !Validator.validateSignUp(request).status) {
    console.log(req);
    return res.status(400).json({ message: "Bad request" });
  }
  //check email exists
  const exists = await User.findOne({ where: { email: req.body.email } });
  if (exists) {
    return res.status(400).json({ message: "Email already exists" });
  }
  var hashedPassword = bcrypt.hashSync(req.body.password, 10);
  //store it in db
  await User.create({
    id: uuidv4(),
    email: req.body.email,
    password: hashedPassword,
    name: req.body.name,
    contact_number: req.body.contact_number,
    designation: req.body.designation,
  }).catch((err) => {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  });
  return res.status(201).json({ message: "User created successfully" });
};

module.exports = signUpController;