import React from "react";
import { Cart, CartItems } from "./Sidebar.styles";

function Sidebar({ cartItems, removeFromCart }) {
  return (
    <div>
      {cartItems.length === 0 ? (
        <Cart>Cart is Empty</Cart>
      ) : (
        <Cart>You have {cartItems.length} in the cart </Cart>
      )}
      <div>
        <Cart>
          <CartItems>
            {cartItems.map((item) => (
              <li key={item._id}>
                <div>
                  <img src={item.image} alt={item.titile} />
                </div>
                <div>
                  <div>{item.title}</div>
                  <button onClick={() => removeFromCart(item)}>Remove</button>
                </div>
              </li>
            ))}
          </CartItems>
        </Cart>
      </div>
    </div>
  );
}

export default Sidebar;
