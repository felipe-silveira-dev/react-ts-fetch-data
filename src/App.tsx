import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Reddit from './Reddit'
import Joke from './Joke'

function App() {
  const [redditVisible, setRedditVisible] = useState(false)
  const [jokeVisible, setJokeVisible] = useState(false)

  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Fetch Data</h1>
      <div className="card">
        <button className='mr-1' onClick={() => setRedditVisible(prevRedditVisible => !redditVisible)}>
          Reddit {redditVisible ? '🤯' : ''}
        </button>
        <button onClick={() => setJokeVisible(prevJokeVisible => !jokeVisible)}>
          Joke {jokeVisible ? '🤣' : ''}
        </button>
        <p>
          <code>silveira.dev</code>
        </p>
      </div>
      <div>
        {redditVisible && (
          <div className="card">
            <h2>Reddit</h2>
            <p>Reddit data will be here</p>
            <Reddit />
          </div>
        )}
        {jokeVisible && (
          <div className="card">
            <h2>Joke</h2>
            <p>Joke data will be here</p>
            <Joke />
          </div>
        )}
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
