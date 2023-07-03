import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

import { IUser, IUserDocument } from "./user.interface";
import { JWT_SECRET, JWT_EXPIRE } from "@config/index";

let Schema = mongoose.Schema;
let UserSchema = new Schema<IUserDocument>(
    {
        name: {
            type: String,
            required: [true, "Please add a name"],
        },
        email: {
            type: String,
            required: [true, "Please add an email"],
            unique: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please add a valid email",
            ],
        },
        role: {
            type: String,
            enum: ["user", "writer"],
            default: "user",
        },
        password: {
            type: String,
            required: [true, "Please add a password"],
            minlength: 6,
            select: false,
        },
        photo: {
            type: String,
            required: false,
        },
        about: {
            type: String,
        },
        connected: {
            type: Boolean,
            required: true,
            default: false,
        },
        activated: {
            type: Boolean,
            required: true,
            default: false,
        },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, required: false },
    },
    { _id: true }
);

/**
 * Crypt user password before save
 */
UserSchema.pre<IUserDocument>("save", async function (next: Function) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

/**
 * generate a jwt token
 * @return jwt string signed token
 */
UserSchema.methods.generateToken = function (this: IUserDocument) {
    return jwt.sign(
        {
            _id: this._id,
            role: this.role,
        },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRE }
    );
};

/**
 * match database password with user input
 * @return boolean value
 */
UserSchema.methods.matchPassword = async function (
    this: IUserDocument,
    inputPassword: string
) {
    return await bcrypt.compare(inputPassword, this.password);
};

export default mongoose.model<IUserDocument>("User", UserSchema);