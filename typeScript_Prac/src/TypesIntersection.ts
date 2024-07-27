type Employees = {
    name: string;
    startDate: Date;
  };
  
  type Manager = {
    name: string;
    department: string;
  };
  
  type TeamLead = Employees & Manager;
  
  const teamLead: TeamLead = {
    name: "Varsha",
    startDate: new Date(),
    department: "Software developer"
  };
  