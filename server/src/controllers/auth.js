const authService = require("../services/auth");

const register = async (req, res) => {
    const { userName, email, password, gender, address, phone } = req.body;

    try {
        if (!userName || !email || !password || !gender || !address || !phone) {
            return res.status(400).json({
                err: 1,
                msg: "Missing inputs !",
            });
        }
        const response = await authService.registerService(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at auth controller : " + error,
        });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({
                err: 1,
                msg: "Missing inputs !",
            });
        }
        const response = await authService.loginService(req.body);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Fail at auth controller : " + error,
        });
    }
};

const getCurrentUser = async (req, res) => {
    const { id } = req.user;
    try {
        const response = await authService.getCurrentUserService(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: "Failed at user controller: " + error,
        });
    }
};

module.exports = {
    register,
    login,
    getCurrentUser,
};
