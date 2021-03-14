import React, { useContext, useEffect } from "react";
import { Modal, Form, Input } from "antd";
import { map, equals, propEq, isNil, findIndex } from "ramda";
import { ModalContext } from "../../context";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const mapColumnsToForm = map(
  ({ title, dataIndex }) =>
    !equals("Action", title) && (
      <Form.Item label={title} name={dataIndex}>
        <Input />
      </Form.Item>
    )
);

const ModalForm = ({ columns, setRecords }) => {
  const {
    modalState: { isModalVisible, selectedItem },
    dispatchModalState,
  } = useContext(ModalContext);
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(selectedItem);
  }, [selectedItem]);

  return (
    <Modal
      title="Add new record"
      visible={isModalVisible}
      onOk={() => {
        form.validateFields().then((values) => {
          form.resetFields();

          if (isNil(selectedItem)) {
            setRecords((records) => [
              ...records,
              { ...values, key: values.BIB },
            ]);
          } else {
            setRecords((records) => {
              const indexOfRecord = findIndex(
                propEq("BIB", selectedItem.BIB),
                records
              );
              const newRecordsArray = [...records];
              newRecordsArray[indexOfRecord] = values;
              return newRecordsArray;
            });
          }
          dispatchModalState({ type: "CLOSE" });
        });
      }}
      onCancel={() => {
        form.resetFields();
        dispatchModalState({ type: "CLOSE" });
      }}
    >
      <Form {...layout} name="basic" form={form}>
        {mapColumnsToForm(columns)}
      </Form>
    </Modal>
  );
};

export default ModalForm;
