// Financial Calculations Utility

type FinancialCalculations = {
    npv: (rate: number, cashFlows: number[]) => number;
    irr: (cashFlows: number[]) => number;
    tvm: (principal: number, rate: number, time: number) => number;
}

const financialCalculations: FinancialCalculations = {
    npv: (rate, cashFlows) => {
        return cashFlows.reduce((total, cashFlow, index) => {
            return total + cashFlow / Math.pow(1 + rate, index);
        }, 0);
    },
    irr: (cashFlows) => {
        // Approximate IRR using the Newton-Raphson method
        let irr = 0.1; // initial guess
        for (let i = 0; i < 100; i++) {
            const npv = cashFlows.reduce((total, cashFlow, index) => {
                return total + cashFlow / Math.pow(1 + irr, index);
            }, 0);
            const npvDeriv = cashFlows.reduce((total, cashFlow, index) => {
                return total - index * cashFlow / Math.pow(1 + irr, index + 1);
            }, 0);
            irr -= npv / npvDeriv;
        }
        return irr;
    },
    tvm: (principal, rate, time) => {
        return principal * Math.pow(1 + rate, time);
    }
};

export default financialCalculations;
