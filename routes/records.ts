import { Router } from "express";
import { deleteRecord, fetchRecords, findRecord, insertRecord, updateRecord } from "../controllers/recordController";
import { findAgent, fetchAgents, insertAgent, deleteAgent, updateAgent } from "../controllers/agentController";

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
export default router;