import React from 'react';
import { ProductItem, buildWhatsAppUrl } from '../data/catalog';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ProductCardProps {
  product: ProductItem;
  onSelect: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  return (
    <article className="group flex flex-col justify-between bg-white shadow-[0_15px_15px_-10px_rgba(0,0,0,0.05)] border border-[#EDF2F7] transition-transform duration-200 hover:-translate-y-0.5">
      <div>
        <button
          type="button"
          onClick={() => onSelect(product)}
          className="block w-full aspect-square overflow-hidden bg-white text-left cursor-pointer"
        >
          <img
            src={product.image}
            alt={product.alt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (target.src !== product.fallbackImage) {
                target.src = product.fallbackImage;
              }
            }}
            className="h-full w-full object-cover"
          />
        </button>

        <div className="p-4 pb-1">
          <h3 className="font-sans text-[16px] font-semibold leading-snug text-[#1A202C]">
            <button
              type="button"
              onClick={() => onSelect(product)}
              className="text-left hover:text-[#cf251d] transition-colors cursor-pointer"
            >
              {product.title}
            </button>
          </h3>
        </div>
      </div>

      <div className="p-4 pt-2">
        <a
          href={buildWhatsAppUrl(product.title)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Enquire about ${product.title} on WhatsApp`}
          className="flex w-full min-h-[44px] items-center justify-center gap-[7px] rounded-[5px] bg-[#25d366] px-2 py-2.5 text-[14px] font-bold leading-[1.2] text-white hover:bg-[#1ebe5d] transition-colors"
        >
          <WhatsAppIcon className="h-5 w-5 shrink-0" />
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </article>
  );
};
