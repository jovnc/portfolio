import HomeHeader from "@/components/sections/home/HomeHeader";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center min-h-screen w-full">
      <HomeHeader />

      {/* Remaining content */}
      <div className="min-h-screen flex items-center justify-center"></div>
    </main>
  );
}
