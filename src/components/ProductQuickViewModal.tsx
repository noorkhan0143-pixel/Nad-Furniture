import React, { useState, useEffect } from 'react';
import { X, Minus, Plus, Check } from 'lucide-react';
import { ProductItem, buildWhatsAppUrl } from '../data/catalog';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ProductQuickViewModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuote: (productTitle: string) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && product) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-xs"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pdp-modal-title"
    >
      <div
        className="relative w-full max-w-3xl rounded-lg bg-white p-6 md:p-8 shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Product Details"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-md text-[#4A5568] hover:bg-[#EDF2F7] hover:text-[#1A202C] transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div className="aspect-square w-full overflow-hidden rounded-md bg-[#F7FAFC]">
            <img
              src={product.image}
              alt={product.alt}
              referrerPolicy="no-referrer"
              onError={(e) => {
                if (e.currentTarget.src !== product.fallbackImage) {
                  e.currentTarget.src = product.fallbackImage;
                }
              }}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-wider text-[#718096]">
              {product.categoryLabel}
            </span>
            <h2
              id="pdp-modal-title"
              className="mt-1 text-2xl font-bold text-[#1A202C] leading-snug"
            >
              {product.title}
            </h2>

            <div className="mt-4 rounded-lg border border-[#e5e7eb] bg-[#f7f8f9] px-4 py-3">
              <p className="text-xs text-[#666666]">Factory-Direct Wholesale Supply</p>
              <p className="mt-0.5 text-sm font-semibold text-[#1A202C]">
                Free UAE Delivery on Orders Above 5,000 AED
              </p>
            </div>

            <ul className="mt-4 space-y-2">
              {product.specs.map((spec) => (
                <li
                  key={spec}
                  className="flex items-start gap-2 text-sm text-[#4A5568]"
                >
                  <Check className="h-4 w-4 text-[#b82105] shrink-0 mt-0.5" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-[#EDF2F7]">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-medium text-[#2D3748]">Quantity:</span>
                <div className="inline-flex items-center">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="flex h-11 w-11 items-center justify-center rounded-l-[6px] border border-[#d9d9d9] bg-[#f5f5f5] text-[#1A202C] hover:bg-[#e9e9e9] transition-colors cursor-pointer"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))
                    }
                    aria-label="Quantity"
                    className="h-11 w-16 border-y border-[#d9d9d9] text-center text-base font-semibold text-[#1A202C] tabular-nums focus:outline-none"
                  />
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="flex h-11 w-11 items-center justify-center rounded-r-[6px] border border-[#d9d9d9] bg-[#f5f5f5] text-[#1A202C] hover:bg-[#e9e9e9] transition-colors cursor-pointer"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <a
                href={buildWhatsAppUrl(product.title, quantity)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full min-h-[52px] items-center justify-center gap-2.5 rounded-[6px] bg-[#25D366] px-5 py-3.5 text-[16px] font-bold text-white hover:bg-[#1ebe5d] transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5 shrink-0" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestQuote(product.title);
                }}
                className="mt-2.5 flex w-full min-h-[46px] items-center justify-center rounded-[6px] border border-[#b82105] bg-white px-5 py-2.5 text-sm font-semibold text-[#b82105] hover:bg-[#b82105] hover:text-white transition-colors cursor-pointer"
              >
                Request Formal Bulk Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
