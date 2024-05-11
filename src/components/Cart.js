import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cart = useSelector((store) => store.cart.cartItems);

  console.log(cart);
  
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-9/12 m-auto">
        <div className="flex justify-between items-center mb-4">
          <button
            className="flex items-center p-2 m-2 bg-red-600 text-white rounded-lg"
            onClick={handleClearCart}
          >
            <MdClear className="mr-1" />
            Clear Cart
          </button>
          <div className="flex items-center bg-gray-200 text-gray-600 rounded-full px-3 py-1">
            <AiOutlineShoppingCart className="mr-1" />
            <span>{cart.length}</span>
          </div>
        </div>
        {cart.length === 0 && (
          <h1 className="text-gray-600 text-lg mb-4">
            Cart is empty, add items to the cart
          </h1>
        )}
        <ItemList item={cart}/>
      </div>
    </div>
  );
};

export default Cart;
