import React, { useState } from "react";
export function AddRecordModal({ isOpen, onClose, onSave }) {
  const [newRecord, setNewRecord] = useState({
    type: "Income",
    amount: "",
    date: "",
    category: "",
  });

  const handleSave = () => {
    onSave(newRecord);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#121212] p-6 rounded-lg w-full max-w-md">
        <h3 className="text-xl font-semibold mb-4">Add New Record</h3>
        <div className="space-y-4">
          <select
            value={newRecord.type}
            onChange={(e) =>
              setNewRecord({ ...newRecord, type: e.target.value })
            }
            className="bg-[#27272A] p-2 rounded w-full"
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
          <input
            type="number"
            placeholder="Amount"
            value={newRecord.amount}
            onChange={(e) =>
              setNewRecord({ ...newRecord, amount: e.target.value })
            }
            className="bg-[#27272A] p-2 rounded w-full"
          />
          <input
            type="date"
            value={newRecord.date}
            onChange={(e) =>
              setNewRecord({ ...newRecord, date: e.target.value })
            }
            className="bg-[#27272A] p-2 rounded w-full"
          />
          <input
            type="text"
            placeholder="Category"
            value={newRecord.category}
            onChange={(e) =>
              setNewRecord({ ...newRecord, category: e.target.value })
            }
            className="bg-[#27272A] p-2 rounded w-full"
          />
        </div>
        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
