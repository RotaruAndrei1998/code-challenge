import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Papa from "papaparse";
import { map, pathOr, pipe, propOr } from "ramda";

import "./csv-uploader.css";

const getFieldNames = pathOr([], ["meta", "fields"]);
const addKey = map((e) => ({ ...e, key: e.BIB }));
const getRecords = pipe(propOr([], "data"), addKey);

const mapFieldNamesToColumns = map((fieldName) => ({
  title: fieldName,
  dataIndex: fieldName,
  key: fieldName,
}));

const getColumns = pipe(getFieldNames, mapFieldNamesToColumns);
const CsvUploader = ({ setColumns, setRecords }) => {
  return (
    <div className="upload__container">
      <Upload
        action={(file) =>
          Papa.parse(file, {
            header: true,
            complete: (records) => {
              setColumns(getColumns(records));
              setRecords(getRecords(records));
            },
          })
        }
        fileList={[]}
        maxCount={1}
        customRequest={() => ({})}
      >
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
    </div>
  );
};

export default CsvUploader;
