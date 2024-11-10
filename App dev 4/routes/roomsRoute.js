const express = require("express"); // Correct the import statement
const router = express.Router(); // Fixed the router declaration
const Room = require('../models/rooms'); // Adjusted the path to point to the models directory

// GET route to fetch all rooms
router.get('/getallrooms', async (req, res) => { // Fixed the route declaration
    try {
        const rooms = await Room.find({}); // Fetch all rooms from the database
        res.send(rooms) // Return the rooms as a JSON response
    } catch (error) {
        return res.status(500).json({ message: error.message }); // Return an error message if something goes wrong
    }
});

router.post('/getroombyid', async (req, res) => { // Fixed the route declaration
    const roomid = req.body.roomid;
    try {
        const room = await Room.findOne({_id : roomid}); // Fetch all rooms from the database
        res.send(room) // Return the rooms as a JSON response
    } catch (error) {
        return res.status(500).json({ message: error.message }); // Return an error message if something goes wrong
    }
});

module.exports = router; // Export the router for use in other parts of the application
