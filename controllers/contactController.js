const asyncHandler = require("express-async-handler"); 
//@desc Get all contact
//route GET /api/contacts
//@access public
const getContacts =asyncHandler( async (req, res) => {
    res.status(200).json({mesage : "Get all contacts "});
});

//@desc create contact
//route post /api/contacts
//@access public
const createContact = asyncHandler( async (req, res) => {
    console.log("The requist body is : ", req.body)
    const {message, email, phone} = req.body;
    if(!message || !email || ! phone) {
        res.status(400);
        throw new Error("All fields are mendatory");
    }

    res.status(200).json({mesage : "Create contact"})
});

//@desc get new contact
//route GET /api/contacts/:id
//@access public
const getContact =asyncHandler( async (req, res) => {
    res.status(200).json({mesage : `Get contact for ${req.params.id}`})
});


//@desc update contact
//route put /api/contacts/:id
//@access public
const updateContact = asyncHandler( async (req, res) => {
    res.status(200).json({mesage : `Update contcact for  ${req.params.id}`})
});

//@desc delete  contact
//route delete /api/contacts/:id
//@access public
const deleteContact =asyncHandler( async (req, res) => {
    res.status(200).json({mesage : `Delete  contact for  ${req.params.id}`})
});



module.exports = {
     getContacts,
      createContact,
      getContact, 
      updateContact, 
      deleteContact
    };