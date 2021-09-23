import Product from "../models/Product";

class ProductsRepository {
    
    private products: Product[];

    constructor() {

        this.products = [];
    }

    public all() {

        return this.products;
    }
}

export default ProductsRepository;