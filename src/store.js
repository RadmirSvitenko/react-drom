import reviewsPageReducer from 'reducers/reviewsPageSlice';
import productSlice from './reducers/productSlice';
const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    productReducer: productSlice,
    reviewsPageStore: reviewsPageReducer,
  },
});

export default store;
