import Table, { Column } from "@/components/table/table";
import React from "react";

type User = {
  id: number;
  date: string;
  name: string;
  email: string;
};
const UsersPage = () => {
  const columns: Column<User>[] = [
    { header: "ID", accessor: "id" },
    { header: "Дата", accessor: "date" },
    { header: "Имя", accessor: "name" },
    { header: "Email", accessor: "email" },
  ];
  const data: User[] = [
    {
      id: 1,
      date: "2023-08-01",
      name: "John Doe",
      email: "vHcL6@example.com",
    },
    {
      id: 2,
      date: "2023-08-01",
      name: "Jane Doe",
      email: "vHcL6@example.com",
    },
    {
      id: 3,
      date: "2023-08-01",
      name: "John Doe",
      email: "vHcL6@example.com",
    },
    {
      id: 4,
      date: "2023-08-01",
      name: "Jane Doe",
      email: "vHcL6@example.com",
    },
    {
      id: 5,
      date: "2023-08-01",
      name: "John Doe",
      email: "vHcL6@example.com",
    },
    {
      id: 6,
      date: "2023-08-01",
      name: "Jane Doe",
      email: "vHcL6@example.com",
    },
  ];
  return (
    <div className="container mx-auto p-6 space-y-6">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default UsersPage;
