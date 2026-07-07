import Link from "next/link";

import { Container } from "@/components/common/container";
import { Heading, Text } from "@/components/common/typography";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center py-24">
      <Container>
        <div className="max-w-lg text-center md:text-left">
          <Heading as="h1" className="text-4xl md:text-5xl">
            Page not found
          </Heading>
          <Text variant="muted" className="mt-4">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </Text>
          <Button asChild className="mt-8">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
