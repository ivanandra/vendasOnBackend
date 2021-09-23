import { uuid } from "uuidv4";

interface OrderConstructor {

    id: string,
    name: string,
    address: string
}

class Order {

    id: string;

    name: string;

    address: string

    constructor({name, address}: Omit<Order, 'id'>) {

        this.id = uuid()
        this.name = name;
        this.address = address;     
        
    }
}

export default Order;