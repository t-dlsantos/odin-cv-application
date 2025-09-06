import { useState } from "react";
import { Input } from "../Input";
import "./style.css";
import { Button } from "../Button";
import { Check } from "lucide-react";

export function EducationForm({ initialData, onSave, onCancel }) {
  const [form, setForm] = useState(initialData);
  const [isCurrentJob, setCurrentJob] = useState(
    initialData.end_date === "current"
  );

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    setCurrentJob(checked);
    setForm({
      ...form,
      end_date: checked ? "current" : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form className="education-form" onSubmit={handleSubmit}>
      <Input
        id="school_name"
        label="School"
        value={form.school_name}
        onChange={handleChange}
        placeholder="Havard University"
      />
      <Input
        id="degree"
        label="Degree"
        value={form.degree}
        onChange={handleChange}
        placeholder="Bachelors in Computer Engineering"
      />
      <div className="date-section">
        <Input
          id="start_date"
          label="Start Date"
          type="date"
          value={form.start_date}
          onChange={handleChange}
          required
        />
    
          {!isCurrentJob && (
            <Input
              id="end_date"
              label="End Date"
              type="date"
              value={form.end_date}
              onChange={handleChange}
            />
          )}
          <div className="current-job">
            <input
              type="checkbox"
              id="end_date"
              checked={isCurrentJob}
              onChange={handleCheckboxChange}
            />
            <p>Current Studying?</p>
          </div>
      </div>

      <Input
        id="location"
        label="Location"
        value={form.location}
        onChange={handleChange}
        placeholder="Cambridge, MA"
      />

      <div className="actions">
        <Button
          onClick={onCancel}
          text="Cancel"
        />
        <Button 
          type="submit"
          text="Save"
          icon={Check}
          color="#646cff"
        />
      </div>
    </form>
  );
}
