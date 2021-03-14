import Papa from "papaparse";

const downloadCsv = (records) => {
  const csv = Papa.unparse(records);
  const file = new Blob([csv], { type: "text/csv;charset=utf-8;" });

  const url = window.URL.createObjectURL(file);
  const a = document.createElement("a");

  a.setAttribute("href", url);
  a.setAttribute("download", "CSV.csv");

  document.body.appendChild(a);
  a.click();
  a.remove();
};

export default downloadCsv;
