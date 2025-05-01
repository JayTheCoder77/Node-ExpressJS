import asyncHandler from "express-async-handler";
// @desc register user
// @route POST /api/users
// @access public

export const registerUser = asyncHandler(async  (req , res) => {
    res.json({message : "register user"})
})

// @desc login user
// @route POST /api/users
// @access public

export const loginUser = asyncHandler(async  (req , res) => {
    res.json({message : "login user"})
})

// @desc current user
// @route GET /api/users
// @access private

export const currentUser = asyncHandler(async  (req , res) => {
    res.json({message : "current user info"})
})