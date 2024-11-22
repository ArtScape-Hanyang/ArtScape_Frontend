import React, { createContext, useState, ReactNode } from "react";

interface BudgetItem {
  id: number;
  name: string;
  cost: number;
}

interface BudgetContextType {
  budgetItems: BudgetItem[];
  setBudgetItems: React.Dispatch<React.SetStateAction<BudgetItem[]>>;
  totalCost: number;
  perPersonCost: (peopleCount: number) => number;
}

export const BudgetContext = createContext<BudgetContextType>({
  budgetItems: [],
  setBudgetItems: () => {},
  totalCost: 0,
  perPersonCost: () => 0,
});

export const BudgetProvider = ({ children }: { children: ReactNode }) => {
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([]);

  const totalCost = budgetItems.reduce((sum, item) => sum + item.cost, 0);

  const perPersonCost = (peopleCount: number) =>
    peopleCount > 0 ? Math.ceil(totalCost / peopleCount) : 0;

  return (
    <BudgetContext.Provider
      value={{ budgetItems, setBudgetItems, totalCost, perPersonCost }}
    >
      {children}
    </BudgetContext.Provider>
  );
};
