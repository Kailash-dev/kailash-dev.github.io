import {
  CapabilitiesSection,
  ClientQuotesSection,
  ExperiencePreviewSection,
  HeroSection,
  HomeCtaSection,
  ProofMetricsSection,
  ProcessSnapshotSection,
  SelectedWorkSection,
  ServicesPreviewSection,
  WhoIHelpSection,
} from "@/features/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProofMetricsSection />
      <WhoIHelpSection />
      <SelectedWorkSection />
      <ExperiencePreviewSection />
      <CapabilitiesSection />
      <ClientQuotesSection />
      <ServicesPreviewSection />
      <ProcessSnapshotSection />
      <HomeCtaSection />
    </>
  );
}
