# FinTrack

**FinTrack** is a modern expense and income tracker built with **React**, **TypeScript**, and **Vite**. It allows users to manage their finances efficiently with features like adding transactions, filtering by type/category/date, editing, deleting, and viewing summaries like highest spent categories and remaining budget.

---

## Features

- Add **income** and **expense** transactions with title, amount, category, and date.
- **Edit** and **delete** existing transactions with confirmation modals.
- **Filter transactions** by:
  - Type: Income / Expense / All
  - Category: Dynamic categories based on selected type
  - Search text
  - Date range (with presets: Today, Yesterday, Last 7 days, Last 30 days)
- **Sort transactions** by date or amount.
- **Summary cards**:
  - Highest spent category with amount
  - Total income and total expenses
  - Remaining budget with percentage calculation
- Persist transactions in **localStorage** for offline use.
- Fully **responsive** UI using **TailwindCSS**.
- Modern **UX/UI** with modals, dynamic dropdowns, and interactive filters.
- Notifications using **react-hot-toast**.

---

## Tech Stack

- **Frontend**:
  - React 18+
  - TypeScript
  - Vite
  - TailwindCSS
  - Lucide Icons
  - React Hot Toast

- **Key Components**:
  - `ConfirmModal` – delete confirmation modal
  - `EditTransactionModal` – inline edit modal for transactions
  - `DateRangeModal` – custom date range selector with preset ranges
  - `SummaryCard` – displays analytics (highest spent category, budget remaining, etc.)

- **Data**:
  - Transactions are stored in `localStorage` under `fintrack-transactions`.
  - Categories are divided into `incomeCategories` and `expenseCategories`.

---

## Installation

```bash
# Clone the repository
git clone https://github.com/rakeshPatel-dev/fintrack.git
cd fintrack

# Install dependencies
npm install

# Start the development server
npm run dev
