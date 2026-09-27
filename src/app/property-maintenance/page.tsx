import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import PropertyBreadcrumb from "@/components/property-maintenance/PropertyBreadcrumb";
import PropertyHero from "@/components/property-maintenance/PropertyHero";
import PropertyHealthMap from "@/components/property-maintenance/PropertyHealthMap";
import MaintenanceVsRepairSection from "@/components/property-maintenance/MaintenanceVsRepairSection";
import MaintenanceRhythmTimeline from "@/components/property-maintenance/MaintenanceRhythmTimeline";
import PropertySystemsDiagram from "@/components/property-maintenance/PropertySystemsDiagram";
import PropertyConditionCheck from "@/components/property-maintenance/PropertyConditionCheck";
import WhatWeMaintainSection from "@/components/property-maintenance/WhatWeMaintainSection";
import SmallSignsSection from "@/components/property-maintenance/SmallSignsSection";
import PreventiveVsReactiveSection from "@/components/property-maintenance/PreventiveVsReactiveSection";
import PropertyTypeSelector from "@/components/property-maintenance/PropertyTypeSelector";
import LandlordFlowSection from "@/components/property-maintenance/LandlordFlowSection";
import MaintenanceRequestBuilder from "@/components/property-maintenance/MaintenanceRequestBuilder";
import PhotoFirstSection from "@/components/property-maintenance/PhotoFirstSection";
import MaintenanceRecordSection from "@/components/property-maintenance/MaintenanceRecordSection";
import DammamPropertyContext from "@/components/property-maintenance/DammamPropertyContext";
import SpecialistRoutingSection from "@/components/property-maintenance/SpecialistRoutingSection";
import ScopeBoundariesSection from "@/components/property-maintenance/ScopeBoundariesSection";
import FinalConversionSection from "@/components/property-maintenance/FinalConversionSection";
import PropertyMaintenanceFaq from "@/components/property-maintenance/PropertyMaintenanceFaq";

const pageUrl = `${siteConfig.url}/property-maintenance/`;
const title = "Property Maintenance in Dammam";
const description =
  "Practical property maintenance for villas, apartments and existing homes in Dammam. Get help with AC, plumbing, electrical, surfaces, fixtures and everyday property repairs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/property-maintenance/",
  },
  openGraph: {
    type: "website",
    url: pageUrl,
    siteName: siteConfig.name,
    title: `${title} | ${siteConfig.name}`,
    description,
  },
  twitter: {
    card: "summary",
    title: `${title} | ${siteConfig.name}`,
    description,
  },
};

export default function PropertyMaintenancePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Property Maintenance",
        serviceType: "Residential property maintenance",
        description,
        url: pageUrl,
        provider: { "@id": `${siteConfig.url}/#business` },
        areaServed: {
          "@type": "City",
          name: "Dammam",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header
        ctaLabel="WhatsApp for Maintenance"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about property maintenance."
      />
      <PropertyBreadcrumb />
      <main id="main">
        <PropertyHero />
        <PropertyHealthMap />
        <MaintenanceVsRepairSection />
        <MaintenanceRhythmTimeline />
        <PropertySystemsDiagram />
        <PropertyConditionCheck />
        <WhatWeMaintainSection />
        <SmallSignsSection />
        <PreventiveVsReactiveSection />
        <PropertyTypeSelector />
        <LandlordFlowSection />
        <MaintenanceRequestBuilder />
        <PhotoFirstSection />
        <MaintenanceRecordSection />
        <DammamPropertyContext />
        <SpecialistRoutingSection />
        <ScopeBoundariesSection />
        <FinalConversionSection />
        <PropertyMaintenanceFaq />
      </main>
      <Footer />
      <MobileStickyCta
        label="Request Maintenance"
        whatsappMessage="Hello Dammam Home Solutions, I'd like to ask about property maintenance."
      />
    </>
  );
}
