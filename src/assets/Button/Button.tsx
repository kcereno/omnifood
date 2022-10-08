interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

function Button({ href, className, children }: Props) {
  return (
    <a href={href} className={`btn btn-full ${className}`}>
      {children}
    </a>
  );
}

export default Button;
