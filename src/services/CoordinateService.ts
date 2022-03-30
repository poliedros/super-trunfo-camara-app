import { Coordinate } from "../interfaces/Coordinate";
import { Expense } from "../interfaces/Expense";
import { Legislature } from "../interfaces/Legislature";
import { Speech } from "../interfaces/Speech";
import { Attendance } from "../interfaces/Attendance";
import { Proposition } from "../interfaces/Proposition";
import DeputyComplete from "../interfaces/DeputyComplete";

import { deputyExtraDataDictionary } from "../data/deputyExtraDataDictionary";

export const getCoordinateData = (
  legislatures: Legislature | undefined,
  //expenses: Expense | undefined,
  expenses: number,
  speechs: Speech | undefined,
  //attendances: Attendance | undefined,
  attendances: number,
  authorships: Proposition | undefined,
  reports: Proposition | undefined,
  deputyCompleteData: DeputyComplete | undefined
) => {
  var list: Coordinate[] = [];
  list.push({
    name: "LEG", //Legislaturas
    //star: legislatures?.count == null ? 0 : legislatures.count * 20,
    star: legislatures?.count == null ? 0 : legislatures.count * 20,
  });
  list.push({
    name: "DES", //Despesas
    star: 
      (Math.round(
        (
          expenses
        )
      *10)/10),
      /*((expenses?.parliamentaryQuotaExpense == null &&
      expenses?.parliamentaryQuotaBudget == null
        ? 0
        : parseInt(
            (
              100 -
              (expenses.parliamentaryQuotaExpense /
                expenses.parliamentaryQuotaBudget) *
                100
            ).toFixed(2)
          ) < 0
        ? 0
        : parseInt(
            (
              100 -
              (expenses.parliamentaryQuotaExpense /
                expenses.parliamentaryQuotaBudget) *
                100
            ).toFixed(2)
          )) +
        (expenses?.cabinetExpense == null && expenses?.cabinetBudget == null
          ? 0
          : parseInt(
              (
                100 -
                (expenses.cabinetExpense / expenses.cabinetBudget) * 100
              ).toFixed(2)
            ) < 0
          ? 0
          : parseInt(
              (
                100 -
                (expenses.cabinetExpense / expenses.cabinetBudget) * 100
              ).toFixed(2)
            ))) /
              2,*/
  });
  list.push({
    name: "DIS", //Discursos
    star: speechs?.count == null ? 0 :
    (Math.round(
      (
        (speechs.count*100)/790
      )
    *10)/10),
  });
  list.push({ name: "VOT", star: (deputyCompleteData?.dados.id) ? (deputyExtraDataDictionary[deputyCompleteData.dados.id]?.voting != undefined) ? deputyExtraDataDictionary[deputyCompleteData.dados.id].voting : 0 : 0 }); //Votações
  list.push({
    name: "PRE", //Presenças
    star:
    (Math.round(
      (
        attendances
      )
    *10)/10),
      /*attendances?.committee.attendance == null &&
      attendances?.committee.miss == null &&
      (attendances?.range == null || attendances?.range == 0) &&
      attendances?.plenary.dSAttendance == null &&
      attendances?.plenary.dSJustified == null &&
      attendances?.plenary.dSMiss == null &&
      attendances?.plenary.deliberativedSessions == null &&
      (attendances?.range == null || attendances?.range == 0)
        ? 0
        : (Math.round(
            ((attendances.committee.attendance +
              attendances.committee.justified) /
              (attendances.committee.attendance +
                attendances.committee.justified +
                attendances.committee.miss)) *
              100
          ) +
            Math.round(
              ((attendances.plenary.dSAttendance +
                attendances.plenary.dSJustified) /
                attendances.plenary.deliberativedSessions) *
                100
            )) /
          2,*/
  });
  list.push({
    name: "LEI", //Leis Aprovadas
    star: 
    (Math.round(
      (
        (+(authorships?.total == null ? 0 : authorships.total) +
          +(reports?.total == null ? 0 : reports.total)) /
        (legislatures?.count == null ? 0 : legislatures.count)
      )
    *10)/10),
  });
  return list;
};
