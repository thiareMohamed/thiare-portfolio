import { Link } from 'react-router-dom';
import { Articles } from '../assets/data/articles';
import { useLang } from './LangContext';
import { SectionLabel } from './ui';

export const sortedArticles = () => [...Articles].sort((a, b) => b.date.localeCompare(a.date));

export function ArticleCard({ article }) {
  return (
    <Link
      data-reveal
      to={`/blog/${article.slug}`}
      className='p-7 rounded-[22px] bg-ink border border-line flex flex-col gap-[14px] min-h-[280px] box-border transition-[transform,border-color] duration-[400ms] ease-dojo hover:-translate-y-[6px] hover:border-vermilion hover:text-paper'
    >
      <div className='mono-label mono-sm flex justify-between gap-3'>
        <span className='text-vermilion'>{article.category}</span>
        <span className='text-muted'>{article.readTime}</span>
      </div>
      <div className='font-bold text-2xl leading-[1.15] tracking-[-0.01em]'>{article.title}</div>
      <div className='text-muted text-[15px] [text-wrap:pretty]'>{article.excerpt}</div>
      <div className='mt-auto flex justify-between font-mono text-xs text-muted'>
        <span>{article.date}</span>
        <span className='text-paper'>→</span>
      </div>
    </Link>
  );
}

function Blog() {
  const { t } = useLang();

  return (
    <section id='blog' className='section-pad bg-surface border-y border-line'>
      <div className='container-dojo'>
        <div className='flex flex-col gap-6 mb-12'>
          <SectionLabel num='05'>Blog</SectionLabel>
          <h2 data-reveal className='display h2-dojo'>
            {t.blogTitle}<span className='text-vermilion'>.</span>
          </h2>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[14px]'>
          {sortedArticles().slice(0, 3).map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
