import React, { createContext, useState, ReactNode } from "react";

interface BudgetItem {
  id: number;
  name: string;
  cost: number;
}

interface BudgetContextType {
  budgetItems: BudgetItem[];
  setBudgetItems: React.Dispatch<React.SetStateAction<BudgetItem[]>>;
  totalCost: string; // 형식화된 값
  perPersonCost: (peopleCount: number) => string; // 형식화된 값
}

export const BudgetContext = createContext<BudgetContextType>({
  budgetItems: [],
  setBudgetItems: () => {},
  totalCost: "0",
  perPersonCost: () => "0",
});

export const BudgetProvider = ({ children }: { children: ReactNode }) => {
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);

  const formatNumber = (num: number) =>
    new Intl.NumberFormat("ko-KR", {
      style: "decimal",
      useGrouping: true,
    }).format(num);

  // 총 비용 계산 후 형식화
  const totalCost = formatNumber(
    budgetItems.reduce((sum, item) => sum + item.cost, 0)
  );

  // 1인당 비용 계산 후 형식화
  const perPersonCost = (peopleCount: number) => {
    const costPerPerson =
      peopleCount > 0
        ? Math.ceil(
            budgetItems.reduce((sum, item) => sum + item.cost, 0) / peopleCount
          )
        : 0;
    return formatNumber(costPerPerson);
  };

  return (
    <BudgetContext.Provider
      value={{ budgetItems, setBudgetItems, totalCost, perPersonCost }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
