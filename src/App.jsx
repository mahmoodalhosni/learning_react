import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 * Goal: post this to GitHub to enable me to run React as a GitHub page.
 * ran 'npm install gh-pages --save-dev' to enable me to publish on Github
 * Added the following to the 'package.json':
 * "predeploy": "npm run build",
 * "deploy": "gh-pages -d dist",
 * Then added the following to the 'vite.config.js':
 * base: "/YOUR_REPOSITORY_NAME", {before the [react()] line}
 */

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
