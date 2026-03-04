import Header from "@/components/Header";
import HeroMatch from "@/components/HeroMatch";
import MatchesSidebar from "@/components/MatchesSidebar";
import NewsSection from "@/components/NewsSection";
import ResultsSection from "@/components/ResultsSection";
import RankingSidebar from "@/components/RankingSidebar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroMatch />

      <main className="mx-auto max-w-[1400px] px-6 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr_320px]">
          {/* Left sidebar - matches */}
          <div className="order-2 lg:order-1">
            <MatchesSidebar />
          </div>

          {/* Center - news & results */}
          <div className="order-1 lg:order-2">
            <NewsSection />
            <ResultsSection />
          </div>

          {/* Right sidebar - rankings, events, players */}
          <div className="order-3">
            <RankingSidebar />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
