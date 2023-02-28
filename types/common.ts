export enum MoneyTypes {
  'Income',
  'Outcome',
}

export type TransactionTypes = {
  amount: string;
  category: string;
  creditorName: string;
  currency: string;
  date: string;
  id: string;
};
