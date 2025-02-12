"use client"
import { useEffect } from "react"

import { SiteHeader } from "../src/components/site-header"
import { HeroSection } from "../src/components/hero-section"
import { FeaturesSection } from "../src/components/features-section"
import { PricingSection } from "../src/components/pricing-section"
import { IntegrationsSection } from "../src/components/integrations-section"
import { AppDownloadSection } from "../src/components/app-download-section"
import { FaqSection } from "../src/components/faq-section"
import { Footer } from "../src/components/footer"
import { AchievementShowcase } from "../src/components/achievement-showcase"
import { ToolsShowcase } from "../src/components/tools-showcase"

export default function Home() {
  useEffect(() => {
    document.title = "HooPay"
  }, [])

  return (
    <div className="min-h-screen bg-[#020807]">
      <SiteHeader />
      <main>
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <ToolsShowcase />
        <AchievementShowcase />
        <div id="pricing">
          <PricingSection />
        </div>
        <div id="integrations">
          <IntegrationsSection />
        </div>
        <AppDownloadSection />
        <div id="faq">
          <FaqSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

