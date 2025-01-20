import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
export const BudgetContext = createContext({
    budgetItems: [],
    setBudgetItems: () => { },
    totalCost: "0",
    perPersonCost: () => "0",
});
export const BudgetProvider = ({ children }) => {
    const [budgetItems, setBudgetItems] = useState([]);
    const formatNumber = (num) => new Intl.NumberFormat("ko-KR", {
        style: "decimal",
        useGrouping: true,
    }).format(num);
    // 총 비용 계산 후 형식화
    const totalCost = formatNumber(budgetItems.reduce((sum, item) => sum + item.cost, 0));
    // 1인당 비용 계산 후 형식화
    const perPersonCost = (peopleCount) => {
        const costPerPerson = peopleCount > 0
            ? Math.ceil(budgetItems.reduce((sum, item) => sum + item.cost, 0) / peopleCount)
            : 0;
        return formatNumber(costPerPerson);
    };
    return (_jsx(BudgetContext.Provider, { value: { budgetItems, setBudgetItems, totalCost, perPersonCost }, children: children }));
};
