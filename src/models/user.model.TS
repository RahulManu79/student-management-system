import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    department?: string;
    password: string;
    role: 'admin' | 'student';
}

const UserSchema: Schema = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'student'],
        required: true
    },
    
});

export default mongoose.model<IUser>('User', UserSchema);
