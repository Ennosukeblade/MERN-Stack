import './App.css';
import Tabs from './components/Tabs';
import Content from './components/Content';
import { useState } from 'react';

function App() {
  const [content, setContent] = useState(1)
  const getTabContent = (value) => {
    setContent(value)
    console.log("second click");
  }
  return (
    <div className="App">
      <Tabs tabsNumber={8} tabContent={v => getTabContent(v)} />
      <Content content={content} />
    </div>
  );
}

export default App;
