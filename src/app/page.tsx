import Header from "@/components/Header";
import HeroMatch from "@/components/HeroMatch";
import NewsSection from "@/components/NewsSection";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroMatch />

      <main className="mx-auto max-w-[1200px] px-5 py-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          {/* Main content */}
          <div>
            <NewsSection />
          </div>

          {/* Right sidebar */}
          <div>
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
