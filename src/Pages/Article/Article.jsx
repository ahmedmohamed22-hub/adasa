import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock, faShareAlt, faLink, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import data from '../../data/posts.json';

export default function Article() {
  const { slug } = useParams();
  const { posts } = data;
  const post = posts.find(p => p.slug === slug);
  const relatedPosts = posts.filter(p => p.category === post?.category && p.id !== post?.id).slice(0, 3);

  if (!post) return <div className="text-center py-20 text-white">المقال غير موجود</div>;

  return (
    <article className="min-h-screen">
      {/* Hero */}
      <section className="bg-zinc-900 border-b border-zinc-800 py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 text-sm text-zinc-400 mb-6">
            <Link to="/blog" className="hover:text-orange-500 transition">المدونة</Link>
            <span>/</span>
            <span className="text-orange-500">{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full object-cover" />
              <div className="text-right">
                <p className="text-white font-medium">{post.author.name}</p>
                <p className="text-xs">{post.author.role}</p>
              </div>
            </div>
            <div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-orange-500" />
              <span>{post.date}</span>
            </div>
            <div className="w-1 h-1 bg-zinc-700 rounded-full"></div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faClock} className="text-orange-500" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Layout */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content */}
            <div className="lg:w-2/3">
              <img src={post.image} alt={post.title} className="w-full h-80 md:h-[400px] object-cover rounded-2xl mb-10" />
              
              <div className="prose prose-invert prose-orange max-w-none prose-headings:text-white prose-p:text-zinc-300 prose-a:text-orange-500 prose-img:rounded-xl leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-wrap items-center gap-3">
                <span className="text-white font-bold ml-2">الوسوم:</span>
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="bg-zinc-900 border border-zinc-800 text-zinc-400 px-3 py-1 rounded-full text-xs hover:text-white hover:border-orange-500 transition cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Box */}
              <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center md:items-start">
                <img src={post.author.avatar} alt={post.author.name} className="w-20 h-20 rounded-full object-cover" />
                <div className="text-center md:text-right">
                  <h4 className="text-white font-bold text-lg mb-1">{post.author.name}</h4>
                  <p className="text-orange-500 text-sm mb-3">{post.author.role}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-28 space-y-8">
                {/* Share */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                  <h4 className="text-white font-bold flex items-center gap-2 mb-4">
                    <FontAwesomeIcon icon={faShareAlt} className="text-orange-500 text-lg" />
                    شارك المقال
                  </h4>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:bg-orange-600 hover:text-white transition"><FontAwesomeIcon icon={faLink} className="text-lg" /></button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </article>
  );
}
