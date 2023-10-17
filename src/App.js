// import React from 'react';
// import Dashbord from './components/Dashbord';
// import Navbar from './components/Navbar';
// import './App.css';

// function App() {
//   return (
//     <div>
//      <Dashbord />
//      <Navbar/>
//     </div>
//   );
// }

// export default App;






// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashbord from './components/Dashbord';
// import Graphbar from './components/Graphbar';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Dashbord/>
      {/* <Graphbar /> */}
    </div>
  );
}

export default App;
