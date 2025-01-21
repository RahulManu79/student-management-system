import mongoose, { Schema, Document } from 'mongoose';

export interface ITask extends Document {
    title: string;
    assignedTo: mongoose.Types.ObjectId;
    dueDate: Date;
    status: 'pending' | 'overdue' | 'completed';
}

const TaskSchema: Schema = new Schema({
    title: { type: String, required: true },
    assignedTo: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    dueDate: { type: Date, required: true },
    status: { type: String, enum: ['pending', 'overdue', 'completed'], default: 'pending' },
});

export default mongoose.model<ITask>('Task', TaskSchema);
