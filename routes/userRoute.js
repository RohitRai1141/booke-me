const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Register route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // Create a new user
  const newUser = new User({
    name,
    email,
    password, // Ensure that password is hashed in production
  });

  try {
    const user = await newUser.save();
    res.send("User Registered Successfully");
  } catch (error) {
    return res.status(400).json({ error });
  }
});

// Login route xyvek@mailinator.com Pa$$w0rd!
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email and password
    const user = await User.findOne({ email: email, password: password });

    if (user) {
      if(user) {

        const temp = {
          name : user.name,
          email:user.email, //
          isAdmin : user.isAdmin,
          _id : user ._id,
        }
        res.send(temp)
        
        } // You might want to send a token or something else here
    } else {
      return res.status(400).json({ message: "Login failed" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
