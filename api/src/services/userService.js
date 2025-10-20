import User from "../models/User.js"

export default {
    register() {
        return User.create({ email, password })
    }
}