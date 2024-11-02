import classNames from 'classnames'
import { IListProps, IUser } from '../interfaces'

const List = ({ users, activeUser, changeActiveUser }: IListProps) => {
  return (
    <ul className="menu menu-lg flex-nowrap bg-base-200 rounded-box w-96 max-h-[calc(100vh-100px)] overflow-auto">
      {users.map((user: IUser) => (
        <li key={user.id}>
          <a
            onClick={() => changeActiveUser(user)}
            className={classNames(activeUser?.id === user.id ? 'active' : '')}
          >
            {user.name}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default List
