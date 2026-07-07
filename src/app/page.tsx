import {
  HeroSection,
  HomeCtaSection,
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
      <WhoIHelpSection />
      <SelectedWorkSection />
      <ServicesPreviewSection />
      <ProcessSnapshotSection />
      <HomeCtaSection />
    </>
  );
}
