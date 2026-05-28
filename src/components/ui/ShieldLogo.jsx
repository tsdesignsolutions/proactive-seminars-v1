export default function ShieldLogo({ className = '', size = 40, variant = 'default' }) {
  const h = (size / 40) * 48;
  const fills = {
    default: { outer: '#0056FF', inner: 'white', letter: '#0A192F' },
    white:   { outer: 'white',   inner: '#0A192F', letter: 'white' },
    cta:     { outer: 'white',   inner: '#0047fa', letter: 'white' },
  };
  const { outer, inner, letter } = fills[variant] || fills.default;

  return (
    <svg width={size} height={h} viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M20 0L0 8V22C0 33.1 8.5 43.5 20 48C31.5 43.5 40 33.1 40 22V8L20 0Z" fill={outer} />
      <path d="M20 4L4 10.4V22C4 31.3 11 40 20 43.8C29 40 36 31.3 36 22V10.4L20 4Z" fill={inner} />
      <path d="M14 14H24C27.866 14 31 17.134 31 21C31 24.866 27.866 28 24 28H18V36H14V14ZM18 18V24H24C25.6569 24 27 22.6569 27 21C27 19.3431 25.6569 18 24 18H18Z" fill={letter} />
    </svg>
  );
}
