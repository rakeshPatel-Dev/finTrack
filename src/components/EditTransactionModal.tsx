"use client";
import React from "react";

interface EditModalProps {
  open: boolean;
  title: string;
  amount: string;
  onTitleChange: (v: string) => void;
  onAmountChange: (v: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

const EditTransactionModal: React.FC<EditModalProps> = ({
  open,
  title,
  amount,
  onTitleChange,
  onAmountChange,
  onSave,
  onCancel,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#102218] text-white p-6 rounded-xl w-80 border border-[#13ec6d] shadow-xl">
        <h2 className="text-lg font-semibold mb-4">Edit Transaction</h2>

        {/* Title */}
        <div className="mb-4">
          <label className="text-sm text-white/70">Title</label>
          <input title="Add title"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="w-full mt-1 p-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-[#13ec6d] focus:border-[#13ec6d]"
          />
        </div>

        {/* Amount */}
        <div className="mb-6">
          <label className="text-sm text-white/70">Amount</label>
          <input title="Add amount"
            type="number"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
            className="w-full mt-1 p-2 rounded-lg bg-white/5 border border-white/10 text-white focus:ring-[#13ec6d] focus:border-[#13ec6d]"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            Cancel
          </button>

          <button
            onClick={onSave}
            className="px-4 py-2 rounded-lg bg-[#13ec6d] text-black font-semibold hover:bg-[#13ec6d]/80 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTransactionModal;
