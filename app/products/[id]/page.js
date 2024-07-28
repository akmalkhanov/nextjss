import React from "react";

const page = async ({ params }) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const product = await response.json();

  return (
    <div className="flex justify-center">
      <div className="bg-white w-[750px] py-6 rounded-xl">
        <img
          src={product.image} alt=""
          className="w-64 h-64 ml-60"
        />
        <h2 className="text-2xl text-center mt-6 font-bold text-indigo-400">
          {product.title}
        </h2>
        <p className="text-indigo-400 text-center underline mt-6">{product.description}</p>
      </div>
    </div>
  );
};

export default page;
