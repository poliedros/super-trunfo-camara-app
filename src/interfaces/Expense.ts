import { ParliamentaryExpenseList } from "./ParliamentaryExpenseList";

export interface Expense {
  cabinetExpense: number;
  cabinetBudget: number;
  parliamentaryQuotaExpense: number;
  parliamentaryQuotaBudget: number;
  parliamentaryExpenseListDescription: ParliamentaryExpenseList[];
  range: number;
}
