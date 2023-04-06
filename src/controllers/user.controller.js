const userModel = require('../models/user.model')
const controller = {}

controller.getAll = async (req, res) => {
    try {
        const result = await userModel.all()
        return res.json(result)
    } catch (error) {
        return res.json(error)
    }
}

controller.getDetail = async (req, res) => {
    try {
        const result = req.params
        return res.json(result)
    } catch (error) {
        return res.json(error)
    }
}

controller.store = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.send('field username & password required')
        }
        const body = {
            username, password
        }
        const result = await userModel.store(body)
        return res.json(result)
    } catch (error) {
        return res.json(error)
    }
}

module.exports = controller