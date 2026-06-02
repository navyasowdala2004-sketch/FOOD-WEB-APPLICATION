import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart =
      localStorage.getItem("cart");

    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  // Add Item
  const addToCart = (food) => {
    const itemId =
      food._id || food.id;

    const existingItem =
      cartItems.find(
        (item) =>
          (item._id || item.id) ===
          itemId
      );

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          (item._id || item.id) ===
          itemId
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...food,
          quantity: 1,
        },
      ]);
    }
  };

  // Remove Item
  const removeFromCart = (id) => {
    setCartItems(
      cartItems.filter(
        (item) =>
          (item._id || item.id) !== id
      )
    );
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        (item._id || item.id) === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          (item._id || item.id) === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) => item.quantity > 0
        )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const totalPrice =
    cartItems.reduce(
      (total, item) =>
        total +
        item.price *
          item.quantity,
      0
    );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () =>
  useContext(CartContext);