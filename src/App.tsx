import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Product } from './pages/Product';
import { Favorites } from './pages/Favorites';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';
import { Contacts } from './pages/Contacts';
import { Rights } from './pages/Rights';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ThreadData } from './types/ThreadData';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { SignUp } from './components/SignUp/SignUp';
import { SignUpSaccess } from './components/SignUpSaccess/SignUpSaccess';
import { LogIn } from './components/LogIn/LogIn';
import { MyAccount } from './components/MyAccount/MyAccount';

export const App = () => {
  return (
    <div className="App">
      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route
            path="/category/:categoryName"
            handle={{
              crumb: (data: ThreadData) => <span>{data.threadName}</span>,
            }}
          >
            <Route index element={<Catalog />} />
            <Route path=":prodId" element={<Product />} />
          </Route>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/rights" element={<Rights />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};
