import { ArticleCard, sortedArticles } from '../components/Blog';
import Footer from '../components/Footer';
import { useLang } from '../components/LangContext';
import SEO from '../components/SEO';
import { SectionLabel } from '../components/ui';

function Blog() {
  const { t } = useLang();

  return (
    <main className='pt-[140px] pb-12'>
      <SEO title='Blog — Mohamed THIARE' description='Articles sur le développement web, astuces pratiques et bonnes pratiques.' />
      <div className='container-dojo'>
        <div className='flex flex-col gap-6 mb-12'>
          <SectionLabel num='05'>Blog</SectionLabel>
          <h1 data-reveal className='display h2-dojo'>
            {t.blogTitle}<span className='text-vermilion'>.</span>
          </h1>
          <div data-reveal className='mono-label mono-sm text-muted'>{t.allArticles}</div>
        </div>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-[14px]'>
          {sortedArticles().map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Blog;
