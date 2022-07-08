const mongoose = require("mongoose");
const { Schema } = mongoose;
const usersSchema = new Schema({
  uIDSession: { type: String, unique: true, required: true },
  expiredSession: { type: Object, required: true },
  timeMaxSession: { type: Number, required: true },
  user: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  userType: { type: String, required: true },
});

module.exports = usersSchema;
