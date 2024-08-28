import React from "react";
import DataTable from "./dataTable";
import { columns } from "./columns";
import { useAnalyticsContext } from "@/context/AnalyticsDataContext";

const TableIndex: React.FC = () => {
  const { streams, loading } = useAnalyticsContext();
  return (
    <div className="py-10">
      <DataTable columns={columns} data={streams} loading={loading} />
    </div>
  );
};

export default TableIndex;
