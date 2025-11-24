import { Calendar, ChevronDown, ChevronLeft, ChevronRight, Pencil, Search, Trash2 } from 'lucide-react'

const History = () => {
    return (
        <div>
            <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f6f8f7] dark:bg-[#102218] group/design-root overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    <main className="px-4 sm:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
                        <div className="layout-content-container flex flex-col w-full max-w-6xl flex-1 gap-6">
                            {/* PageHeading Component */}
                            <div className="flex flex-wrap justify-between gap-3 p-4">
                                <div className="flex min-w-72 flex-col gap-3">
                                    <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                                        All Transactions
                                    </p>
                                    <p className="text-white/60 text-base font-normal leading-normal">
                                        View and manage your past transactions
                                    </p>
                                </div>
                            </div>
                            {/* ToolBar Component */}
                            <div className="flex flex-col md:flex-row justify-between gap-4 p-4 border border-white/10 rounded-xl bg-white/5">
                                <div className="flex flex-wrap gap-2">
                                    <div className="relative w-full sm:w-auto">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"/>
                                        <input
                                            className="h-10 pl-10 pr-4 w-full sm:w-64 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:ring-[#13ec6d] focus:border-[#13ec6d]"
                                            placeholder="Search transactions..."
                                            type="text"
                                        />
                                    </div>
                                    <div className="relative w-full sm:w-auto">
                                        <select title='Select Category' className="h-10 pl-3 pr-8 w-full sm:w-auto rounded-lg bg-white/5 border border-white/10 text-white/80 focus:ring-[#13ec6d] focus:border-[#13ec6d] appearance-none">
                                            <option>All Categories</option>
                                            <option>Food</option>
                                            <option>Transport</option>
                                            <option>Entertainment</option>
                                        </select>
                                        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/50"/>
                                    </div>
                                    <button className="h-10 px-4 flex items-center justify-center gap-2 rounded-lg bg-white/5 border border-white/10 text-white/80 hover:bg-white/10">
                                        <Calendar/>
                                        <span>Date Range</span>
                                    </button>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="relative w-full sm:w-auto">
                                        <select title='Sort' className="h-10 pl-3 pr-8 w-full sm:w-auto rounded-lg bg-white/5 border border-white/10 text-white/80 focus:ring-[#13ec6d] focus:border-[#13ec6d] appearance-none">
                                            <option>Sort by Date</option>
                                            <option>Amount: High to Low</option>
                                            <option>Amount: Low to High</option>
                                        </select>
                                        <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-white/50"/>
                                    </div>
                                </div>
                            </div>
                            {/* Table Component */}
                            <div className="px-4 py-3 @container">
                                <div className="flex overflow-hidden rounded-xl border border-white/10 bg-white/[.02]">
                                    <table className="w-full flex-1">
                                        <thead className="border-b border-b-white/10">
                                            <tr className="bg-white/5">
                                                <th className="px-4 py-3 text-left w-12">
                                                    <input
                                                        className="h-5 w-5 rounded border-white/20 border-2 bg-transparent text-[#13ec6d] checked:bg-[#13ec6d] checked:border-[#13ec6d] focus:ring-0 focus:ring-offset-0 focus:border-white/20"
                                                        type="checkbox"
                                                    />
                                                </th>
                                                <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                                                    Transaction
                                                </th>
                                                <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal hidden md:table-cell">
                                                    Category
                                                </th>
                                                <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal hidden sm:table-cell">
                                                    Date
                                                </th>
                                                <th className="px-4 py-3 text-left text-white text-sm font-medium leading-normal">
                                                    Amount
                                                </th>
                                                <th className="px-4 py-3 text-center text-white text-sm font-medium leading-normal">
                                                    Actions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-t border-t-white/10 hover:bg-white/5">
                                                <td className="h-[72px] px-4 py-2 w-12 text-center">
                                                    <input
                                                        className="h-5 w-5 rounded border-white/20 border-2 bg-transparent text-[#13ec6d] checked:bg-[#13ec6d] checked:border-[#13ec6d] focus:ring-0 focus:ring-offset-0 focus:border-white/20"
                                                        type="checkbox"
                                                    />
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-white text-sm font-normal leading-normal">
                                                    Spotify Subscription
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal hidden md:table-cell">
                                                    <span className="inline-flex items-center justify-center rounded-full px-3 py-1 bg-[#13ec6d]/20 text-[#13ec6d] text-xs font-medium">
                                                        Entertainment
                                                    </span>
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-white/60 text-sm font-normal leading-normal hidden sm:table-cell">
                                                    2024-10-26
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-red-400 text-sm font-medium leading-normal">
                                                    -$10.99
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-center">
                                                    <div className="flex justify-center items-center gap-2">
                                                        <button className="p-2 text-white/60 hover:text-white rounded-full hover:bg-white/10">
                                                            <Pencil/>
                                                        </button>
                                                        <button className="p-2 text-white/60 hover:text-red-400 rounded-full hover:bg-white/10">
                                                            <Trash2/>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="border-t border-t-white/10 hover:bg-white/5">
                                                <td className="h-[72px] px-4 py-2 w-12 text-center">
                                                    <input
                                                        className="h-5 w-5 rounded border-white/20 border-2 bg-transparent text-[#13ec6d] checked:bg-[#13ec6d] checked:border-[#13ec6d] focus:ring-0 focus:ring-offset-0 focus:border-white/20"
                                                        type="checkbox"
                                                    />
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-white text-sm font-normal leading-normal">
                                                    Monthly Salary
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal hidden md:table-cell">
                                                    <span className="inline-flex items-center justify-center rounded-full px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium">
                                                        Income
                                                    </span>
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-white/60 text-sm font-normal leading-normal hidden sm:table-cell">
                                                    2024-10-25
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-green-400 text-sm font-medium leading-normal">
                                                    +$3,500.00
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-center">
                                                    <div className="flex justify-center items-center gap-2">
                                                        <button className="p-2 text-white/60 hover:text-white rounded-full hover:bg-white/10">
                                                            <Pencil/>
                                                        </button>
                                                        <button className="p-2 text-white/60 hover:text-red-400 rounded-full hover:bg-white/10">
                                                             <Trash2/>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="border-t border-t-white/10 hover:bg-white/5">
                                                <td className="h-[72px] px-4 py-2 w-12 text-center">
                                                    <input
                                                        className="h-5 w-5 rounded border-white/20 border-2 bg-transparent text-[#13ec6d] checked:bg-[#13ec6d] checked:border-[#13ec6d] focus:ring-0 focus:ring-offset-0 focus:border-white/20"
                                                        type="checkbox"
                                                    />
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-white text-sm font-normal leading-normal">
                                                    Grocery Shopping
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal hidden md:table-cell">
                                                    <span className="inline-flex items-center justify-center rounded-full px-3 py-1 bg-[#13ec6d]/20 text-[#13ec6d] text-xs font-medium">
                                                        Food
                                                    </span>
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-white/60 text-sm font-normal leading-normal hidden sm:table-cell">
                                                    2024-10-24
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-red-400 text-sm font-medium leading-normal">
                                                    -$75.40
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-center">
                                                    <div className="flex justify-center items-center gap-2">
                                                        <button className="p-2 text-white/60 hover:text-white rounded-full hover:bg-white/10">
                                                            <Pencil/>
                                                        </button>
                                                        <button className="p-2 text-white/60 hover:text-red-400 rounded-full hover:bg-white/10">
                                                             <Trash2/>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="border-t border-t-white/10 hover:bg-white/5">
                                                <td className="h-[72px] px-4 py-2 w-12 text-center">
                                                    <input
                                                        className="h-5 w-5 rounded border-white/20 border-2 bg-transparent text-[#13ec6d] checked:bg-[#13ec6d] checked:border-[#13ec6d] focus:ring-0 focus:ring-offset-0 focus:border-white/20"
                                                        type="checkbox"
                                                    />
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-white text-sm font-normal leading-normal">
                                                    Gasoline
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal hidden md:table-cell">
                                                    <span className="inline-flex items-center justify-center rounded-full px-3 py-1 bg-[#13ec6d]/20 text-[#13ec6d] text-xs font-medium">
                                                        Transport
                                                    </span>
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-white/60 text-sm font-normal leading-normal hidden sm:table-cell">
                                                    2024-10-23
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-red-400 text-sm font-medium leading-normal">
                                                    -$45.00
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-center">
                                                    <div className="flex justify-center items-center gap-2">
                                                        <button className="p-2 text-white/60 hover:text-white rounded-full hover:bg-white/10">
                                                            <Pencil/>
                                                        </button>
                                                        <button className="p-2 text-white/60 hover:text-red-400 rounded-full hover:bg-white/10">
                                                             <Trash2/>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr className="border-t border-t-white/10 hover:bg-white/5">
                                                <td className="h-[72px] px-4 py-2 w-12 text-center">
                                                    <input
                                                        className="h-5 w-5 rounded border-white/20 border-2 bg-transparent text-[#13ec6d] checked:bg-[#13ec6d] checked:border-[#13ec6d] focus:ring-0 focus:ring-offset-0 focus:border-white/20"
                                                        type="checkbox"
                                                    />
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-white text-sm font-normal leading-normal">
                                                    Electricity Bill
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-sm font-normal leading-normal hidden md:table-cell">
                                                    <span className="inline-flex items-center justify-center rounded-full px-3 py-1 bg-[#13ec6d]/20 text-[#13ec6d] text-xs font-medium">
                                                        Bills
                                                    </span>
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-white/60 text-sm font-normal leading-normal hidden sm:table-cell">
                                                    2024-10-22
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-red-400 text-sm font-medium leading-normal">
                                                    -$120.00
                                                </td>
                                                <td className="h-[72px] px-4 py-2 text-center">
                                                    <div className="flex justify-center items-center gap-2">
                                                        <button className="p-2 text-white/60 hover:text-white rounded-full hover:bg-white/10">
                                                            <Pencil/>
                                                        </button>
                                                        <button className="p-2 text-white/60 hover:text-red-400 rounded-full hover:bg-white/10">
                                                             <Trash2/>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* Pagination Component */}
                            <div className="flex items-center justify-center p-4">
                                <a
                                    className="flex size-10 items-center justify-center text-white/60 hover:text-white"
                                    href="#"
                                >
                                    <ChevronLeft/>
                                </a>
                                <a
                                    className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#102218] rounded-full bg-[#13ec6d]"
                                    href="#"
                                >
                                    1
                                </a>
                                <a
                                    className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full hover:bg-white/10"
                                    href="#"
                                >
                                    2
                                </a>
                                <a
                                    className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full hover:bg-white/10"
                                    href="#"
                                >
                                    3
                                </a>
                                <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white/60 rounded-full">
                                    ...
                                </span>
                                <a
                                    className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full hover:bg-white/10"
                                    href="#"
                                >
                                    8
                                </a>
                                <a
                                    className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full hover:bg-white/10"
                                    href="#"
                                >
                                    9
                                </a>
                                <a
                                    className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-white rounded-full hover:bg-white/10"
                                    href="#"
                                >
                                    10
                                </a>
                                <a
                                    className="flex size-10 items-center justify-center text-white/60 hover:text-white"
                                    href="#"
                                >
                                    <ChevronRight/>
                                </a>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

        </div>
    )
}

export default History
