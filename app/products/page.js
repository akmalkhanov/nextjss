import React from "react";
import Link from "next/link";

const page = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
    <div className="grid grid-cols-4 gap-8">
      {products.map((p) => (
        <div  key={p.id} className="bg-white rounded-xl">
          <div>
            <img src={p.image} alt="" className="w-48 h-48 p-4 ml-12"/>
            <div className="py-6 text-center">
              <Link href={`/products/${p.id}`}>
                <p className="font-bold text-indigo-400 text-xl">
                  {p.title}
                </p>
              </Link>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
