import React, { useState } from 'react';
import {
  Warehouse,
  Truck,
  Boxes,
  LifeBuoy,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Building2,
  Wrench,
  Users,
  Landmark,
  HardHat,
  Building,
} from 'lucide-react';
import {
  SITE_IMAGES,
  BUNK_BEDS,
  STEEL_LOCKERS,
  WARDROBES,
  ALL_PRODUCTS,
  ProductItem,
  ProductCategory,
  WHATSAPP_NUMBER,
} from './data/catalog';
import { ProductCard } from './components/ProductCard';
import { BulkQuoteModal } from './components/BulkQuoteModal';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import { AiAssistantChat } from './components/AiAssistantChat';

type FilterTab = 'all' | ProductCategory;

const NadBrandMark: React.FC = () => (
  <span className="inline-flex items-center gap-2 select-none">
    <span
      className="text-[32px] font-bold tracking-tight text-[#cf251d] leading-none"
      style={{ fontFamily: 'var(--font-heading)' }}
    >
      NAD
    </span>
    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-white border-l border-[#cf251d] pl-2 leading-none">
      Furniture
    </span>
  </span>
);

export default function App() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const openBulkQuote = (productTitle = '') => {
    setQuoteProduct(productTitle);
    setQuoteModalOpen(true);
    setMobileMenuOpen(false);
  };

  const handleCategorySelect = (category: FilterTab) => {
    setActiveFilter(category);
    setMobileMenuOpen(false);
    const el = document.getElementById('featured-items');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredProducts =
    activeFilter === 'all'
      ? []
      : ALL_PRODUCTS.filter((item) => item.category === activeFilter);

  return (
    <div id="wrapper" className="min-h-screen flex flex-col bg-white text-[#2D3748]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#1A202C] focus:shadow-md"
      >
        Skip to content
      </a>

      {/* Header */}
      <header id="masthead" className="w-full bg-[#000000] text-white relative z-30">
        {/* Top Utility Bar (Desktop) */}
        <div
          className="hidden lg:block bg-[#131313]"
          style={{
            backgroundImage: `url(${SITE_IMAGES.subtlePattern})`,
            backgroundPosition: '0% 56%',
          }}
        >
          <div className="mx-auto flex max-w-[1290px] items-center justify-between px-6 py-2 text-[14px] text-[#EDF2F7]">
            <nav aria-label="Secondary" className="flex items-center gap-5">
              <button
                type="button"
                onClick={() => scrollToSection('about-us')}
                className="hover:text-[#b82105] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('category-showcase')}
                className="hover:text-[#b82105] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Project Gallery
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('who-we-serve')}
                className="hover:text-[#b82105] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Blogs
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('colophon')}
                className="hover:text-[#b82105] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Career
              </button>
              <button
                type="button"
                onClick={() => openBulkQuote()}
                className="hover:text-[#b82105] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Request a Furniture Quote
              </button>
            </nav>

            <div className="flex items-center gap-3 text-[15px] font-semibold whitespace-nowrap shrink-0">
              <a
                href="mailto:Info@nad.furniture"
                className="inline-flex items-center gap-1.5 text-[#EDF2F7] hover:text-white transition-colors"
              >
                <span aria-hidden="true" className="text-[12px]">
                  ✉
                </span>
                <span>Info@nad.furniture</span>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-[#25D366] transition-colors"
              >
                <img
                  src={SITE_IMAGES.whatsappIcon}
                  alt="WhatsApp"
                  width={24}
                  height={24}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                  className="h-6 w-6 object-contain"
                />
                <span className="tabular-nums">+971 50 631 6560</span>
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Top Promo Bar */}
        <div
          className="lg:hidden bg-[#131313] py-2 px-4 text-center"
          style={{
            backgroundImage: `url(${SITE_IMAGES.subtlePattern})`,
          }}
        >
          <p className="text-[13px] uppercase leading-none text-[#EDF2F7]">
            Free Shipping over Orders above 5000 AED
          </p>
        </div>

        {/* Main Header Bar */}
        <div className="bg-[#000000]">
          <div className="mx-auto flex min-h-[80px] max-w-[1290px] items-center justify-between px-6">
            {/* Left: Red NAD Brand Logo */}
            <a
              href="#top"
              className="flex items-center py-2 whitespace-nowrap shrink-0"
              aria-label="NAD Furniture Home"
            >
              <NadBrandMark />
            </a>

            {/* Center: Primary Navigation (Desktop) */}
            <nav
              aria-label="Primary"
              className="hidden lg:flex items-center gap-8 text-[18px] uppercase text-[#EDF2F7]"
            >
              {/* Labour Camp Furniture Dropdown */}
              <div className="relative group py-3">
                <button
                  type="button"
                  onClick={() => handleCategorySelect('bunk-beds')}
                  className="inline-flex items-center gap-1 hover:text-[#cf251d] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>LABOUR CAMP FURNITURE</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 top-full w-[200px] bg-[#1A202C] shadow-[0_2px_13px_0_rgba(0,0,0,0.1)] z-40">
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('bunk-beds')}
                    className="block w-full px-4 py-3.5 text-left text-[14px] capitalize text-[#F7FAFC] hover:bg-[#2D3748] border-b border-white/10 cursor-pointer"
                  >
                    Bunk Bed
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('steel-lockers')}
                    className="block w-full px-4 py-3.5 text-left text-[14px] capitalize text-[#F7FAFC] hover:bg-[#2D3748] border-b border-white/10 cursor-pointer"
                  >
                    Steel Locker Cabinets
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('beds')}
                    className="block w-full px-4 py-3.5 text-left text-[14px] capitalize text-[#F7FAFC] hover:bg-[#2D3748] cursor-pointer"
                  >
                    Mattress
                  </button>
                </div>
              </div>

              {/* Office Furniture Dropdown */}
              <div className="relative group py-3">
                <button
                  type="button"
                  onClick={() => handleCategorySelect('office-furniture')}
                  className="inline-flex items-center gap-1 hover:text-[#cf251d] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>OFFICE FURNITURE</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 top-full w-[200px] bg-[#1A202C] shadow-[0_2px_13px_0_rgba(0,0,0,0.1)] z-40">
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('office-furniture')}
                    className="block w-full px-4 py-3.5 text-left text-[14px] capitalize text-[#F7FAFC] hover:bg-[#2D3748] border-b border-white/10 cursor-pointer"
                  >
                    Office Tables
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('office-furniture')}
                    className="block w-full px-4 py-3.5 text-left text-[14px] capitalize text-[#F7FAFC] hover:bg-[#2D3748] cursor-pointer"
                  >
                    Office Workstation
                  </button>
                </div>
              </div>

              {/* Bedroom Furniture Dropdown */}
              <div className="relative group py-3">
                <button
                  type="button"
                  onClick={() => handleCategorySelect('wardrobe')}
                  className="inline-flex items-center gap-1 hover:text-[#cf251d] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>BEDROOM FURNITURE</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 absolute left-0 top-full w-[200px] bg-[#1A202C] shadow-[0_2px_13px_0_rgba(0,0,0,0.1)] z-40">
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('wardrobe')}
                    className="block w-full px-4 py-3.5 text-left text-[14px] capitalize text-[#F7FAFC] hover:bg-[#2D3748] border-b border-white/10 cursor-pointer"
                  >
                    Wardrobe
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('beds')}
                    className="block w-full px-4 py-3.5 text-left text-[14px] capitalize text-[#F7FAFC] hover:bg-[#2D3748] cursor-pointer"
                  >
                    Beds
                  </button>
                </div>
              </div>
            </nav>

            {/* Right spacer on desktop / Mobile Menu Toggle */}
            <div className="flex items-center shrink-0">
              <div className="hidden lg:block w-[120px]" aria-hidden="true" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-md text-[#F7FAFC] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end bg-black/70">
          <div
            className="fixed inset-0"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative z-10 w-80 max-w-[85vw] bg-[#131313] text-white h-full flex flex-col justify-between overflow-y-auto p-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <NadBrandMark />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-md text-white hover:bg-white/10 cursor-pointer"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="mt-4 divide-y divide-white/10 text-sm">
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSubmenu(mobileSubmenu === 'camp' ? null : 'camp')
                    }
                    className="flex w-full items-center justify-between py-3.5 text-left font-medium text-[#F7FAFC] cursor-pointer"
                  >
                    <span>LABOUR CAMP FURNITURE</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileSubmenu === 'camp' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileSubmenu === 'camp' && (
                    <div className="pl-4 pb-3 space-y-2 text-xs text-[#CBD5E0]">
                      <button
                        type="button"
                        onClick={() => handleCategorySelect('bunk-beds')}
                        className="block py-1.5 hover:text-white cursor-pointer"
                      >
                        Bunk Bed
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCategorySelect('steel-lockers')}
                        className="block py-1.5 hover:text-white cursor-pointer"
                      >
                        Steel Locker Cabinets
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCategorySelect('beds')}
                        className="block py-1.5 hover:text-white cursor-pointer"
                      >
                        Mattress
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSubmenu(mobileSubmenu === 'office' ? null : 'office')
                    }
                    className="flex w-full items-center justify-between py-3.5 text-left font-medium text-[#F7FAFC] cursor-pointer"
                  >
                    <span>OFFICE FURNITURE</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileSubmenu === 'office' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileSubmenu === 'office' && (
                    <div className="pl-4 pb-3 space-y-2 text-xs text-[#CBD5E0]">
                      <button
                        type="button"
                        onClick={() => handleCategorySelect('office-furniture')}
                        className="block py-1.5 hover:text-white cursor-pointer"
                      >
                        Office Tables
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCategorySelect('office-furniture')}
                        className="block py-1.5 hover:text-white cursor-pointer"
                      >
                        Office Workstation
                      </button>
                    </div>
                  )}
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileSubmenu(mobileSubmenu === 'bedroom' ? null : 'bedroom')
                    }
                    className="flex w-full items-center justify-between py-3.5 text-left font-medium text-[#F7FAFC] cursor-pointer"
                  >
                    <span>BEDROOM FURNITURE</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        mobileSubmenu === 'bedroom' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileSubmenu === 'bedroom' && (
                    <div className="pl-4 pb-3 space-y-2 text-xs text-[#CBD5E0]">
                      <button
                        type="button"
                        onClick={() => handleCategorySelect('wardrobe')}
                        className="block py-1.5 hover:text-white cursor-pointer"
                      >
                        Wardrobe
                      </button>
                      <button
                        type="button"
                        onClick={() => handleCategorySelect('beds')}
                        className="block py-1.5 hover:text-white cursor-pointer"
                      >
                        Beds
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection('about-us')}
                  className="block w-full py-3.5 text-left font-medium text-[#F7FAFC] cursor-pointer"
                >
                  About Us
                </button>
                <button
                  type="button"
                  onClick={() => scrollToSection('who-we-serve')}
                  className="block w-full py-3.5 text-left font-medium text-[#F7FAFC] cursor-pointer"
                >
                  Who We Serve
                </button>
                <button
                  type="button"
                  onClick={() => openBulkQuote()}
                  className="block w-full py-3.5 text-left font-semibold text-[#cf251d] cursor-pointer"
                >
                  Request a Furniture Quote
                </button>
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3 text-xs text-[#CBD5E0]">
              <p>Nazir Plaza Building, Ground Floor, Ajman, UAE</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] py-3 px-4 text-sm font-bold text-white"
              >
                <WhatsAppIcon className="h-4 w-4" />
                <span>+971 50 631 6560</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main id="main" className="flex-1">
        {/* 1. Hero Section */}
        <section
          className="w-full bg-[#000000] text-white relative overflow-hidden"
          style={{
            backgroundImage: `url(${SITE_IMAGES.subtlePattern})`,
            backgroundSize: 'contain',
            backgroundPosition: '0% 34%',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="mx-auto max-w-[1290px] px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-5 lg:pr-12">
                <h1 className="text-[36px] sm:text-[42px] lg:text-[54px] font-bold leading-[1.25] text-white">
                  Direct-from-Factory Accommodation Furniture at Unbeatable Wholesale Rates
                </h1>
                <p className="text-[17px] lg:text-[18px] leading-relaxed text-white max-w-2xl">
                  Cut out the middleman. We manufacture and supply heavy-duty bunk beds,
                  staff housing furniture, and bulk accommodation solutions across the
                  UAE.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => openBulkQuote()}
                    className="inline-flex items-center gap-3 rounded-[6px] border-2 border-[#b82105] bg-[#191919] px-6 py-3.5 text-[18px] text-white hover:bg-[#b82105] transition-colors cursor-pointer"
                  >
                    <span>Request a Bulk Quote</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <img
                  src={SITE_IMAGES.heroBunkBeds}
                  alt="bunkbeds"
                  width={500}
                  height={500}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== SITE_IMAGES.heroBunkBedsFallback) {
                      target.src = SITE_IMAGES.heroBunkBedsFallback;
                    }
                  }}
                  className="w-full max-w-[440px] aspect-square object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. 4-Column Feature Strip */}
        <section className="w-full bg-[#191919] text-white py-6">
          <div className="mx-auto max-w-[1290px] px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Warehouse className="h-[25px] w-[25px] text-white mb-2" aria-hidden="true" />
                <h3 className="font-sans text-[20px] font-bold text-white">
                  UAE Manufactured
                </h3>
                <p className="text-[16px] text-white">Quality furniture made locally</p>
              </div>

              <div className="flex flex-col items-center">
                <Truck className="h-[25px] w-[25px] text-white mb-2" aria-hidden="true" />
                <h3 className="font-sans text-[20px] font-bold text-white">
                  Free Shipping
                </h3>
                <p className="text-[16px] text-white">On orders of 5000 AED or more</p>
              </div>

              <div className="flex flex-col items-center">
                <Boxes className="h-[25px] w-[25px] text-white mb-2" aria-hidden="true" />
                <h3 className="font-sans text-[20px] font-bold text-white">
                  Bulk Order Supply
                </h3>
                <p className="text-[16px] text-white">For projects of all sizes</p>
              </div>

              <div className="flex flex-col items-center">
                <LifeBuoy className="h-[25px] w-[25px] text-white mb-2" aria-hidden="true" />
                <h3 className="font-sans text-[20px] font-bold text-white">
                  24/7 Customer Service
                </h3>
                <p className="text-[16px] text-white">Contact us anytime</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. About Us & YouTube Video Section */}
        <section id="about-us" className="w-full pt-16 pb-6 bg-white">
          <div className="mx-auto max-w-[1290px] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="text-[32px] lg:text-[36px] font-bold text-[#1A202C]">About Us</h2>
                <p className="mt-4 text-[17px] leading-relaxed text-[#2D3748]">
                  NAD Furniture is a leading{' '}
                  <a
                    href="#about-us"
                    className="underline hover:text-[#cf251d] transition-colors"
                  >
                    UAE furniture manufacturer
                  </a>{' '}
                  and wholesale supplier, delivering factory-direct furniture for labour
                  camps, offices, schools, accommodation projects and commercial
                  facilities.
                </p>

                <ul className="mt-5 space-y-2">
                  {[
                    '5,000+ Products',
                    'UAE Manufacturer',
                    'Factory Direct Pricing',
                    'Bulk Project Supply',
                    'Fast Delivery Across UAE',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-[17px] text-[#2D3748]"
                    >
                      <span className="text-[#b82105] font-bold" aria-hidden="true">
                        ☞
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-1">
                <div className="aspect-video w-full overflow-hidden bg-[#131313]">
                  <iframe
                    loading="lazy"
                    title="Staff Accommodation Furniture Supplier | Bunk Beds, Lockers & Mattresses UAE"
                    src="https://www.youtube.com/embed/PI32LVIS2ko?feature=oembed"
                    className="h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. 4-Column Category Showcase (1fr 1fr 1fr 2fr) */}
        <section id="category-showcase" className="w-full py-20 md:py-28 bg-white">
          <div className="mx-auto max-w-[1290px] px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 items-center">
              <button
                type="button"
                onClick={() => handleCategorySelect('bunk-beds')}
                className="group text-center cursor-pointer"
              >
                <h3 className="text-[26px] font-bold text-[#1A202C] mb-3 group-hover:text-[#b82105] transition-colors">
                  Bunk Beds
                </h3>
                <div className="aspect-square w-full overflow-hidden bg-white">
                  <img
                    src={SITE_IMAGES.catBunkBed}
                    alt="bunk bed"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== SITE_IMAGES.catBunkBedFallback) {
                        target.src = SITE_IMAGES.catBunkBedFallback;
                      }
                    }}
                    className="h-full w-full object-cover"
                  />
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleCategorySelect('wardrobe')}
                className="group text-center cursor-pointer"
              >
                <h3 className="text-[26px] font-bold text-[#1A202C] mb-3 group-hover:text-[#b82105] transition-colors">
                  Wardrobes
                </h3>
                <div className="aspect-square w-full overflow-hidden bg-white">
                  <img
                    src={SITE_IMAGES.catWardrobe}
                    alt="two door wardrobe"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== SITE_IMAGES.catWardrobeFallback) {
                        target.src = SITE_IMAGES.catWardrobeFallback;
                      }
                    }}
                    className="h-full w-full object-cover"
                  />
                </div>
              </button>

              <button
                type="button"
                onClick={() => handleCategorySelect('steel-lockers')}
                className="group text-center cursor-pointer"
              >
                <h3 className="text-[26px] font-bold text-[#1A202C] mb-3 group-hover:text-[#b82105] transition-colors">
                  Lockers
                </h3>
                <div className="aspect-square w-full overflow-hidden bg-white">
                  <img
                    src={SITE_IMAGES.catLockers}
                    alt="steel lockers"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== SITE_IMAGES.catLockersFallback) {
                        target.src = SITE_IMAGES.catLockersFallback;
                      }
                    }}
                    className="h-full w-full object-cover"
                  />
                </div>
              </button>

              <div className="sm:col-span-2 lg:col-span-2 lg:pl-8 space-y-4">
                <h2 className="text-[32px] lg:text-[36px] font-bold text-[#1A202C]">
                  Bedroom Furniture
                </h2>
                <p className="text-[17px] leading-relaxed text-[#2D3748]">
                  Create comfortable and practical bedrooms with furniture designed for
                  homes across the UAE. Explore beds, wardrobes and coordinated bedroom
                  solutions for master bedrooms, guest rooms and everyday spaces.
                </p>
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('wardrobe')}
                    className="inline-flex items-center gap-2.5 rounded-[6px] bg-[#b82105] px-6 py-[13px] text-[16px] text-white hover:bg-[#8a1803] transition-colors cursor-pointer"
                  >
                    <span>Explore Bedroom Furniture</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Featured Items Catalog */}
        <section id="featured-items" className="w-full pb-24 bg-white">
          <div className="mx-auto max-w-[1290px] px-6">
            <div className="text-center max-w-[580px] mx-auto">
              <h2 className="text-[32px] lg:text-[36px] font-bold text-[#1A202C]">Featured Items</h2>
              <p className="mt-2 text-[17px] leading-relaxed text-[#2D3748]">
                As a trusted UAE manufacturer of steel bunk beds and single beds, NAD
                Furniture combines durable construction, modern designs, and exceptional
                value to meet the needs of homes, staff accommodations, hostels, schools,
                and commercial projects.
              </p>
            </div>

            {/* Category Filter Bar */}
            {activeFilter !== 'all' && (
              <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
                {(
                  [
                    { id: 'all', label: 'All Featured' },
                    { id: 'bunk-beds', label: 'Bunk Beds' },
                    { id: 'steel-lockers', label: 'Steel Lockers & Cabinets' },
                    { id: 'wardrobe', label: 'Wardrobe' },
                    { id: 'office-furniture', label: 'Office Furniture' },
                    { id: 'beds', label: 'Beds' },
                  ] as { id: FilterTab; label: string }[]
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-4 py-2 text-sm font-medium rounded-[6px] transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      activeFilter === tab.id
                        ? 'bg-[#b82105] text-white'
                        : 'bg-[#EDF2F7] text-[#2D3748] hover:bg-[#E2E8F0]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}

            {activeFilter === 'all' ? (
              <div className="mt-8 space-y-10">
                {/* Category Row 1: Bunk Beds */}
                <div>
                  <div className="flex items-center justify-between border-b border-[#EDF2F7] border-l-[5px] border-l-[#b82105] px-4 py-2 mb-5">
                    <h3 className="text-[22px] font-bold text-[#1A202C]">Bunk Beds</h3>
                    <button
                      type="button"
                      onClick={() => setActiveFilter('bunk-beds')}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#000000] hover:text-[#cf251d] transition-colors cursor-pointer"
                    >
                      <span>View All Bunk Beds</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {BUNK_BEDS.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onSelect={setSelectedProduct}
                      />
                    ))}
                  </div>
                </div>

                {/* Category Row 2: Steel Lockers & Cabinets */}
                <div>
                  <div className="flex items-center justify-between border-b border-[#EDF2F7] border-l-[5px] border-l-[#b82105] px-4 py-2 mb-5">
                    <h3 className="text-[22px] font-bold text-[#1A202C]">
                      Steel Lockers &amp; Cabinets
                    </h3>
                    <button
                      type="button"
                      onClick={() => setActiveFilter('steel-lockers')}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#000000] hover:text-[#cf251d] transition-colors cursor-pointer"
                    >
                      <span>View All Steel Lockers</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {STEEL_LOCKERS.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onSelect={setSelectedProduct}
                      />
                    ))}
                  </div>
                </div>

                {/* Category Row 3: Wardrobe */}
                <div>
                  <div className="flex items-center justify-between border-b border-[#EDF2F7] border-l-[5px] border-l-[#b82105] px-4 py-2 mb-5">
                    <h3 className="text-[22px] font-bold text-[#1A202C]">Wardrobe</h3>
                    <button
                      type="button"
                      onClick={() => setActiveFilter('wardrobe')}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[#000000] hover:text-[#cf251d] transition-colors cursor-pointer"
                    >
                      <span>View All Wardrobes</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {WARDROBES.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        onSelect={setSelectedProduct}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onSelect={setSelectedProduct}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 6. Parallax / Full-Width Highlight Banner (Best Seller, New Arrivals, On Sale) */}
        <section
          className="w-full relative bg-cover bg-center py-28"
          style={{
            backgroundImage: `url(${SITE_IMAGES.parallaxBg}), url(${SITE_IMAGES.parallaxBgFallback})`,
          }}
        >
          <div className="mx-auto max-w-[1290px] px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <button
                  type="button"
                  onClick={() => handleCategorySelect('bunk-beds')}
                  className="group flex w-[240px] items-center rounded-[100px] bg-[#EDF2F7] p-2 hover:bg-[#b82105] hover:shadow-[0_0_14px_0_rgba(0,0,0,0.2)] transition-all cursor-pointer"
                >
                  <img
                    src={SITE_IMAGES.bestSellerThumb}
                    alt="bunk bed"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== SITE_IMAGES.catBunkBedFallback) {
                        target.src = SITE_IMAGES.catBunkBedFallback;
                      }
                    }}
                    className="h-[45px] w-[45px] rounded-full object-cover mx-[15px] shrink-0"
                  />
                  <h3 className="font-sans text-[20px] font-bold text-[#1A202C] group-hover:text-white transition-colors">
                    Best Seller
                  </h3>
                </button>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleCategorySelect('steel-lockers')}
                  className="group flex w-[240px] items-center rounded-[100px] bg-[#EDF2F7] p-2 hover:bg-[#b82105] hover:shadow-[0_0_14px_0_rgba(0,0,0,0.2)] transition-all cursor-pointer"
                >
                  <img
                    src={SITE_IMAGES.newArrivalsThumb}
                    alt="Metal Single-Door Locker with Internal Shelving"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== SITE_IMAGES.catLockersFallback) {
                        target.src = SITE_IMAGES.catLockersFallback;
                      }
                    }}
                    className="h-[45px] w-[45px] rounded-full object-cover mx-[15px] shrink-0"
                  />
                  <h3 className="font-sans text-[20px] font-bold text-[#1A202C] group-hover:text-white transition-colors">
                    New Arrivals
                  </h3>
                </button>
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => handleCategorySelect('office-furniture')}
                  className="group flex w-[240px] items-center rounded-[100px] bg-[#EDF2F7] p-2 hover:bg-[#b82105] hover:shadow-[0_0_14px_0_rgba(0,0,0,0.2)] transition-all cursor-pointer"
                >
                  <img
                    src={SITE_IMAGES.onSaleThumb}
                    alt="Office Table with Drawers"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== SITE_IMAGES.officeFallback) {
                        target.src = SITE_IMAGES.officeFallback;
                      }
                    }}
                    className="h-[45px] w-[45px] rounded-full object-cover mx-[15px] shrink-0"
                  />
                  <h3 className="font-sans text-[20px] font-bold text-[#1A202C] group-hover:text-white transition-colors">
                    On Sale
                  </h3>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Beds & Accommodation Furniture Split Section */}
        <section className="w-full py-24 bg-white">
          <div className="mx-auto max-w-[1290px] px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="lg:pr-16 space-y-4">
                <h2 className="text-[32px] lg:text-[36px] font-bold text-[#1A202C]">
                  Beds &amp; Accommodation Furniture
                </h2>
                <p className="text-[17px] leading-relaxed text-[#2D3748]">
                  Durable beds, bunk beds and accommodation furniture for homes, labour
                  camps, staff housing, hotels and commercial projects across the UAE.
                  Available for individual orders and bulk project supply.
                </p>
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('beds')}
                    className="inline-flex items-center gap-2.5 rounded-[6px] bg-[#b82105] px-6 py-[13px] text-[16px] text-white hover:bg-[#9e1c06] transition-colors cursor-pointer"
                  >
                    <span>Shop Beds</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 md:gap-0 items-start">
                <div className="md:mt-[60px] md:-mr-[30px] md:ml-[30px] relative z-10 overflow-hidden rounded-[8px] border border-[#2D3748] bg-white">
                  <img
                    src={SITE_IMAGES.kingBed2}
                    alt="king size bed"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== SITE_IMAGES.bedroomFallback) {
                        target.src = SITE_IMAGES.bedroomFallback;
                      }
                    }}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[8px] border border-[#2D3748] bg-white">
                  <img
                    src={SITE_IMAGES.kingBed1}
                    alt="king size bed"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== SITE_IMAGES.bedroomFallback) {
                        target.src = SITE_IMAGES.bedroomFallback;
                      }
                    }}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. Who We Serve */}
        <section id="who-we-serve" className="w-full py-6 bg-white">
          <div className="mx-auto max-w-[1290px] px-6">
            <div className="text-center mb-6">
              <h2 className="text-[32px] lg:text-[36px] font-bold text-[#1A202C]">Who We Serve</h2>
              <p className="mt-2 text-[17px] text-[#2D3748]">
                We deliver end-to-end staff accommodation furnishings—outfitting thousands
                of units every month for:
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: 'Construction Companies', Icon: Building2 },
                { label: 'Facility Management', Icon: Wrench },
                { label: 'Manpower Agencies', Icon: Users },
                { label: 'Real Estate Developers', Icon: Landmark },
                { label: 'Labour Camps', Icon: HardHat },
                { label: 'Government Housing Projects', Icon: Building },
              ].map(({ label, Icon }) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center border border-[#1A202C] p-4 text-center"
                >
                  <Icon
                    className="h-[72px] w-[72px] text-[#b82105] mb-2 stroke-[1.5]"
                    aria-hidden="true"
                  />
                  <p className="text-[16px] text-[#2D3748] leading-snug">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Office Furniture for Modern Workspaces in UAE */}
        <section className="w-full py-24 bg-white overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div
              className="min-h-[300px] md:min-h-[400px] lg:min-h-[600px] bg-cover bg-center lg:rounded-r-[80px]"
              style={{
                backgroundImage: `url(${SITE_IMAGES.homeFurniture}), url(${SITE_IMAGES.bedroomFallback})`,
                backgroundPosition: '50% 90%',
              }}
              aria-label="Home furniture"
            />

            <div className="p-8 lg:p-12 space-y-4">
              <h2 className="text-[32px] lg:text-[36px] font-bold text-[#1A202C]">
                Office Furniture for Modern Workspaces in UAE
              </h2>
              <p className="text-[17px] leading-relaxed text-[#2D3748]">
                Create productive and professional workspaces with durable office furniture
                for corporate offices, staff areas and commercial projects. Explore office
                desks, workstations, ergonomic chairs, storage solutions and more, with bulk
                supply available across Dubai and the UAE.
              </p>
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => handleCategorySelect('office-furniture')}
                  className="inline-flex items-center gap-2.5 rounded-[6px] bg-[#b82105] px-6 py-[13px] text-[16px] text-white hover:bg-[#8f1a05] transition-colors cursor-pointer"
                >
                  <span>Shop Office Furniture</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div
              className="min-h-[300px] md:min-h-[400px] lg:min-h-[600px] bg-cover bg-center lg:rounded-l-[80px]"
              style={{
                backgroundImage: `url(${SITE_IMAGES.officeFurniture}), url(${SITE_IMAGES.officeFallback})`,
              }}
              aria-label="Office furniture"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="colophon" className="w-full bg-[#131313] text-white">
        <div className="mx-auto max-w-[1290px] px-6 pt-[120px] pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
            {/* Col 1: Brand & Social */}
            <div className="space-y-4">
              <div className="mb-2">
                <NadBrandMark />
              </div>
              <p className="text-[16px] leading-relaxed text-white">
                NAD Group of Companies is a trusted UAE manufacturer of office furniture
                and steel furniture, delivering quality craftsmanship, innovative designs,
                and reliable solutions for businesses, institutions, and commercial
                projects.
              </p>
              <div className="flex items-center gap-5 pt-2">
                <a
                  href="https://www.facebook.com/nadfurniturellc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="text-white hover:text-[#cf251d] transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V9.5A3.5 3.5 0 0 1 15.5 6H18v3h-2a1 1 0 0 0-1 1v1h3l-.5 3H15v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/nadfurnituredubai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Instagram"
                  className="text-white hover:text-[#cf251d] transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="https://www.pinterest.com/nadfurnituredubai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pinterest"
                  title="Pinterest"
                  className="text-white hover:text-[#cf251d] transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-7 w-7"
                    aria-hidden="true"
                  >
                    <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-6.8 14.2c-.9 0-1.7-.4-2.1-.9l-.6 2.3c-.2.7-.6 1.5-1 2-.1.1-.2.1-.2-.1-.1-.7-.1-1.7.1-2.5l.8-3.3s-.2-.4-.2-1c0-.9.5-1.6 1.2-1.6.6 0 .8.4.8 1 0 .6-.4 1.5-.6 2.3-.2.7.3 1.2 1 1.2 1.2 0 2.1-1.3 2.1-3.1 0-1.6-1.2-2.8-2.9-2.8-2 0-3.1 1.5-3.1 3 0 .6.2 1.2.5 1.6.1.1.1.2 0 .3l-.2.7c0 .1-.1.2-.3.1-1-.5-1.6-1.9-1.6-3.1 0-2.5 1.8-4.8 5.2-4.8 2.7 0 4.9 2 4.9 4.6 0 2.7-1.7 4.9-4.1 4.9z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2: Company */}
            <div>
              <div className="text-[22px] font-bold text-white mb-4">Company</div>
              <ul className="space-y-2 text-[16px] text-white">
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('about-us')}
                    className="hover:text-[#cf251d] transition-colors cursor-pointer"
                  >
                    ▸ About
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => scrollToSection('who-we-serve')}
                    className="hover:text-[#cf251d] transition-colors cursor-pointer"
                  >
                    ▸ Manufacturing
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => openBulkQuote()}
                    className="hover:text-[#cf251d] transition-colors cursor-pointer"
                  >
                    ▸ Services
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Shop */}
            <div>
              <div className="text-[22px] font-bold text-white mb-4">Shop</div>
              <ul className="space-y-2 text-[16px] text-white">
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('bunk-beds')}
                    className="hover:text-[#cf251d] transition-colors cursor-pointer"
                  >
                    ▸ Bunk Bed
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('steel-lockers')}
                    className="hover:text-[#cf251d] transition-colors cursor-pointer"
                  >
                    ▸ Steel Lockers &amp; Cabinets
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('office-furniture')}
                    className="hover:text-[#cf251d] transition-colors cursor-pointer"
                  >
                    ▸ Office Tables
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('office-furniture')}
                    className="hover:text-[#cf251d] transition-colors cursor-pointer"
                  >
                    ▸ Office Workstations
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('wardrobe')}
                    className="hover:text-[#cf251d] transition-colors cursor-pointer"
                  >
                    ▸ Wardrobe
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect('beds')}
                    className="hover:text-[#cf251d] transition-colors cursor-pointer"
                  >
                    ▸ Beds
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact NAD Furniture */}
            <div className="space-y-3">
              <div className="text-[22px] font-bold text-white mb-4">
                Contact NAD Furniture
              </div>
              <p className="text-[16px] text-white">
                📍 Nazir Plaza Building, Ground Floor, Ajman, UAE
              </p>
              <p className="text-[14px] text-white">
                ☎ <strong>Call:</strong> +971 50 631 6560
                <br />
                ✉️ <strong>Email:</strong>{' '}
                <a
                  href="mailto:Info@nad.furniture"
                  className="hover:text-[#cf251d] transition-colors"
                >
                  Info@nad.furniture
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 pt-[30px] pb-[10px] text-[16px] text-white">
            <p>&copy; 2026 furniture Project by NAD</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Chat Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        title="WhatsApp us"
        className="fixed bottom-[76px] lg:bottom-[200px] right-[10px] z-40 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe5d] transition-colors"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      {/* Floating AI Assistant Chat below WhatsApp */}
      <AiAssistantChat onOpenBulkQuote={() => openBulkQuote()} />

      {/* Modals */}
      <BulkQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialProduct={quoteProduct}
      />

      <ProductQuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onRequestQuote={(title) => openBulkQuote(title)}
      />
    </div>
  );
}
