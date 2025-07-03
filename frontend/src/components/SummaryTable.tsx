
import type { ReportEntry } from '../types';

const mockData: ReportEntry[] = [
  {
    name: 'Alice',
    rollNumber: '101',
    class: '10-A',
    totalMarks: 85,
    strengths: ['Good handwriting'],
    improvementAreas: ['Time management'],
    questionWiseScores: [],
  },
  {
    name: 'Bob',
    rollNumber: '102',
    class: '10-A',
    totalMarks: 72,
    strengths: ['Theory'],
    improvementAreas: ['Spelling'],
    questionWiseScores: [],
  },
];

const SummaryTable = () => {
  return (
    <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md text-gray-900">
      <h3 className="text-xl font-semibold mb-4">Summary Table</h3>
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Roll No</th>
            <th className="py-2 px-4">Class</th>
            <th className="py-2 px-4">Marks</th>
            <th className="py-2 px-4">Strengths</th>
            <th className="py-2 px-4">Improvement</th>
            <th className="py-2 px-4">Report</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((student) => (
            <tr key={student.rollNumber} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{student.name}</td>
              <td className="py-2 px-4">{student.rollNumber}</td>
              <td className="py-2 px-4">{student.class}</td>
              <td className="py-2 px-4">{student.totalMarks}</td>
              <td className="py-2 px-4">{student.strengths.join(', ')}</td>
              <td className="py-2 px-4">{student.improvementAreas.join(', ')}</td>
              <td className="py-2 px-4">
                <button className="text-indigo-600 hover:underline">Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-4 mt-6">
        <button className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-900 transition">
          Download CSV
        </button>
        <button className="bg-slate-800 text-white px-4 py-2 rounded hover:bg-slate-900 transition">
          Download All Reports
        </button>
      </div>
    </div>
  );
};

export default SummaryTable;
