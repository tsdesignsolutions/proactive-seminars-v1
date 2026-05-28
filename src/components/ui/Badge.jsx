export default function Badge({ children, variant = 'blue', className = '' }) {
  const styles = {
    blue: 'bg-primary/10 text-primary',
    white: 'bg-white/20 text-white',
    dark: 'bg-primary/10 text-primary',
  };

  return (
    <span className={`inline-block px-4 py-1.5 rounded-full font-semibold text-sm ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
}
