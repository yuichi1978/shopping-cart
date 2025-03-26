import React from "react";
import { useCart } from "../context/cartContext";

export default function CartButton({ item, fromCart }) {
  const { addToCart, removeFromCart, updateQuantity } = useCart();
  return (
    <div className={`w-max absolute right-5 top-5 ${fromCart && "scale-90"}`}>
      <div className="space-x-3">
        {!item.inCart ? (
          <button
            onClick={() => addToCart(item)}
            type="button"
            className="
        bg-zinc-400 border rounded-md px-2 py-1 
          text-sm text-white hover:bg-zinc-500 transition-colors"
          >
            + Add to cart
          </button>
        ) : (
          <div>
            <div className="flex">
              <button
                onClick={() => {
                  if (item.quantity === 1) {
                    removeFromCart(item);
                  } else {
                    updateQuantity(item, -1);
                  }
                }}
                className="border rounded-lg px-3"
              >
                -
              </button>
              <p className="flex items-center gap-x-1 mx-1">
                <span
                  className="
                 min-w-7 bg-green-100 grid place-items-center
                 border rounded-full"
                >
                  {item.quantity}
                </span>
                <span className="text-xs">in cart</span>
              </p>
              <button
                onClick={() => updateQuantity(item, 1)}
                className="border rounded-lg px-3"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeFromCart(item)}
              className="
            bg-pink-300 mx-auto mt-2 block rounded-md
              px-2 py-1 text-xs text-white hover:bg-pink-400"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
