
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardFooter from "@/components/DashboardFooter";

import PdfUploadCard from "@/components/cards/PdfUploadCard";
import ChatBotCard from "@/components/cards/ChatBotCard";
import MarketIntelligenceCard from "@/components/cards/MarketIntelligenceCard";
import SentimentCard from "@/components/cards/SentimentCard";
import NarrativeCard from "@/components/cards/NarrativeCard";
import EarningsReactionCard from "@/components/cards/EarningsReactionCard";
import TopicSentimentCard from "@/components/cards/TopicSentimentCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#232d53] via-[#2b224f] to-[#432371] flex flex-col">
      <DashboardHeader />
      <div className="flex flex-1 min-h-0">
        <DashboardSidebar />
        {/* Main dashboard grid */}
        <main className="flex-1 p-8 overflow-auto">
          <div className="grid grid-cols-1 xl:grid-cols-6 gap-8">
            {/* Top row: PDF Upload + ChatBot */}
            <section className="col-span-1 xl:col-span-2 space-y-8">
              <PdfUploadCard />
            </section>
            <section className="col-span-1 xl:col-span-4 space-y-8">
              <ChatBotCard />
            </section>

            {/* Second row: Market Intelligence + Sentiment & Stock + Narrative */}
            <section className="col-span-1 xl:col-span-2 space-y-8">
              <MarketIntelligenceCard />
              <EarningsReactionCard />
            </section>
            <section className="col-span-1 xl:col-span-2 space-y-8">
              <SentimentCard />
            </section>
            <section className="col-span-1 xl:col-span-2 space-y-8">
              <NarrativeCard />
              <TopicSentimentCard />
            </section>
          </div>
        </main>
      </div>
      <DashboardFooter />
    </div>
  );
};

export default Index;
