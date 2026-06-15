import React, { useState } from 'react'
import ThiarePhoto from '../assets/images/ThiarePhoto.jfif'

// Import des images locales
import TopatokoImage from '../assets/images/topatoko.png';
import ViziPassImage from '../assets/images/vizi_pass.png';
import MarchePublicImage from '../assets/images/marche_public.png';
import LohiFoundationImage from '../assets/images/lohifoundation.png';
import VisionStatsImage from '../assets/images/vision_stats.png';
import BookfightersImage from '../assets/images/bookfighters.png';
import SenumImage from '../assets/images/senum.png';
import SamaGokh from '../assets/images/samagokh.png';
import Pharmacy from '../assets/images/pharmacy.png';

function CardProject(props) {
  const value = props.value;
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Mapping des images locales par ID de projet
  const localImages = {
    1: TopatokoImage,
    2: ViziPassImage,
    3: MarchePublicImage,
    4: LohiFoundationImage,
    6: VisionStatsImage,
    5: BookfightersImage,
    7: SenumImage,
    8: SamaGokh,
    9: Pharmacy
  };

  const getProjectImage = () => {
    if (localImages[value.id]) {
      return localImages[value.id];
    }
    if (value.image) {
      return value.image;
    }
    return ThiarePhoto;
  };

  const projectImage = imageError ? ThiarePhoto : getProjectImage();

  return (
    <div
      className='glass-effect border border-crimson/30 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 w-full hover:border-crimson/60 transition-all duration-300 hover-lift cursor-pointer group relative overflow-hidden'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Effet de fond animé */}
      <div className={`absolute inset-0 bg-gradient-to-br from-crimson/10 via-transparent to-gold/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className='relative z-10'>
        <div className='flex items-center justify-between gap-2 mb-2'>
          <h3 className='text-lg sm:text-xl md:text-2xl font-bold text-washi' style={{ fontFamily: '"Shippori Mincho", serif' }}>
            {value.title}
          </h3>
          {value.category && (
            <span className='text-xs text-gold font-semibold px-2 py-1 rounded-full bg-gold/10 border border-gold/30 whitespace-nowrap'>
              {value.category}
            </span>
          )}
        </div>
        <p className='text-xs sm:text-sm text-washi/70 leading-relaxed mb-3 sm:mb-4 line-clamp-3'>
          {value.description}
        </p>
        <div className='flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4'>
          {value.stacks.map((stack, index) => (
            <span
              key={index}
              className="glass-effect text-crimson-light text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-crimson/30 hover:border-gold/60 transition-all duration-300"
            >
              {stack}
            </span>
          ))}
        </div>
        <div className='relative rounded-xl overflow-hidden border border-gold/20 group-hover:border-crimson/50 transition-all duration-300 bg-gradient-to-br from-crimson/10 to-gold/10'>
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end justify-center pb-4'>
            {value.url && (
              <a
                href={value.url}
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs text-washi font-semibold px-4 py-2 rounded-lg bg-crimson/90 hover:bg-crimson transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100'
                onClick={(e) => e.stopPropagation()}
              >
                Voir le projet →
              </a>
            )}
          </div>
          <img
            src={projectImage}
            alt={value.title || 'Project'}
            className='w-full h-40 sm:h-48 object-cover transform group-hover:scale-110 transition-transform duration-500'
            onError={() => setImageError(true)}
          />
        </div>
      </div>

      {/* Effet de brillance au survol */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent transform -skew-x-12 transition-transform duration-700 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`}></div>
    </div>
  )
}

export default CardProject
