import React from "react";
const StepProfile = () => (
  <div className="flex flex-col items-center justify-center min-h-screen px-4">
    <h1 className="text-3xl font-bold mb-3 text-primary">Step 2: Profile Details</h1>
    <form className="w-full max-w-sm space-y-4">
      <input className="w-full rounded-lg px-3 py-2" placeholder="Name" maxLength={24} />
      <textarea className="w-full rounded-lg px-3 py-2" placeholder="Bio (max 120 chars)" maxLength={120} rows={2} />
      <input className="w-full rounded-lg px-3 py-2" type="date" placeholder="Date of Birth" />
      <input className="w-full rounded-lg px-3 py-2" placeholder="City" />
      <select className="w-full rounded-lg px-3 py-2">
        <option value="">Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </select>
      <button className="w-full bg-primary font-bold text-background py-2 rounded-lg mt-4">Next</button>
    </form>
  </div>
);
export default StepProfile;

