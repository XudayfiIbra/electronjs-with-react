import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <h1 className="bg-indigo-600 max-w-[160px] px-4 py-2 font-bold text-white hover:bg-indigo-500 ease-in-out hover:rounded-full cursor-pointer">
          ELECTRON JS
        </h1>
      </div>
    </>
  )
}

export default App
