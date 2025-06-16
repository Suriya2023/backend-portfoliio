const UserModel = require('../Models/UserModel');

exports.Registeruser = async (req, res) => {
    const { Name, Email, Subject, Message } = req.body;
    try {
        const Newuser = await UserModel.create({ Name, Email, Subject, Message });
        res.status(201).json({
            message: "Feedback sent successfully",
            user: {
                _id: Newuser._id,
                name: Newuser.Name,
                email: Newuser.Email,
                subject: Newuser.Subject,
                message: Newuser.Message
            },
            success: true
        });
    } catch (err) {
        res.status(500).json({
            message: "Feedback submission failed",
            error: err.message
        });
    }
};
