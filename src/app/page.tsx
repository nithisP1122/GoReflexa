import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyGoReflexa } from "@/components/WhyGoReflexa";
import { Pricing } from "@/components/Pricing";
import { EarlyAccessForm } from "@/components/EarlyAccessForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": siteConfig.name,
        "applicationCategory": "ProductivityApplication",
        "operatingSystem": "Web, iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/PreOrder",
        },
        "description": siteConfig.description,
        "releaseDate": siteConfig.launchDate,
      },
      {
        "@type": "Organization",
        "name": siteConfig.name,
        "url": siteConfig.url,
        "logo": `${siteConfig.url}/logo.png`,
        "sameAs": [
          siteConfig.socials.twitter,
          siteConfig.socials.linkedin,
          siteConfig.socials.instagram,
          siteConfig.socials.youtube,
        ],
      },
    ],
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col min-h-screen bg-white text-[#182230]">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Features />
          <HowItWorks />
          <WhyGoReflexa />
          <Pricing />
          <EarlyAccessForm />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
