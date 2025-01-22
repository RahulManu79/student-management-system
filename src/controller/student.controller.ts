import { Request, Response } from 'express'
import User from '../models/user.model'
import Task from '../models/task.model'

export const listAssignedTasks = async (req: Request, res: Response) => {
    const { studentId } = req.params
    const { page, limit } = req.query
    console.log("🚀 ~ viewAssignedTasks ~ studentId:", studentId)

    try {

        const tasks = await Task.find({
            assignedTo: studentId
        }).select('title dueDate status')
            .skip((parseInt(page as any) - 1) * parseInt(limit as any))
            .limit(parseInt(limit as any));

        if (!tasks || tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found for this student' })
        }

        const totalTasks = await Task.countDocuments({ assignedTo: studentId });


        res.status(200).json({
            tasks,
            length: totalTasks
        })
    } catch (error) {
        res.status(500).json({ message: 'Server error', error })
    }
}

export const viewAssignedTasks = async (req: Request, res: Response) => {
    const { studentId, taskId } = req.params
    console.log("🚀 ~ viewAssignedTasks ~ studentId:", studentId)

    try {
        const tasks = await Task.findOne({ _id: taskId, assignedTo: studentId })

        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ message: 'Server error', error })
    }
}

export const updateTaskStatus = async (req: Request, res: Response) => {
    const { studentId, taskId, status } = req.body;

    try {
        if (!['pending', 'completed', 'overdue'].includes(status)) {
            return res.status(400).json({ message: 'Invalid status value' });
        }
        const task = await Task.findOne({ _id: taskId, assignedTo: studentId });
        if (!task) {
            return res.status(404).json({ message: 'Task not found or not assigned to you' });
        }
        if (task.status === 'completed' && status !== 'completed') {
            return res.status(400).json({ message: 'Completed tasks cannot be reverted' });
        }

        task.status = status;

        task.statusHistory.push({ status, updatedAt: new Date() });

        if (status === 'completed' && !task.completedAt) {
            task.completedAt = new Date();
        }

        await task.save();

        res.status(200).json({ message: 'Task status updated successfully', task });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};