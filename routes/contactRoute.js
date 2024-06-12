import express from "express";
import { handleContactForm } from "../utils/emails/contactEmail.js"; 

const router = express.Router();

router.post("/contact", handleContactForm);

export default router;

