import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobsApi = createApi({
    reducerPath: "opportunities",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://akil-backend.onrender.com",
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },
    }),
    tagTypes: ['Opportunities'],
    endpoints: (builder) => ({
        getAllOpportunities: builder.query({
            query: () => "/opportunities/search",
            providesTags: ['Opportunities'],
        }),
        getOpportunityById: builder.query({
            query: (id) => `/opportunities/${id}`,
            providesTags: (result, error, id) => [{ type: 'Opportunities', id }],
        }),
    }),
});

export const {
    useGetAllOpportunitiesQuery,
    useGetOpportunityByIdQuery,
} = jobsApi;