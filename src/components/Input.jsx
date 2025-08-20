const Input = ({ label, type = "text", placeholder, isRequired = false }) => {
  return (
    <div className="relative">
      <label 
        className="absolute left-0 -top-3.5 text-primary-purple text-xs font-semibold"
      >
        {label}{isRequired && <span className="text-red-500">*</span>}
      </label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="w-full pb-1 border-b-2 border-gray-300 focus:outline-none focus:border-primary-purple"
        required={isRequired}
      />
    </div>
  );
};

export default Input;