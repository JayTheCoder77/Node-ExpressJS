import express from "express";
import {getContacts , createContact , getContact , updateContact , deleteContact} from "../controllers/contactController.js";


const router = express.Router();

router.route("/").get(getContacts).post(createContact)

router.route("/:id").get(getContact)

router.route("/:id").put(updateContact)

router.route("/:id").delete(deleteContact)

export default router