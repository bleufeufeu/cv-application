export default function Input({
  labelValue,
  htmlFor,
  name,
  type,
  id,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="textAreaContainer">
      <label htmlFor={htmlFor}>{labelValue}</label>
      <textarea
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
