import { Badge } from "@/components/common/badge";
import type { CaseStudy } from "@/types";

export function CaseStudyBadge({ study }: { study: CaseStudy }) {
  if (study.engagement === "founder") {
    return <Badge>Founder product</Badge>;
  }

  if (study.engagement === "employment") {
    return <Badge>Product delivery</Badge>;
  }

  return <Badge>{study.category}</Badge>;
}
