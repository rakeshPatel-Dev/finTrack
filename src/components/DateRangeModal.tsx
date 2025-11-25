import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  startDate: string;
  endDate: string;
  setStartDate: (v: string) => void;
  setEndDate: (v: string) => void;
  applyFilter: () => void;
}

const presets = [
  { label: "Today", range: 1 },
  { label: "Yesterday", range: 2 },
  { label: "Last 7 Days", range: 7 },
  { label: "Last 30 Days", range: 30 },
];

export default function DateRangeModal({
  open,
  onClose,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  applyFilter,
}: Props) {
  if (!open) return null;

  const applyPreset = (days: number) => {
    const today = new Date();
    const past = new Date();

    if (days === 1) {
      // Today
      const f = today.toISOString().split("T")[0];
      setStartDate(f);
      setEndDate(f);
      return;
    }

    if (days === 2) {
      // Yesterday
      today.setDate(today.getDate() - 1);
      const f = today.toISOString().split("T")[0];
      setStartDate(f);
      setEndDate(f);
      return;
    }

    // Last X days
    past.setDate(today.getDate() - days);
    setStartDate(past.toISOString().split("T")[0]);
    setEndDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-xl 
        bg-[#102218] border border-white/10
        p-6 shadow-xl animate-fadeIn scale-95"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg font-semibold">Select Date Range</h2>
          <button title="Close" onClick={onClose} className="text-white/70 hover:text-white">
            <X />
          </button>
        </div>

        {/* DATE INPUTS */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-white/60 mb-1">Start Date</p>
            <input title="Choose Start date"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#193324] text-white border border-[#13ec6d]/40 focus:border-[#13ec6d]"
            />
          </div>

          <div>
            <p className="text-white/60 mb-1">End Date</p>
            <input title="Choose end date"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full p-3 rounded-lg bg-[#193324] text-white border border-[#13ec6d]/40 focus:border-[#13ec6d]"
            />
          </div>
        </div>

        {/* PRESETS */}
        <div className="mt-5">
          <p className="text-white/70 text-sm mb-2">Quick Filters</p>
          <div className="flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p.label}
                onClick={() => applyPreset(p.range)}
                className="px-3 py-2 rounded-lg bg-white/10 text-white/80 border border-white/10 
                hover:bg-white/20 text-sm"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* ACTION BUTTON */}
        <button
          onClick={() => {
            applyFilter();
            onClose();
          }}
          className="w-full mt-6 py-3 rounded-lg bg-[#13ec6d] text-black font-semibold hover:bg-[#10c35d]"
        >
          Apply Filter
        </button>
      </div>
    </div>
  );
}
