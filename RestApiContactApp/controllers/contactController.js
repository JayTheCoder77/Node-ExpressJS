import asyncHandler from "express-async-handler";
import { Contact } from "../models/contactModel.js";

// @desc Get All contacts
// @route Get /api/contacts
// @access private

export const getContacts = asyncHandler(async(req,res) => {
    const contacts = await Contact.find({user_id : req.user.id})
    res.status(200).json(contacts);
})

// @desc create contacts
// @route Post /api/contacts
// @access private

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
        phone,
        user_id : req.user.id
    })
    res.status(201).json(contact);
})

// @desc get individual contacts
// @route get /api/contacts/:id
// @access private

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
// @access private

export const updateContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("User cannot change other user's contacts")
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
// @access private
export const deleteContact = asyncHandler(async(req,res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404)
        throw new Error("Contact not found")
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403)
        throw new Error("User cannot change other user's contacts")
    }
    await contact.deleteOne({_id : req.params.id}); 
    res.status(200).json(contact);
})