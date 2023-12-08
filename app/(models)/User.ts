import { Schema, model, models } from "mongoose";
import { connectToDb } from "../utils/database";

connectToDb();

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      unique: [true, "Email already exists"],
      required: [true, "Email is required"],
    },
    password: String,
  },
  {
    timestamps: true,
  }
);

const User = models.User || model("User", userSchema);

export default User;
