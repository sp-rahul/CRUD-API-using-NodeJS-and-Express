//@desc Get all contact
//route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({mesage : "Get all contacts "});
};

//@desc create contact
//route post /api/contacts
//@access public
const createContact = (req, res) => {
    res.status(200).json({mesage : "Create contact"})
};

//@desc get new contact
//route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({mesage : `Get contact for ${req.params.id}`})
};


//@desc update contact
//route put /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({mesage : `Update contcact for  ${req.params.id}`})
};

//@desc delete  contact
//route delete /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({mesage : `Delete  contact for  ${req.params.id}`})
};



module.exports = {
     getContacts,
      createContact,
      getContact, 
      updateContact, 
      deleteContact
    };