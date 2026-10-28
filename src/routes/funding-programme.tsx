import type * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Coins,
  Globe2,
  Handshake,
  MapPin,
  Network,
  Presentation,
  Rocket,
  SearchCheck,
  ShieldCheck,
  TrendingUp,
  UsersRound,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import posterAsset from "@/assets/local/funding-programme-poster.webp";
import pitchAsset from "@/assets/local/funding-pitch-stage.webp";
import mentorAsset from "@/assets/local/funding-mentorship.webp";
import gwaliorAsset from "@/assets/local/funding-gwalior.webp";
import investorAsset from "@/assets/local/funding-investor-deal.webp";

const ZOHOPUBLIC = "https://forms.zohopublic.in/RIPLSTORES/form/StartupIdeaRegistrationForm/formperma/1SNzTjiKwSF14T0BCEyJLvZCZDDowZl3NYWbAjpy1KE";

const pillars = [
  { icon: Presentation, label: "PITCH", copy: "Your startup" },
  { icon: Handshake, label: "CONNECT", copy: "With investors" },
  { icon: Coins, label: "RAISE", copy: "Funding opportunity" },
  { icon: TrendingUp, label: "GROW", copy: "Your business" },
];

const tiers = [
  ["1st", "₹10 Lakhs"],
  ["2nd", "₹5 Lakhs"],
  ["3rd", "₹2.5 Lakhs"],
  ["4th", "₹1.5 Lakhs"],
  ["5th", "₹1 Lakh"],
];

const why = [
  "Funding Opportunities",
  "Investor Connect",
  "Mentorship Support",
  "Business Evaluation",
  "Strategic Networking",
  "National Visibility",
];

const journey = [
  ["01", "Register", "Submit your startup details to the Riloyd funding team."],
  ["02", "Startup Scanning", "Within 15 days, Riloyd evaluates your startup, understands your business and provides a rating."],
  ["03", "First Pitch", "Pitch your startup to our jury panel with support from Riloyd mentors."],
  ["04", "Senior Jury Pitch", "Selected startups pitch to the senior jury panel with continued mentor support."],
  ["05", "Investor Pitch", "Final selected startups pitch to participating investors for potential funding."],
];

const benefits = [
  { icon: UsersRound, title: "Mentor Support", copy: "Get guidance from experienced mentors to refine your business idea and pitch." },
  { icon: Handshake, title: "Investor Connect", copy: "Pitch to investors and connect with industry experts." },
  { icon: SearchCheck, title: "Business Evaluation", copy: "Understand your startup’s strengths and growth potential." },
  { icon: Network, title: "Strategic Networking", copy: "Connect with founders, industry leaders and ecosystem partners." },
  { icon: Globe2, title: "National Visibility", copy: "Showcase your startup on a national platform." },
  { icon: TrendingUp, title: "Growth Support", copy: "Access opportunities to scale your business on a larger platform." },
];

const freeForSelected = [
  ["Accommodation", "Stay"],
  ["Food", "Meals"],
  ["One-Side Travel Ticket", "Reimbursement"],
  ["Local Travel", "In Gwalior"],
  ["Local Tour", "Gwalior highlights"],
];

const canApply = [
  "Early-Stage Startups",
  "Student-Led Startups",
  "Innovative Business Ideas",
  "Product or Service Based",
  "Growth-Stage Businesses",
  "Funding-Ready Startups",
];

const faqs = [
  [
    "What is the registration fee?",
    "The registration fee is ₹2,999 plus 18% GST and includes participation for up to two persons per startup. Beyond the first two persons, each additional participant is ₹2,000 plus 18% GST.",
  ],
  [
    "Who can participate?",
    "Early-stage startups, student-led startups, founders with innovative business ideas, product or service based businesses, growth-stage businesses and funding-ready startups can apply.",
  ],
  [
    "Is the funding guaranteed?",
    "No. The non-refundable grant is awarded to the top five startups based on evaluation, eligibility, performance and the applicable Terms and Conditions. Selected startups also pitch to participating investors, and any additional funding is at the investors’ discretion.",
  ],
  [
    "What if my startup is not selected in screening?",
    "If your idea or startup is not selected in the screening stage, 50% of the registration amount will be refunded. T&C applicable.",
  ],
  [
    "What does the registration include?",
    "Registration covers participation in the three-day summit in Gwalior, evaluation and rating of your startup, pitches to the jury and senior jury panels, mentor support, business evaluation and investor connect.",
  ],
  [
    "Will travel, stay and food be provided?",
    "Selected participants receive accommodation, meals, one-side travel ticket reimbursement, local travel in Gwalior and a local tour at no cost. These benefits are subject to policy, eligibility and Terms and Conditions. Confirm travel reimbursement before booking.",
  ],
  [
    "What is the last date to register?",
    "A closing date has not been published for the programme. Registration stays open while seats remain, so please check the registration form below for the current status before booking travel.",
  ],
  [
    "Can a student-led startup apply?",
    "Yes. Student-led startups are listed among the applicants who can apply for the programme.",
  ],
  [
    "Where will the event be held?",
    "The summit is held in Gwalior, Madhya Pradesh, India, from 29 to 31 December 2026 as a three-day programme.",
  ],
];

