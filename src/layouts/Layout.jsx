import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-zinc-900">
      <Navbar />
      <main className="flex-1 w-full pt-20 md:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
