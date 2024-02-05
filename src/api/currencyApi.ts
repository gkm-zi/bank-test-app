import { apiService } from './config';
import { ICurrency } from './models/currency.dto';

export const currencyApi = apiService.injectEndpoints({
  endpoints: (build) => ({
    fetchCurrency: build.query<ICurrency[], void>({
      query: () => ({ method: 'GET', url: '/currencies' }),
    }),
  }),
});

export const { useFetchCurrencyQuery } = currencyApi;
