// @desc Get All contacts
// @route Get /api/contacts
// @access public

export const getContacts = (req,res) => {
    res.status(200).json({message : "get all contacts"});
}

// @desc create contacts
// @route Post /api/contacts
// @access public

export const createContact = (req,res) => {
    console.log(`request body : ${req.body}`);
    res.status(201).json({message : "create contacts"});
}

// @desc get individual contacts
// @route get /api/contacts/:id
// @access public

export const getContact = (req,res) => {
    res.status(200).json({message : `get one contact : ${req.params.id}`});
}

// @desc update individual contacts
// @route put /api/contacts/:id
// @access public

export const updateContact = (req,res) => {
    res.status(200).json({message : `update contacts : ${req.params.id}`});
}

// @desc delete individual contacts
// @route delete /api/contacts/:id
// @access public

export const deleteContact = (req,res) => {
    res.status(200).json({message : `delete contacts : ${req.params.id}`});
}