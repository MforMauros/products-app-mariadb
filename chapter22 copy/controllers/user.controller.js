const userService = require('../services/user.service');

exports.findAll = async (req, res) => {
    console.log("Find all Users");

    try {
        const result = await userService.findAll();
        res.status(200).json({ data: result });
        console.log("Success in reading users");
    } catch (error) {
        res.status(404).json({ data: error });
        console.log("Problem in reading users", error);
    }
};

exports.findOne = async (req, res) => {
    const id = req.params.id;
    console.log("Find a User");

    try {
        const result = await userService.findOne(id);
        res.status(200).json({ data: result });
        console.log("Success in reading user");
    } catch (error) {
        res.status(404).json({ data: error });
        console.log("Problem in reading user", error);
    }
};

exports.create = async (req, res) => {
    const data = req.body;
    console.log("Insert new User");

    try {
        const result = await userService.create(data);
        res.status(200).json({ data: result });
        console.log("Success in creating user");
    } catch (error) {
        res.status(404).json({ data: error });
        console.log("Problem in creating user", error);
    }
};

exports.update = async (req, res) => {
    const id = req.params.id;
    console.log("Update User with id:", id);

    try {
        const result = await userService.update(id, req.body);
        res.status(200).json({ data: result });
        console.log("Success in updating user");
    } catch (error) {
        res.status(404).json({ data: error });
        console.log("Problem in updating user", error);
    }
};

exports.delete = async (req, res) => {
    const id = req.params.id;
    console.log("Delete User with id:", id);

    try {
        const result = await userService.deleteUser(id);
        res.status(200).json({ data: result });
        console.log("Success in deleting user");
    } catch (error) {
        res.status(404).json({ data: error });
        console.log("Problem in deleting user", error);
    }
};
