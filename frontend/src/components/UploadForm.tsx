import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadForm = () => {
  const [gradingLevel, setGradingLevel] = useState('Moderate');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/progress');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-slate-900 to-slate-700 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-xl w-full max-w-3xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Bulk Assignment Grader
        </h2>

        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">Upload Answer Sheets *</label>
          <input
            type="file"
            multiple
            required
            className="file-input file-input-bordered w-full"
          />
        </div>

        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">Upload Question Paper</label>
          <input type="file" className="file-input file-input-bordered w-full" />
        </div>

        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">Upload Answer Key</label>
          <input type="file" className="file-input file-input-bordered w-full" />
        </div>

        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">Grading Level</label>
          <select
            className="select select-bordered w-full"
            value={gradingLevel}
            onChange={(e) => setGradingLevel(e.target.value)}
          >
            <option value="Strict">Strict</option>
            <option value="Moderate">Moderate</option>
            <option value="Lenient">Lenient</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">Additional Grading Context</label>
          <textarea className="textarea textarea-bordered w-full" rows={2}></textarea>
        </div>

        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">Standard Report Details</label>
          <textarea className="textarea textarea-bordered w-full" rows={2}></textarea>
        </div>

        <div className="space-y-2">
          <label className="block font-semibold text-gray-700">Output Format</label>
          <select className="select select-bordered w-full">
            <option value="PDF">PDF</option>
            <option value="Word">Word</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg font-semibold transition"
        >
          Start Grading
        </button>
      </form>
    </div>
  );
};

export default UploadForm;
