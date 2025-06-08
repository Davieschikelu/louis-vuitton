"use client";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        fetch("https://api.escuelajs.co/api/v1/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.log("Error fetching posts", error);

            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    return (
        <div className="p-10 max-h-screen overflow-y-auto">
            <div className={`bg-[url('/rihanna.jpg')] bg-fit bg-no-repeat bg-center h-100 py-20 flex items-center justify-center`}>
                <div className="text-white text-4xl font-bold">
                    <p className="mt-4 text-amber-900">Explore our latest collections</p>
                </div>
            </div>

            {loading ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="animate-spin rounded-full h-25 w-25 border-b-2 border-amber-600"></div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10 py-10">
                    {products.map((product) => (
                        <div key={product.id} className="hover:border-b-2 hover:border-amber-700 p-4 hover:shadow-xl transition-shadow duration-300">
                            <Link href={`/product/${product.id}`}>
                                <img src={product.images && product.images.length > 0 ? product.images[0] : product.image} width={200} height={200} alt={product.title} className="w-full object-cover mb-4" />
                                <h2 className="text-xl font-semibold text-amber-800 mb-1">{product.title}</h2>
                                <p className="">{product.description.slice(0,20)}...</p>
                                <p className="text-gray-600 mt-2">${product.price}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}