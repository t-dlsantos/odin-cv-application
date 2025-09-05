import "./style.css";

import { Input } from "../Input";

export function PersonalInformation({ curriculum, setCurriculum }) {
  const handleChange = (e, field) => {
    setCurriculum({
      ...curriculum,
      [field]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Personal Information</h1>
      <div className="inputs">
        <Input
          value={curriculum.full_name}
          label="Full Name"
          id="full_name"
          placeholder="John Doe"
          onChange={(e) => handleChange(e, "full_name")}
        />
        <Input
          value={curriculum.email}
          label="Email"
          type="email"
          id="email"
          placeholder="john@email.com"
          onChange={(e) => handleChange(e, "email")}
        />
        <Input
          value={curriculum.phone_number}
          label="Phone number"
          type="tel"
          id="phone_number"
          placeholder="999 999 999"
          onChange={(e) => handleChange(e, "phone_number")}
        />
        <Input
          value={curriculum.address}
          label="Address"
          id="address"
          placeholder="Blue Island, Metaverse"
          onChange={(e) => handleChange(e, "address")}
        />
      </div>
    </div>
  );
}
