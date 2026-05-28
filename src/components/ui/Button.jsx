import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-primary text-white hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30',
  outline: 'bg-transparent text-primary border-primary hover:bg-primary/5',
  white: 'bg-white text-primary hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20',
  'outline-white': 'bg-transparent text-white border-white hover:bg-white/10',
};

const sizes = {
  default: 'px-6 py-2.5 text-sm',
  large: 'px-8 py-3.5 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  href,
  to,
  className = '',
  icon,
  ...props
}) {
  const base = `inline-flex items-center justify-center gap-2 rounded font-semibold border-2 border-transparent cursor-pointer transition-all duration-250 ease-out ${variants[variant]} ${sizes[size]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={base} {...props}>
          {icon}{children}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a href={href} className={base} {...motionProps} {...props}>
        {icon}{children}
      </motion.a>
    );
  }

  return (
    <motion.button className={base} {...motionProps} {...props}>
      {icon}{children}
    </motion.button>
  );
}
