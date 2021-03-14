import React, { useState } from "react";

import CsvUploader from "../../components/csv-uploader";
import CsvContent from "../../components/csv-content";
import ModalForm from "../../components/modal-form";
import PieChart from "../../components/pie-chart";

const CsvParser = () => {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  return (
    <div className="csv-parser__container">
      <CsvUploader setRecords={setRecords} setColumns={setColumns} />
      <CsvContent records={records} columns={columns} setRecords={setRecords} />
      <ModalForm columns={columns} setRecords={setRecords} />
      <PieChart records={records} />
    </div>
  );
};

export default CsvParser;
