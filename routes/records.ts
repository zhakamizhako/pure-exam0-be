import { Router } from "express";
import { deleteRecord, fetchRecords, findRecord, insertRecord, updateRecord } from "../controllers/recordController";
import { findAgent, fetchAgents, insertAgent, deleteAgent, updateAgent } from "../controllers/agentController";
import { fetchReminders, insertReminder, updateReminder, findReminder, deleteReminder } from "../controllers/reminderController";
import { findMemo, fetchMemos, deleteMemo, insertMemo, updateMemo } from '../controllers/memoController'

const router = Router();

// property
router.route("/records").get(fetchRecords);
router.route("/records/:id").put(updateRecord);
router.route("/records/:id").put(findRecord);
router.route("/records/:id").delete(deleteRecord)
router.route("/records").post(insertRecord)

//agents
router.route("/agents").get(fetchAgents);
router.route("/agents/:id").get(findAgent);
router.route("/agents/:id").put(updateAgent);
router.route("/agents/:id").delete(deleteAgent)
router.route("/agents").post(insertAgent)

//reminders

router.route("/reminders").get(fetchReminders);
router.route("/reminders/:id").get(findReminder);
router.route("/reminders/:id").put(updateReminder);
router.route("/reminders/:id").delete(deleteReminder);
router.route("/reminders").post(insertReminder);

//memo

router.route("/memos").get(fetchMemos);
router.route("/memos/:id").get(findMemo);
router.route("/memos/:id").put(updateMemo);
router.route("/memos/:id").delete(deleteMemo);
router.route("/memos").post(insertMemo);

export default router;