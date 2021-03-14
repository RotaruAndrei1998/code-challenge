import { countBy, propEq, pipe, prop } from "ramda";

const getMasculinCount = pipe(countBy(propEq("Gender", "M")), prop("true"));
const getMasculinUnder34 = pipe(
  countBy(propEq("Category", "M18-34")),
  prop("true")
);
const getMasculinOver34 = pipe(
  countBy(propEq("Category", "M35")),
  prop("true")
);

const getFemininCount = pipe(countBy(propEq("Gender", "F")), prop("true"));
const getFemininUnder34 = pipe(
  countBy(propEq("Category", "F18-34")),
  prop("true")
);
const getFemininOver34 = pipe(countBy(propEq("Category", "F35")), prop("true"));

const getNew = pipe(
  countBy(propEq("Registration status", "New")),
  prop("true")
);
const getConfirmed = pipe(
  countBy(propEq("Registration status", "Confirmed")),
  prop("true")
);
const getCanceled = pipe(
  countBy(propEq("Registration status", "Canceled")),
  prop("true")
);

const allData = (records) => ({
  gender: [
    {
      id: "Masculin",
      label: "masculin",
      value: getMasculinCount(records),
      color: "hsl(273, 70%, 50%)",
    },
    {
      id: "Feminin",
      label: "feminin",
      value: getFemininCount(records),
      color: "hsl(140, 70%, 50%)",
    },
  ],
  category: [
    {
      id: "M18-34",
      label: "M18-34",
      value: getMasculinUnder34(records),
      color: "hsl(273, 70%, 50%)",
    },
    {
      id: "M35",
      label: "M35",
      value: getMasculinOver34(records),
      color: "hsl(40, 70%, 50%)",
    },
    {
      id: "F18-34",
      label: "F18-34",
      value: getFemininUnder34(records),
      color: "hsl(80, 70%, 50%)",
    },
    {
      id: "F35",
      label: "F35",
      value: getFemininOver34(records),
      color: "hsl(140, 70%, 50%)",
    },
  ],
  registration: [
    {
      id: "New",
      label: "New",
      value: getNew(records),
      color: "hsl(30, 70%, 50%)",
    },
    {
      id: "Confirmed",
      label: "Confirmed",
      value: getConfirmed(records),
      color: "hsl(100, 70%, 50%)",
    },
    {
      id: "Canceled",
      label: "Canceled",
      value: getCanceled(records),
      color: "hsl(180, 70%, 50%)",
    },
  ],
});

export default allData;
