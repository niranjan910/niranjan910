import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CertificationsGrid } from "@/components/certifications/CertificationsGrid";
import { certifications } from "@/data/certifications";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Certifications — ${site.name}`,
  description: `Every credential and training ${site.name} has earned — verified certificates across AI, data analysis, business, and communication.`,
  alternates: { canonical: `${site.url}/certifications` },
};

export default function CertificationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-glow relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div className="container-page relative z-10">
            <p className="mono-label">Certifications</p>
            <h1 className="mt-4 font-display text-display-lg font-medium text-foreground">
              Credentials &amp; training
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              The complete set of certificates I&apos;ve earned — spanning AI,
              data analysis, business, and communication.
            </p>
          </div>
        </section>

        <section className="container-page pb-24 sm:pb-32">
          <CertificationsGrid items={certifications} />
        </section>
      </main>
      <Footer />
    </>
  );
}
