import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler( async (req,res) => {
    res.status(200).json({
        message : 'We got the response for register'
    })
})

export {registerUser}