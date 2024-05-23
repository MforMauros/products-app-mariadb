const { UserEntity } = require('../entities/User');
const dataSource = require('../connect').dataSource;

async function findAll() {
    const results = await dataSource
        .getRepository(UserEntity)
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.address", "address")
        .leftJoinAndSelect("user.phone", "phone")
        .leftJoinAndSelect("user.products", "products")
        .getMany();
    
    return results;
}

async function findOne(id) {
    const result = await dataSource
        .getRepository(UserEntity)
        .createQueryBuilder("user")
        .leftJoinAndSelect("user.address", "address")
        .leftJoinAndSelect("user.phone", "phone")
        .leftJoinAndSelect("user.products", "products")
        .where("user.id = :id", { id })
        .getOne();
    
    return result;
}

async function create(data) {
    console.log(data);
    const result = await dataSource
        .getRepository(UserEntity)
        .save(data)
        .then(() => console.log("User has been saved"))
        .catch((error) => console.log("Problem in saving user", error));
    
    return result;
}

async function update(data) {
    const result = await dataSource
        .getRepository(UserEntity)
        .createQueryBuilder()
        .update(UserEntity)
        .set(data)
        .where("id = :id", { id: data.id })
        .execute()
        .catch(error => console.log(error));
    
    return result;
}

async function deleteUser(id) {
    const result = await dataSource
        .getRepository(UserEntity)
        .createQueryBuilder()
        .delete()
        .from(UserEntity)
        .where("id = :id", { id })
        .execute()
        .catch(error => console.log(error));
    
    return result;
}

module.exports = { findAll, findOne, create, update, deleteUser };
