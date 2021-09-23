import Order from "../models/Order";

interface CreateOrderDTO {

    name: string,

    address: string
}

class OrdersRepository {

    private orders: Order[];

    constructor() {

        this.orders = [];
    }

    public all():Order[] {

        return this.orders;
    }

    public create({name, address}: CreateOrderDTO ): Order {

        const order = new Order({name, address});

        this.orders.push(order);

        return order;
    }
}

export default OrdersRepository;