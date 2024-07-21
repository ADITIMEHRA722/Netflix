import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: "invailid data",
        success: "false",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "invailid email and password",
        success: "false",
      });
    }

    const isMatch = bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "invailid email and password",
        success: "false",
        user,
      });
    }

    const tokenData = {
      id: user._id,
    };

    const token = jwt.sign(tokenData, "fhdbvkskvbxhjcj", { expiresIn: "1h" });
    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        message: `welcome back ${user.fullName}`,
        user,
        success: true,
      });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const Logout = async (req, res) => {
  return res
    .status(200)
    .cookie("token", "", { expiresIn: new Date(Date.now()), httpOnly: true })
    .json({
      message: "User logged out successfully ",
      success: true,
    });
};

export const Register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
      return res.status(401).json({
        message: "invailid data",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "This email is already exist",
        success: false,
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 16);

    await User.create({
      fullName,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
      message: " Account created Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
