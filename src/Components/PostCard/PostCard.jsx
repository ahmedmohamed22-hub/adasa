import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function PostCard({ post }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden group hover:border-orange-500/50 transition-colors duration-300">
      <Link to={`/post/${post.slug}`} className="block relative h-48 overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-4 left-4 bg-zinc-900/80 backdrop-blur text-white text-xs px-3 py-1 rounded-full border border-zinc-700">
          {post.category}
        </span>
      </Link>
      
      <div className="p-5">
        <div className="flex items-center gap-4 text-xs text-zinc-400 mb-3">
          <div className="flex items-center gap-1">
            <FontAwesomeIcon icon={faClock} className="text-orange-500 text-sm" />
            <span>{post.readTime}</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
          <span>{post.date}</span>
        </div>
        
        <Link to={`/post/${post.slug}`} className="block mb-3">
          <h3 className="text-white font-bold text-lg leading-tight group-hover:text-orange-500 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-zinc-400 text-sm line-clamp-2 mb-6 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-zinc-800">
          <div className="flex items-center gap-3">
            <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full object-cover" />
            <div>
              <p className="text-white text-xs font-medium">{post.author.name}</p>
              <p className="text-zinc-500 text-[10px]">{post.author.role}</p>
            </div>
          </div>
          <Link to={`/post/${post.slug}`} className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:bg-orange-600 group-hover:text-white transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
        </div>
      </div>
    </div>
  );
}
