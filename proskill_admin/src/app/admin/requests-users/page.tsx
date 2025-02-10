import Table, { Column } from "@/components/table/table";
import React from "react";

type Requests = {
  id: number;
  date: string;
  phone_number: string;
  email: string;
};
const RequestsPage = () => {
  const columns: Column<Requests>[] = [
    {
      header: "ID",
      accessor: "id",
    },
    {
      header: "Дата",
      accessor: "date",
    },
    {
      header: "Телефон",
      accessor: "phone_number",
    },
    {
      header: "Email",
      accessor: "email",
    },
  ];
  const data: Requests[] = [
    {
      id: 1,
      date: "2023-08-01",
      phone_number: "+7 (999) 999-99-99",
      email: "vHcL6@example.com",
    },
    {
      id: 2,
      date: "2023-08-01",
      phone_number: "+7 (999) 999-99-99",
      email: "vHcL6@example.com",
    },
    {
      id: 3,
      date: "2023-08-01",
      phone_number: "+7 (999) 999-99-99",
      email: "vHcL6@example.com",
    },
    {
      id: 4,
      date: "2023-08-01",
      phone_number: "+7 (999) 999-99-99",
      email: "vHcL6@example.com",
    },
    {
      id: 5,
      date: "2023-08-01",
      phone_number: "+7 (999) 999-99-99",
      email: "vHcL6@example.com",
    },
  ];
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="space-y-6">
        <Table columns={columns} data={data} title="Заявки" />
      </div>
    </div>
  );
};

export default RequestsPage;
