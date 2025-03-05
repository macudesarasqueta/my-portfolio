import { useState, useEffect } from "react";
import "./Profile.css";

export default function Profile() {
  const [text, setText] = useState("");
  const fullText = "Apasionada por el código, motivada por el impacto.\n Tu proyecto, mi misión."

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="head">
      <div className="text">
        <h1 className="title">I'm Macarena</h1>
        <h1 className="title">I'm a Front-end developer</h1>
        <h2 className="intro typewriter">{text}</h2>
      </div>
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZm42a2JvaGFmNXZqdTkwcDN4MHppZm5na3VhanRxejY4N2RuNnpwbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L8K62iTDkzGX6/giphy.gif"
        className="coding-gif"
        alt="Coding GIF"
      />
    </div>
  );
}
