import React from "react";
import { DataTable } from "./dataTable";
import { columns } from "./columns";
import data from "../../data/data";

const tableData = data.streams;

const TableIndex: React.FC = () => {
  return (
    <div className="py-10">
      <DataTable columns={columns} data={tableData} />
    </div>
  );
};

export default TableIndex;
