import { Mail, MapPin, Phone } from "lucide-react";
import "./style.css";
import { parseFromIsoToDateString } from "../../utils/dateParser";

export function Curriculum({ curriculum }) {
  return (
    <div className="curriculum-container">
      <div className="header">
        <h1>{curriculum.full_name}</h1>
        <div className="contact">
          {curriculum.email.length > 0 && (
            <div>
              <Mail size={14} />
              {curriculum.email}
            </div>
          )}
          {curriculum.phone_number.length > 0 && (
            <div>
              <Phone size={14} />
              {curriculum.phone_number}
            </div>
          )}
          {curriculum.address.length > 0 && (
            <div>
              <MapPin size={14} />
              {curriculum.address}
            </div>
          )}
        </div>
      </div>
      <div className="content">
        {curriculum.education.length > 0 && (
          <div className="education">
            <h2>Education</h2>
            <div className="items">
              {curriculum.education.map((edu) => (
                <div className="info" key={edu.id}>
                  <div className="left">
                    <p>
                      {parseFromIsoToDateString(edu.start_date)} -{" "}
                      {parseFromIsoToDateString(edu.end_date)}
                    </p>
                    <p>{edu.location}</p>
                  </div>
                  <div className="right">
                    <p className="name">{edu.school_name}</p>
                    <p>{edu.degree}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {curriculum.experience.length > 0 && (
          <div className="experience">
            <h2>Experience</h2>
            <div className="items">
              {curriculum.experience.map((exp) => (
                <div className="info" key={exp.id}>
                  <div className="left">
                    <p>
                      {parseFromIsoToDateString(exp.start_date)} -{" "}
                      {parseFromIsoToDateString(exp.end_date)}
                    </p>
                    <p>{exp.location}</p>
                  </div>
                  <div className="right">
                    <p className="name">{exp.company_name}</p>
                    <p>{exp.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
