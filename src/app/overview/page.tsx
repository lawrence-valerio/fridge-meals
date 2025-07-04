"use client";

import { OverviewHero } from "./components/overviewHero";
import { OverviewFeatuers } from "./components/overviewFeatures";

export default function OverviewPage() {
  return (
    <div className="min-h-screen bg-white">
      <OverviewHero />
      <OverviewFeatuers />
    </div>
  );
}
