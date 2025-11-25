import { Calendar, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { expenseCategories, incomeCategories } from "../utils/options";


const Transations = () => {
  const [transactionType, setTransactionType] = useState("expense");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);


  const navigate = useNavigate()
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {

    evt.preventDefault();

    if (!title || !amount || !date || !category) {
      toast.error("Please fill all required fields.");
      return;
    }

    const newTransaction = {
      id: crypto.randomUUID(),
      type: transactionType,
      title,
      amount,
      date,
      category,
      desc,
      createdAt: Date.now()
    };

    const existing = JSON.parse(localStorage.getItem("fintrack-transactions") || "[]");
    const updated = [...existing, newTransaction];

    localStorage.setItem("fintrack-transactions", JSON.stringify(updated));

    // Reset form
    setTitle("");
    setAmount("");
    setCategory("");
    setDate("");
    setDesc("");

    navigate("/"); // Redirect to dashboard
  };

  return (
    <div className="font-display bg-[#f6f8f7] dark:bg-[#102218] min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl mx-auto bg-[#112218] rounded-xl p-6 sm:p-8">
        <div className="flex flex-col gap-8">
          {/* Header */}
          <div>
            <h1 className="text-white text-3xl font-bold">Add New Transaction</h1>
            <p className="text-[#92c9a9] mt-1">
              Enter the details for your new transaction below.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} name="form" className="flex flex-col gap-6">
            {/* Transaction Type */}
            <div>
              <p className="text-white text-base font-medium mb-2">
                Transaction Type
              </p>

              <div className="grid grid-cols-2 gap-2 bg-[#193324] p-1 rounded-lg">
                {/* Expense */}
                <label className="flex items-center justify-center relative">
                  <input
                    type="radio"
                    name="transaction-type"
                    value="expense"
                    checked={transactionType === "expense"}
                    onChange={(e) => setTransactionType(e.target.value)}
                    className="peer sr-only"
                  />
                  <span className="w-full py-3 text-center rounded-md text-[#92c9a9] cursor-pointer
                    peer-checked:bg-[#13ec6d] peer-checked:text-[#102218] transition">
                    Expense
                  </span>
                </label>

                {/* Income */}
                <label className="flex items-center justify-center relative">
                  <input
                    type="radio"
                    name="transaction-type"
                    value="income"
                    checked={transactionType === "income"}
                    onChange={(e) => setTransactionType(e.target.value)}
                    className="peer sr-only"
                  />
                  <span className="w-full py-3 text-center rounded-md text-[#92c9a9] cursor-pointer
                    peer-checked:bg-[#13ec6d] peer-checked:text-[#102218] transition">
                    Income
                  </span>
                </label>
              </div>
            </div>

            {/* Title */}
            <label className="flex flex-col gap-2">
              <p className="text-white text-base font-medium">Transaction Name</p>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-input w-full rounded-lg border border-[#326748] bg-[#193324] p-4 text-white placeholder:text-[#92c9a9]
                focus:border-[#13ec6d] focus:ring-[#13ec6d]"
                type="text"
                placeholder="e.g., Coffee with a friend"
              />
            </label>

            {/* Amount + Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Amount */}
              <label className="flex flex-col gap-2">
                <p className="text-white font-medium">Amount</p>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#92c9a9]">
                    Rs.
                  </span>
                  <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="form-input w-full rounded-lg border border-[#326748] bg-[#193324] p-4 pl-12 text-white
                    placeholder:text-[#92c9a9] focus:border-[#13ec6d] focus:ring-[#13ec6d]"
                    type="number"
                    placeholder="000.00"
                  />
                </div>
              </label>

              {/* Date */}
              <label className="flex flex-col gap-2 w-full">
                <p className="text-white font-medium">Date</p>

                <div
                  onClick={() => (document.getElementById("dateInput") as HTMLInputElement)?.showPicker()
}
                  className="w-full cursor-pointer rounded-lg border border-[#326748] bg-[#193324] p-4 text-white
                  flex items-center justify-between hover:border-[#13ec6d] transition-all relative">

                  {/* Visible date text */}
                  <span
                    className="cursor-pointer"
                  >
                    {date || "Select a date"}
                  </span>

                  {/* Calendar icon */}
                  <Calendar/>

                  {/* Actual input (tiny & hidden visually) */}
                  <input
                    id="dateInput"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className=" absolute left-0 bottom-0 w-1 h-1 opacity-0"
                  />
                </div>
              </label>

            </div>

            {/* Category */}
            <div>
              <p className="text-white text-base font-medium mb-2">Category</p>
              <div className="relative">
                <select
                  title="Select Category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  onClick={() => setIsOpen(!isOpen)}
                  className=" appearance-none form-select w-full rounded-lg border border-[#326748] bg-[#193324] p-4 text-white 
                  cursor-pointer focus:border-[#13ec6d] focus:ring-[#13ec6d]"
                >
                  <option value="">Select a category</option>
                  {(transactionType === "income" ? incomeCategories : expenseCategories) &&
                    Object.entries(transactionType === "income" ? incomeCategories : expenseCategories).map(
                      ([key, label]) => (
                        <option key={key} value={key}>
                          {label}
                        </option>
                      )
                    )}
                </select>

                <div className="text-white absolute top-4 right-4 transition-all">
                  {isOpen ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>
            </div>

            {/* Description */}
            <label className="flex flex-col gap-2">
              <p className="text-white text-base font-medium">Description (Optional)</p>
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="form-textarea min-h-32 w-full rounded-lg border border-[#326748] bg-[#193324] p-4 text-white
                placeholder:text-[#92c9a9] focus:border-[#13ec6d] focus:ring-[#13ec6d]"
                placeholder="Meeting about project…"
              />
            </label>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row-reverse gap-4 pt-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#13ec6d] text-[#102218] font-bold px-6 py-4 rounded-lg hover:opacity-90"
              >
                Add Transaction
              </button>

              <button
                type="button"
                className="w-full sm:w-auto bg-[#193324] text-white px-6 py-4 rounded-lg hover:bg-[#326748]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transations;
