import jwt from "jsonwebtoken";

export const generateAutuhToken = (user) => {
    const payload = {
        id: user.id,
        password: user.email
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "2h" });

    return token;
}