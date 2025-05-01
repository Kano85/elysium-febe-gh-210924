import Breadcrumb from '@/components/Common/Breadcrumb';
import Image from 'next/image';

import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About Page | Free Next.js Template for Startup and SaaS',
  description: 'This is About Page for Startup Nextjs Template',
};

// ──────────────────────────────────────────────────────────────────────────────
// Grid wrapper: 7 columns (text) + 5 columns (images) from `lg` breakpoint up
// ──────────────────────────────────────────────────────────────────────────────
const LgTwoCol: React.FC<{
  children: React.ReactNode;
  images: React.ReactNode;
}> = ({ children, images }) => (
  <section className="space-y-lg lg:grid lg:grid-cols-12 lg:gap-x-lg lg:space-y-0">
    <div className="lg:col-span-7 space-y-lg">{children}</div>
    <aside className="lg:col-span-5 space-y-lg">{images}</aside>
  </section>
);

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="Wo we are" description="" />

      <main className="container py-lg space-y-xl">
        {/* ───── WHO WE ARE ─────────────────────────────────────────────── */}
        <LgTwoCol
          images={
            <>
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/images/about/about1.png"
                  alt="Elysium Team Discussion"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/about/about3.png"
                  alt="Elysium Office Detail 1"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/about/about4.png"
                  alt="Elysium Office Detail 2"
                  fill
                  className="object-cover rounded"
                />
              </div>
            </>
          }
        >
          <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
            At ELYSIUM, our philosophy rests on an unshakable premise: the
            client is at the heart of everything we do. Founded in the dynamic
            business hub of Escaldes (Principality of Andorra) and able to serve
            clients personally in Andorra, Barcelona and Toulouse, our
            international strategic-consulting firm not only pursues
            excellence—it redefines what “advisory” means.
          </p>
          <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
            “Building lasting partnerships” is more than a slogan; it reflects
            our commitment to forging durable, deeply trustworthy relationships.
            We specialise in international tax consulting and planning, business
            optimisation, international relocation and executive strategy, among
            other services. Our approach guarantees meticulous, personalised
            attention, treating each challenge as our own and delivering rapid,
            effective solutions.
          </p>
          <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
            Albert Contel, our Managing Partner and founder, embodies ELYSIUM’s
            values: honesty, transparency, technical rigour and unwavering
            attention to detail. With wide-ranging experience—from regulatory
            changes in Andorra and neighbouring countries to global standards—he
            has not only witnessed but helped shape the fiscal and legal
            landscape alongside numerous international clients. Likewise, the
            firm would be nothing without every member of its team: our
            diversity ensures a wealth of perspectives and a unique capacity to
            handle complex cases with a deep, nuanced grasp of global client
            needs.
          </p>
          <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
            True value lies not only in what we deliver but in how we deliver
            it. We focus on minimising risk and maximising opportunity,
            empowering clients as well as supporting them. Every member of our
            expert team—economists and lawyers specialised in commercial and tax
            law—ensures that only the best minds handle each case.
          </p>
          <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
            Our dynamic, ever-growing international network of collaborators
            lets us craft effective strategies across multiple jurisdictions and
            give clients a global view. From corporate restructuring to
            strategic planning and business valuation, every service comes with
            a proactive, tailored mindset.
          </p>
          <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
            In short, ELYSIUM is more than a consulting firm; we are a strategic
            partner dedicated to our clients’ growth and evolution. Born of a
            unique vision of exceptional service, we live to solve the most
            complex challenges and to see every business decision made with
            clarity, knowledge and confidence. With ELYSIUM you gain not just a
            consultant but an ally who deeply understands your needs and turns
            them into sustainable, successful opportunities.
          </p>
        </LgTwoCol>

        {/* ───── HISTORY ────────────────────────────────────────────────── */}
        <LgTwoCol
          images={
            <>
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src="/images/about/about2.png"
                  alt="Elysium Office Environment"
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/about/about5.png"
                  alt="Elysium Office Detail 3"
                  fill
                  className="object-cover rounded"
                />
              </div>
            </>
          }
        >
          <h3 className="elysium-heading-3 bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent text-left">
            History
          </h3>

          <div className="space-y-sm">
            <h4 className="elysium-heading-5">Origins</h4>
            <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
              ELYSIUM’s journey begins with the remarkable story of its founder,
              Albert Contel, whose heritage is as rich and varied as the
              cultural tapestry of his native Barcelona. Raised in a home where
              economics and the arts danced in perfect harmony—an economist
              father and a polyglot mother—Albert grew up amid numbers and
              music, data and drama, forging an insatiable appetite for
              knowledge and a unique vision for its real-world application.
            </p>

            <h4 className="elysium-heading-5">Development</h4>
            <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
              As a student, Albert worked afternoons in small accounting firms,
              grounding himself in bookkeeping, taxation and hands-on client
              service. This early stage paved the way to the “big leagues,”
              where he served with the world’s most emblematic audit firms and
              top-tier international law offices. Here he honed the ability to
              navigate global finance, corporate and—especially—tax law,
              complemented by a stint in private banking that deepened his
              knowledge of corporate and personal finance.
            </p>

            <h4 className="elysium-heading-5">Birth of the Brand</h4>
            <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
              Albert’s true calling was not merely to work on the global stage,
              but to transform it. ELYSIUM was born from a dream, woven through
              years of experience and reflection, to create a firm that would
              lead with innovation and a holistic mindset.
            </p>

            <h4 className="elysium-heading-5">Values and Perspectives</h4>
            <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
              The name ELYSIUM evokes the legendary Elysian Fields—an idyllic
              refuge for virtuous souls—which captures our mission. With the
              Möbius strip as our emblem, we pledge continuity, integrity and
              absolute transparency. Every client challenge becomes our own
              challenge; every victory, proof of our shared commitment. We aim
              not merely to solve problems but to anticipate and surpass
              expectations, spotting opportunities before they emerge. We strive
              to be unshakeable allies in our clients’ pursuit of success,
              ensuring that each one finds a sanctuary of trust and excellence
              within ELYSIUM. ELYSIUM is not just a firm; it is a movement, a
              revolution in consulting, and a legacy we intend for future
              generations. Our story is an open invitation to all who value
              excellence, passion and loyalty, and who wish to join us on this
              journey toward a future where the extraordinary is standard. With
              ELYSIUM you find not only solutions but an entirely new horizon of
              possibilities.
            </p>
          </div>
        </LgTwoCol>

        {/* ───── WHAT IS ELYSIUM? (kept single column) ─────────────────── */}
        <section className="space-y-md">
          <h3 className="elysium-heading-3 bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent text-left">
            What is elysium?
          </h3>
          <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
            The name ELYSIUM evokes the legendary Elysian Fields—an idyllic
            refuge for virtuous souls—which captures our mission. With the
            Möbius strip as our emblem, we pledge continuity, integrity and
            absolute transparency.
          </p>
          <ul className="list-disc list-inside font-elysium-text-body-XS-elysium space-y-xs text-projects-colorstylesdisable-text">
            <li>
              <strong>The Name:</strong> Rooted in Latin and Ancient Greek,
              “Elysium” references the Elysian Fields, symbolising our ideal in
              business: a sanctuary of trust and excellence where every client
              is treated with the highest professionalism and ethics.
            </li>
            <li>
              <strong>The Slogan:</strong> “Building Lasting Partnerships”
              encapsulates our customer-service philosophy: we build deep,
              enduring bonds founded on mutual trust and understanding.
            </li>
            <li>
              <strong>The Symbol:</strong> The Möbius strip, with a single
              surface and edge, symbolises continuity and infinity—our vision
              for client relationships.
            </li>
            <li>
              <strong>Corporate Colours:</strong> Gold signifies excellence and
              success; Black denotes sophistication, elegance, strength and
              authority; White evokes clarity, purity and precision.
            </li>
          </ul>
        </section>

        {/* ───── VALUES (original grid, unchanged) ─────────────────────── */}
        <section className="space-y-sm">
          <h3 className="elysium-heading-3 bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent text-left">
            Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
            <div>
              <h5 className="elysium-body-l">Excellence</h5>
              <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
                An unreserved commitment to surpassing expectations through
                innovative solutions and dedicated professionals.
              </p>
            </div>
            <div>
              <h5 className="elysium-body-l">Honesty</h5>
              <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
                Open, constant communication and full transparency as the
                foundation of lasting partnerships.
              </p>
            </div>
            <div>
              <h5 className="elysium-body-l">Security</h5>
              <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
                Safeguarding today and securing tomorrow by crafting robust,
                future-aligned strategies.
              </p>
            </div>
            <div>
              <h5 className="elysium-body-l">Trust</h5>
              <p className="font-elysium-text-body-XS-elysium text-projects-colorstylesdisable-text">
                The cornerstone of every relationship, evidenced by a 99 %
                client-retention rate and frequent referrals.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutPage;
