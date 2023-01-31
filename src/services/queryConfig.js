import { QueryClient } from 'react-query';

// Create a client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000, // 10 mins
      cacheTime: 15 * 60 * 1000, // 15 mins
    },
  },
});
