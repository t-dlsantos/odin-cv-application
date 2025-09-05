const information = {
  full_name: "Thiago de Lima Santos",
  email: "thiago.delimasantos@outlook.com",
  phone_number: "+55 11942339128",
  address: "São Roque, SP",
  education: [
    {
      id: 1,
      school_name: "Facens",
      degree: "Bachelor in Computer Engenniring",
      start_date: "2022-03-01",
      end_date: "2026-12-31",
      location: "Sorocaba"
    }
  ],
  experience: [
    {
      id: 1,
      company_name: "CBA",
      position: "Estagiário PCP & Gestão",
      start_date: "2024-03-01",
      end_date: "2025-06-05",
      location: "Alumínio"
    }
  ]
}

const loadExample = () => {
  return {
    full_name: "Thiago de Lima Santos",
    email: "thiago.delimasantos@outlook.com",
    phone_number: "+55 11942339128",
    address: "São Roque, SP",
  }
}

export { information, loadExample };