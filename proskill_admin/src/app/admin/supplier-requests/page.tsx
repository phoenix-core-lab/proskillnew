import Table, { Column } from "@/components/table/table";
import React from "react";

type SupplierRequests = {
  id: number;
  date: string;
  fuull_name: string;
  phone_number: string;
  email: string;
  legal_company_name: string;
  inn: string;
  legal_company_address: string;
};
const SupplierRequestsPage = () => {
  const columns: Column<SupplierRequests>[] = [
    {
      header: "ID",
      accessor: "id",
    },
    {
      header: "Дата",
      accessor: "date",
    },
    {
      header: "ФИО",
      accessor: "fuull_name",
    },
    {
      header: "Телефон",
      accessor: "phone_number",
    },
    {
      header: "Email",
      accessor: "email",
    },
    {
      header: "Юр. название фирмы",
      accessor: "legal_company_name",
    },
    {
      header: "ИНН",
      accessor: "inn",
    },
    {
      header: "Юр. адрес фирмы",
      accessor: "legal_company_address",
      render: (address) => {
        if (address) {
          return (
            <div className="text-[#5a9c79] text-center w-[100px]">
              <p>{address}</p>
            </div>
          );
        }
      },
    },
  ];

  const data: SupplierRequests[] = [
    {
      id: 1,
      date: "2023-08-01",
      fuull_name: "John Doe",
      phone_number: "+7 (999) 999-99-99",
      email: "vHcL6@example.com",
      legal_company_name: "ABC Company",
      inn: "1234567890",
      legal_company_address: "123 Main Street, City, Country",
    },
    {
      id: 2,
      date: "2023-08-01",
      fuull_name: "Jane Doe",
      phone_number: "+7 (999) 999-99-99",
      email: "vHcL6@example.com",
      legal_company_name: "XYZ Company",
      inn: "9876543210",
      legal_company_address: "456 Elm Street, City, Country",
    },
    {
      id: 3,
      date: "2023-08-01",
      fuull_name: "John Doe",
      phone_number: "+7 (999) 999-99-99",
      email: "vHcL6@example.com",
      legal_company_name: "ABC Company",
      inn: "1234567890",
      legal_company_address: "123 Main Street, City, Country",
    },
    {
      id: 4,
      date: "2023-08-01",
      fuull_name: "Jane Doe",
      phone_number: "+7 (999) 999-99-99",
      email: "vHcL6@example.com",
      legal_company_name: "XYZ Company",
      inn: "9876543210",
      legal_company_address: "456 Elm Street, City, Country",
    },
    {
      id: 5,
      date: "2023-08-01",
      fuull_name: "John Doe",
      phone_number: "+7 (999) 999-99-99",
      email: "vHcL6@example.com",
      legal_company_name: "ABC Company",
      inn: "1234567890",
      legal_company_address: "123 Main Street, City, Country",
    },
  ];
  return (
    <div className="container mx-auto p-4 space-y-6">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default SupplierRequestsPage;
