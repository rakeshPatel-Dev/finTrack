"use client";

import {
    Calendar,
    ChevronDown,
    Pencil,
    Trash2,
    Search,
} from "lucide-react";
import { useEffect, useState } from "react";
import ConfirmModal from "../components/ConfirmModal";
import EditTransactionModal from "../components/EditTransactionModal";
import toast, { Toaster } from "react-hot-toast";
import { expenseCategories } from "../utils/options";
import DateRangeModal from "../components/DateRangeModal";




type Transaction = {
    id: string;
    title: string;
    type: "income" | "expense";
    category: string;
    amount: number;
    date: string;
};

const History = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [search, setSearch] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [sortOption, setSortOption] = useState("date-desc");


    // for actions modals 
    const [isDateModalOpen, setIsDateModalOpen] = useState(false);
const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");
const isDateFilterApplied = startDate && endDate;


const applyDateFilter = () => {
    setIsDateModalOpen(false);
    toast.success("Date filter applied!");
};


    // DELETE modal
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState<string | null>(null);

    // EDIT modal
    const [editOpen, setEditOpen] = useState(false);
    const [editId, setEditId] = useState<string | null>(null);
    const [editTitle, setEditTitle] = useState("");
    const [editAmount, setEditAmount] = useState("");



    // Load transactions from localStorage
    useEffect(() => {
        const txRaw = localStorage.getItem("fintrack-transactions");
        if (txRaw) {
            try {
                const parsed = JSON.parse(txRaw);
                if (Array.isArray(parsed)) setTransactions(parsed);
            } catch (e) {
                console.error("Failed to parse transactions", e);
            }
        }
    }, []);

    // Save to localStorage whenever transactions change
    useEffect(() => {
        localStorage.setItem("fintrack-transactions", JSON.stringify(transactions));
    }, [transactions]);

    // Delete transaction
    const handleDelete = (id: string) => {
        setDeleteId(id);
        setDeleteOpen(true);
    };
    const confirmDelete = () => {
        if (!deleteId) return;
        setTransactions(transactions.filter((t) => t.id !== deleteId));
        toast.success("Transaction deleted sucessfully!")
        setDeleteOpen(false);
    };



    // Edit transaction (simple inline prompt for demo)
    const handleEdit = (id: string) => {
        const tx = transactions.find((t) => t.id === id);
        if (!tx) return;

        setEditId(id);
        setEditTitle(tx.title);
        setEditAmount(tx.amount.toString());
        setEditOpen(true);
    };
    const saveEdit = () => {
        if (!editId) return;
        

        setTransactions(
            transactions.map((t) =>
                t.id === editId
                    ? { ...t, title: editTitle, amount: Number(editAmount) }
                    : t
            )
        );
        toast.success("Transaction edited sucessfully!")

        setEditOpen(false);
    };


    // Filter & sort
    const filteredTransactions = transactions
  .filter((t) => categoryFilter === "all" || t.category === categoryFilter)
  .filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase())
  )
  .filter((t) => {
      if (!startDate || !endDate) return true; // No date filter applied
      const txDate = new Date(t.date);
      return txDate >= new Date(startDate) && txDate <= new Date(endDate);
  })
  .sort((a, b) => {
      switch (sortOption) {
          case "date-asc":
              return new Date(a.date).getTime() - new Date(b.date).getTime();
          case "date-desc":
              return new Date(b.date).getTime() - new Date(a.date).getTime();
          case "amount-high":
              return b.amount - a.amount;
          case "amount-low":
              return a.amount - b.amount;
          default:
              return 0;
      }
  });


    return (
        <div className="relative flex min-h-screen w-full flex-col bg-[#f6f8f7] dark:bg-[#102218] overflow-x-hidden">
            <Toaster/>
            <main className="px-4 sm:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
                <div className="w-full max-w-6xl flex flex-col gap-6">
                    {/* Header */}
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <div className="flex flex-col gap-3">
                            <p className="text-white text-4xl font-black">
                                All Transactions
                            </p>
                            <p className="text-white/60 text-base">
                                View and manage your past transactions
                            </p>
                        </div>
                    </div>

                    {/* Toolbar */}
                    <div className="flex flex-col md:flex-row justify-between gap-4 p-4 
    border border-white/10 rounded-xl bg-[#102218]/60 backdrop-blur-sm">

    {/* LEFT SECTION */}
    <div className="flex flex-wrap gap-3">

        {/* SEARCH */}
        <div className="relative w-full sm:w-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" />
            <input
                className="h-10 pl-10 pr-4 w-full sm:w-64 rounded-lg 
                    bg-[#193324] border border-white/10 
                    text-white placeholder-white/40
                    focus:border-[#13ec6d] focus:ring-[#13ec6d]"
                placeholder="Search transactions..."
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>

        {/* CATEGORY */}
        <div className="relative w-full sm:w-auto">
            <select
                title="Select Category"
                className="h-10 pl-3 pr-8 w-full sm:w-auto rounded-lg 
                    bg-[#193324] border border-white/10 text-white/80
                    focus:ring-[#13ec6d] focus:border-[#13ec6d] appearance-none"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
            >
                <option value="all" className="bg-[#193324]">All Categories</option>
                {Object.entries(expenseCategories).map(([key, label]) => (
                    <option key={key} value={key} className="bg-[#193324]">
                        {label}
                    </option>
                ))}
            </select>

            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/50" />
        </div>

        {/* DATE RANGE BUTTON */}
        <button
  onClick={() => setIsDateModalOpen(true)}
  className="h-10 px-4 flex items-center justify-center gap-2 rounded-lg 
             bg-[#193324] border border-white/10 text-white/80 
             hover:bg-white/10 transition"
>
  <Calendar size={18} />
  <span>
    {isDateFilterApplied
      ? `${startDate} → ${endDate}`
      : "Date Range"}
  </span>

  {/* Show clear icon if filter is applied */}
  {isDateFilterApplied && (
    <button
      onClick={(e) => {
        e.stopPropagation(); // prevent opening modal
        setStartDate("");
        setEndDate("");
      }}
      className="ml-2 text-white/50 hover:text-white"
      title="Clear date filter"
    >
      ✕
    </button>
  )}
</button>


    </div>

    {/* RIGHT SECTION — SORT */}
    <div className="flex items-center gap-2">
        <div className="relative w-full sm:w-auto">
            <select
                title="Sort"
                className="h-10 pl-3 pr-8 w-full sm:w-auto rounded-lg 
                    bg-[#193324] border border-white/10 
                    text-white/80 focus:ring-[#13ec6d] focus:border-[#13ec6d] appearance-none"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
            >
                <option value="date-desc" className="bg-[#193324]">Sort by Date</option>
                <option value="amount-high" className="bg-[#193324]">Amount: High to Low</option>
                <option value="amount-low" className="bg-[#193324]">Amount: Low to High</option>
                <option value="date-asc" className="bg-[#193324]">Sort by Oldest</option>
            </select>

            <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/50" />
        </div>
    </div>
</div>


                    {/* Table */}
                    <div className="px-4 py-3 @container">
                        <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/2">
                            <table className="w-full flex-1">
                                <thead className="border-b border-b-white/10">
                                    <tr className="bg-white/5">
                                        <th className="px-4 text-white py-3 text-left w-12">#</th>
                                        <th className="px-4 py-3 text-left text-white text-sm font-medium">
                                            Transaction
                                        </th>
                                        <th className="px-4 py-3 text-left text-white text-sm font-medium hidden md:table-cell">
                                            Category
                                        </th>
                                        <th className="px-4 py-3 text-left text-white text-sm font-medium hidden sm:table-cell">
                                            Date
                                        </th>
                                        <th className="px-4 py-3 text-left text-white text-sm font-medium">
                                            Amount
                                        </th>
                                        <th className="px-4 py-3 text-center text-white text-sm font-medium">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredTransactions.length === 0 && (
                                        <tr>
                                            <td
                                                colSpan={6}
                                                className="py-4 px-4 text-neutral-400 text-sm text-center"
                                            >
                                                No transactions yet.
                                            </td>
                                        </tr>
                                    )}
                                    {filteredTransactions.map((tx, idx) => (
                                        <tr
                                            key={tx.id}
                                            className="border-t text-white border-t-white/10 hover:bg-white/5"
                                        >
                                            <td className="h-[72px] px-4 py-2 text-center">{idx + 1}</td>
                                            <td className="h-[72px] px-4 py-2 text-white text-sm font-normal">
                                                {tx.title}
                                            </td>
                                            <td className="h-[72px] px-4 py-2 text-sm font-normal hidden md:table-cell">
                                                <span className="inline-flex items-center justify-center rounded-full px-3 py-1 bg-[#13ec6d]/20 text-[#13ec6d] text-xs font-medium">
                                                    {tx.category}
                                                </span>
                                            </td>
                                            <td className="h-[72px] px-4 py-2 text-white/60 text-sm font-normal hidden sm:table-cell">
                                                {new Date(tx.date).toDateString()}
                                            </td>
                                            <td
                                                className={`h-[72px] px-4 py-2 text-sm font-semibold text-left ${tx.type === "income" ? "text-[#13ec6d]" : "text-red-400"
                                                    }`}
                                            >
                                                {tx.type === "income" ? "+" : "-"} Rs {tx.amount}
                                            </td>
                                            <td className="h-[72px] px-4 py-2 text-center">
                                                <div className="flex justify-center items-center gap-2">
                                                    <button title="Edit transaction"
                                                        className="p-2 text-white/60 hover:text-white rounded-full hover:bg-white/10"
                                                        onClick={() => handleEdit(tx.id)}
                                                    >
                                                        <Pencil />
                                                    </button>
                                                    <button title="Delete transaction"
                                                        className="p-2 text-white/60 hover:text-red-400 rounded-full hover:bg-white/10"
                                                        onClick={() => handleDelete(tx.id)}
                                                    >
                                                        <Trash2 />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
            <ConfirmModal
                open={deleteOpen}
                title="Delete Transaction?"
                message="This action cannot be undone."
                onCancel={() => setDeleteOpen(false)}
                onConfirm={confirmDelete}
            />

            <EditTransactionModal
                open={editOpen}
                title={editTitle}
                amount={editAmount}
                onTitleChange={setEditTitle}
                onAmountChange={setEditAmount}
                onSave={saveEdit}
                onCancel={() => setEditOpen(false)}
            />
            <DateRangeModal
  open={isDateModalOpen}
  onClose={() => setIsDateModalOpen(false)}
  startDate={startDate}
  endDate={endDate}
  setStartDate={setStartDate}
  setEndDate={setEndDate}
  applyFilter={applyDateFilter}
/>


        </div>
    );
};

export default History;
