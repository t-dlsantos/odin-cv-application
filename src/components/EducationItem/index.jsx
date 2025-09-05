import { PenBox, Trash } from "lucide-react";

import "./style.css";

export function EducationItem({ edu, onEdit, onDelete }) {
  return (
    <div className="education-item">
      <div>
        <p className="school">{edu.school_name}</p>
        <p className="degree">{edu.degree}</p>
        <p className="dates">
          {edu.start_date} → {edu.end_date}
        </p>
        <p className="location">{edu.location}</p>
      </div>
    </div>
  );
}