import Usermodel from "../model/UserModel.js";


export const UserRagistationController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(404).json({ message: 'All fields are required' })
        };

        const existingUser = await Usermodel.findOne({ email });
        if (existingUser) {
            return res.status(404).json({ message: 'User already exists' })
        };
        const user = await Usermodel.create({
            name, email, password
        });
        res.status(200).json({ message: 'User created successfully', user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error in Ragister API' })
    }
}

export const UserLoginController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(404).json({ message: 'All fields are required' })
        };
        const user = await Usermodel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        };
        // const isMatch = await user.compairpassword(password);
        // if (!isMatch) {
        //     return res.status(404).json({ message: 'Invalid credentials' });
        // };
        res.status(200).json({ message: 'Login successful', user })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error in login API' })
    }
}

export const UsercreateController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        // Check if user already exists
        const existingUser = await Usermodel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already exists',
            });
        }
        const user = await Usermodel.create({ name, email, password });
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            user
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error in create API',
            error: error.message
        })
    }
}

export const UserGetAllController = async (req, res) => {
    try {
        const user = await Usermodel.find();
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        };
        res.status(200).json({ message: 'User getAll successfuly', user })
    } catch (error) {
        console.log(error);
        resizeBy.status(500).json({
            success: false,
            message: 'Error in getall API'
        })
    }
}

export const UserGetByIDController = async (req, res) => {
    try {
        const user = await Usermodel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'user not found' });
        };
        res.status(200).json({ message: 'user getbyid successfully', user })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'Error in getByid API'
        })
    }
}

export const UserUpdateController = async (req, res) => {
    try {
        const user = await Usermodel.findByIdAndUpdate(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        };

        const { name, email, password } = req.body;
        if (name) user.name = name;
        if (email) user.email = email;
        if (password) user.password = password;

        await user.save();

        res.status(200).json({ message: 'user update successfuly', user })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error in Update API' })
    }
}


export const UserDeleteController = async (req, res) => {
    try {
        const user = await Usermodel.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        };
        res.status(200).json({ message: 'User deleted successfully',user});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error in delete API' })
    }
}