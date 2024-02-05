import type { AxiosStatic } from 'axios';

interface IResponse {
  data: unknown;
}

const identity = <T>(x: T) => x;
const removeDataWrapper = <T extends IResponse>(response: T) =>
  response.data ? response.data : response;

const getTransformers = (axios: AxiosStatic) => {
  const defaultTransformers = axios.defaults.transformResponse || identity;

  const normalizeTransformers = Array.isArray(defaultTransformers)
    ? defaultTransformers
    : [defaultTransformers];

  return [...normalizeTransformers, removeDataWrapper];
};

export default getTransformers;
