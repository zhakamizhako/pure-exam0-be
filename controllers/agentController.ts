import { Request, Response } from 'express'
import { RecordInstance } from '../utils/records'

export const fetchAgents = async (req: Request, res: Response) => {
    const RI = RecordInstance.getInstance()
    console.log(RI)
    return res.status(200).json(RI.propertyAgents)
}

export const insertAgent = async (req: Request, res: Response) => {
    let { id, firstName, lastName, email, mobileNumber, created_at, updated_at, is_deleted, status, property_id } = req.body
    const RI = RecordInstance.getInstance()
    RI.insertPropertyAgent({ id, firstName, lastName, email, mobileNumber, created_at, updated_at, is_deleted, status, property_id })
    console.log(RI)
    return res.status(200).json({ message: "Agent inserted" })
}

export const deleteAgent = async (req: Request, res: Response) => {
    let { id } = req.params
    const RI = RecordInstance.getInstance()
    //@ts-ignore
    RI.deletePropertyAgentById(id)
    console.log(RI)
    return res.status(200).json({ message: "Agent deleted" })
}

export const updateAgent = async (req: Request, res: Response) => {
    let { id } = req.body
    const RI = RecordInstance.getInstance()
    RI.updatePropertyAgentById(req.body)
    console.log(RI)
    return res.status(200).json({ message: "Agent updated" })
}

export const findAgent = async (req: Request, res: Response) => {
    let { id } = req.body
    const RI = RecordInstance.getInstance()
    const agent = RI.fetchPropertyAgentById(id)
    console.log(agent)
    return res.status(200).json(agent)
}
