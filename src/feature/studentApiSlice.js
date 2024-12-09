import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// Define a service using a base URL and expected endpoints
export const studentApi = createApi({
    reducerPath: 'studentApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/student' }),
    endpoints: (builder) => ({
      getAllStudent: builder.query({
        query: () => `/`,
      }),
      createStudent: builder.mutation({
        query: (newStudent)=>({
           url: `/`,
           method: "POST",
           body:  newStudent
        })
      }),
      deleteStudent: builder.mutation({
        query(id) {
          return {
            url: `/${id}`,
            method: 'DELETE',
          }
        },
      
        // Invalidates all queries that subscribe to this Post `id` only.
      
      }),
    }),
  
  })
  
  // CRUD;
  
  // C FOR CREATE
  
  // R FOR READ
  
  // U FOR UPDATE
  
  // D FOR DELETE
  
  
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetAllStudentQuery, useCreateStudentMutation, useDeleteStudentMutation } = studentApi