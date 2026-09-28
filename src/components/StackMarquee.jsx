import { STACK } from '../assets/data/translations';

function StackMarquee() {
  return (
    <section aria-label='Stack' className='relative z-[3] py-7 overflow-hidden'>
      <div className='bg-vermilion text-on-vermilion [transform:rotate(-2deg)_scale(1.04)] py-[18px] overflow-hidden'>
        <div className='display flex w-max animate-mq text-[clamp(26px,3.2vw,44px)] leading-none [font-variation-settings:"wdth"_118]'>
          {STACK.concat(STACK).map((item, i) => (
            <span key={i} className='flex items-center gap-8 pr-8 whitespace-nowrap'>
              {item}
              <span className='kanji text-[0.7em]'>侍</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StackMarquee;
