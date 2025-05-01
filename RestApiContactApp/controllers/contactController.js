import asyncHandler from "express-async-handler";
import { Contact } from "../models/contactModel.js";

// @desc Get All contacts
// @route Get /api/contacts
// @access public

export const getContacts = asyncHandler(async(req,res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts);
})

// @desc create contacts
// @route Post /api/contacts
// @access public

export const createContact = asyncHandler(async(req,res) => {
    console.log(`request body : ${JSON.stringify(req.body)}`);
    const {name ,email , phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are required")
    }
    const contact = await Contact.create({
        name ,
        email,
        phone
    })
    res.status(201).json(contact);
})

// @desc get individual contacts
// @route get /api/contacts/:id
// @access public

export const getContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contact);
})

// @desc update individual contacts
// @route put /api/contacts/:id
// @access public

export const updateContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    )
    res.status(200).json(updatedContact);
})

// @desc delete individual contacts
// @route delete /api/contacts/:id
// @access public
export const deleteContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    res.status(200).json(contact);
})