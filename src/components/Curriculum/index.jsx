import { Mail, MapPin, Phone } from "lucide-react";
import "./style.css";

export function Curriculum({ curriculum }) {
  return (
    <div className="curriculum-container">
      <div className="header">
        <h1>{ curriculum.full_name }</h1>
        <div className="contact">
          <div>
            <Mail size={14}/>
            { curriculum.email }
          </div>
          <div>
            <Phone size={14}/>
            { curriculum.phone_number }
          </div>
          <div>
            <MapPin size={14}/>
            { curriculum.address }
          </div>
        </div>
      </div>      
    </div>
  );
}