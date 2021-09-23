import { Router } from 'express';

import ProductsRepository from '../repositories/ProductsRepository';

const productsRouter = Router();
const productsRepository = new ProductsRepository();

productsRouter.get('/', (request, response) => {

    const products = productsRepository.all()

    return response.json(products);
})

export default productsRouter;