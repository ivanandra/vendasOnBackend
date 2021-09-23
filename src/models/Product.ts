class Product {
    id: number;

    name: string;

    price: string;

    description: string;

    thumbnail: string;


    constructor(id: number, name: string, price: string, description: string, thumbnail: string) {

        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.thumbnail = thumbnail;
    }
}

export default Product;