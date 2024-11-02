import { useEffect, useState } from 'react'
import { IDeatilsProps, IUser } from '../interfaces'
import Loading from './Loading'
const { VITE_BACKEND_URL: backendUrl } = import.meta.env

const Details = ({ info }: IDeatilsProps) => {
  const [userData, setUserData] = useState<IUser | null>(null)

  useEffect(() => {
    setUserData(null)

    setTimeout(() => {
      fetch(`${backendUrl}/${info.id}.json`)
        .then((res) => res.json())
        .then((data) => setUserData(data))
        .catch((err) => console.log(err))
    }, 500)
  }, [info.id])

  return (
    <div className="card bg-base-100 w-72 shadow-xl h-fit">
      <figure className="min-h-[200px] bg-slate-200 max-h-[200px]">
        {userData?.avatar && (
          <img src={userData?.avatar} alt={`${userData?.name} avatar`} />
        )}
      </figure>
      <div className="card-body">
        {userData ? (
          <>
            <h2 className="card-title mb-4 text-2xl">{userData.name}</h2>
            <p>
              <b>City:</b> {userData.details?.city}
            </p>
            <p>
              <b>Company:</b> {userData.details?.company}
            </p>
            <p>
              <b>Position:</b> {userData.details?.position}
            </p>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  )
}

export default Details
