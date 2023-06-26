import ReactDOM from 'react-dom/client';
import { App } from './App';
import { HashRouter as BrowserRouter } from 'react-router-dom';
import { StoreContextProvider } from './context/StoreContextProvider';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <BrowserRouter>
    <StoreContextProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StoreContextProvider>
  </BrowserRouter>,
);
