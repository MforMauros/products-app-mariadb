const EntitySchema = require('typeorm').EntitySchema;

class Address {
    constructor(id, area, road) {
        this.id = id;
        this.area = area;
        this.road = road;
    }
}

class Phone {
    constructor(id, type, number) {
        this.id = id;
        this.type = type;
        this.number = number;
    }
}

class UserProduct {
    constructor(id, product, cost, quantity, date) {
        this.id = id;
        this.product = product;
        this.cost = cost;
        this.quantity = quantity;
        this.date = date;
    }
}

class User {
    constructor(id, username, password, name, surname, email, address, phone, products) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.products = products;
    }
}

const AddressEntity = new EntitySchema({
    name: "Address",
    target: Address,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        area: {
            type: "varchar"
        },
        road: {
            type: "varchar"
        }
    }
});

const PhoneEntity = new EntitySchema({
    name: "Phone",
    target: Phone,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        type: {
            type: "varchar"
        },
        number: {
            type: "varchar"
        }
    },
    relations: {
        user: {
            target: "User",
            type: "many-to-one",
            joinColumn: true,
            cascade: true
        }
    }
});

const UserProductEntity = new EntitySchema({
    name: "UserProduct",
    target: UserProduct,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        product: {
            type: "varchar"
        },
        cost: {
            type: "float"
        },
        quantity: {
            type: "int"
        },
        date: {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP"
        }
    },
    relations: {
        user: {
            target: "User",
            type: "many-to-one",
            joinColumn: true,
            cascade: true
        }
    }
});

const UserEntity = new EntitySchema({
    name: "User",
    target: User,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        username: {
            type: "varchar",
            unique: true
        },
        password: {
            type: "varchar"
        },
        name: {
            type: "varchar",
            nullable: true
        },
        surname: {
            type: "varchar",
            nullable: true
        },
        email: {
            type: "varchar",
            unique: true
        }
    },
    relations: {
        address: {
            target: "Address",
            type: "one-to-one",
            joinColumn: true,
            cascade: true
        },
        phone: {
            target: "Phone",
            type: "one-to-many",
            joinTable: true,
            cascade: true
        },
        products: {
            target: "UserProduct",
            type: "one-to-many",
            joinTable: true,
            cascade: true
        }
    }
});

module.exports = { Address, Phone, UserProduct, User, AddressEntity, PhoneEntity, UserProductEntity, UserEntity };
