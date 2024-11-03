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

  const handleUserClick = (user: IUser) => {
    setActiveUser(user)
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
