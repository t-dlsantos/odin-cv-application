import { useState } from "react";

import "./style.css";

import { PenBox, Trash, Plus, Briefcase } from "lucide-react";

import { Section } from "../Section";
import { Button } from "../Button";
import { ExperienceForm } from "../ExperienceForm";

export function ExperienceSection({
  curriculum,
  setCurriculum,
  isOpen,
  onToggle,
}) {
  const [editingItem, setEditingItem] = useState(null);

  const handleAdd = () => {
    setEditingItem({
      id: null,
      company_name: "",
      position: "",
      start_date: "",
      end_date: "",
      location: "",
    });
  };

  const handleSave = (data) => {
    if (data.id) {
      setCurriculum({
        ...curriculum,
        experience: curriculum.experience.map((exp) =>
          exp.id === data.id ? data : exp
        ),
      });
    } else {
      setCurriculum({
        ...curriculum,
        experience: [...curriculum.experience, { ...data, id: Date.now() }],
      });
    }
    setEditingItem(null);
  };

  const handleDelete = (id) => {
    setCurriculum({
      ...curriculum,
      experience: curriculum.experience.filter((exp) => exp.id !== id),
    });
  };

  return (
    <Section
      title="Experience"
      icon={Briefcase}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      {editingItem ? (
        <ExperienceForm
          initialData={editingItem}
          onSave={handleSave}
          onCancel={() => setEditingItem(null)}
        />
      ) : (
        <div className="experiences-container">
          {curriculum.experience.map((exp) => (
            <div className="exp-container" key={exp.id}>
              <div className="basic-information">
                <span><b>{exp.position}</b></span>
                <span>{exp.company_name}</span>
              </div>
              <div className="item-actions">
                <Button icon={PenBox} onClick={() => setEditingItem(exp)}/>
                <Button icon={Trash} color="red" onClick={() => handleDelete(exp.id)}/>
              </div>
            </div>
          ))}
          <Button 
            onClick={handleAdd}
            icon={Plus}
            text="Add Education"
            color="transparent"
          />
        </div>
      )}
    </Section>
  );
}