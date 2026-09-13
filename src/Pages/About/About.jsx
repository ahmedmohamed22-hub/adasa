import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faLightbulb, faUsers, faGlobe } from '@fortawesome/free-solid-svg-icons';
import data from '../../data/posts.json';

export default function About() {
  const { posts } = data;
  
  // Extract unique authors
  const uniqueAuthorsMap = new Map();
  posts.forEach(post => {
    if (!uniqueAuthorsMap.has(post.author.name)) {
      uniqueAuthorsMap.set(post.author.name, post.author);
    }
  });
  const authors = Array.from(uniqueAuthorsMap.values());

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-zinc-900 border-b border-zinc-800 py-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <span className="inline-block bg-orange-500/10 text-orange-500 border border-orange-500/20 px-3 py-1 rounded-full text-xs font-medium mb-6">
            من نحن
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            مهمتنا هي <span className="text-orange-500">الإعلام والإلهام</span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            نحن منصة رائدة مكرسة لفن التصوير الفوتوغرافي. نسعى لتمكين المصورين من جميع المستويات من خلال مشاركة المعرفة والإلهام وأفضل الممارسات في الصناعة.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-medium text-sm mb-2 block">قيمنا</span>
            <h2 className="text-3xl font-bold text-white">المبادئ التي توجهنا</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center hover:border-orange-500/50 transition-colors">
              <FontAwesomeIcon icon={faLightbulb} className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-white text-xl font-bold mb-3">الإبداع</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">نشجع التفكير خارج الصندوق وندعم الرؤى الفنية الفريدة في كل لقطة.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center hover:border-orange-500/50 transition-colors">
              <FontAwesomeIcon icon={faUsers} className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-white text-xl font-bold mb-3">المجتمع</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">نبني بيئة داعمة حيث يمكن للمصورين التعلم من بعضهم البعض والنمو معاً.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl text-center hover:border-orange-500/50 transition-colors">
              <FontAwesomeIcon icon={faBullseye} className="text-4xl text-orange-500 mx-auto mb-4" />
              <h3 className="text-white text-xl font-bold mb-3">التميز</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">نسعى جاهدين لتقديم محتوى عالي الجودة ودقيق تقنياً لقرائنا.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Authors */}
      <section className="py-20 bg-zinc-950/50 border-t border-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 font-medium text-sm mb-2 block">فريقنا</span>
            <h2 className="text-3xl font-bold text-white">تعرف على كتابنا</h2>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">نخبة من المصورين المحترفين يشاركون خبراتهم</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {authors.map((author, idx) => (
              <div key={idx} className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl text-center hover:border-orange-500/50 transition-colors group">
                <img src={author.avatar} alt={author.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 group-hover:scale-105 transition-transform" />
                <h3 className="text-white font-bold text-lg mb-1">{author.name}</h3>
                <p className="text-orange-500 text-xs mb-4">{author.role}</p>
                <div className="flex justify-center gap-2">
                  <a href="#" className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition"><FontAwesomeIcon icon={faGlobe} /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">لديك أسئلة؟ دعنا نتحدث!</h2>
          <p className="text-orange-100 mb-8 text-lg">نحن دائماً مستعدون للإجابة على استفساراتكم ومساعدتكم في رحلتكم التصويرية.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-zinc-100 transition">
              اتصل بنا
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
