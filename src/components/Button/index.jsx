export function Button({ color = "#1a1a1a", onClick, icon: Icon }) {

  return (
    <button onClick={onClick} style={{ backgroundColor: color }}>
      <Icon size={18}/>
    </button>
  );

}