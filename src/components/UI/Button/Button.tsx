import "./Button.scss";

interface Props {
  href?: string;
  className?: string;
  children: React.ReactNode;
  variant?: "outline";
}

function Button({ href, className, children, variant }: Props) {
  const btnStyle = variant === "outline" ? "btn-outline" : "btn-full";

  return (
    <div className="flex-center-xy">
      <a href={href} className={`btn ${btnStyle} ${className}`}>
        {children}
      </a>
    </div>
  );
}

export default Button;
