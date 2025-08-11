import { Request, Response } from 'express'
import { RecordInstance } from '../utils/records'

// ===== FETCH ALL MEMOS =====
export const fetchMemos = async (req: Request, res: Response) => {
    const RI = RecordInstance.getInstance()
    console.log(RI)
    return res.status(200).json(RI.propertyAgentRecordMemos)
}

// ===== INSERT MEMO =====
export const insertMemo = async (req: Request, res: Response) => {
    let { id, agent_id, notes, created_at, updated_at } = req.body
    const RI = RecordInstance.getInstance()
    RI.insertPropertyAgentRecordMemo({ id, agent_id, notes, created_at, updated_at })
    console.log(RI)
    return res.status(200).json({ message: "Memo inserted" })
}

// ===== DELETE MEMO =====
export const deleteMemo = async (req: Request, res: Response) => {
    let { id } = req.params
    const RI = RecordInstance.getInstance()
    //@ts-ignore
    RI.deletePropertyAgentRecordMemoById(id)
    console.log(RI)
    return res.status(200).json({ message: "Memo deleted" })
}

// ===== UPDATE MEMO =====
export const updateMemo = async (req: Request, res: Response) => {
    let { id } = req.body
    const RI = RecordInstance.getInstance()
    RI.updatePropertyAgentRecordMemoById(req.body)
    console.log(RI)
    return res.status(200).json({ message: "Memo updated" })
}

// ===== FIND MEMO =====
export const findMemo = async (req: Request, res: Response) => {
    let { id } = req.body
    const RI = RecordInstance.getInstance()
    const memo = RI.fetchPropertyAgentRecordMemoById(id)
    console.log(memo)
    return res.status(200).json(memo)
}
