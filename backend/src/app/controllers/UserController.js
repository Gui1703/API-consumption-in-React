import { v4 } from "uuid";
import User from "../models/User";
import * as yup from "yup";

class UserController {
  async store(request, response) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required().min(6),
    });

    try {
      await schema.validateSync(request.body, { abortEarly: false });
    } catch (err) {
      return response.status(400).json({ error: err.errors });
    }

    const { name, email, password } = request.body;

    const userExists = await User.findOne({
      where: { email },
    });

    if (userExists) {
      return response.status(409).json({ error: "User already exists" });
    }

    const user = await User.create({
      id: v4(),
      name,
      email,
      password,
    });

    return response.status(201).json({ id: user.id, name, email });
  }
}

export default new UserController();
