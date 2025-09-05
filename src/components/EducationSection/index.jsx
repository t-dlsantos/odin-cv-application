import { useState } from "react";

import "./style.css";

import { GraduationCap, PenBox, Trash, Plus } from "lucide-react";

import { Section } from "../Section";
import { EducationForm } from "../EducationForm";
import { Button } from "../Button";

export function EducationSection({
  curriculum,
  setCurriculum,
  isOpen,
  onToggle,
}) {
  const [editingItem, setEditingItem] = useState(null);

  const handleAdd = () => {
    setEditingItem({
      id: null,
      school_name: "",
      degree: "",
      start_date: "",
      end_date: "",
      location: "",
    });
  };

  const handleSave = (data) => {
    if (data.id) {
      setCurriculum({
        ...curriculum,
        education: curriculum.education.map((edu) =>
          edu.id === data.id ? data : edu
        ),
      });
    } else {
      setCurriculum({
        ...curriculum,
        education: [...curriculum.education, { ...data, id: Date.now() }],
      });
    }
    setEditingItem(null);
  };

  const handleDelete = (id) => {
    setCurriculum({
      ...curriculum,
      education: curriculum.education.filter((edu) => edu.id !== id),
    });
  };

  return (
    <Section
      title="Education"
      icon={GraduationCap}
      isOpen={isOpen}
      onToggle={onToggle}
    >
      {editingItem ? (
        <EducationForm
          initialData={editingItem}
          onSave={handleSave}
          onCancel={() => setEditingItem(null)}
        />
      ) : (
        <div className="educations-container">
          {curriculum.education.map((edu) => (
            <div className="edu-container">
              <div className="basic-information">
                <span><b>{edu.degree}</b></span>
                <span>{edu.school_name}</span>
              </div>
              <div className="item-actions">
                <Button icon={PenBox} onClick={() => setEditingItem(edu)}/>
                <Button icon={Trash} color="red" onClick={() => handleDelete(edu.id)}/>
              </div>
            </div>
          ))}
          <button type="button" className="add-item" onClick={handleAdd}>
            <Plus />
            <p>Add Education</p>
          </button>
        </div>
      )}
    </Section>
  );
}
