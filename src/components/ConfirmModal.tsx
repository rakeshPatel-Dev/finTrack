"use client";
import React from "react";

interface ConfirmModalProps {
  open: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  open,
  title = "Are you sure?",
  message = "Do you really want to continue?",
  onConfirm,
  onCancel,
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-[#102218] text-white p-6 rounded-xl w-80 border border-[#13ec6d] shadow-xl">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-white/70 text-sm mb-6">{message}</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-lg bg-[#13ec6d] text-black font-semibold hover:bg-[#13ec6d]/80 transition"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
