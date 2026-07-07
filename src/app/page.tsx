import {
  HeroSection,
  HomeCtaSection,
  ProcessSnapshotSection,
  SelectedWorkSection,
  ServicesPreviewSection,
  WhoIHelpSection,
} from "@/features/home";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhoIHelpSection />
      <SelectedWorkSection />
      <ServicesPreviewSection />
      <ProcessSnapshotSection />
      <HomeCtaSection />
    </>
  );
}
