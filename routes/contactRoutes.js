const express = require("express");
const router = express.Router();
const {  
    getContacts,
    createContact,
    getContact, 
    updateContact, 
    deleteContact,
} = require("../controllers/contactController");

// router.route("/").get(getContact);

// router.route("/:id").get((req, res) => {
//     res.status(200).json({mesage : `Get contact for ${req.params.id}`})
// });

// router.route("/").post((req, res) => {
//     res.status(200).json({mesage : "Create contact"})
// });

// router.route("/:id").put((req, res) => {
//     res.status(200).json({mesage : `Update contcact for  ${req.params.id}`})
// });

// router.route("/:id").delete((req, res) => {
//     res.status(200).json({mesage : `Delete  contact for  ${req.params.id}`})
// });

router.route("/").get(getContacts).post(  createContact);

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);





module.exports = router