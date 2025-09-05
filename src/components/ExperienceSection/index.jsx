import { Briefcase } from "lucide-react";
import { Section } from "../Section";

export function ExperienceSection({ items, isOpen, onToggle }) {
  return (
    <Section
      title="Experience"
      icon={Briefcase}
      isOpen={isOpen}
      onToggle={onToggle}
      items={items}
    ></Section>
  );
}
