import { useState } from "react";
import { Input } from "../Input";
import "./style.css";
import { Check } from "lucide-react";
import { Button } from "../Button";

export function ExperienceForm({ initialData, onSave, onCancel }) {
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
    <form className="experience-form" onSubmit={handleSubmit}>
      <Input
        id="company_name"
        label="Company"
        value={form.company_name}
        onChange={handleChange}
        placeholder="Meta"
      />
      <Input
        id="position"
        label="Position"
        value={form.position}
        onChange={handleChange}
        placeholder="Software Engineer"
      />
      <div className="date-section">
        <Input
          id="start_date"
          label="Start Date"
          type="date"
          value={form.start_date}
          onChange={handleChange}
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
            <p>Current Job?</p>
          </div>
      </div>
      <Input
        id="location"
        label="Location"
        value={form.location}
        onChange={handleChange}
        placeholder="São Paulo, SP"
      />

      <div className="actions">
        <Button
          onClick={onCancel}
          text="Cancel"
        />
        <Button 
          text="Save"
          type="submit"
          icon={Check}
          color="#646cff"
        />
      </div>
    </form>
  );
}
