import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { randomizeBottt } from './store'
import Bottt from './components/Bottt'
import PartSelector from './components/PartSelector'
import { Chip } from './components/Icons'

const App = observer(() => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    randomizeBottt()
    setLoading(false)
  }, [])

  return (
    <div className="flex flex-col md:max-w-md md:mx-auto m-4">
      {loading ? (
        <p>Building Bottt...</p>
      ) : (
        <>
          <Bottt />
          <div className="flex flex-col">
            <PartSelector />
            <div className="space-x-4 mt-6 mx-auto">
              <button
                className="flex items-center text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => randomizeBottt()}
              >
                <Chip className="w-6 mr-4" />
                Randomize
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
})

export default App
