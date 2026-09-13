import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout() {
  return (
    <div className='bg-zinc-950 text-white min-h-screen flex flex-col font-sans'>
      <Navbar />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
