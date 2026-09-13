import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-16 pb-8 border-t border-zinc-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Info */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white bg-orange-600 px-3 py-1 rounded">عدسة</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:bg-zinc-800 transition"><FontAwesomeIcon icon={faEnvelope} /></a>
              <a href="#" className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:bg-zinc-800 transition"><FontAwesomeIcon icon={faPhone} /></a>
              <a href="#" className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-orange-500 hover:bg-zinc-800 transition"><FontAwesomeIcon icon={faMapMarkerAlt} /></a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-bold mb-4 relative inline-block">
              استكشف
              <span className="absolute top-1/2 -right-6 w-4 h-0.5 bg-orange-600"></span>
            </h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-zinc-400 hover:text-orange-500 transition text-sm">الرئيسية</Link></li>
              <li><Link to="/blog" className="text-zinc-400 hover:text-orange-500 transition text-sm">المدونة</Link></li>
              <li><Link to="/about" className="text-zinc-400 hover:text-orange-500 transition text-sm">من نحن</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-4 relative inline-block">
              التصنيفات
              <span className="absolute top-1/2 -right-6 w-4 h-0.5 bg-orange-600"></span>
            </h4>
            <ul className="space-y-2">
              <li><Link to="/blog?category=إضاءة" className="text-zinc-400 hover:text-orange-500 transition text-sm">إضاءة</Link></li>
              <li><Link to="/blog?category=بورتريه" className="text-zinc-400 hover:text-orange-500 transition text-sm">بورتريه</Link></li>
              <li><Link to="/blog?category=مناظر طبيعية" className="text-zinc-400 hover:text-orange-500 transition text-sm">مناظر طبيعية</Link></li>
              <li><Link to="/blog?category=تقنيات" className="text-zinc-400 hover:text-orange-500 transition text-sm">تقنيات</Link></li>
            </ul>
          </div>

          {/* Stay Informed */}
          <div>
            <h4 className="text-white font-bold mb-4 relative inline-block">
              ابق على اطلاع
              <span className="absolute top-1/2 -right-6 w-4 h-0.5 bg-orange-600"></span>
            </h4>
            <p className="text-zinc-400 text-sm mb-4">اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="أدخل بريدك الإلكتروني" className="bg-zinc-900 border border-zinc-800 text-white px-4 py-2 rounded focus:outline-none focus:border-orange-500 text-sm" />
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition font-medium text-sm">اشترك</button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800 text-xs text-zinc-500">
          <p>© 2026 عدسة. صنع بكل 🧡. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-zinc-300">سياسة الخصوصية</Link>
            <Link to="#" className="hover:text-zinc-300">شروط الخدمة</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
