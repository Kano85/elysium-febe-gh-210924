import Image from 'next/image';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-hero-dark text-white py-xl px-sm md:px-md lg:px-lg">
      <div className="container mx-auto">
        <div className="text-center mb-xl">
          <h1 className="text-h1 font-serif text-h1-color mb-sm">
            La experiencia no es solo técnica, es personal
          </h1>
          <p className="text-body-color text-h4">
            Desde Andorra al mundo, un equipo unido por la excelencia y la
            pasión.
          </p>
        </div>

        {/* Mobile layout (sm) - Single column */}
        <div className="grid grid-cols-1 gap-md h-auto md:hidden">
          {[
            {
              src: '/images/about/aboutus1.jpeg',
              alt: 'Abstract metal chains',
            },
            { src: '/images/about/aboutus2.jpeg', alt: 'Team members' },
            { src: '/images/about/aboutus3.png', alt: 'Lady Justice statue' },
            { src: '/images/about/aboutus4.png', alt: 'Elysium sign' },
            { src: '/images/about/aboutus5.png', alt: 'Office space' },
            {
              src: '/images/about/aboutus6.png',
              alt: 'Professional in formal attire',
            },
          ].map((img, index) => (
            <div
              key={index}
              className="overflow-hidden aspect-[4/3] md:aspect-auto md:h-auto"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={450}
                className="object-cover w-full h-full grayscale"
              />
            </div>
          ))}
        </div>

        {/* Tablet layout (md) - Special arrangement */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-md auto-rows-auto">
          {/* Large feature image spanning full width */}
          <div className="col-span-2 h-[400px] overflow-hidden">
            <Image
              src="/images/about/aboutus1.jpeg"
              alt="Team members"
              width={800}
              height={400}
              className="object-cover w-full h-full grayscale"
            />
          </div>

          {/* 2x2 grid below */}
          <div className="h-[300px] overflow-hidden">
            <Image
              src="/images/about/aboutus2.jpeg"
              alt="Abstract metal chains"
              width={400}
              height={300}
              className="object-cover w-full h-full grayscale"
            />
          </div>
          <div className="h-[300px] overflow-hidden">
            <Image
              src="/images/about/aboutus3.png"
              alt="Lady Justice statue"
              width={400}
              height={300}
              className="object-cover w-full h-full grayscale"
            />
          </div>
          <div className="h-[300px] overflow-hidden">
            <Image
              src="/images/about/aboutus4.png"
              alt="Elysium sign"
              width={400}
              height={300}
              className="object-cover w-full h-full grayscale"
            />
          </div>
          <div className="h-[300px] overflow-hidden">
            <Image
              src="/images/about/aboutus5.png"
              alt="Professional in formal attire"
              width={400}
              height={300}
              className="object-cover w-full h-full grayscale"
            />
          </div>

          {/* Bottom image spanning full width */}
          <div className="col-span-2 h-[250px] overflow-hidden">
            <Image
              src="/images/about/aboutus6.png"
              alt="Office space"
              width={800}
              height={250}
              className="object-cover w-full h-full grayscale"
            />
          </div>
        </div>

        {/* Desktop layout (lg) - 3 columns with masonry */}
        <div className="hidden lg:grid grid-cols-3 gap-md h-[1200px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-md h-full">
            <div className="overflow-hidden h-[40%]">
              <Image
                src="/images/about/aboutus1.jpeg"
                alt="Abstract metal chains"
                width={400}
                height={500}
                className="object-cover w-full h-full grayscale"
              />
            </div>
            <div className="overflow-hidden h-[60%]">
              <Image
                src="/images/about/aboutus2.jpeg"
                alt="Elysium sign"
                width={400}
                height={700}
                className="object-cover w-full h-full grayscale"
              />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-md h-full">
            <div className="overflow-hidden h-[65%]">
              <Image
                src="/images/about/aboutus3.png"
                alt="Team members"
                width={400}
                height={800}
                className="object-cover w-full h-full grayscale"
              />
            </div>
            <div className="overflow-hidden h-[35%]">
              <Image
                src="/images/about/aboutus4.png"
                alt="Office space"
                width={400}
                height={400}
                className="object-cover w-full h-full grayscale"
              />
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-md h-full">
            <div className="overflow-hidden h-[55%]">
              <Image
                src="/images/about/aboutus5.png"
                alt="Lady Justice statue"
                width={400}
                height={600}
                className="object-cover w-full h-full grayscale"
              />
            </div>
            <div className="overflow-hidden h-[45%]">
              <Image
                src="/images/about/aboutus6.png"
                alt="Professional in formal attire"
                width={400}
                height={600}
                className="object-cover w-full h-full grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
