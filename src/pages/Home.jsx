import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product"; 
import Hero from '../components/Hero'

const Home = () => {
    const { products } = useContext(ProductContext);

    return (
        <div>
            <Hero />
            <section className="py-8 bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <Product key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
