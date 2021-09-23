import OrdersRepository from "../repositories/OrdersRepository";
import Order from "../models/Order";

interface Request {

    name: string,
    address: string
}

class CreateOrderService {

    private orderRepository:OrdersRepository;

    constructor(orderRepository:OrdersRepository) {

        this.orderRepository = orderRepository;
    }
 
    public execute({name, address}:Request) {

        const order:Order = this.orderRepository.create({    
           name,
           address
        })
    }
}

export default CreateOrderService;