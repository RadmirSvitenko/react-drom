import productSlice from './reducers/productSlice';
import registerSlice from 'reducers/registerSlice';
import authSlice from 'reducers/authSlice';
import categorySlice from 'reducers/categorySlice';
import subcategorySlice from 'reducers/subcategorySlice';
import colorsSlice from 'reducers/colorsSlice';
import imageSlice from 'reducers/imageSlice';
const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
  reducer: {
    productReducer: productSlice,
    registerReducer: registerSlice,
    authReducer: authSlice,
    categoryReducer: categorySlice,
    subcategoryReducer: subcategorySlice,
    colorReducer: colorsSlice,
    imageReducer: imageSlice,
  },
});

export default store;
