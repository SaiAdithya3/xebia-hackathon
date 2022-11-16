import React from 'react';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Posts from "./components/posts"

  
function App() {
return (
    <Router>
    <Routes>
      <Route path="/"></Route>
        <Route path='/blog' element={<Posts/>} />
    </Routes>
    </Router>
);
}
  
export default App;