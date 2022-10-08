interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const ButtonOutline = ({ href, className, children }: Props) => {
  return (
    <a href={href} className={`btn btn-outline ${className}`}>
      {children}
    </a>
  );
};

export default ButtonOutline;
