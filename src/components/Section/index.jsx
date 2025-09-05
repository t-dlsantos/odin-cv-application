import "./style.css";

import { ChevronDown, PenBox, Plus } from "lucide-react";

export function Section({ title, icon: Icon, isOpen, onToggle, children }) {
  return (
    <div className="section">
      <div className="expand-container" onClick={onToggle}>
        <div className="name-container">
          <Icon />
          <h2>{title}</h2>
        </div>
        <ChevronDown className={`chevron ${isOpen ? "open" : ""}`} />
      </div>

      {isOpen && children}
    </div>
  );
}
