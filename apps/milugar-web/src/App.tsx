import { useState } from 'react'
import trpc from './trpc';
import { httpBatchLink } from '@trpc/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'milugar-ui/styles';
import Example from './components/Example';

function App() {
  const queryClient = new QueryClient();

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
          // optional
          headers() {
            return {
              // authorization: getAuthCookie(),
            }
          },
        }),
      ],
    }),
  )

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Example />
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App;
