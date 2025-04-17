import React from "react";
const tasks = [
  { title: "Likes", progress: 60, target: 100 },
  { title: "Matches", progress: 12, target: 20 },
  { title: "Messages", progress: 33, target: 40 },
  { title: "Invites", progress: 2, target: 5 },
];
const Farming = () => (
  <div className="flex flex-col items-center min-h-screen p-4">
    <h1 className="text-3xl font-bold mb-2 text-primary">TON Farming</h1>
    <div className="bg-card w-full max-w-md rounded-2xl p-6 mb-8 shadow-lg flex flex-col items-center">
      <div className="flex items-center space-x-4 mb-6">
        <span className="text-4xl font-black text-ton">5.23</span>
        <span className="font-bold text-ton">TON</span>
      </div>
      <div className="mb-4 text-gray-400">Farming speed: <span className="font-bold">0.32 TON/day</span></div>
      <button className="bg-ton px-6 py-2 rounded-xl text-background font-bold shadow transition hover:bg-accent">Withdraw</button>
    </div>
    <div className="w-full max-w-md space-y-4">
      {tasks.map((t) => (
        <div key={t.title} className="bg-card rounded-xl px-5 py-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-medium">{t.title}</span>
            <span className="text-primary font-medium">{t.progress}/{t.target}</span>
          </div>
          <div className="w-full bg-gray-700 rounded-lg h-3">
            <div className="bg-primary h-3 rounded-lg transition-all" style={{width: `${(t.progress/t.target)*100}%`}} />
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Farming;