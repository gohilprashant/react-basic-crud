import Header from './components/header/Header';
import AppRouter from './router/AppRouter';
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from './services/queryConfig';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <Header />
        <main>
          <div className='container'>
            <AppRouter />
          </div>
        </main>
        <ToastContainer />
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
