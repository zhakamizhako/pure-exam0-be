import { Request, Response } from 'express'
import { RecordInstance } from '../utils/records'

export const fetchRecords = async (req: Request, res:Response) => {

    const RI = await RecordInstance.getInstance()
    console.log(RI)
    return res.status(200).json(RI.propertyRecords)
}

export const insertRecord = async (req: Request, res:Response) => {

    let { id, name, address } = req.body
    const RI = await RecordInstance.getInstance()
    RI.insertPropertyRecord({id, name, address})
    console.log(RI)
    return res.status(200).json({message: "Record inserted"})
}

export const deleteRecord = async (req: Request, res:Response) => {

    let { id } = req.params
    const RI = await RecordInstance.getInstance()
    //@ts-ignore
    RI.deletePropertyRecordById(id)
    console.log(RI)
    return res.status(200).json({message: "Record inserted"})
}


export const updateRecord = async (req: Request, res:Response) => {

    let { id} = req.body
    const RI = await RecordInstance.getInstance()
    RI.deletePropertyRecordById(id)
    console.log(RI)
    return res.status(200).json({message: "Record inserted"})
}


export const findRecord = async (req: Request, Res:Response) => {
    let { id, name, address } = req.body
    const RI = await RecordInstance.getInstance()


}