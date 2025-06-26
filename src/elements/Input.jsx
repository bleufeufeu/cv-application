export default function Input({ labelValue, htmlFor, name, type, id, placeholder, value, onChange, trashIcon=false, deleteButton }) {
    return (
        <div className="inputContainer">
            <label htmlFor={htmlFor}>{labelValue}</label>
            <input name={name} id={id} type={type} placeholder={placeholder} value={value} onChange={onChange}></input>
        </div>
    );
}