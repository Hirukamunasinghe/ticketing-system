import React from 'react';

const ControlPanel = ({ onStart, onStop, onReset }) => {
  return (
    <div className="flex gap-[20px] mt-[20px]">
      <button onClick={onStart} className="w-[200px] p-2 bg-green-500 text-white rounded">Start</button>
      <button onClick={onStop} className="w-[200px] p-2 bg-red-500 text-white rounded">Stop</button>
      <button onClick={onReset} className="w-[200px] p-2 bg-yellow-500 text-white rounded">Reset</button>
    </div>
  );
};

export default ControlPanel;
