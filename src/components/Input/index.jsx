import './style.css';

function Input({
  type = 'text',
  placeholder = '',
  value = '',
  onChange,
  customStyle,
}) {
  return (
    <input
      className={`input ${customStyle}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
