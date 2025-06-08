"use client"
import Image from "next/image";
import React from "react"
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
export default function singleProduct({params}) {
    const { id } = React.use(params);
    console.log(id);
    const [singleProduct , setSingleProduct] = useState([])
    console.log(singleProduct);
    
    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setSingleProduct(data);
            })
            .catch((error) => {
                console.log("Error fetching posts", error);

            })
    },[])
    return(
         <div className="h-screen p-10 mb-5">
            <button className="text-amber-950 hover:text-amber-800 hover:scale-110 transition-colors duration-300 text-md"><a href="/product"><IoIosArrowBack /></a></button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
               <div>
                <img src={singleProduct.images && singleProduct.images.length > 0 ? singleProduct.images[0] : singleProduct.image} alt={singleProduct.title} className="object-cover w-110 rounded-lg" />
               </div>
               <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-bold text-amber-950">{singleProduct.title}</h1>
                <p className="text-lg font-semibold text-amber-700">${singleProduct.price}</p>
                <p>{singleProduct.description}</p>
                <button className="mt-3 bg-amber-700 text-white px-4 py-2 hover:bg-black hover:text-amber-700 transition-colors duration-300">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}