export interface CalculatorState {
  display: string;
  stack: number[];
  previousOperator: string | null;
  newNumber: boolean;
  memory: number;
  lastX: number;
  rpnMode: boolean;
  financialData: FinancialFunctions;
}

export type Operator = '+' | '-' | '×' | '÷' | '=' | '%';

export interface FinancialFunctions {
  pv: number;  // Present Value
  fv: number;  // Future Value
  n: number;   // Number of periods
  i: number;   // Interest rate (per period)
  pmt: number; // Payment
  cashFlows: number[]; // Cash flow array for NPV/IRR
}

export interface NPVResult {
  npv: number;
  rate: number;
}

export interface IRRResult {
  irr: number;
  iterations: number;
  converged: boolean;
}

export interface TVMResult {
  pv?: number;
  fv?: number;
  n?: number;
  i?: number;
  pmt?: number;
}