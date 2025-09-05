import { useState } from "react";
import { Input } from "../Input";
import "./style.css";

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
      />
      <Input
        id="degree"
        label="Degree"
        value={form.degree}
        onChange={handleChange}
      />
      <Input
        id="start_date"
        label="Start Date"
        type="date"
        value={form.start_date}
        onChange={handleChange}
      />
      <div className="current-job">
        <p>Current job?</p>
        <input
          type="checkbox"
          id="end_date"
          checked={isCurrentJob}
          onChange={handleCheckboxChange}
        />
      </div>

      {!isCurrentJob && (
        <Input
          id="end_date"
          label="End Date"
          type="date"
          value={form.end_date}
          onChange={handleChange}
        />
      )}
      <Input
        id="location"
        label="Location"
        value={form.location}
        onChange={handleChange}
      />

      <div className="actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
