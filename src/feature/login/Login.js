import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    setUserName, setPassWord, selectUsername, selectPassword
} from './LoginSlice'


import styles from './Counter.module.css'

export function Login() {
    const user = useSelector(selectUsername)
    const pass = useSelector(selectPassword)
    const dispatch = useDispatch()

    return (
        <div>
            <label>Username : </label>
            <input
                className={styles.row}
                aria-label="set increment amount"
                value={user}
                onChange={e => dispatch(setUserName(e.target.value))}
            >

            </input>
            <span className={styles.value}>{user}</span>
            <label>Password : </label>
            <input
                className={styles.row}
                aria-label="set increment amount"
                value={pass}
                onChange={e => dispatch(setPassWord(e.target.value))}
            >
            </input>
            <span className={styles.value}>{pass}</span>
        </div>
    )
}