import React from 'react'
import { UserType } from './HW8'
import s from './HW8.module.css'

// types
type UserPropsType = {
    u: UserType
}

const User: React.FC<UserPropsType> = ({ u }) => {
    return (
        <div className={s.itemWrapper}>
            <div id={'hw8-user-' + u._id + '-' + u.age} className={s.item}>
                <div id={'hw8-user-name-' + u._id} className={s.nameUserCol}>
                    {u.name}

                </div>
                <div id={'hw8-user-age-' + u._id} className={s.ageCol}>
                    {u.age}

                </div>
            </div>
        </div>
    )
}

export default User
