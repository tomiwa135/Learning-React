//1. Import and Create a root
//2. Render some markup to the root

import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root")) //root of our application

root.render(<h1>Hello, React</h1>) //pass in html element into the render method

