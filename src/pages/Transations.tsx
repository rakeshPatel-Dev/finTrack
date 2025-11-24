import React from 'react'

const Transations = () => {
  return (
    <div>
        <div className="font-display bg-[#f6f8f7] dark:bg-[#102218]">
  <div className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
    <div className="w-full max-w-2xl rounded-xl bg-[#112218] p-6 sm:p-8">
      <div className="flex flex-col gap-8">
        <div className="relative flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-3xl font-bold leading-tight tracking-tight">
              Add New Transaction
            </h1>
            <p className="text-[#92c9a9] text-base font-normal leading-normal">
              Enter the details for your new transaction below.
            </p>
          </div>
        </div>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-white text-base font-medium leading-normal">
              Transaction Type
            </p>
            <div className="grid grid-cols-2 gap-2 rounded-lg bg-[#193324] p-1">
              <label className="relative flex items-center justify-center">
                <input
                  defaultChecked=""
                  className="peer sr-only"
                  name="transaction-type"
                  type="radio"
                  defaultValue="expense"
                />
                <span className="w-full cursor-pointer rounded-md py-3 text-center text-base font-medium text-[#92c9a9] transition-colors peer-checked:bg-[#13ec6d] peer-checked:text-[#102218]">
                  Expense
                </span>
              </label>
              <label className="relative flex items-center justify-center">
                <input
                  className="peer sr-only"
                  name="transaction-type"
                  type="radio"
                  defaultValue="income"
                />
                <span className="w-full cursor-pointer rounded-md py-3 text-center text-base font-medium text-[#92c9a9] transition-colors peer-checked:bg-[#13ec6d] peer-checked:text-[#102218]">
                  Income
                </span>
              </label>
            </div>
          </div>
          <label className="flex flex-col gap-2">
            <p className="text-white text-base font-medium leading-normal">
              Transaction Name
            </p>
            <input
              autofocus=""
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#326748] bg-[#193324] p-4 text-base font-normal leading-normal text-white placeholder:text-[#92c9a9] focus:border-[#13ec6d] focus:outline-0 focus:ring-1 focus:ring-[#13ec6d]"
              placeholder="e.g., Coffee with a client"
              type="text"
              defaultValue=""
            />
          </label>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <label className="relative flex flex-col gap-2">
              <p className="text-white text-base font-medium leading-normal">
                Amount
              </p>
              <div className="relative">
                <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#92c9a9]">
                  $
                </span>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#326748] bg-[#193324] p-4 pl-8 text-base font-normal leading-normal text-white placeholder:text-[#92c9a9] focus:border-[#13ec6d] focus:outline-0 focus:ring-1 focus:ring-[#13ec6d]"
                  placeholder={0.0}
                  step="0.01"
                  type="number"
                  defaultValue=""
                />
              </div>
            </label>
            <label className="flex flex-col gap-2">
              <p className="text-white text-base font-medium leading-normal">
                Date
              </p>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#326748] bg-[#193324] p-4 text-base font-normal leading-normal text-white placeholder:text-[#92c9a9] [color-scheme:dark] focus:border-[#13ec6d] focus:outline-0 focus:ring-1 focus:ring-[#13ec6d]"
                placeholder="Select Date"
                type="date"
                defaultValue=""
              />
            </label>
          </div>
          <label className="flex flex-col gap-2">
            <p className="text-white text-base font-medium leading-normal">
              Category
            </p>
            <select
              className="form-select flex w-full min-w-0 flex-1 appearance-none resize-none overflow-hidden rounded-lg border border-[#326748] bg-[#193324] bg-no-repeat p-4 text-base font-normal leading-normal text-white focus:border-[#13ec6d] focus:outline-0 focus:ring-1 focus:ring-[#13ec6d]"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHI5lyAKlCPmliU77mvj8I9LVyav64G4zoUt3Hjg3PkOhvX8JlmBZS5Y4-GNJAeFIHJyz5B23zPKxf3V78qFpcn_Qy5SpYTegr9V9EbaAKYtCeuABS9f0lebUBjOt67DNi68CmrmyG9TjhbLLDXexYdIbnpUw648Lbq_ZQs17EevjON0ir88PVhRH3MbDcuDyeJDVmnTMUaldjWQlSzeaYJV8lgcEP0Sl5XJIlThHYJ_Cp9qIF_OJUURxqHo4kzJ_7iYp6GBUaR_Q")',
                backgroundPosition: "right 0.5rem center",
                backgroundSize: "1.5em 1.5em"
              }}
            >
              <option>Select a category</option>
              <option value="food">Food &amp; Drink</option>
              <option value="transport">Transport</option>
              <option value="bills">Bills &amp; Utilities</option>
              <option value="entertainment">Entertainment</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <p className="text-white text-base font-medium leading-normal">
              Description (Optional)
            </p>
            <textarea
              className="form-textarea flex min-h-32 w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg border border-[#326748] bg-[#193324] p-4 text-base font-normal leading-normal text-white placeholder:text-[#92c9a9] focus:border-[#13ec6d] focus:outline-0 focus:ring-1 focus:ring-[#13ec6d]"
              placeholder="Meeting to discuss Q4 project..."
              defaultValue={""}
            />
          </label>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row-reverse">
            <button
              className="flex w-full items-center justify-center rounded-lg bg-[#13ec6d] px-6 py-4 text-base font-bold text-[#102218] transition-opacity hover:opacity-90 sm:w-auto"
              type="submit"
            >
              Add Transaction
            </button>
            <button
              className="flex w-full items-center justify-center rounded-lg bg-[#193324] px-6 py-4 text-base font-medium text-white transition-colors hover:bg-[#326748] sm:w-auto"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Transations
