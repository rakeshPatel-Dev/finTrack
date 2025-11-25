"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { expenseCategories, incomeCategories } from "../utils/options";

// Define types
type Transaction = {
  id: string;
  title: string;
  category: string;
  type: "income" | "expense";
  amount: number;
  date: string;
};

type User = {
  username: string;
};

const Dashboard = () => {
  const [user, setUser] = useState<User | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filterType, setFilterType] = useState<"all" | "income" | "expense">("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");



  // Load transactions from localStorage
  useEffect(() => {
    const saved: Transaction[] = JSON.parse(localStorage.getItem("transactions") || "[]");
    setTransactions(saved);
  }, []);

  // Fetch user + transactions initially
  useEffect(() => {
    const userString = localStorage.getItem("user");
    setUser(userString ? JSON.parse(userString) : null);

    const tx: Transaction[] = JSON.parse(localStorage.getItem("fintrack-transactions") || "[]");
    setTransactions(tx);
  }, []);

  // Real-time sync whenever localStorage changes
  useEffect(() => {
    const handleStorage = () => {
      const tx: Transaction[] = JSON.parse(localStorage.getItem("fintrack-transactions") || "[]");
      setTransactions(tx);
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Filter transactions
  const filtered = transactions.filter(t => {
    const typeMatch = filterType === "all" || t.type === filterType;
    const catMatch = filterCategory === "all" || t.category === filterCategory;
    return typeMatch && catMatch;
  });

  const recent = filtered.slice(0, 5); // first 5 items

  // Calculations
  const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + Number(t.amount), 0);

  // Guard: avoid crash before user loads
  if (!user) return null;

  const getHighestCategory = (): { category: keyof typeof expenseCategories; amount: number } | null => {
    const expenseTx = transactions.filter(t => t.type === "expense");
    if (expenseTx.length === 0) return null;

    type CatKey = keyof typeof expenseCategories;
    const categoryMap: Partial<Record<CatKey, number>> = {};
    expenseTx.forEach(tx => {
      if (tx.category in expenseCategories) {
        const key = tx.category as CatKey;
        categoryMap[key] = (categoryMap[key] || 0) + Number(tx.amount);
      }
    });

    // Find category with max expense
    let maxCategory: CatKey | null = null;
    let maxAmount = 0;
    for (const [cat, amt] of Object.entries(categoryMap)) {
      const amount = amt as number;
      if (amount > maxAmount) {
        maxAmount = amount;
        maxCategory = cat as CatKey;
      }
    }

    if (!maxCategory) return null;
    return { category: maxCategory, amount: maxAmount };
  };
  const highest = getHighestCategory();
  const highestLabel = highest ? expenseCategories[highest.category] : "N/A";
  const highestAmount = highest ? highest.amount : 0;

  return (
    <div className="bg-[#f6f8f7] dark:bg-[#102218]">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex flex-col h-full grow">

          <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
            <div className="w-full max-w-7xl flex flex-col flex-1">

              {/* HEADER */}
              <main className="flex-1 p-4 mt-6">
                <div className="flex flex-wrap justify-between gap-3 mb-6">
                  <div className="flex min-w-72 flex-col gap-3">
                    <p className="text-white text-4xl font-black">
                      Welcome back, {user.username}
                    </p>
                    <p className="text-[#92c9a9] text-base">
                      Here's your financial summary for this month.
                    </p>
                  </div>
                </div>

                {/* SUMMARY CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div className="summary-card">
                    <p className="label">Total Spending</p>
                    <p className="value">Rs {totalExpense}</p>
                    <p className="text-red-500">
                      {totalIncome > 0 ? Math.floor((totalExpense / totalIncome) * 100) : 0}% budget used
                    </p>
                  </div>

                  <div className="summary-card">
                    <p className="label">Budget Remaining</p>
                    <p className="value text-[#13ec6d]">Rs {totalIncome - totalExpense}</p>
                    <p
                      className={
                        totalIncome - totalExpense >= 0
                          ? "text-green-400"  // under budget
                          : "text-red-500"    // over budget
                      }
                    >
                      {totalIncome > 0
                        ? Math.floor(((totalIncome - totalExpense) / totalIncome) * 100)
                        : 0}%
                      of total budget remaining
                    </p>
                  </div>


                  <div className="summary-card">
                    <p className="label">Highest Spent Category</p>
                    <p className="value text-[#13ec6d]">
                      {highestLabel}
                    </p>
                    {highest ? (
                      <p className=" text-red-500">Rs. {highestAmount} spent on {highestLabel.toLowerCase()}.</p>
                    ) : (
                      <p className=" text-white">No expenses yet.</p>
                    )}
                  </div>

                </div>

                {/* Filtering */}
                <div className="px-4 border-b border-white/10 bg-[#102218] dark:bg-[#102218] py-4 mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                    <div className="text-white/70 font-semibold text-md">
                      Filter recent transactions based on type and category.
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-1/2">

                      {/* Type Filter */}
                      <div className="relative flex-1">
                        <label className="sr-only">Transaction Type</label>
                        <select
                          title="Filter type"
                          value={filterType}
                          onChange={(e) => setFilterType(e.target.value as "all" | "income" | "expense")}
                          className="w-full appearance-none bg-[#193324] border border-[#13ec6d] text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#13ec6d] focus:border-[#13ec6d] transition"
                        >
                          <option value="all">All Transactions</option>
                          <option value="income">Income</option>
                          <option value="expense">Expense</option>
                        </select>
                        <div className="absolute top-3 right-3 pointer-events-none text-white">
                          <ChevronDown />
                        </div>
                      </div>

                      {/* Category Filter */}
                      <div className="relative flex-1">
                        <label className="sr-only">Category</label>
                        <select
                          value={filterCategory}
                          onChange={(e) => setFilterCategory(e.target.value)}
                          title="Filter category"
                          disabled={filterType === "all"}
                          className={`w-full appearance-none bg-[#193324] border border-[#13ec6d] text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#13ec6d] focus:border-[#13ec6d] transition ${filterType === "all" ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        >
                          {filterType === "all" ? (
                            <option value="">Choose type first</option>
                          ) : (
                            <>
                              <option value="all">All Categories</option>
                              {filterType === "income"
                                ? Object.entries(incomeCategories).map(([key, label]) => (
                                  <option key={key} value={key}>
                                    {label}
                                  </option>
                                ))
                                : filterType === "expense"
                                  ? Object.entries(expenseCategories).map(([key, label]) => (
                                    <option key={key} value={key}>
                                      {label}
                                    </option>
                                  ))
                                  : null}
                            </>
                          )}
                        </select>
                        <div className="absolute top-3 right-3 pointer-events-none text-white">
                          <ChevronDown />
                        </div>
                      </div>



                    </div>
                  </div>
                </div>

                {/* RECENT TRANSACTIONS */}
                <div className="flex flex-col gap-4 p-6 rounded-xl border border-[#13ec6d] bg-white/5">
                  <div className="flex justify-between items-center">
                    <h2 className="text-white text-lg font-bold">
                      Recent Transactions
                    </h2>
                    <Link to="/history" className="text-[#13ec6d] hover:text-[#13ec6d]/50 underline transition-all active:text-blue-500">View all</Link>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/10 text-xs text-neutral-400 uppercase">
                          <th className="py-3 px-4">Date</th>
                          <th className="py-3 px-4">Title</th>
                          <th className="py-3 px-4">Category</th>
                          <th className="py-3 px-4 text-right">Amount</th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-white/10">
                        {recent.map(tx => (
                          <tr key={tx.id} className="hover:bg-white/5 transition">
                            <td className="py-4 px-4 text-neutral-300 text-sm">
                              {new Date(tx.date).toDateString()}
                            </td>
                            <td className="py-4 px-4 text-white text-sm">
                              {tx.title}
                            </td>
                            <td className="py-4 px-4 text-neutral-300 text-sm">
                              {tx.category}
                            </td>
                            <td className={`py-4 px-4 text-sm text-right font-semibold ${tx.type === "income" ? "text-[#13ec6d]" : "text-red-400"}`}>
                              {tx.type === "income" ? "+" : "-"}Rs {tx.amount}
                            </td>
                          </tr>
                        ))}

                        {recent.length === 0 && (
                          <tr>
                            <td colSpan={4} className="py-4 px-4 text-neutral-400 text-sm">
                              No transactions yet.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

              </main>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
