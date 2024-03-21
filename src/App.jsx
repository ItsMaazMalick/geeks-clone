import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setText(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {text.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))}
    </div>
  );
}
