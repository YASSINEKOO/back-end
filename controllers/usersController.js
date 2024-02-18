import User from '../models/user.js';

const usersController = {
    createuser: async (req, res) => {
        const newUser = new User(req.body);
        try {
            await newUser.save();
            res.status(201).json({ message: "user created successfully", user: newUser });
        } catch (error) {
            res.status(500).json({ message: "Failed to create user" });
        }
    },
    getAllusers: async (req, res) => {
        try {
            const users = await users.find().sort({ createdAt: -1 });
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: "Failed to get users" });
        }
    },
    getuser: async (req, res) => {
        try {
            const user = await user.findById(req.params.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: "Failed to get user" });
        }
    },
    searchuser: async (req, res) => {
        try {
            const result = await User.aggregate([
                {
                    $search: {
                        index: "default",
                        text: {
                            query: req.params.key,
                            path: {
                                wildcard: "*"
                            }
                        }
                    }
                }
            ]);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: "Failed to search user" });
        }
    },
};
export default usersController;