export const initialState = {
  basket: [],
};

//Selector
// export const getBasketTotal = (basket) => {
//   return basket?.reduce((amount, item) => item.price + amount, 0);
// };

// Omit curly braces....for implicit return
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //   const index = state.basket.findIndex(
      //     (basketItem, index) => index === action.id
      //   );
      //   let newBasket = [...state.basket];
      //   if (index >= 0) {
      //     newBasket.splice(index, 1);
      //   } else {
      //     console.warn(
      //       `Can't remove product (id: ${action.id}) as it is not in basket`
      //     );
      //   }

      //   return {
      //     ...state,
      //     basket: newBasket,
      //   };

      return {
        ...state,
        basket: state.basket.filter((item, index) => index !== action.id),
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
