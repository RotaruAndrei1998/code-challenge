import { AutoComplete, Select } from "antd";

const { Option } = Select;

const SelectStatistic = ({ statisticData, setStatisticData }) => (
  <Select
    value={statisticData}
    style={{ width: "200px", margin: "0 auto" }}
    onChange={(value) => setStatisticData(value)}
  >
    <Option value="gender">Statistic by gender</Option>
    <Option value="category">Statistic by category</Option>
    <Option value="registration">Statistic by registration status </Option>
  </Select>
);

export default SelectStatistic;
