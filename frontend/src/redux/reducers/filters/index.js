import { SELECT_CATEGORY, SELECT_PRICE_RANGE, SELECT_TYPE_SORT } from "./consts";

const initialStore = {
  isDefault:true
};
  
export const filters = (store = initialStore, { type, payload }) => {
  switch (type) {
    case SELECT_CATEGORY:
      if(payload.name==='All' && payload.id===-1){
        delete store['category']
        return {
          ...store,
        }
      }
      return {
        ...store,
        category:payload,
        isDefault:false
      };
    case SELECT_TYPE_SORT:
      return {
        ...store,
        sort:payload,
        isDefault:false
      }
    case SELECT_PRICE_RANGE:
      return {
        ...store,
        priceRange:payload,
        isDefault:false
      }
    default:
      return store;
  }
};