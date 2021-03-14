import React, { useContext } from "react";
import { Button, Table, Space, Tag } from "antd";
import { append, reject, propEq, dissoc, map } from "ramda";

import { downloadCsv } from "../../utils";
import { ModalContext } from "../../context";

import "./csv-content.css";

const addActionButtons = ({ dispatchModalState, setRecords }) =>
  append({
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <Tag
          onClick={() => dispatchModalState({ type: "EDIT", payload: record })}
        >
          Edit
        </Tag>
        <Tag
          onClick={() => {
            setRecords((records) => reject(propEq("BIB", record.BIB), records));
          }}
        >
          Delete
        </Tag>
      </Space>
    ),
  });

const removeKey = map(dissoc("key"));
const CsvContent = ({ columns, records, setRecords }) => {
  const { dispatchModalState } = useContext(ModalContext);

  return (
    columns.length > 0 && (
      <div className="content__container">
        <div className="content__header">
          <Button
            className="content__header__button"
            type="primary"
            onClick={() => dispatchModalState({ type: "ADD" })}
          >
            Add new record
          </Button>
          <Button
            className="content__header__button"
            type="primary"
            onClick={() => downloadCsv(removeKey(records))}
          >
            Download as CSV
          </Button>
        </div>
        <Table
          dataSource={records}
          columns={addActionButtons({ dispatchModalState, setRecords })(
            columns
          )}
        />
      </div>
    )
  );
};

export default CsvContent;
