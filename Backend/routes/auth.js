const express = require("express");
const router = express.Router();
const morgan = require("morgan");
const { Admin, validate, createDefaultAdmin } = require("../models/Admin");
const bcrypt = require("bcrypt");

router.use(express.json());
router.use(morgan("dev"));

// Create default admin on server startup
createDefaultAdmin();
router.post("/", async (req, res) => {
  console.log("Request Body:", req.body);
  try {
    console.log("Request Body2:", req.body);
    // console.log("Full Request Object:", req);
    const { error } = validate(req.body);
    console.log(error);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const admin = await Admin.findOne({ name: req.body.name });
    if (!admin) {
      return res.status(401).send({ message: "Invalid Username or Password" });
    }

    // const validPassword = await bcrypt.compare(req.body.password, admin.password);
    const validPassword = await bcrypt.compare(req.body.password, admin.password);
    console.log("Body :", req.body)
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Username or Password" });
    }

    const token = admin.generateAuthToken();
    res.status(200).send({
      data: {
        token,
        _id: admin._id,
        name: admin.name,
        // Add other fields as needed
      },
      message: "Logged in successfully",
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// const validate = (data) => {
//   const schema = Joi.object({
//     name: Joi.string().name().required().label("Username"),
//     password: Joi.string().required().label("Password"),
//   });
//   return schema.validate(data);
// };

module.exports = router;
