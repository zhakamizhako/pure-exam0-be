import {
    property,
    propertyAgent,
    propertyAgentRecordMemo,
    propertyAgentRecordReminder
} from './recordsStructure';

export class RecordInstance {
    propertyRecords: property[] = [];
    propertyAgents: propertyAgent[] = [];
    propertyAgentRecordMemos: propertyAgentRecordMemo[] = [];
    propertyAgentRecordReminders: propertyAgentRecordReminder[] = [];

    private static _instance: RecordInstance;

    private constructor() {}

    public static getInstance(): RecordInstance {
        if (!this._instance) {
            this._instance = new RecordInstance();
        }
        return this._instance;
    }

    // ===== PROPERTY =====
    public insertPropertyRecord(record: property) {
        this.insertRecord(record, this.propertyRecords);
    }

    public updatePropertyRecordById(record: property) {
        const res = this.updateRecord(record, this.propertyRecords);
        if (res === false) console.warn(`Property record with ID ${record.id} not found.`);
    }

    public deletePropertyRecordById(id: number) {
        const res = this.removeRecord(id, this.propertyRecords);
        if (res) this.propertyRecords = res;
        else console.warn(`Property record with ID ${id} not found.`);
    }

    public fetchPropertyRecordById(id: number) {
        return this.fetchRecord(id, this.propertyRecords);
    }

    // ===== PROPERTY AGENT =====
    public insertPropertyAgent(agent: propertyAgent) {
        this.insertRecord(agent, this.propertyAgents);
    }

    public updatePropertyAgentById(agent: propertyAgent) {
        const res = this.updateRecord(agent, this.propertyAgents);
        if (res === false) console.warn(`Property agent with ID ${agent.id} not found.`);
    }

    public deletePropertyAgentById(id: number) {
        const res = this.removeRecord(id, this.propertyAgents);
        if (res) this.propertyAgents = res;
        else console.warn(`Property agent with ID ${id} not found.`);
    }

    public fetchPropertyAgentById(id: number) {
        return this.fetchRecord(id, this.propertyAgents);
    }

    // ===== PROPERTY AGENT MEMO =====
    public insertPropertyAgentRecordMemo(memo: propertyAgentRecordMemo) {
        this.insertRecord(memo, this.propertyAgentRecordMemos);
    }

    public updatePropertyAgentRecordMemoById(memo: propertyAgentRecordMemo) {
        const res = this.updateRecord(memo, this.propertyAgentRecordMemos);
        if (res === false) console.warn(`Property agent memo with ID ${memo.id} not found.`);
    }

    public deletePropertyAgentRecordMemoById(id: number) {
        const res = this.removeRecord(id, this.propertyAgentRecordMemos);
        if (res) this.propertyAgentRecordMemos = res;
        else console.warn(`Property agent memo with ID ${id} not found.`);
    }

    public fetchPropertyAgentRecordMemoById(id: number) {
        return this.fetchRecord(id, this.propertyAgentRecordMemos);
    }

    // ===== PROPERTY AGENT REMINDER =====
    public insertPropertyAgentRecordReminder(reminder: propertyAgentRecordReminder) {
        this.insertRecord(reminder, this.propertyAgentRecordReminders);
    }

    public updatePropertyAgentRecordReminderById(reminder: propertyAgentRecordReminder) {
        const res = this.updateRecord(reminder, this.propertyAgentRecordReminders);
        if (res === false) console.warn(`Property agent reminder with ID ${reminder.id} not found.`);
    }

    public deletePropertyAgentRecordReminderById(id: number) {
        const res = this.removeRecord(id, this.propertyAgentRecordReminders);
        if (res) this.propertyAgentRecordReminders = res;
        else console.warn(`Property agent reminder with ID ${id} not found.`);
    }

    public fetchPropertyAgentRecordReminderById(id: number) {
        return this.fetchRecord(id, this.propertyAgentRecordReminders);
    }

    // Fetch helpers

    public fetchPropertiesByAgentId(agentId: number): property[] {
        const agent = this.propertyAgents.find(a => a.id === agentId);
        if (!agent) return [];
        return this.propertyRecords.filter(p => p.id === agent.property_id);
    }

    public fetchMemosByAgentId(agentId: number): propertyAgentRecordMemo[] {
        return this.propertyAgentRecordMemos.filter(memo => memo.agent_id === agentId);
    }

    public fetchRemindersByMemoId(memoId: number): propertyAgentRecordReminder[] {
        return this.propertyAgentRecordReminders.filter(reminder => reminder.memo_id === memoId);
    }

    public fetchRemindersByAgentId(agentId: number): propertyAgentRecordReminder[] {
        return this.propertyAgentRecordReminders.filter(reminder => reminder.agent_id === agentId);
    }



    // ===== GENERIC CRUD HELPERS =====
    private insertRecord(data: any, collection: Array<any>) {
        if (data.id == null) {
            if (collection.length > 0) {
                data.id = collection[collection.length - 1].id + 1;
                data.created_at = new Date();
                data.updated_at = new Date();
            } else {
                data.id = 0;
            }
        }
        collection.push(data);
    }

    private updateRecord(data: any, collection: Array<any>) {
        const index = collection.findIndex(item => item.id === data.id);
        if (index !== -1) {
            collection[index] = data;
            data.updated_at = new Date();
            return collection;
        }
        return false;
    }

    private removeRecord(id: number, collection: Array<any>) {
        const index = collection.findIndex(item => item.id === id);
        if (index !== -1) {
            collection.splice(index, 1);
            return collection;
        }
        return false;
    }

    private fetchRecord(id: number, collection: Array<any>) {
        return collection.find(item => item.id === id) || false;
    }
}
