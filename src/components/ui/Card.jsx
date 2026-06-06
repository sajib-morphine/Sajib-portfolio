const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;
