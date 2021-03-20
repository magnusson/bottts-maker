import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { randomizeBottt } from './store'
import Bottt from './components/Bottt'
import PartSelector from './components/PartSelector'

const App = observer(() => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    randomizeBottt()
    setLoading(false)
  }, [])

  return (
    <div className="flex flex-col m-4">
      {loading ? (
        <p>Building Bottt...</p>
      ) : (
        <>
          <Bottt />
          <PartSelector />
        </>
      )}
    </div>
  )
})

export default App
