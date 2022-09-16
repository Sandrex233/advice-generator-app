import React from "react";
import Advice from "./Advice";


function App() {
  return (
    <div className="font-mrope flex items-center justify-center flex-col bg-[#1F2632] h-screen">
      {/* <div className="flex absolute top-0 mt-16 items-center justify-center text-center">
        <p className="text-gray-400 text-xs">Note: Advice is cached for 2 seconds. Any repeat-request within 2 seconds will return the same piece of advice.</p>
      </div> */}
      <Advice />

    </div>
  );
}

export default App;
