import Header from './Header';
import Footer from './Footer';

import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
