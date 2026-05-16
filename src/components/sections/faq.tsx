import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@/lib/content";

export function Faq() {
  return (
    <section id="faq" className="bg-quiet text-on-quiet">
      <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
        <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.02em]">
          Questions worth asking.
        </h2>

        <Accordion className="mt-12 border-t border-on-quiet/12">
          {FAQ.map((item, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border-on-quiet/12"
            >
              <AccordionTrigger className="py-6 text-lg font-semibold tracking-tight text-on-quiet hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-7 text-base leading-relaxed text-on-quiet/65">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
