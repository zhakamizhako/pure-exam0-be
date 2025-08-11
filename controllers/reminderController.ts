import { Request, Response } from 'express'
import { RecordInstance } from '../utils/records'

// ===== FETCH ALL REMINDERS =====
export const fetchReminders = async (req: Request, res: Response) => {
    const RI = RecordInstance.getInstance()
    console.log(RI)
    return res.status(200).json(RI.propertyAgentRecordReminders)
}

// ===== INSERT REMINDER =====
export const insertReminder = async (req: Request, res: Response) => {
    let { id, agent_id, memo_id, date, created_at, updated_at } = req.body
    const RI = RecordInstance.getInstance()
    RI.insertPropertyAgentRecordReminder({ id, agent_id, memo_id, date, created_at, updated_at })
    console.log(RI)
    return res.status(200).json({ message: "Reminder inserted" })
}

// ===== DELETE REMINDER =====
export const deleteReminder = async (req: Request, res: Response) => {
    let { id } = req.params
    const RI = RecordInstance.getInstance()
    //@ts-ignore
    RI.deletePropertyAgentRecordReminderById(id)
    console.log(RI)
    return res.status(200).json({ message: "Reminder deleted" })
}

// ===== UPDATE REMINDER =====
export const updateReminder = async (req: Request, res: Response) => {
    let { id } = req.body
    const RI = RecordInstance.getInstance()
    RI.updatePropertyAgentRecordReminderById(req.body)
    console.log(RI)
    return res.status(200).json({ message: "Reminder updated" })
}

// ===== FIND REMINDER =====
export const findReminder = async (req: Request, res: Response) => {
    let { id } = req.body
    const RI = RecordInstance.getInstance()
    const reminder = RI.fetchPropertyAgentRecordReminderById(id)
    console.log(reminder)
    return res.status(200).json(reminder)
}
