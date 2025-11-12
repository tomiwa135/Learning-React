//1. Import and Create a root
//2. Render some markup to the root

import { createRoot } from "react-dom/client" //import root from react-dom/client

const root = createRoot(document.getElementById("root")) //root of our application, a way to select the dom node where we want to put all of our js code into

// root.render(<h1>Hello, React</h1>); //pass in html element into the render method

root.render(
<main>
    <img width="40" src="react-logo.png" />
    <h1>Fun facts about React</h1>
  <ul>
    <li>Was first released in 2013</li>
    <li>was originally created by Jordan Walke</li>
    <li>Has well over 100K stars on GitHub</li>
    <li>Is maintained by Meta</li>
    <li>Powers thousands of enterprise apps, including mobile apps</li>
  </ul>
</main>
);