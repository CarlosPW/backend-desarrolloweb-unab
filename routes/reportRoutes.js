import express from "express";

import {
  getReportById,
  getReports,
  deleteReport,
  createReport,
} from "../controllers/reportController.js";

const router = express.Router();

router.route("/").get(getReports).post(createReport);

router.route("/:id").get(getReportById).delete(deleteReport).put(updateReport);

export default router;
