import { PRODUCTS_URL } from '../constants';
import { apiSlice } from './apiSlice';
import { dummyProducts } from '../dummyData';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      queryFn: () => {
        return { data: { products: dummyProducts, page: 1, pages: 1 } };
      },
      keepUnusedDataFor: 5,
      providesTags: ['Products'],
    }),
    getProductDetails: builder.query({
      queryFn: (productId) => {
        const product = dummyProducts.find((p) => p._id === productId);
        return { data: product || dummyProducts[0] };
      },
      keepUnusedDataFor: 5,
    }),
    createProduct: builder.mutation({
      queryFn: () => {
        const newProduct = {
          _id: Date.now().toString(),
          name: 'Sample Name',
          image: '/images/sample.jpg',
          description: 'Sample description',
          brand: 'Sample brand',
          category: 'Sample category',
          price: 0,
          countInStock: 0,
          rating: 0,
          numReviews: 0,
          reviews: []
        };
        dummyProducts.push(newProduct);
        return { data: newProduct };
      },
      invalidatesTags: ['Product', 'Products'],
    }),
    updateProduct: builder.mutation({
      queryFn: (data) => {
        const index = dummyProducts.findIndex((p) => p._id === data.productId);
        if (index !== -1) {
          dummyProducts[index] = {
            ...dummyProducts[index],
            name: data.name,
            price: data.price,
            image: data.image,
            brand: data.brand,
            category: data.category,
            description: data.description,
            countInStock: data.countInStock,
          };
        }
        return { data: { message: 'Product updated successfully' } };
      },
      invalidatesTags: ['Products', 'Product'],
    }),
    uploadProductImage: builder.mutation({
      queryFn: (data) => {
        return { data: { message: 'Image simulated upload successful', image: '/images/sample.jpg' } };
      },
    }),
    deleteProduct: builder.mutation({
      queryFn: (productId) => {
        const index = dummyProducts.findIndex((p) => p._id === productId);
        if (index !== -1) {
          dummyProducts.splice(index, 1);
        }
        return { data: { message: 'Product deleted successfully' } };
      },
      providesTags: ['Product'],
      invalidatesTags: ['Products'],
    }),
    createReview: builder.mutation({
      queryFn: (data) => {
        const productIndex = dummyProducts.findIndex((p) => p._id === data.productId);
        if (productIndex !== -1) {
          const newReview = {
            _id: Date.now().toString(),
            name: 'Current User', // Real app me ye data Redux state se aayega
            rating: Number(data.rating),
            comment: data.comment,
            createdAt: new Date().toISOString()
          };
          // Re-render trigger karne ke liye naya array banaya hai
          const updatedProduct = { ...dummyProducts[productIndex] };
          updatedProduct.reviews = [...(updatedProduct.reviews || []), newReview];
          updatedProduct.numReviews = updatedProduct.reviews.length;
          updatedProduct.rating = updatedProduct.reviews.reduce((acc, item) => item.rating + acc, 0) / updatedProduct.reviews.length;
          dummyProducts[productIndex] = updatedProduct;
        }
        return { data: { message: 'Review added successfully' } };
      },
      invalidatesTags: ['Product'],
    }),
    getTopProducts: builder.query({
      queryFn: () => {
        return { data: dummyProducts.slice(0, 3) };
      },
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductDetailsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useUploadProductImageMutation,
  useDeleteProductMutation,
  useCreateReviewMutation,
  useGetTopProductsQuery,
} = productsApiSlice;
