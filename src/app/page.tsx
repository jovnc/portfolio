import { Separator } from "@/components/ui/separator";
import HomeHeader from "../components/home/HomeHeader";
import TechStack from "../components/home/TechStack";
import ContactCard from "@/components/contact/ContactCard";
import Socials from "@/components/home/Socials";

export default function Home() {
  return (
    <div className="flex flex-row justify-center min-h-screen w-full pt-8">
      <main className="flex flex-col gap-12 items-center w-full">
        <HomeHeader />
        <Socials />
        <Separator />
        <TechStack />
        <Separator />
        <ContactCard />
      </main>
    </div>
  );
}
