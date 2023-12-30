import useBearStore from '@/stores/bearStore'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'

const App = () => {
  const bears = useBearStore((state) => state.bears)
  const increase = useBearStore((state) => state.increase)

  const handleClick = () => {
    increase()
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={handleClick}>one up</button>
      <p>{bears}</p>
      <div>
        <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App