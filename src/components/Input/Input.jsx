import './Input.css';

export function Input({ type = "text", id, label, placeholder, onChange, value }) {
  return (
    <div className='input-container'>
      <label className='label' htmlFor={id}>{label}</label>
      <input className='input' id={id} type={type} placeholder={placeholder} onChange={onChange} value={value}/>
    </div>
  );
}