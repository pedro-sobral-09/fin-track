import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function getMessage() {
      const response = await fetch(import.meta.env.VITE_URL);
      const data = await response.json();

      console.log(data.message);
    }
    
    getMessage();
  }, []);
  
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello World
      </h1>
    </>
  );
}

export default App;