import { useState } from "react";
import { Input } from "../Input";
import "./style.css";

export function ExperienceForm({ initialData, onSave, onCancel }) {
  const [form, setForm] = useState(initialData);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form className="experience-form" onSubmit={handleSubmit}>
      <Input
        id="company_name"
        label="Company"
        value={form.company_name}
        onChange={handleChange}
      />
      <Input
        id="position"
        label="Position"
        value={form.position}
        onChange={handleChange}
      />
      <Input
        id="start_date"
        label="Start Date"
        type="date"
        value={form.start_date}
        onChange={handleChange}
      />
      <Input
        id="end_date"
        label="End Date"
        type="date"
        value={form.end_date}
        onChange={handleChange}
      />
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