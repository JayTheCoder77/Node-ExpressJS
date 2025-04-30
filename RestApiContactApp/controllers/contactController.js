import asyncHandler from "express-async-handler";
// @desc Get All contacts
// @route Get /api/contacts
// @access public

export const getContacts = asyncHandler(async(req,res) => {
    res.status(200).json({message : "get all contacts"});
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
    res.status(201).json({message : "create contacts"});
})

// @desc get individual contacts
// @route get /api/contacts/:id
// @access public

export const getContact = asyncHandler(async(req,res) => {
    res.status(200).json({message : `get one contact : ${req.params.id}`});
})

// @desc update individual contacts
// @route put /api/contacts/:id
// @access public

export const updateContact = asyncHandler(async(req,res) => {
    res.status(200).json({message : `update contacts : ${req.params.id}`});
})

// @desc delete individual contacts
// @route delete /api/contacts/:id
// @access public
export const deleteContact = asyncHandler(async(req,res) => {
    res.status(200).json({message : `delete contacts : ${req.params.id}`});
})