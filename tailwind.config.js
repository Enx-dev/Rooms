/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      base: ["12px", "16px"],
      xl: ["16px", "24px"],
      "2xl": ["28px", "32px"],
      "3xl": ["40px", "36px"],
      "4xl": ["48px", "52px"],
    },
    extend: {
      backgroundImage: {
        HeroImg1: "url('./images/mobile-image-hero-1.jpg')",
        HeroImg2: "url('./images/mobile-image-hero-2.jpg')",
        HeroImg3: "url('./images/mobile-image-hero-3.jpg')",
        desktopHeroImg1: "url('./images/desktop-image-hero-1.jpg')",
        desktopHeroImg2: "url('./images/desktop-image-hero-2.jpg')",
        desktopHeroImg3: "url('./images/desktop-image-hero-3.jpg')",
        sideImg1: "url('./images/image-about-dark.jpg')",
        sideImg2: "url('./images/image-about-light.jpg')",
      },
      letterSpacing: {
        link: "0.7em",
        title: "0.2em",
      },
    },
  },
  plugins: [],
};
