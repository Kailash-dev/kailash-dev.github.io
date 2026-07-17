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
  TrustBarSection,
  WhoIHelpSection,
} from "@/features/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
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
