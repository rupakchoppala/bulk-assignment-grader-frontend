import  { useEffect, useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import SummaryTable from '../components/SummaryTable';

const GradingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          return 100;
        }
        return old + 10;
      });
    }, 500);
  }, []);

  return (
    <div className="min-h-screen p-6 bg-slate-900 text-white">
      <h2 className="text-2xl font-bold mb-6">Grading in Progress...</h2>
      <ProgressBar progress={progress} />
      {progress === 100 && <SummaryTable />}
    </div>
  );
};

export default GradingProgress;
