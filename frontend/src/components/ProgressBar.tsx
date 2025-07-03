

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="mb-6">
      <p className="mb-2">Grading Progress: {progress}%</p>
      <div className="w-full bg-gray-700 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
