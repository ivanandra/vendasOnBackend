import { json, Router } from 'express';
import Order from '../models/Order';
import OrdersRepository from '../repositories/OrdersRepository';

const ordersRouter = Router();
const ordersRepository = new OrdersRepository();

ordersRouter.get('/', (request, response) => {

    const orders = ordersRepository.all();

    return response.json(orders);
})

ordersRouter.post('/', (request, response) => {

    const { name, address } = request.body;

    const order = ordersRepository.create({
        
        name,
        address
    });

    return response.json(order);
});

export default ordersRouter;