import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faThLarge, faList } from '@fortawesome/free-solid-svg-icons';
import data from '../../data/posts.json';
import PostCard from '../../Components/PostCard/PostCard';

export default function Blog() {
  const { posts, categories } = data;
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');
  const [isGrid, setIsGrid] = useState(true);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === 'الكل' || post.category === activeCategory;
    const matchesSearch = post.title.includes(searchQuery) || post.excerpt.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-zinc-900 border-b border-zinc-800 py-16 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <span className="inline-block bg-orange-500/10 text-orange-500 border border-orange-500/20 px-3 py-1 rounded-full text-xs font-medium mb-4">
            مدونتنا
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            استكشف <span className="text-orange-500">مقالاتنا</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
          
          <div className="max-w-2xl mx-auto relative">
            <FontAwesomeIcon icon={faSearch} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input 
              type="text" 
              placeholder="ابحث في المقالات..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-full py-4 pr-12 pl-4 focus:outline-none focus:border-orange-500 transition-colors"
            />
            <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full transition-colors text-sm font-medium">
              ابحث
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
              <button 
                onClick={() => setActiveCategory('الكل')}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === 'الكل' ? 'bg-orange-600 text-white' : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'}`}
              >
                الكل
              </button>
              {categories.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat.name ? 'bg-orange-600 text-white' : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t border-zinc-800 md:border-none pt-4 md:pt-0">
              <p className="text-zinc-500 text-sm">عرض <span className="text-white font-bold">{filteredPosts.length}</span> مقالات</p>
              <div className="flex items-center gap-2 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
                <button 
                  onClick={() => setIsGrid(true)} 
                  className={`p-1.5 rounded cursor-pointer transition ${isGrid ? 'bg-orange-600 text-white' : 'text-zinc-500 hover:text-white'}`}
                >
                  <FontAwesomeIcon icon={faThLarge} />
                </button>
                <button 
                  onClick={() => setIsGrid(false)} 
                  className={`p-1.5 rounded cursor-pointer transition ${!isGrid ? 'bg-orange-600 text-white' : 'text-zinc-500 hover:text-white'}`}
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-zinc-500 text-lg">لم يتم العثور على مقالات تطابق بحثك.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