export const Route = createFileRoute("/funding-programme")({
  head: () => ({
    meta: [
      { title: "Startup Funding Programme | Riloyd" },
      { name: "description", content: "The Riloyd Startup Funding Programme gives eligible founders a non-refundable grant of up to ₹20 Lakhs across the top five startups, plus mentorship, business evaluation and investor connections at a three-day summit in Gwalior." },
      { property: "og:title", content: "Startup Funding Programme | Riloyd" },
      { property: "og:description", content: "Pitch, connect, raise and grow. Non-refundable grants of up to ₹20 Lakhs for the top five startups, with mentorship and investor connect." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/funding-programme" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/funding-programme" }],
  }),
  component: FundingProgramme,
});

const TOTAL = 10;

function Slide({ n, kicker, title, tone = "plain", children, id }: { n: number; kicker: string; title: React.ReactNode; tone?: "plain" | "surface"; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className={`relative border-b border-border ${tone === "surface" ? "bg-surface" : ""}`}>
      <div className="mx-auto w-full max-w-[1380px] px-5 py-10 sm:px-6 lg:px-12 lg:py-12">
        <div className="mb-6 flex items-end justify-between gap-4 border-b border-border pb-4">
          <div>
            <p className="eyebrow text-[10px] font-bold uppercase">{kicker}</p>
            <h2 className="mt-2 text-[clamp(1.6rem,3vw,2.6rem)] font-black uppercase leading-[0.95]">{title}</h2>
          </div>
          <p className="shrink-0 font-mono text-xs font-bold text-muted-foreground"><span className="text-primary">{String(n).padStart(2, "0")}</span> / {TOTAL}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

function FundingProgramme() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="hero-shell relative border-b border-border lg:min-h-[100svh] lg:flex lg:items-center">
        <img src={pitchAsset} alt="" aria-hidden width={1440} height={821} className="absolute inset-0 h-full w-full object-cover" decoding="async" fetchPriority="high" />
        <div className="hero-shade absolute inset-0" />
        <div className="relative z-10 mx-auto w-full max-w-[1380px] px-5 py-14 sm:px-6 lg:px-12">
          <p className="mb-6 font-mono text-xs font-bold text-muted-foreground"><span className="text-primary">01</span> / {TOTAL}</p>
          <div className="grid gap-10 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
            <div className="max-w-2xl">
              <p className="eyebrow mb-4 text-xs font-bold uppercase">Riloyd Startup Funding Programme</p>
              <h1 className="headline text-[clamp(2.5rem,5vw,5rem)] font-black uppercase leading-[0.88]">Pitch. Connect.<br />Raise. <span className="text-primary">Grow.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-soft md:text-lg">A platform to identify promising startups and emerging businesses and provide eligible founders with funding support, mentorship and investor connections.</p>
              <a href="#register" className="solid-cta mt-7 inline-flex items-center gap-3 rounded-md bg-primary px-8 py-3.5 text-sm font-extrabold text-primary-foreground">Register Your Startup Now <ArrowRight size={17} /></a>
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                {pillars.map(({ icon: Icon, label, copy }) => (
                  <div key={label}><Icon className="text-primary" size={22} strokeWidth={1.7} /><p className="mt-2 text-xs font-extrabold uppercase tracking-[0.18em]">{label}</p><p className="mt-1 text-xs leading-snug text-muted-foreground">{copy}</p></div>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-border bg-background/85 p-6 sm:p-7">
              <p className="eyebrow text-[10px] font-bold uppercase">Summit at a glance</p>
              <p className="mt-3 text-3xl font-black leading-none">29 · 30 · 31</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em] text-primary">December 2026</p>
              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4 text-xs">
                <p className="flex items-start gap-2"><MapPin className="shrink-0 text-primary" size={14} />Gwalior, MP, India</p>
                <p className="flex items-start gap-2"><CalendarDays className="shrink-0 text-primary" size={14} />Three-day summit</p>
                <p className="flex items-start gap-2"><Coins className="shrink-0 text-primary" size={14} />₹20 Lakhs grant pool</p>
                <p className="flex items-start gap-2"><ShieldCheck className="shrink-0 text-primary" size={14} />50% refund if not screened*</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">{why.map((w) => <span key={w} className="rounded-full border border-border px-3 py-1 text-[11px] text-soft">{w}</span>)}</div>
            </div>
          </div>
        </div>
      </section>

      <Slide n={2} kicker="Non-Refundable Grant" title={<>Up to <span className="text-primary">₹20 Lakhs</span> for the top five</>} tone="surface">
        <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <img src={posterAsset} alt="Riloyd Startup Funding Programme poster with the five winning grant tiers" width={1088} height={1456} loading="lazy" decoding="async" className="mx-auto max-h-[70vh] w-auto max-w-full rounded-lg border border-border object-contain" />
          <div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {tiers.map(([rank, amount]) => (
                <div key={rank} className="rounded-md border border-border bg-background px-4 py-4"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{rank} Startup</p><p className="mt-1 text-2xl font-black">{amount}</p><p className="text-[11px] text-muted-foreground">Non-refundable grant</p></div>
              ))}
              <div className="rounded-md border border-primary/40 bg-primary/10 px-4 py-4"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Total</p><p className="mt-1 text-2xl font-black">₹20 Lakhs</p><p className="text-[11px] text-muted-foreground">Across five startups</p></div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-soft">Funding can also come your way — selected startups pitch to participating investors for additional funding.</p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Subject to evaluation, eligibility, performance and applicable Terms and Conditions.</p>
          </div>
        </div>
      </Slide>

      <Slide n={3} kicker="From Idea to Investment" title={<>The five-stage <span className="text-primary">startup journey</span></>}>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {journey.map(([step, title, copy]) => (
            <div key={step} className="relative rounded-md border border-border bg-surface px-5 py-6"><p className="text-4xl font-black text-primary/40">{step}</p><h3 className="mt-3 text-sm font-extrabold uppercase tracking-wide">{title}</h3><p className="mt-2 text-xs leading-relaxed text-muted-foreground">{copy}</p></div>
          ))}
        </div>
        <img src={investorAsset} alt="Founders shaking hands with investors after a successful pitch" width={1440} height={1094} loading="lazy" decoding="async" className="mt-6 h-56 w-full rounded-lg border border-border object-cover lg:h-72" />
      </Slide>

      <Slide n={4} kicker="Screening Assurance" title={<>Not selected? <span className="text-primary">50% back</span></>} tone="surface">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div className="rounded-lg border border-primary/40 bg-primary/10 p-6 sm:p-8">
            <ShieldCheck className="text-primary" size={36} strokeWidth={1.6} />
            <p className="mt-4 text-xl font-black leading-snug sm:text-2xl">If any idea or startup is not selected in the screening, 50% of the registration amount will be refunded.</p>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">T&amp;C applicable</p>
          </div>
          <ul className="space-y-3 text-sm">
            {["Register and pay the registration fee", "Riloyd screens your startup within 15 days", "Not selected → 50% of the amount refunded", "Selected → move on to the jury pitch"].map((t, i) => (
              <li key={t} className="flex items-start gap-3 rounded-md border border-border bg-background px-4 py-3"><span className="font-black text-primary">{i + 1}</span>{t}</li>
            ))}
          </ul>
        </div>
      </Slide>

      <Slide n={5} kicker="What You Get" title={<>Support that goes <span className="text-primary">beyond the grant</span></>}>
        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-stretch">
          <img src={mentorAsset} alt="A mentor guiding two startup founders" width={1200} height={912} loading="lazy" decoding="async" className="h-64 w-full rounded-lg border border-border object-cover lg:h-full" />
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-md border border-border bg-surface px-5 py-5"><Icon className="text-primary" size={22} strokeWidth={1.7} /><h3 className="mt-3 text-sm font-extrabold uppercase tracking-wide">{title}</h3><p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{copy}</p></div>
            ))}
          </div>
        </div>
      </Slide>

      <Slide n={6} kicker="Fees & Free Benefits" title={<>Simple pricing, <span className="text-primary">stay covered</span></>} tone="surface">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="rounded-md border border-border bg-background px-5 py-5"><p className="text-3xl font-black">₹2,999 <span className="text-sm font-semibold text-muted-foreground">+18% GST</span></p><p className="mt-2 text-xs text-muted-foreground">Up to two persons per startup.</p></div>
            <div className="rounded-md border border-border bg-background px-5 py-5"><p className="text-3xl font-black">₹2,000 <span className="text-sm font-semibold text-muted-foreground">+18% GST / person</span></p><p className="mt-2 text-xs text-muted-foreground">Each additional participant.</p></div>
            <div className="rounded-md border border-primary/40 bg-primary/10 px-5 py-4 text-xs"><b>50% refund</b> if not selected in screening. T&amp;C applicable.</div>
          </div>
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Completely free for selected participants</p>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {freeForSelected.map(([title, note]) => (
                <li key={title} className="flex items-start gap-3 rounded-md border border-border bg-background px-5 py-4"><Check className="mt-0.5 shrink-0 text-primary" size={16} strokeWidth={2.4} /><span className="text-sm font-semibold">{title} <span className="font-normal text-muted-foreground">({note})</span></span></li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">Subject to policy, eligibility and Terms and Conditions. Confirm travel reimbursement before booking.</p>
          </div>
        </div>
      </Slide>

      <Slide n={7} kicker="Venue & Eligibility" title={<>Gwalior · <span className="text-primary">29–31 Dec 2026</span></>}>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
          <img src={gwaliorAsset} alt="Gwalior Fort at dusk, the summit's host city" width={1200} height={912} loading="lazy" decoding="async" className="h-64 w-full rounded-lg border border-border object-cover lg:h-[26rem]" />
          <div>
            <p className="flex items-start gap-2 text-sm text-soft"><MapPin className="mt-0.5 shrink-0 text-primary" size={16} />Gwalior, Madhya Pradesh, India — a three-day summit</p>
            <p className="mt-2 text-xs text-muted-foreground">Organised by Riloyd, a unit of RISHISHWAR INDUSTRY PRIVATE LIMITED.</p>
            <p className="eyebrow mt-6 text-[10px] font-bold uppercase">Who can apply</p>
            <div className="mt-3 grid grid-cols-2 gap-2">{canApply.map((c) => <span key={c} className="flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2.5 text-xs font-medium"><Check className="shrink-0 text-primary" size={14} />{c}</span>)}</div>
          </div>
        </div>
      </Slide>

      <Slide id="register" n={8} kicker="Startup Summit Registration" title={<>Register <span className="text-primary">now</span></>} tone="surface">
        <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="text-sm leading-relaxed text-muted-foreground">Tell us about your startup and our funding team will get in touch with the next steps — evaluation, mentor support and your pitch slot.</p>
            <a href={ZOHOPUBLIC} target="_blank" rel="noreferrer" className="solid-cta mt-6 inline-flex items-center gap-3 rounded-md bg-primary px-7 py-3 text-sm font-extrabold text-primary-foreground"><Rocket size={16} /> Open Registration Form <ArrowRight size={16} /></a>
            <p className="mt-4 text-xs text-muted-foreground">The form opens in a new window so every field is fully visible, or fill it in the preview here.</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-border bg-card"><iframe title="Startup Idea Registration Form" src={ZOHOPUBLIC} className="block h-[80vh] w-full border-0" loading="lazy" /></div>
        </div>
      </Slide>

      <Slide n={9} kicker="Frequently Asked Questions" title={<>Answers before <span className="text-primary">you apply</span></>}>
        <Accordion type="single" collapsible className="grid gap-x-6 lg:grid-cols-2">
          {faqs.map(([q, a], i) => (
            <AccordionItem key={q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-sm font-bold hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-6 text-sm text-soft">Still have questions? <Link to="/contact" className="font-semibold text-primary hover:underline">Get in touch with our team.</Link></p>
      </Slide>

      <Slide n={10} kicker="Take the next step" title={<>Ideas today. <span className="text-primary">Impact tomorrow.</span></>} tone="surface">
        <div className="text-center">
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">Join the Riloyd Startup Funding Programme and take your startup to the next level.</p>
          <a href="#register" className="solid-cta mt-7 inline-flex items-center gap-3 rounded-md bg-primary px-8 py-3.5 text-sm font-extrabold text-primary-foreground">Register Your Startup Now <ArrowRight size={17} /></a>
        </div>
      </Slide>
    </main>
  );
}
