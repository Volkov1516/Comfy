import mongoose, { mongo } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
});

UserSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10);
});

UserSchema.methods.createJWT = function () {
    return jwt.sign({ userId: this._id, email: this.email }, process.env.JWT_SECRET as string, { expiresIn: process.env.JWT_LIFETIME as string});
};

export default mongoose.model('User', UserSchema);
