import { Router } from "express";
import { deleteRecord, fetchRecords, insertRecord, updateRecord } from "../controllers/recordController";

const router = Router();

router.route("/records").get(fetchRecords);
router.route("/records/:id").put(updateRecord);
router.route("/records/:id").delete(deleteRecord)
router.route("/records").post(insertRecord)
export default router;