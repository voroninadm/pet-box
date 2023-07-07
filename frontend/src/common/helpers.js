import { totalDaysHolding } from "@/common/constants";

import moment from "moment/dist/moment";
import ru from "moment/dist/locale/ru";
moment.updateLocale("ru", ru);

export const normalizeData = (date) => {
  return moment(date).format("D MMM YYYY");
};

export const isHoldingDateExpired = (date) => {
  let now = moment();
  let startHoldingDate = moment(date);
  return now.diff(startHoldingDate, "days") > totalDaysHolding ? true : false;
};

export const deadlineDate = () => {
  let startHoldingDate = moment();
  return startHoldingDate.add("days", totalDaysHolding).format("D MMM YYYY");
};
