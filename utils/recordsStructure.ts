
export interface property {
    id:number,
    name: string,
    address: string,

}

// has many ^
export interface propertyAgent {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    mobileNumber:string,
    created_at: Date,
    updated_at: Date,
    is_deleted: boolean,
    status: string,
    property_id: number
}

// belongs to ^
export interface propertyAgentRecordMemo {
    id:number,
    agent_id: number,
    notes: string,
}

// belongs to propertyAgent
export interface propertyAgentRecordReminder {
    id:number,
    agent_id: number,
    memo_id: number,
    date: Date
}
