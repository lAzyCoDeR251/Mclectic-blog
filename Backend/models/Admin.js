const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require("bcrypt");

const AdminSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);


AdminSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_TOKEN, {
    expiresIn: "1d",
  });
  return token;
};

const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("Username"),
    password: passwordComplexity().required().label("Password"),
  });
  return schema.validate(data, { abortEarly: false });
};



const Admin = mongoose.model("Admin", AdminSchema);

// Function to create default admin
const createDefaultAdmin = async () => {
  try {
    const existingAdmin = await Admin.findOne({ name: "admin" });

    if (!existingAdmin) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash("Pass@123456", salt);

      const defaultAdmin = new Admin({
        name: "admin",
        password: hashedPassword,
      });

      await defaultAdmin.save();
      console.log("Default admin created successfully.");
    } else {
      console.log("Default admin already exists.");
    }
  } catch (error) {
    console.error("Error creating default admin:", error);
  }
};

module.exports = { Admin, validate, createDefaultAdmin };
