import { Icon } from "@iconify/react";
import { useState } from "react";
export default function CartItem() {
  const [cartItem, setCartItem] = useState(1);
  return (
    <div className="flex gap-2 items-start justify-between">
      <img
        src="/images/packages/details/3.png"
        alt="cart-image"
        className="max-w-24 w-fit max-h-28 h-full"
      />
      <div className="space-y-1 text-sm">
        <h5 className="font-semibold ">Bamboo Rafting</h5>
        <p>$158.00</p>
        <div className="border border-black bg-white py-2 px-2 flex items-center justify-center gap-8 font-medium text-lg w-fit text-gray-600 min-w-28 mt-4">
          <button
            className="hover:text-orange hoverEffect cursor-pointer"
            onClick={() => setCartItem((prev) => (prev <= 0 ? prev : prev - 1))}
          >
            <Icon icon="typcn:minus" width="16" height="16" />
          </button>
          <span className="text-gray-900 text-sm">
            {cartItem < 10 ? "0" + cartItem : cartItem}
          </span>
          <button
            className="hover:text-green hoverEffect cursor-pointer"
            onClick={() => setCartItem((prev) => prev + 1)}
          >
            <Icon icon="typcn:plus" width="16" height="16" />
          </button>
        </div>
      </div>
      <button className="cursor-pointer hover:text-orange hoverEffect">
        <Icon icon="mdi:close-outline" width="20" height="20" />
      </button>
    </div>
  );
}
