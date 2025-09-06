const loadExample = () => {
  return {
    full_name: "Thiago de Lima Santos",
    email: "thiago.delimasantos@outlook.com",
    phone_number: "+55 11942339128",
    address: "São Roque, SP",
    education: [
      {
        id: crypto.randomUUID(),
        school_name: "Facens",
        degree: "Bachelors in Computer Engenniring",
        start_date: "2022-03-01",
        end_date: "2026-12-31",
        location: "Sorocaba",
      },
    ],
    experience: [
      {
        id: crypto.randomUUID(),
        company_name: "CBA",
        position: "Estagiário PCP & Gestão",
        start_date: "2024-03-01",
        end_date: "2025-06-05",
        location: "Alumínio",
        description: "Automated reports with Python/VBA (4h → 20min, enabling daily updates), built a Power Apps inspection app (structured photos, faster analysis, AI prototype), migrated Excel dashboards to central databases (improved data reliability), and automated transport data extraction (eliminated manual tasks)."
      },
    ],
  };
};

const cleanedInformation = () => {
  return {
    full_name: "",
    email: "",
    phone_number: "",
    address: "",
    education: [
      
    ],
    experience: [
      
    ],
  };
};

const information = cleanedInformation();

export { information, loadExample, cleanedInformation };