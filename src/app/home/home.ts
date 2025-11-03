import { Component, ElementRef, HostListener, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  title = 'Uniao Group Limited - Premium Sisal Fiber Producer Kenya';
  isMenuOpen = false;
  currentSlide = 0;
  autoSlideInterval: any;
  isBrowser: boolean;

  constructor(
    private metaService: Meta,
    private titleService: Title,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.setMetaTags();
  }

  private setMetaTags() {
    // Primary Meta Tags
    this.titleService.setTitle(
      'Uniao Group Limited | Premium Sisal Fiber Producer & Exporter in Kenya, East Africa'
    );

    this.metaService.addTags([
      {
        name: 'description',
        content:
          'Leading sisal fiber producer in Nairobi, Kenya. Sustainable sisal hemp cultivation, manufacturing & export. Premium UG, SSUG grades for gypsum, twine, rope. Buy sisal fiber Kenya Africa.',
      },
      {
        name: 'keywords',
        content:
          'sisal fiber Kenya, sisal production Nairobi, sisal hemp Africa, buy sisal fiber, sisal export Kenya, UG grade sisal, SSUG sisal, sisal yarn Kenya, sisal rope manufacturer, sisal gypsum fiber, sustainable sisal farming Kenya, sisal twine Africa, natural fiber Kenya, sisal cultivation East Africa, sisal supplier Kenya, sisal processing plant Nairobi, eco-friendly sisal, sisal products Kenya, agricultural fiber Kenya, sisal farming Kenya',
      },
      { name: 'author', content: 'Uniao Group Limited' },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { charset: 'UTF-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'format-detection', content: 'telephone=no' },

      // Geo Tags for Kenya/Africa targeting
      { name: 'geo.region', content: 'KE-30' },
      { name: 'geo.placename', content: 'Nairobi' },
      { name: 'geo.position', content: '-1.286389;36.817223' },
      { name: 'ICBM', content: '-1.286389, 36.817223' },

      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://agrouniaogroup.com' },
      {
        property: 'og:title',
        content: 'Uniao Group Limited | Premium Sisal Fiber Producer Kenya',
      },
      {
        property: 'og:description',
        content:
          'Leading sisal fiber producer in Nairobi, Kenya. Sustainable sisal cultivation, manufacturing & export. Premium UG, SSUG grades for global markets.',
      },
      { property: 'og:image', content: 'https://agrouniaogroup.com/assets/sisal-fiber.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Uniao Group sisal fiber production Kenya' },
      { property: 'og:locale', content: 'en_KE' },
      { property: 'og:site_name', content: 'Uniao Group Limited' },

      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://agrouniaogroup.com' },
      {
        name: 'twitter:title',
        content: 'Uniao Group Limited | Premium Sisal Fiber Producer Kenya',
      },
      {
        name: 'twitter:description',
        content:
          'Leading sisal fiber producer in Nairobi, Kenya. Sustainable sisal cultivation, manufacturing & export.',
      },
      { name: 'twitter:image', content: 'https://agrouniaogroup.com/assets/sisal-fiber.jpg' },
      { name: 'twitter:image:alt', content: 'Uniao Group sisal fiber production Kenya' },

      // Additional SEO
      { name: 'theme-color', content: '#002708' },
      { name: 'msapplication-TileColor', content: '#002708' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },

      // Business/Local SEO
      { name: 'coverage', content: 'Worldwide' },
      { name: 'distribution', content: 'Global' },
      { name: 'rating', content: 'General' },
      { name: 'target', content: 'all' },
      { name: 'audience', content: 'all' },
    ]);

    // Canonical Link (client-side only)
    if (this.isBrowser) {
      const link: HTMLLinkElement = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', 'https://agrouniaogroup.com');
      document.head.appendChild(link);
    }

    // Alternate hreflang for multilingual SEO (client-side only)
    if (this.isBrowser) {
      const hreflangLinks = [
        { lang: 'en', href: 'https://agrouniaogroup.com' },
        { lang: 'sw', href: 'https://agrouniaogroup.com/sw' },
        { lang: 'x-default', href: 'https://agrouniaogroup.com' },
      ];

      hreflangLinks.forEach((item) => {
        const hreflang: HTMLLinkElement = document.createElement('link');
        hreflang.setAttribute('rel', 'alternate');
        hreflang.setAttribute('hreflang', item.lang);
        hreflang.setAttribute('href', item.href);
        document.head.appendChild(hreflang);
      });
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  communityProjects = [
    {
      icon: '🌱',
      title: 'Local Farmer Training',
      description:
        'Empowering Nairobi communities with sisal cultivation workshops and sustainable farming techniques.',
    },
    {
      icon: '👥',
      title: 'Job Creation Programs',
      description:
        'Providing employment in sisal processing and export, fostering economic growth in Kenya.',
    },
    {
      icon: '📚',
      title: 'Youth Skill Development',
      description:
        'Vocational training in sisal yarn spinning and eco-manufacturing for future leaders.',
    },
    {
      icon: '♻️',
      title: 'Eco-Community Initiatives',
      description: 'Reforestation and waste reduction projects tied to our sisal operations.',
    },
  ];

  sustainabilityInitiatives = [
    'Eco-friendly sisal hemp cultivation with minimal water usage and natural pest control',
    'Zero-waste manufacturing processes for sisal fiber and yarn production',
    'Carbon-neutral export logistics to reduce global sisal supply chain emissions',
    'Biodiversity preservation through regenerative farming on Kenyan sisal plantations',
  ];

  quotationServices = [
    {
      icon: 'fas fa-file-contract',
      title: 'Custom Sisal Quotes',
      description: 'Tailored pricing for Ug grade, SSUG, and bulk sisal fiber orders',
    },
    {
      icon: 'fas fa-truck',
      title: 'Fast Global Shipping',
      description: 'Timely deliveries with 24/7 tracking for your sisal requirements',
    },
    {
      icon: 'fas fa-award',
      title: 'Quality Certification',
      description: 'Guaranteed polished grades and compliance for industrial applications',
    },
    {
      icon: 'fas fa-headset',
      title: 'Expert Consultation',
      description: 'Personalized advice on sisal yarn and gypsum fiber solutions',
    },
  ];

  activities = [
    {
      iconClass: 'fas fa-seedling',
      title: 'Sisal Cultivation',
      subtitle: 'Sustainable sisal hemp farming in Kenya',
      description:
        "Cultivating the finest sisal hemp varieties in Nairobi's fertile soils, ensuring robust growth and high-yield harvests for premium fiber production. Our methods promote soil health and biodiversity.",
      location: 'Nairobi, Kenya',
    },
    {
      iconClass: 'fas fa-industry',
      title: 'Fiber Manufacturing',
      subtitle: 'Advanced sisal processing techniques',
      description:
        'State-of-the-art decortication and spinning facilities transform raw sisal into SSUG, UG, and polished grades, ideal for twine, rope, and composite materials.',
      location: 'Nairobi, Kenya',
    },
    {
      iconClass: 'fas fa-globe',
      title: 'Global Export',
      subtitle: 'Reliable sisal fiber distribution',
      description:
        'Seamless export of natural sisal fiber and yarn to international markets, with a focus on gypsum applications and eco-friendly packaging for worldwide clients.',
      location: 'Nairobi, Kenya',
    },
    {
      iconClass: 'fas fa-cogs',
      title: 'Product Innovation',
      subtitle: 'Custom sisal solutions development',
      description:
        'Innovative R&D for specialized sisal products, including biodegradable yarns and composites, meeting diverse industry needs with Kenyan quality.',
      location: 'Nairobi, Kenya',
    },
  ];

  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('parallaxBack') parallaxBack!: ElementRef;
  @ViewChild('deco1') deco1!: ElementRef;
  @ViewChild('deco2') deco2!: ElementRef;
  @ViewChild('imageMain') imageMain!: ElementRef;
  @ViewChild('imageAccent') imageAccent!: ElementRef;
  @ViewChild('imagePattern') imagePattern!: ElementRef;
  @ViewChild('statBadge') statBadge!: ElementRef;
  @ViewChild('imageWrapper') imageWrapper!: ElementRef;
  @ViewChild('slide1') slide1!: ElementRef;
  @ViewChild('slide2') slide2!: ElementRef;
  @ViewChild('slide3') slide3!: ElementRef;
  @ViewChild('slide4') slide4!: ElementRef;
  @ViewChild('decoLeaf1') decoLeaf1!: ElementRef;
  @ViewChild('decoLeaf2') decoLeaf2!: ElementRef;

  ngAfterViewInit() {
    if (!this.isBrowser) return;

    if (this.imageWrapper && window.innerWidth > 768) {
      const wrapper = this.imageWrapper.nativeElement;
      wrapper.addEventListener('mousemove', (e: MouseEvent) => {
        const rect = wrapper.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        if (this.imageMain) {
          this.imageMain.nativeElement.style.transform = `
            translateY(${y * -10}px)
            translateX(${x * -10}px)
            translateZ(0)
            rotateY(${x * 5}deg)
            rotateX(${y * -5}deg)
          `;
        }
        if (this.imageAccent) {
          this.imageAccent.nativeElement.style.transform = `
            translateY(${y * 15}px)
            translateX(${x * 15}px)
            translateZ(-50px)
          `;
        }
        if (this.imagePattern) {
          this.imagePattern.nativeElement.style.transform = `
            translateY(${y * -20}px)
            translateX(${x * -20}px)
            translateZ(-30px)
          `;
        }
      });
      wrapper.addEventListener('mouseleave', () => {
        if (this.imageMain) {
          this.imageMain.nativeElement.style.transform = 'translateZ(0)';
        }
        if (this.imageAccent) {
          this.imageAccent.nativeElement.style.transform = 'translateZ(-50px)';
        }
        if (this.imagePattern) {
          this.imagePattern.nativeElement.style.transform = 'translateZ(-30px)';
        }
      });
    }
    this.startAutoSlide();
    this.initParallaxDeco();
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private startAutoSlide() {
    if (!this.isBrowser) return;
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 10000);
  }

  nextSlide() {
    const slides = [this.slide1, this.slide2, this.slide3, this.slide4];
    const nextIndex = (this.currentSlide + 1) % 4;
    slides[this.currentSlide].nativeElement.classList.add('prev');
    slides[this.currentSlide].nativeElement.classList.remove('active');
    slides[nextIndex].nativeElement.classList.add('active');
    slides[nextIndex].nativeElement.classList.remove('prev');
    this.currentSlide = nextIndex;
    this.updateDots();
  }

  goToSlide(index: number) {
    if (index === this.currentSlide) return;
    const slides = [this.slide1, this.slide2, this.slide3, this.slide4];
    slides[this.currentSlide].nativeElement.classList.add('prev');
    slides[this.currentSlide].nativeElement.classList.remove('active');
    slides[index].nativeElement.classList.add('active');
    slides[index].nativeElement.classList.remove('prev');
    this.currentSlide = index;
    this.updateDots();
    clearInterval(this.autoSlideInterval);
    this.startAutoSlide();
  }

  private updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === this.currentSlide);
    });
  }

  scrollToAbout(event: Event) {
    event.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  }

  private initParallaxDeco() {
    if (!this.isBrowser || window.innerWidth <= 768) return;
    this.decoLeaf1.nativeElement.style.transform = 'translateY(0)';
    this.decoLeaf2.nativeElement.style.transform = 'translateY(0)';
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.isBrowser) return;

    const scrolled = window.pageYOffset;
    const sectionTop = this.aboutSection.nativeElement.offsetTop;
    const sectionHeight = this.aboutSection.nativeElement.offsetHeight;
    if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
      const offset = scrolled - sectionTop;
      if (this.parallaxBack) {
        this.parallaxBack.nativeElement.style.transform = `translateY(${offset * 0.3}px)`;
      }
      if (this.deco1) {
        this.deco1.nativeElement.style.transform = `translateY(${offset * 0.15}px)`;
      }
      if (this.deco2) {
        this.deco2.nativeElement.style.transform = `translateY(${-offset * 0.2}px)`;
      }
      if (this.imageMain) {
        this.imageMain.nativeElement.style.transform = `translateY(${
          -offset * 0.08
        }px) translateZ(0)`;
      }
      if (this.imageAccent) {
        this.imageAccent.nativeElement.style.transform = `translateY(${
          offset * 0.12
        }px) translateZ(-50px)`;
      }
      if (this.imagePattern) {
        this.imagePattern.nativeElement.style.transform = `translateY(${
          -offset * 0.15
        }px) translateZ(-30px)`;
      }
      if (this.statBadge) {
        this.statBadge.nativeElement.style.transform = `translateY(${
          -offset * 0.1
        }px) translateZ(20px)`;
      }
    }
    if (this.decoLeaf1) {
      this.decoLeaf1.nativeElement.style.transform = `translateY(${scrolled * 0.1}px) rotate(${
        scrolled * 0.01
      }deg)`;
    }
    if (this.decoLeaf2) {
      this.decoLeaf2.nativeElement.style.transform = `translateY(${-scrolled * 0.08}px) rotate(${
        -scrolled * 0.015
      }deg)`;
    }
  }
}