export function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case "addItem":
      const itemIndex = state.cart.findIndex(
        (item) =>
          item.coffeeId === action.payload.coffeeId &&
          item.size === action.payload.size
      );

      if (itemIndex >= 0) {
        const newCart = state.cart.map((item, index) => {
          if (index === itemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.unitPrice,
            };
          }
          return item;
        });
        return { ...state, cart: newCart };
      } else {
        return { ...state, cart: [...state.cart, action.payload] };
      }

    case "deleteItem":
      return {
        ...state,
        cart: state.cart.filter((item) => item.coffeeId !== action.payload),
      };

    case "increaseQuantity":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.coffeeId === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * item.unitPrice,
            };
          }
          return item;
        }),
      };

    case "decreaseQuantity":
      const updatedCart = state.cart.map((item) => {
        if (item.coffeeId === action.payload && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: (item.quantity - 1) * item.unitPrice,
          };
        } else if (item.coffeeId === action.payload && item.quantity === 1) {
          return null;
        }
        return item;
      });

      return {
        ...state,
        cart: updatedCart.filter((item): item is CartItemType => item !== null),
      };

    case "clearCart":
      return { ...state, cart: [] };

    default:
      throw new Error(`Unknown action`);
  }
}
