import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { createMetadata, siteConfig } from "@/config/site";
import { caseStudies, getCaseStudyBySlug } from "@/data";
import { CaseStudyPage } from "@/features/work";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return createMetadata({ title: "Case Study Not Found" });
  }

  return createMetadata({
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: `/work/${study.slug}`,
    },
    openGraph: {
      title: `${study.title} | ${siteConfig.name}`,
      description: study.summary,
      url: `/work/${study.slug}`,
    },
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyPage slug={slug} />;
}
