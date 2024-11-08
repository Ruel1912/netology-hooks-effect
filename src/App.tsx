import { useEffect, useState } from 'react'
import './App.css'
import Details from './components/Details'
import List from './components/List'
import { IUser } from './interfaces'
import Loading from './components/Loading'
const { VITE_BACKEND_URL: backendUrl } = import.meta.env

function App() {
  const [users, setUsers] = useState<IUser[]>([])
  const [activeUser, setActiveUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      fetch(`${backendUrl}/users.json`)
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false))
    }, 300)
  }, [])

  useEffect(() => {
    const fetchActiveUser = async () => {
      try {
        if (activeUser?.id) {
          const res = await fetch(`${backendUrl}/${activeUser?.id}.json`)
          const data = await res.json()
          setActiveUser(data)
        }
      } catch (err) {
        console.log(err)
      }
    }

    fetchActiveUser()
  }, [activeUser?.id])

  const handleUserClick = (user: IUser) => {
    setActiveUser(null)
    setTimeout(() => {
      setActiveUser(user)
    }, 0)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <div className="w-full flex justify-center gap-10">
      <List
        users={users}
        activeUser={activeUser}
        changeActiveUser={handleUserClick}
      />
      {activeUser && <Details info={activeUser} />}
    </div>
  )
}

export default App
