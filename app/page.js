import Hero from "@/components/Hero";
import Questions from "@/components/Questions";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="py-20">
      <Hero />
      <Services />
      <Questions />
    </main>
  );
}
