QUESTION : 
Problem Statement: React Tab Component

Create a simple React component that displays three tabs:  
- Tab 1
- Tab 2
- Tab 3

Each tab should display a unique piece of text relevant to that tab. When a user clicks on a specific tab, the content area should update to show the corresponding text for that tab.

Requirements:
- Only one tab's content should be visible at a time.
- Clicking on a tab should:
  - Highlight the active tab. (optional)
  - Update the content area to show that tab's text.
- Use React functional components and hooks (useState).

Example:
- Clicking on Tab 1 shows: "This is content for Tab 1"
- Clicking on Tab 2 shows: "This is content for Tab 2"
- Clicking on Tab 3 shows: "This is content for Tab 3"
SOLUTION :
App.jsx:
import React, { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("Tab1");

  return (
    <div>
      <h2>Simple Tab Component</h2>

      {/* Tab buttons */}
      <button onClick={() => setActiveTab("Tab1")}>Tab 1</button>
      <button onClick={() => setActiveTab("Tab2")}>Tab 2</button>
      <button onClick={() => setActiveTab("Tab3")}>Tab 3</button>

      {/* Tab content */}
      {activeTab === "Tab1" && <p>This is content for Tab 1</p>}
      {activeTab === "Tab2" && <p>This is content for Tab 2</p>}
      {activeTab === "Tab3" && <p>This is content for Tab 3</p>}
    </div>
  );
}

export default App;
index.jsx:
import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from './App.jsx';

ReactDOM.createRoot(document.querySelector('#root')).render(<App />);
output:

Simple Tab Component
|Tab 1||Tab 2||Tab 3|
This is content for Tab 3 (assume user clicks tab 3)
