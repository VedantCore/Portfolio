// src/constants/data.js
export const portfolioData = {
  Fashion: [
    {
      company: "Vogue Styles",
      logo: "👗", // Replace with actual image paths or icons
      projects: [
        { title: "Summer Lookbook 2026", description: "UI/UX for digital lookbook", link: "#" },
        { title: "E-commerce Redesign", description: "Optimized checkout flow", link: "#" }
      ]
    }
  ],
  Hospitality: [
    {
      company: "Grand Hotels",
      logo: "🏨",
      projects: [
        { title: "Booking Dashboard", description: "Admin panel for reservations", link: "#" }
      ]
    }
  ],
  Wedding: [],
  Gaming: [],
  Advertisement: [],
  "Personal Projects": []
};

export const niches = Object.keys(portfolioData);