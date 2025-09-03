import "./PersonalInformation.css";
import { Input } from "../Input/Input";

export function PersonalInformation({ curriculumInformation, setCurriculumInformation }) {

  const handleFullNameChange = (e) => {
    setCurriculumInformation({
      ...curriculumInformation,
      first_name: e.target.value
    });
  }

  const handleEmailChange = (e) => {
    setCurriculumInformation({
      ...curriculumInformation,
      email: e.target.value
    })
  }

  const handlePhoneNumberChange = (e) => {
    setCurriculumInformation({
      ...curriculumInformation,
      phone_number: e.target.value
    })
  }

  const handleAddressChange = (e) => {
    setCurriculumInformation({
      ...curriculumInformation,
      address: e.target.value
    })
  }

  return (
    <div>
      <h1>Personal Information</h1>
      
      <div className="inputs">
        <Input value={curriculumInformation.full_name} label="Full Name" id="full-name" placeholder="John Doe" onChange={handleFullNameChange}/>
        <Input value={curriculumInformation.email} label="Email" type="email" id="email" placeholder="john@email.com" onChange={handleEmailChange}/>
        <Input value={curriculumInformation.phone_number} label="Phone number" type="tel" id="phone" placeholder="999 999 999" onChange={handlePhoneNumberChange}/>
        <Input value={curriculumInformation.address} label="Address" id="address" placeholder="Blue Island, Metaverse" onChange={handleAddressChange}/>
      </div>

      {/* <Section icon="" name="" />
      <Section icon="" name="" /> */}
    </div>
  );
}