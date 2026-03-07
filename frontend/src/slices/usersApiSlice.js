import { apiSlice } from './apiSlice';
import { USERS_URL } from '../constants';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: (data) => {
        const inputEmail = data?.email || '';
        const isAdmin = inputEmail.toLowerCase().includes('admin');
        
        const dummyUser = {
          _id: isAdmin ? '1' : '2',
          name: isAdmin ? 'Admin User' : 'Regular Customer',
          email: inputEmail,
          isAdmin: isAdmin,
          token: 'fake-jwt-token-for-ui-testing'
        };
        return { data: dummyUser };
      },
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      queryFn: () => {
        return { data: { message: 'Logged out successfully' } };
      },
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
    getUsers: builder.query({
      queryFn: () => {
        return { 
          data: [
            { _id: '1', name: 'Admin User', email: 'admin@example.com', isAdmin: true },
            { _id: '2', name: 'Regular Customer', email: 'user@example.com', isAdmin: false }
          ] 
        };
      },
      providesTags: ['User'],
      keepUnusedDataFor: 5,
    }),
    deleteUser: builder.mutation({
      queryFn: (userId) => {
        return { data: { message: 'User deleted successfully' } };
      },
    }),
    getUserDetails: builder.query({
      queryFn: (id) => {
        return { data: { _id: id, name: 'Mocked User', email: 'mocked@example.com', isAdmin: false } };
      },
      keepUnusedDataFor: 5,
    }),
    updateUser: builder.mutation({
      queryFn: (data) => {
        return { data: { message: 'User updated successfully' } };
      },
      invalidatesTags: ['User'],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useProfileMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useGetUserDetailsQuery,
} = userApiSlice;
