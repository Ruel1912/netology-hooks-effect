import { IDeatilsProps } from '../interfaces'
import Loading from './Loading'

const Details = ({ info }: IDeatilsProps) => {

  return (
    <div className="card bg-base-100 w-72 shadow-xl h-fit">
      <figure className="min-h-[200px] bg-slate-200 max-h-[200px]">
        {info?.avatar && (
          <img src={info?.avatar} alt={`${info?.name} avatar`} />
        )}
      </figure>
      <div className="card-body">
        {info ? (
          <>
            <h2 className="card-title mb-4 text-2xl">{info.name}</h2>
            <p>
              <b>City:</b> {info.details?.city}
            </p>
            <p>
              <b>Company:</b> {info.details?.company}
            </p>
            <p>
              <b>Position:</b> {info.details?.position}
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
