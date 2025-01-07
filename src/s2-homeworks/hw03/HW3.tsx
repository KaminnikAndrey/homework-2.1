import React, { useState } from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

/*
* 10 - в файле Greeting.tsx вычислить inputClass в зависимости от наличия ошибки
* 11 - сделать стили в соответствии с дизайном
* */

// types
export type UserType = {
    _id: string
    name: string
}

export const pureAddUserCallback = (name: string, setUsers: (users: UserType[]) => void, users: UserType[]) => { // need to fix any
    const user = {
        _id: v1(),
        name: name
    }
    setUsers([...users, user])
}

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        console.log(name)
        console.log('123')
        pureAddUserCallback(name, setUsers, users)
    }

    console.log(users)

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>
            {/*для автоматической проверки дз (не менять)*/}

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3
