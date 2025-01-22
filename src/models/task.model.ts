import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
    title: string;
    assignedTo: mongoose.Types.ObjectId;
    dueDate: Date;
    status: 'pending' | 'overdue' | 'completed';
    statusHistory: {
        status: string;
        updatedAt: Date;
    }[];
    completedAt?: Date;
}


const TaskSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'overdue', 'completed'],
        default: 'pending'
    },
    completedAt: {
        type: Date
    },
    statusHistory: [
        {
            status: { type: String, required: true },
            updatedAt: { type: Date, default: Date.now },
        },
    ],
}, { timestamps: true });




export default mongoose.model<ITask>('Task', TaskSchema);
