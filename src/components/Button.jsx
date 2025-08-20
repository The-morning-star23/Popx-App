const Button = ({ text, onClick, variant = 'primary' }) => {
  // Define styles based on the variant prop
  const baseStyle = "w-full text-center font-semibold rounded-md py-3";
  
  const styles = {
    primary: "bg-primary-purple text-white",
    secondary: "bg-secondary-purple text-primary-purple border border-primary-purple"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${styles[variant]}`}>
      {text}
    </button>
  );
};

export default Button;