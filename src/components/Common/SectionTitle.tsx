//src/components/Common/SectionTitle.tsx
const SectionTitle = ({
  title,
  paragraph,
  width = '100%',
  center,
  mb = '0px',
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div
      className={`w-full ${center ? 'mx-auto text-center' : ''}`}
      style={{ maxWidth: width, marginBottom: mb }}
    >
      <h2
        className={`mb-4 text-[2.5rem] lg:text-[3rem] tracking-[-0.01em] leading-[3rem] lg:leading-[3.75rem] font-fragmentSerif font-normal bg-gradient-to-b from-gold-light to-gold-dark bg-clip-text text-transparent ${center ? 'text-center' : 'text-left'}`}
      >
        {title}
      </h2>
      <p
        className={`font-elysium-text-body-l-elysium text-projects-colorstylesdisable-text ${center ? 'text-center' : 'text-left'}`}
      >
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
