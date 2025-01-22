import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import User from '../models/user.model'
import Task from '../models/task.model'

export const createStudent = async (req: Request, res: Response) => {
    const { name, email, department, password } = req.body

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const student = new User({
            name,
            email,
            department,
            password: hashedPassword,
            role: 'student',
        })

        await student.save()

        res.status(201).json({ message: 'Student created successfully', student })
    } catch (error) {
        res.status(500).json({ message: 'Server error', error })
    }
}

export const assignTask = async (req: Request, res: Response) => {
    const { title, assignedTo, dueDate } = req.body

    try {
        const student = await User.findById(assignedTo)
        if (!student || student.role !== 'student') {
            return res.status(404).json({ message: 'Student not found or invalid role' })
        }

        const task = new Task({
            title,
            assignedTo,
            dueDate,
            status: 'pending',
        })

        await task.save()

        res.status(201).json({ message: 'Task assigned successfully', task })
    } catch (error) {
        res.status(500).json({ message: 'Server error', error })
    }
}