import { json, Router } from 'express';
import OrdersRepository from '../repositories/OrdersRepository';

import CreateOrderService from '../services/CreateOrderService';

const ordersRouter = Router();
const ordersRepository = new OrdersRepository();

ordersRouter.get('/', (request, response) => {

    const orders = ordersRepository.all();

    return response.json(orders);
})

ordersRouter.post('/', (request, response) => {

    const { name, address } = request.body;

    const createOrder = new CreateOrderService(ordersRepository)

    const order = createOrder.execute({name, address});

    return response.json(order);
});

export default ordersRouter;