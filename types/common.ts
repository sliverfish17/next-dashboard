export enum TMoney {
  'Income',
  'Outcome',
}

export type TTransaction = {
  amount: string;
  category: string;
  creditorName: string;
  currency: string;
  date: string;
  id: string;
};

