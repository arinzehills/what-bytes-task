import { NextApiRequest, NextApiResponse } from "next";

let mockUserDatabase: { email: string; password: string; name: string; role: string }[] = [{ name: "Admin", email: "admin@example.com", password: "password123", role: "admin" }];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { email, password, name, action } = req.body;

        if (action === "register") {
            // Registration logic
            if (!email || !password || !name) {
                return res.status(400).json({ message: "All fields are required" });
            }

            if (password.length < 6) {
                return res.status(400).json({ message: "Password must be at least 6 characters long" });
            }

            const userExists = mockUserDatabase.find((user) => user.email === email);

            if (userExists) {
                return res.status(400).json({ message: "User already exists" });
            }

            const newUser = { email, password, name, role: "user" };
            mockUserDatabase.push(newUser);

            return res.status(201).json({
                message: "User registered successfully",
                data: {
                    user: {
                        id: `dummy-user-id-${Date.now()}`,
                        name,
                        email,
                        role: "user",
                    },
                },
            });
        } else if (action === "login") {
            // Login logic
            const user = mockUserDatabase.find(
                (user) => user.email === email && user.password === password
            );

            if (user) {
                return res.status(200).json({
                    message: "Login successful",
                    data: {
                        token: `dummy-token-${Date.now()}`,
                        user: {
                            name: user.name,
                            email: user.email,
                            role: user.role,
                        },
                    },
                });
            } else {
                return res.status(401).json({ message: "Invalid email or password" });
            }
        } else {
            return res.status(400).json({ message: "Invalid action" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}
