import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import { clearCart } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import { addItem, removeItem } from '../utils/cartSlice';

const Cart = () => {
  const cart = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const getUniqueItems = () => {
    const uniqueItems = [];
    cart.forEach((item) => {
      const existingItem = uniqueItems.find(
        (uniqueItem) => uniqueItem.card.info.id === item.card.info.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        uniqueItems.push({ ...item, quantity: 1 });
      }
    });
    return uniqueItems;
  };

  const uniqueItems = getUniqueItems();

  const handleAddItem = (item) => {
    const itemId = item.card.info.id;
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    const itemId = item.card.info.id;
    dispatch(removeItem(item));
  };

  const [expandedItem, setExpandedItem] = useState(null);

  return (
    <div className=" m-4 p-4 mb-80">
      <h1 className="text-4xl font-bold text-center">Cart</h1>
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
          <h1 className="text-gray-600 text-lg mb-4 text-center">
            Cart is empty, add items to the cart
          </h1>
        )}
        <div className="mt-3 pl-8 pr-8 mb-10 overflow-hidden">
          <ul>
            {uniqueItems.map((item) => (
              <li key={item.card.info.id} className="border-b">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-gray-800">
                      {item.card.info.name}
                    </span>
                    <span className="text-black-600 mb-2 font-semibold">
                      Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </span>
                    <span className="text-gray-600 mr-16">
                      {item.card.info.description &&
                        (expandedItem === item.card.info.id ||
                          item.card.info.description.length <= 100) ? (
                          <>
                            {item.card.info.description}
                            {item.card.info.description.length > 100 && (
                              <span
                                className="text-green-500 cursor-pointer"
                                onClick={() => setExpandedItem(null)}
                              >
                                 Less
                              </span>
                            )}
                          </>
                        ) : (
                          <>
                            {item.card?.info?.description?.substring(0, 110)}...
                            <span
                              className="text-orange-500 cursor-pointer"
                              onClick={() => setExpandedItem(item.card.info.id)}
                            >
                               More
                            </span>
                          </>
                        )}
                    </span>
                  </div>
                  <div className="flex flex-col relative mb-14">
                    <div className="w-48 h-44 mt-4 rounded-xl overflow-hidden">
                      <img
                        src={CDN_URL + item.card.info.imageId}
                        alt="Item Image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex items-center justify-center absolute ml-5 bottom-0 text-green-600 px-10 py-2 bg-white rounded-lg shadow-lg -mb-7">
                      <button onClick={() => handleRemoveItem(item)} className="font-bold text-red-600 px-2">-</button>
                      <span className="px-2">{item.quantity}</span>
                      <button onClick={() => handleAddItem(item)} className="font-bold text-green-600 px-2">+</button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
