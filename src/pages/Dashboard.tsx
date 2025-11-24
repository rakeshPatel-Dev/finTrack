"use client"
import React from 'react'

const dashboard = () => {

  const userString = localStorage.getItem("user")
  const user = userString ? JSON.parse(userString) : null



  return (
    <div>
      <div className=" bg-[#f6f8f7] dark:bg-[#102218]">
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 flex flex-1 justify-center py-5">
              <div className="layout-content-container flex flex-col w-full max-w-7xl flex-1">
                <main className="flex-1 p-4 mt-6">
                  <div className="flex flex-wrap justify-between gap-3 mb-6">
                    <div className="flex min-w-72 flex-col gap-3">
                      <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                        Welcome back, {user.username}
                      </p>
                      <p className="text-[#92c9a9] text-base font-normal leading-normal">
                        Here's your financial summary for this month.
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#13ec6d] bg-white/5">
                      <p className="text-neutral-300 text-base font-medium leading-normal">
                        Total Spending
                      </p>
                      <p className="text-white tracking-light text-3xl font-bold leading-tight">
                        $1,250.75
                      </p>
                      <p className="text-[#13ec6d] text-sm font-medium leading-normal">
                        +5.2% vs last month
                      </p>
                    </div>
                    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#13ec6d] bg-white/5">
                      <p className="text-neutral-300 text-base font-medium leading-normal">
                        Budget Remaining
                      </p>
                      <p className="text-white tracking-light text-3xl font-bold leading-tight">
                        $749.25
                      </p>
                      <p className="text-[#fa5538] text-sm font-medium leading-normal">
                        49% of budget used
                      </p>
                    </div>
                    <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-[#13ec6d] bg-white/5">
                      <p className="text-neutral-300 text-base font-medium leading-normal">
                        Highest Category
                      </p>
                      <p className="text-white tracking-light text-3xl font-bold leading-tight">
                        Groceries
                      </p>
                      <p className="text-neutral-400 text-sm font-medium leading-normal">
                        $345.12 spent
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    <div className="lg:col-span-2 flex flex-col gap-4 p-6 rounded-xl border border-[#13ec6d] bg-white/5">
                      <div className="flex justify-between items-center">
                        <p className="text-white text-lg font-bold leading-normal">
                          Spending Over Time
                        </p>
                        <div className="flex items-center gap-2 rounded-lg border border-[#13ec6d] p-1">
                          <button className="px-3 py-1 text-xs font-semibold rounded-md bg-[#13ec6d] text-[#102218]">
                            This Month
                          </button>
                          <button className="px-3 py-1 text-xs font-semibold rounded-md text-neutral-300 hover:bg-white/10">
                            This Week
                          </button>
                          <button className="px-3 py-1 text-xs font-semibold rounded-md text-neutral-300 hover:bg-white/10">
                            This Year
                          </button>
                        </div>
                      </div>
                      <div className="grid min-h-[240px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3">
                        <div
                          className="bg-[#13ec6d]/30 hover:bg-[#13ec6d] transition-colors rounded-t-sm w-full"
                          style={{ height: "50%" }}
                        />
                        <p className="text-[#92c9a9] text-xs font-medium leading-normal">
                          Week 1
                        </p>
                        <div
                          className="bg-[#13ec6d]/30 hover:bg-[#13ec6d] transition-colors rounded-t-sm w-full"
                          style={{ height: "80%" }}
                        />
                        <p className="text-[#92c9a9] text-xs font-medium leading-normal">
                          Week 2
                        </p>
                        <div
                          className="bg-[#13ec6d]/30 hover:bg-[#13ec6d] transition-colors rounded-t-sm w-full"
                          style={{ height: "60%" }}
                        />
                        <p className="text-[#92c9a9] text-xs font-medium leading-normal">
                          Week 3
                        </p>
                        <div
                          className="bg-[#13ec6d]/30 hover:bg-[#13ec6d] transition-colors rounded-t-sm w-full"
                          style={{ height: "35%" }}
                        />
                        <p className="text-[#92c9a9] text-xs font-medium leading-normal">
                          Week 4
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6 rounded-xl border border-[#13ec6d] bg-white/5">
                      <p className="text-white text-lg font-bold leading-normal">
                        Spending by Category
                      </p>
                      <div className="flex justify-center items-center h-full relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="transform -rotate-90 w-48 h-48">
                            <circle
                              cx={96}
                              cy={96}
                              fill="transparent"
                              r={72}
                              stroke="rgba(255, 255, 255, 0.1)"
                              strokeWidth={24}
                            />
                            <circle
                              cx={96}
                              cy={96}
                              fill="transparent"
                              r={72}
                              stroke="#eab308"
                              strokeDasharray="452.39"
                              strokeDashoffset="339.2925"
                              strokeWidth={24}
                            />{" "}
                            {/* 25% */}
                            <circle
                              cx={96}
                              cy={96}
                              fill="transparent"
                              r={72}
                              stroke="#8b5cf6"
                              strokeDasharray="452.39"
                              strokeDashoffset="158.3365"
                              strokeWidth={24}
                            />{" "}
                            {/* 40% */}
                            <circle
                              cx={96}
                              cy={96}
                              fill="transparent"
                              r={72}
                              stroke="#13ec6d"
                              strokeDasharray="452.39"
                              strokeDashoffset={0}
                              strokeWidth={24}
                            />{" "}
                            {/* 35% */}
                          </svg>
                        </div>
                        <div className="text-center">
                          <p className="text-neutral-400 text-sm">Total Spent</p>
                          <p className="text-white text-2xl font-bold">$1250.75</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4 text-sm">
                        <div className="flex items-center gap-2">
                          <div className="size-3 rounded-full bg-[#13ec6d]" />
                          <span className="text-neutral-300">Groceries</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="size-3 rounded-full bg-purple-500" />
                          <span className="text-neutral-300">Transport</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="size-3 rounded-full bg-yellow-500" />
                          <span className="text-neutral-300">Entertainment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="size-3 rounded-full bg-white/10" />
                          <span className="text-neutral-300">Other</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4 p-6 rounded-xl border border-[#13ec6d] bg-white/5">
                    <div className="flex justify-between items-center">
                      <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                        Recent Transactions
                      </h2>
                      <a
                        className="text-[#13ec6d] text-sm font-medium hover:underline"
                        href="#"
                      >
                        View All
                      </a>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-white/10 text-xs text-neutral-400 uppercase tracking-wider">
                            <th className="py-3 px-4 font-medium">Date</th>
                            <th className="py-3 px-4 font-medium">Description</th>
                            <th className="py-3 px-4 font-medium">Category</th>
                            <th className="py-3 px-4 font-medium text-right">
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="py-4 px-4 text-neutral-300 text-sm">
                              Oct 26, 2023
                            </td>
                            <td className="py-4 px-4 text-white font-medium text-sm">
                              Starbucks Coffee
                            </td>
                            <td className="py-4 px-4 text-neutral-300 text-sm">
                              Food
                            </td>
                            <td className="py-4 px-4 text-white font-semibold text-sm text-right">
                              -$5.75
                            </td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="py-4 px-4 text-neutral-300 text-sm">
                              Oct 25, 2023
                            </td>
                            <td className="py-4 px-4 text-white font-medium text-sm">
                              Netflix Subscription
                            </td>
                            <td className="py-4 px-4 text-neutral-300 text-sm">
                              Entertainment
                            </td>
                            <td className="py-4 px-4 text-white font-semibold text-sm text-right">
                              -$15.49
                            </td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="py-4 px-4 text-neutral-300 text-sm">
                              Oct 24, 2023
                            </td>
                            <td className="py-4 px-4 text-white font-medium text-sm">
                              Whole Foods Market
                            </td>
                            <td className="py-4 px-4 text-neutral-300 text-sm">
                              Groceries
                            </td>
                            <td className="py-4 px-4 text-white font-semibold text-sm text-right">
                              -$89.30
                            </td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="py-4 px-4 text-neutral-300 text-sm">
                              Oct 23, 2023
                            </td>
                            <td className="py-4 px-4 text-white font-medium text-sm">
                              Uber Ride
                            </td>
                            <td className="py-4 px-4 text-neutral-300 text-sm">
                              Transport
                            </td>
                            <td className="py-4 px-4 text-white font-semibold text-sm text-right">
                              -$22.10
                            </td>
                          </tr>
                          <tr className="hover:bg-white/5 transition-colors">
                            <td className="py-4 px-4 text-neutral-300 text-sm">
                              Oct 22, 2023
                            </td>
                            <td className="py-4 px-4 text-white font-medium text-sm">
                              Salary Deposit
                            </td>
                            <td className="py-4 px-4 text-neutral-300 text-sm">
                              Income
                            </td>
                            <td className="py-4 px-4 text-[#13ec6d] font-semibold text-sm text-right">
                              +$2,500.00
                            </td>
                          </tr>
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

    </div>
  )
}

export default dashboard
