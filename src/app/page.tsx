import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { TheProblem } from "@/components/sections/the-problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Lifecycle } from "@/components/sections/lifecycle";
import { CommandsOverview } from "@/components/sections/commands-overview";
import { InstallSteps } from "@/components/sections/install-steps";
import { Principles } from "@/components/sections/principles";
import { Faq } from "@/components/sections/faq";
import { ClosingCta } from "@/components/sections/closing-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <TheProblem />
      <HowItWorks />
      <Lifecycle />
      <CommandsOverview />
      <InstallSteps />
      <Principles />
      <Faq />
      <ClosingCta />
    </>
  );
}
