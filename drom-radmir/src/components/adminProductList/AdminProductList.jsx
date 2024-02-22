import { DataGrid } from '@mui/x-data-grid';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'reducers/productSlice';

const AdminProductList = () => {
  const products = useSelector((state) => state.productReducer.catalog);
  console.log('products: ', products);

  const dispatch = useDispatch();

  const handleGetProducts = useCallback(async () => {
    await dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    handleGetProducts();
  }, [handleGetProducts]);

  const cols = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'quantity', headerName: 'Quantity', width: 130 },
    {
      field: 'price',
      headerName: 'Price',
      width: 90,
    },
    {
      field: 'discount',
      headerName: 'Discount',
      width: 120,
    },

    {
      field: 'material',
      headerName: 'Material',
      width: 120,
    },

    {
      field: 'color',
      headerName: 'Color',
      width: 120,
    },
  ];

  return (
    <div style={{ height: 400, width: '100%', padding: '50px' }}>
      {' '}
      <DataGrid
        rows={products}
        columns={cols}
        sx={{
          color: '#000',
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default AdminProductList;
