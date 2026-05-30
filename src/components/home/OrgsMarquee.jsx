const logoKw = '/images/logo_kw.svg';
const logoFrost = '/images/logo_frost.svg';
const logoCapital = '/images/logo_capital.svg';
const logoRemax = '/images/logo_remax.svg';
const logoColdwell = '/images/logo_coldwell.svg';
const logoFirstam = '/images/logo_firstam.svg';
const logoAllegiance = '/images/logo_allegiance.svg';
const logoFidelity = '/images/logo_fidelity.svg';

const logos = [
  { src: logoKw, alt: 'Keller Williams' },
  { src: logoFrost, alt: 'Frost Bank' },
  { src: logoCapital, alt: 'Capital Title' },
  { src: logoRemax, alt: 'RE/MAX' },
  { src: logoColdwell, alt: 'Coldwell Banker' },
  { src: logoFirstam, alt: 'First American Title' },
  { src: logoAllegiance, alt: 'Allegiance Title Company' },
  { src: logoFidelity, alt: 'Fidelity National Title' },
];

export default function OrgsMarquee() {
  const doubledLogos = [...logos, ...logos];

  return (
    <section className="orgs-served">
      <div className="container">
        <h4 className="orgs-title">Selected Organizations Served</h4>
      </div>
      <div className="orgs-marquee">
        <div className="orgs-track">
          {doubledLogos.map((logo, i) => (
            <div key={i} className="org-item">
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
