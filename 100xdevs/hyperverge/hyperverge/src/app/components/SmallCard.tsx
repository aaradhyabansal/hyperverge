"use client";

import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function SmallCard() {
  const [time, setTime] = useState('');
  const [tasks, setTasks] = useState<{ id: number; name: string; endTime: Date }[]>([]);
  const [taskName, setTaskName] = useState('');
  const [endTime, setEndTime] = useState('');
  const [showForm, setShowForm] = useState(false); // State to toggle form visibility
  const [steps, setSteps] = useState(5000); // Replace with actual data source
  const dailyTarget = 10000;
  const percentage = (steps / dailyTarget) * 100;

  useEffect(() => {
    async function fetchTime() {
      try {
        const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
        const data = await response.json();
        const dateTime = new Date(data.datetime);
        const hours = dateTime.getHours().toString().padStart(2, '0');
        const minutes = dateTime.getMinutes().toString().padStart(2, '0');
        setTime(`${hours}:${minutes}`);
      } catch (error) {
        console.error('Error fetching time:', error);
      }
    }

    fetchTime();
    const interval = setInterval(fetchTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskName || !endTime) return;
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        name: taskName,
        endTime: new Date(endTime),
      },
    ]);
    setTaskName('');
    setEndTime('');
    setShowForm(false); // Hide the form after adding the task
  };

  const getTimeLeft = (endTime: Date) => {
    const timeLeft = endTime.getTime() - new Date().getTime();
    const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    return `${hoursLeft}h ${minutesLeft}m`;
  };

  const calculatePercentage = (endTime: Date): number => {
    const totalDuration = endTime.getTime() - new Date().getTime();
    const duration = endTime.getTime() - new Date().setHours(new Date().getHours() + 3); // Assuming end of day in 3 hours
    return Math.max(0, Math.min(100, ((totalDuration / duration) * 100)));
  };

  return (
    <div className="grid grid-cols-2 h-screen bg-gray-900 text-white">
      {/* Left Column */}
      <div className="flex flex-col justify-center items-center p-8 mb-20">
        {/* Time Display */}
        <div className='mb-12'>
          <h1 className="text-6xl font-bold mb-4">{time ? `${time}` : 'Loading...'}</h1>
        </div>
        
        {/* Icons Grid */}
        <div className="grid grid-cols-3 gap-6 w-full max-w-xl">
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mb-4">
            <img src="/icons/google.png" alt="Google" className="w-20 h-20" />
          </a>
          <a href="https://chat.openai.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mb-4">
            <img src="/icons/chatgpt.png" alt="ChatGPT" className="w-20 h-20" />
          </a>
          <a href="https://teams.microsoft.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mb-4">
            <img src="/icons/teams.png" alt="Microsoft Teams" className="w-20 h-20" />
          </a>
          <a href="https://sheets.google.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mb-4">
            <img src="/icons/spreadsheet.png" alt="Google Spreadsheets" className="w-20 h-20" />
          </a>
          <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mb-4">
            <img src="/icons/gmail.png" alt="Gmail" className="w-20 h-20" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center mb-4">
            <img src="/icons/github.png" alt="GitHub" className="w-20 h-20" />
          </a>
        </div>
      </div>

      {/* Right Column */}
      <div className="items-right pl-6 pt-4 pr-4 overflow-y-scroll">
        <iframe
          className="border-radius:12px ml-5"
          src="https://open.spotify.com/embed/playlist/7J49McjYGxsS4YR4x29i2K?utm_source=generator"
          width="95%"
          height="200"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>

        {/* Task Widget */}
        <div className=" ml-5  bg-[#FFDEAD] text-black rounded-lg shadow-lg max-h-[400px] overflow-y-auto mb-4">
          <h2 className="text-2xl bg-[#C2B280] font-bold mb-4 p-3 ">Today's Tasks</h2>
        <div className='p-4 pl-6'>
          {/* Toggle Form Button */}
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mb-4"
          >
            {showForm ? 'Close Form' : 'Add Task'}
          </button>

          {/* Conditional Form Display */}
          {showForm && (
            <form onSubmit={handleAddTask} className="mb-4">
              <div className="flex flex-col mb-4">
                <label className="mb-2 text-sm font-medium text-gray-700">Task Name</label>
                <input
                  type="text"
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2"
                  placeholder="Enter task name"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label className="mb-2 text-sm font-medium text-gray-700">End Time</label>
                <input
                  type="datetime-local"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Add Task
              </button>
            </form>
          )}

          {/* Task List */}
          {tasks.length ? (
            tasks.map(task => (
              <div key={task.id} className="flex mb-4 gap-4 ">
                <h3 className="text-lg font-semibold">{task.name}</h3>
                <p className="text-lg text-gray-600">Ends at: {task.endTime.toLocaleTimeString()}</p>
                <div className="flex items-center mt-2">
                  <div className="w-16 h-16 mr-4">
                    <CircularProgressbar
                      value={calculatePercentage(task.endTime)}
                      text={getTimeLeft(task.endTime)}
                      styles={buildStyles({
                        pathColor: '#4db8ff',
                        textColor: '#4db8ff',
                      })}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No tasks for today.</p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center p-5 mt-10 h-40% w-90% bg-gradient-to-br from-green-200 to-green-500 border-t border-gray-300 shadow-lg rounded-lg ml-5 mb-8">
          <h2 className="text-2xl font-bold mb-4">Today's Steps</h2>
          <div className="w-40 h-40">
            <CircularProgressbar
              value={percentage}
              text={`${steps} steps`}
              styles={buildStyles({
                pathColor: percentage >= 100 ? 'green' : 'orange',
                textColor: '#333',
                textSize:'14px'
              })}
            />
          </div>
          <p className="mt-4 text-lg font-semibold">{steps} / {dailyTarget} steps</p>
        </div>
      </div>
    </div>
  );
}
