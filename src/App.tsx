import { useShallow } from 'zustand/react/shallow'
import useBearStore from '@/stores/bearStore'
import reactLogo from '@/assets/react.svg'
import viteLogo from '/vite.svg'

const App = () => {
  const { bears, increase } = useBearStore(
    useShallow((state) => ({ bears: state.bears, increase: state.increase })),
  )

  const handleClick = () => {
    increase()
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="h-24 p-6" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-24 p-6 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="my-12">Vite + React</h1>
      <div className="mb-12">
        <button onClick={handleClick} className="bg-gray-50 px-5 py-2 rounded-md mb-2">Increase</button>
        <p>{bears}</p>
      </div>
      <div className="mb-12">
        <p>Edit <code>src/App.tsx</code> and save to test HMR</p>
      </div>
      <p className="text-gray-400 text-sm">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App