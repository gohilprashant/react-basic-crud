import Header from './components/header/Header';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <div className='container'>
          <AppRouter />
        </div>
      </main>
    </div>
  );
}

export default App;
