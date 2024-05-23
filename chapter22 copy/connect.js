const typeorm = require("typeorm");
const { ProductEntity } = require("./src/entities/Product");
const { UserEntity, AddressEntity, PhoneEntity, UserProductEntity } = require("./src/entities/User");

const dataSource = new typeorm.DataSource({
    type: "mariadb",
    host: process.env.HOST,
    port: 3306,
    username: process.env.DBUSER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    entities: [UserEntity, ProductEntity, AddressEntity, PhoneEntity, UserProductEntity]
});

dataSource
    .initialize()
    .then(function () {
        console.log("Connected to database");
    })
    .catch(function(error) {
        console.log("Problem in connecting to database", error);
    });

module.exports = { dataSource };
