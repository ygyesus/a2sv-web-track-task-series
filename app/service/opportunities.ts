import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobsApi = createApi({
    reducerPath: "opportunities",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://akil-backend.onrender.com"
    }),

    endpoints: (builder) => ({
        // Get All Jobs (Reading)
        getAllOpportunities: builder.query({
            query: () => "/opportunities/search"
        }),
        getOpportunityById: builder.query({
            query: (id) => `/opportunities/${id}`
        })

    })
})

export const {
    useGetAllOpportunitiesQuery,
    useGetOpportunityByIdQuery
} = jobsApi