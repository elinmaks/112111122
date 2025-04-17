// Make React available in module scope
const { useState } = window.React;

// Counter Component
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-8">Modern Starter Template</h1>
      
      <div className="space-y-4">
        <p className="text-lg">
          Count: <span className="font-bold text-primary">{count}</span>
        </p>
        
        <div className="space-x-4">
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Increment
          </button>
          
          <button 
            onClick={() => setCount(count - 1)}
            className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Decrement
          </button>
        </div>

        <div className="mt-8">
          <p className="text-gray-600 italic">
            Prompt this template to implement your ideas
          </p>
        </div>
      </div>
    </div>
  );
}

// Make Counter available globally
window.Counter = Counter;