import { useEffect } from "react"
import { HeroSection } from "../components/hero-section"
import { FeaturesSection } from "../components/features-section"
import { PricingSection } from "../components/pricing-section"
import { IntegrationsSection } from "../components/integrations-section"
import { AppDownloadSection } from "../components/app-download-section"
import { FaqSection } from "../components/faq-section"
import { AchievementShowcase } from "../components/achievement-showcase"
import { ToolsShowcase } from "../components/tools-showcase"
import "../index.css"

export default function Home() {
  useEffect(() => {
    document.title = "HooPay"
  }, [])

  return (
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
  )
}

