import User from '../models/user.js';

const usersController = {
  createUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      await newUser.save();
      res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error("Failed to create user", error);
      res.status(500).json({ message: "Failed to create user" });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().sort({ createdAt: -1 });
      res.status(200).json(users);
    } catch (error) {
      console.error("Failed to get users", error);
      res.status(500).json({ message: "Failed to get users" });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      console.error("Failed to get user", error);
      res.status(500).json({ message: "Failed to get user" });
    }
  },

  searchUsers: async (req, res) => {
    try {
      const result = await User.aggregate([
        {
          $search: {
            index: "default",
            text: {
              query: req.params.key,
              path: { wildcard: "*" },
            },
          },
        },
      ]);
      res.status(200).json(result);
    } catch (error) {
      console.error("Failed to search users", error);
      res.status(500).json({ message: "Failed to search users" });
    }
  },
};

export default usersController;