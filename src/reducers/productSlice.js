import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTokenFromCookies } from 'cookies';
import { API } from 'requester';
import Cookies from 'universal-cookie';

const TOKEN = getTokenFromCookies();

const cookies = new Cookies();

const initialState = {
  catalog: [],
  productsCount: 0,
  popularProducts: [],
  newProducts: [],
  product: {},
  cart: [],
  favorites: [],
  isLoadingProducts: false,
  isLoadingCart: false,
  isLoadingFavorites: false,
  error: false,
};

export const getProducts = createAsyncThunk(
  'getProducts/get',
  async (params) => {
    const queryParams = {};

    if (params.title) queryParams.title = params.title;
    if (params.colors) queryParams.colors = params.colors;
    if (params.category) queryParams.category = params.category;
    if (params.subcategory) queryParams.subcategory = params.subcategory;
    if (params.min_price) queryParams.min_price = params.min_price;
    if (params.max_price) queryParams.max_price = params.max_price;

    const queryString = new URLSearchParams(queryParams).toString();

    const response = await API.get(`products/?${queryString}`);
    return response.data.results;
  }
);

export const getPopularProducts = createAsyncThunk(
  'getPopularProducts/get',
  async () => {
    const response = await API.get('products/popular/');
    return response.data;
  }
);

export const getProduct = createAsyncThunk('getProduct/get', async (params) => {
  const response = await API.get(`products/${params.id}/`);
  return response.data;
});

export const createProduct = createAsyncThunk(
  'createProduct/post',
  async (params) => {
    const response = await API.post(`products/`, {
      title: params.data.title,
      description: params.data.description,
      price: params.data.price,
      discount: params.data.discount,
      in_stock: params.data.in_stock,
      product_class: params.data.product_class,
      images: params.data.productImages,
      colors: params.data.productColors,
      category: params.data.categoryId,
      subcategory: params.data.productSubcategoriesId,
    });
    return response.data;
  }
);

export const getCart = createAsyncThunk('getCart/get', async () => {
  const response = await API.get(`/cart/`);
  return response.data;
});

export const getFavorites = createAsyncThunk('getFavorites/get', async () => {
  const response = await API.get(`/favorite/my_favorites/`);
  return response.data;
});

export const addProductCart = createAsyncThunk(
  'addProductToCart/post',
  async (params) => {
    const response = await API.post(`/products/${params.id}/add/`, {
      color: params.data,
    });
    return response.data;
  }
);

export const removeProductCart = createAsyncThunk(
  'removeProductCart/post',
  async (params) => {
    console.log('params: ', params);
    const response = await API.post(`/products/${params.id}/remove/`, {
      color: params.data,
    });
    return response.data;
  }
);

export const addProductFavorites = createAsyncThunk(
  'addProductFavorites/post',
  async (params) => {
    console.log('params: ', params);
    const response = await API.post(`/products/${params.id}/favorite_add/`, {
      data: params.data,
    });
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'productSlice',
  initialState,

  extraReducers: (builder) => {
    // getProducts

    builder.addCase(getProducts.pending, (state) => {
      state.isLoadingProducts = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.isLoadingProducts = false;
      state.catalog = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.isLoadingProducts = false;
      state.error = action.error;
    });

    // getPopularProducts

    builder.addCase(getPopularProducts.pending, (state) => {
      state.isLoadingProducts = true;
    });
    builder.addCase(getPopularProducts.fulfilled, (state, action) => {
      state.isLoadingProducts = false;
      state.popularProducts = action.payload.results;
    });
    builder.addCase(getPopularProducts.rejected, (state, action) => {
      state.isLoadingProducts = false;
      state.error = action.error;
    });

    // getProduct

    builder.addCase(getProduct.pending, (state) => {
      state.isLoadingProducts = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoadingProducts = false;
      state.product = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoadingProducts = false;
      state.error = action.error;
    });

    // createProduct

    builder.addCase(createProduct.pending, (state) => {
      state.isLoadingProducts = true;
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.isLoadingProducts = false;
      state.catalog = action.payload;
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      state.isLoadingProducts = false;
      state.error = action.error;
    });

    // addProductCart

    builder.addCase(addProductCart.pending, (state) => {
      state.isLoadingCart = true;
    });
    builder.addCase(addProductCart.fulfilled, (state, action) => {
      state.isLoadingCart = false;
      state.cart = action.payload;
    });
    builder.addCase(addProductCart.rejected, (state, action) => {
      state.isLoadingCart = false;
      state.error = action.error;
    });

    // removeProductCart

    builder.addCase(removeProductCart.pending, (state) => {
      state.isLoadingCart = true;
    });
    builder.addCase(removeProductCart.fulfilled, (state, action) => {
      state.isLoadingCart = false;
      state.cart = action.payload;
    });
    builder.addCase(removeProductCart.rejected, (state, action) => {
      state.isLoadingCart = false;
      state.error = action.error;
    });

    // addProductFavorites

    builder.addCase(addProductFavorites.pending, (state) => {
      state.isLoadingFavorites = true;
    });
    builder.addCase(addProductFavorites.fulfilled, (state, action) => {
      state.isLoadingFavorites = false;
      state.favorites = action.payload;
    });
    builder.addCase(addProductFavorites.rejected, (state, action) => {
      state.isLoadingFavorites = false;
      state.error = action.error;
    });

    // getFavorites

    builder.addCase(getFavorites.pending, (state) => {
      state.isLoadingFavorites = true;
    });
    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.isLoadingFavorites = false;
      state.favorites = action.payload.fav_products;
    });
    builder.addCase(getFavorites.rejected, (state, action) => {
      state.isLoadingFavorites = false;
      state.error = action.error;
    });

    // getCart

    builder.addCase(getCart.pending, (state) => {
      state.isLoadingCart = true;
    });
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.isLoadingCart = false;
      state.cart = action.payload;
    });
    builder.addCase(getCart.rejected, (state, action) => {
      state.isLoadingCart = false;
      state.error = action.error;
    });
  },
});

export default productSlice.reducer;
