import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import CartItem from "../../components/CartItem";
import { UseCartState } from "../../context/CartContextProvider";
export default function CartItemsPopup() {
  const { isCartShow, cartShowHandler } = UseCartState();

  return (
    <div
      className={`max-w-[400px] w-full h-screen bg-white fixed top-0 right-0 z-99 border border-gray-100 transition-transform duration-300 ${
        isCartShow ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between shadow-[0_3px_16px_-8px_rgba(0,0,0,0.35)] px-8 py-4">
        <h1 className="font-bold text-lg">Shopping Cart</h1>
        <button
          onClick={() => cartShowHandler(false)}
          className="cursor-pointer hover:text-orange hoverEffect"
        >
          <Icon icon="iconamoon:close-thin" width="32" height="32" />
        </button>
      </div>
      <div className="p-8 space-y-5 max-h-[58vh] overflow-y-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <CartItem key={index} />
        ))}
        {/* single cart item */}
      </div>
      {/* cart footer section */}
      <div className="p-8  h-full shadow-[0_-3px_16px_-8px_rgba(0,0,0,0.35)]">
        <ul className="flex gap-2 justify-between border-b border-gray-300 pb-3">
          <li>
            <Icon
              icon="streamline:hand-held-tablet-writing"
              width="20"
              height="20"
              className="text-gray-700 w-fit mx-auto mb-1"
            />
            <span className="font-medium text-sm">Add note</span>
          </li>
          <li>
            <Icon
              icon="material-symbols:delivery-truck-speed-outline"
              width="25"
              height="25"
              className="text-gray-700 w-fit mx-auto mb-1"
            />
            <span className="font-medium text-sm">Shipping</span>
          </li>
          <li>
            <Icon
              icon="fluent:gift-card-20-regular"
              width="25"
              height="25"
              className="text-gray-700 w-fit mx-auto mb-1"
            />
            <span className="font-medium text-sm">Discount</span>
          </li>
        </ul>
        <div className="my-4">
          <div className="flex justify-between py-2 font-semibold text-lg">
            <h5>Subtotal</h5>
            <p>$158.00</p>
          </div>
          <p className="text-sm">Taxes and shipping calculated at checkout</p>
        </div>
        <div className="space-y-2">
          <button className="block w-full px-8 py-2.5 font-medium bg-green text-white cursor-pointer hover:bg-black hoverEffect uppercase text-sm">
            Check out
          </button>
          <Link
            to="/product/cart-view"
            className="block w-full px-8 py-2.5 font-medium bg-green text-white cursor-pointer hover:bg-black hoverEffect uppercase text-sm text-center"
          >
            view cart
          </Link>
        </div>
      </div>
    </div>
  );
}
