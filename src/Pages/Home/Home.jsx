import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBookOpen, faCamera, faUsers, faAward } from '@fortawesome/free-solid-svg-icons';
import data from '../../data/posts.json';
import PostCard from '../../Components/PostCard/PostCard';

export default function Home() {
  const { posts, categories } = data;
  const featuredPosts = posts.filter(p => p.featured).slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 text-center relative overflow-hidden border-b border-zinc-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block bg-orange-500/20 text-orange-500 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            مرحباً بك في مدونة عدسة
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            اكتشف <span className="text-orange-500">فن</span><br />
            التصوير الفوتوغرافي
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            انغمس في أسرار العدسة والرؤى والنصائح من أمهر المصورين لتعزيز مهاراتك في التقاط الصور.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/blog" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-medium transition-colors w-full sm:w-auto">
              تصفح المقالات
            </Link>
            <Link to="/about" className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-full font-medium transition-colors border border-zinc-700 w-full sm:w-auto flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faBookOpen} />
              تعلم المزيد
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <FontAwesomeIcon icon={faUsers} className="text-3xl text-orange-500 mx-auto mb-3 block" />
              <h3 className="text-white text-2xl font-bold mb-1">+7 مليون</h3>
              <p className="text-zinc-500 text-xs">قراء شهرياً</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <FontAwesomeIcon icon={faBookOpen} className="text-3xl text-orange-500 mx-auto mb-3 block" />
              <h3 className="text-white text-2xl font-bold mb-1">+500</h3>
              <p className="text-zinc-500 text-xs">مقال تعليمي</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <FontAwesomeIcon icon={faCamera} className="text-3xl text-orange-500 mx-auto mb-3 block" />
              <h3 className="text-white text-2xl font-bold mb-1">+50</h3>
              <p className="text-zinc-500 text-xs">خبير تصوير</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
              <FontAwesomeIcon icon={faAward} className="text-3xl text-orange-500 mx-auto mb-3 block" />
              <h3 className="text-white text-2xl font-bold mb-1">+15</h3>
              <p className="text-zinc-500 text-xs">سنة خبرة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-orange-500 font-medium text-sm mb-2 block">الأفضل</span>
              <h2 className="text-3xl font-bold text-white">مقالات مختارة</h2>
            </div>
            <Link to="/blog" className="text-zinc-400 hover:text-orange-500 transition-colors flex items-center gap-2 text-sm font-medium bg-zinc-900 px-4 py-2 rounded-full border border-zinc-800">
              عرض الكل
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            {featuredPosts.map((post, idx) => (
              <div key={post.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col md:flex-row group hover:border-orange-500/50 transition-colors">
                <div className="md:w-2/5 p-8 flex flex-col justify-center">
                  <span className="inline-block bg-orange-500/10 text-orange-500 text-xs px-3 py-1 rounded-full w-fit mb-4 border border-orange-500/20">{post.category}</span>
                  <Link to={`/post/${post.slug}`}>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors leading-tight">{post.title}</h3>
                  </Link>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center gap-3 mt-auto">
                    <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="text-white text-sm font-medium">{post.author.name}</p>
                      <p className="text-zinc-500 text-xs">{post.date}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/5 h-64 md:h-auto overflow-hidden relative">
                  <Link to={`/post/${post.slug}`}>
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-zinc-950/50 border-t border-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-orange-500 font-medium text-sm mb-2 block">جديدنا</span>
              <h2 className="text-3xl font-bold text-white">أحدث المقالات</h2>
            </div>
            <Link to="/blog" className="text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-2 text-sm font-medium">
              تصفح كل المقالات
              <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
