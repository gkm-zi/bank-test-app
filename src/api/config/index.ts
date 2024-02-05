import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './baseQuery';

export enum Tags {
  currency = 'Currency',
}

export const apiService = createApi({
  baseQuery: baseQuery(),
  endpoints: () => ({}),
  refetchOnFocus: false,
  tagTypes: Object.values(Tags),
});
