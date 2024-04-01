"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userUpdate = void 0;
const models_1 = require("../models");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_controller_1 = require("./auth.controller");
// UPDATE USER
const userUpdate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    const { name, email, phoneNumber, avatar_url } = req.body;
    if (!authorization) {
        return res.status(401).json({
            message: "Invalid credentials",
        });
    }
    const { id } = jsonwebtoken_1.default.verify(authorization, auth_controller_1.secretKey);
    const user = yield models_1.UserModel.findOne({ _id: id });
    if (user) {
        try {
            const updatedUser = yield models_1.UserModel.updateOne({ _id: id }, { name, email, phoneNumber, avatar_url });
            return res.json(updatedUser);
        }
        catch (error) {
            return res
                .status(401)
                .json({ error: error, message: "could not update user information" });
        }
    }
    return res.json("user not found");
});
exports.userUpdate = userUpdate;
