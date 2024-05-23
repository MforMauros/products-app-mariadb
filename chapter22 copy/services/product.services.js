const { ProductEntity } = require('../entities/Product');
const dataSource = require('../connect').dataSource;

async function findAll() {
    const results = await dataSource
        .getRepository(ProductEntity)
        .createQueryBuilder("product")
        .getMany();
    
    return results;
}

async function findOne(id) {
    const result = await dataSource
        .getRepository(ProductEntity)
        .createQueryBuilder("product")
        .where("product.id = :id", { id })
        .getOne();
    
    return result;
}

async function create(data) {
    console.log(data);
    const result = await dataSource
        .getRepository(ProductEntity)
        .save(data)
        .then(() => console.log("Product has been saved"))
        .catch((error) => console.log("Problem in saving product", error));
    
    return result;
}

async function update(data) {
    const result = await dataSource
        .getRepository(ProductEntity)
        .createQueryBuilder()
        .update(ProductEntity)
        .set(data)
        .where("id = :id", { id: data.id })
        .execute()
        .catch(error => console.log(error));
    
    return result;
}

async function deleteProduct(id) {
    const result = await dataSource
        .getRepository(ProductEntity)
        .createQueryBuilder()
        .delete()
        .from(ProductEntity)
        .where("id = :id", { id })
        .execute()
        .catch(error => console.log(error));
    
    return result;
}

module.exports = { findAll, findOne, create, update, deleteProduct };
