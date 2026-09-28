import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, Navigate, useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';
import { Articles } from '../assets/data/articles';
import Footer from './Footer';
import { useLang } from './LangContext';
import SEO from './SEO';

const md = {
  h1: ({ node, children, ...props }) => <h1 className='display text-[clamp(32px,4vw,48px)] leading-[0.95] mt-12 mb-5' {...props}>{children}</h1>,
  h2: ({ node, children, ...props }) => <h2 className='font-bold text-[28px] leading-[1.15] tracking-[-0.01em] mt-12 mb-4' {...props}>{children}</h2>,
  h3: ({ node, children, ...props }) => <h3 className='font-bold text-xl text-vermilion mt-8 mb-3' {...props}>{children}</h3>,
  p: ({ node, ...props }) => <p className='text-soft text-[17px] leading-[1.7] mb-5' {...props} />,
  a: ({ node, children, ...props }) => <a className='text-vermilion underline underline-offset-4' target='_blank' rel='noopener noreferrer' {...props}>{children}</a>,
  ul: ({ node, ...props }) => <ul className='list-disc pl-5 text-soft mb-5 flex flex-col gap-2' {...props} />,
  ol: ({ node, ...props }) => <ol className='list-decimal pl-5 text-soft mb-5 flex flex-col gap-2' {...props} />,
  blockquote: ({ node, ...props }) => <blockquote className='border-l-2 border-vermilion pl-5 italic text-muted my-6' {...props} />,
  strong: ({ node, ...props }) => <strong className='text-paper font-semibold' {...props} />,
  pre: ({ node, ...props }) => <pre className='bg-surface border border-line rounded-2xl p-5 overflow-x-auto mb-6 text-sm' {...props} />,
  code: ({ node, className, ...props }) =>
    className
      ? <code className={`font-mono ${className}`} {...props} />
      : <code className='font-mono text-[0.9em] bg-surface border border-line rounded-md px-[6px] py-[2px]' {...props} />,
  hr: () => <hr className='border-0 border-t border-line my-10' />,
};

function BlogPost() {
  const { slug } = useParams();
  const { t, lang } = useLang();
  const article = Articles.find((a) => a.slug === slug);
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!article) return undefined;
    let cancelled = false;
    setLoading(true);
    window.scrollTo(0, 0);
    fetch(`/articles/${article.slug}.md`)
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error(r.status))))
      .catch(() => `# ${article.title}\n\nLe contenu de cet article n'est pas encore disponible.`)
      // Le titre est déjà affiché dans l'en-tête : on retire le « # Titre » initial
      .then((text) => { if (!cancelled) { setContent(text.replace(/^\s*# .*\n/, '')); setLoading(false); } });
    return () => { cancelled = true; };
  }, [article]);

  if (!article) return <Navigate to='/blog' replace />;

  const date = new Date(article.date).toLocaleDateString(lang === 'en' ? 'en-GB' : 'fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <main className='pt-[140px] pb-12'>
      <SEO title={`${article.title} — Mohamed THIARE`} description={article.excerpt} keywords={article.tags.join(', ')} />
      <article className='container-dojo max-w-[820px]'>
        <Link to='/blog' className='mono-label mono-sm text-muted inline-flex items-center gap-2 mb-10'>← {t.back}</Link>
        <div className='mono-label mono-sm flex flex-wrap gap-x-4 gap-y-2 mb-6'>
          <span className='text-vermilion'>{article.category}</span>
          <span className='text-muted'>{date}</span>
          <span className='text-muted'>{article.readTime} {t.readTime}</span>
        </div>
        <h1 className='display m-0 text-[clamp(40px,6vw,80px)] leading-[0.9] mb-8'>{article.title}</h1>
        <div className='flex flex-wrap gap-[6px] mb-12'>
          {article.tags.map((tag) => (
            <span key={tag} className='px-[11px] py-[5px] rounded-full bg-surface border border-line text-xs'>{tag}</span>
          ))}
        </div>
        <div className='border-t border-line pt-4'>
          {loading
            ? <p className='mono-label text-muted py-12'>{t.loading}</p>
            : <ReactMarkdown remarkPlugins={[remarkGfm]} components={md}>{content}</ReactMarkdown>}
        </div>
      </article>
      <Footer />
    </main>
  );
}

export default BlogPost;
