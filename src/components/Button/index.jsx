import "./style.css";

export function Button({ color = "#303030ff", onClick, icon: Icon,  text = ""}) {
  return (
    <button className="button" onClick={onClick} style={{ backgroundColor: color }}>
      {
        Icon !== undefined &&
        <Icon size={18} />
      }
      {
        text.length > 0 &&
        <p>{text}</p>
      }
    </button>
  );
}
