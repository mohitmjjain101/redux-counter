import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
    increment,
    decrement,
    incrementByAmount,
    incrementAsync,
    selectCount
} from './counterSlice'

import styles from './Counter.module.css'

export function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementByAmout] = useState('0')


    return (
        <div>
            <div className={styles.rows}>
                <button
                    className={styles.button}
                    aria-label="INCREMENT VALUE"
                    onClick={() => dispatch(increment())}
                > +
            </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="DECREMENT VALUE"
                    onClick={() => dispatch(decrement())}
                > -
            </button>

            </div>
            <div className={styles.row}>
                <input
                    className={styles.row}
                    aria-label="set increment amount"
                    value={incrementAmount}
                    onChange={e => setIncrementByAmout(e.target.value)}
                >

                </input>
                <button
                    className={styles.button}
                    onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
                >
                    Add Amount
                </button>
                <button
                className={styles.asyncButton}
                onClick={()=>dispatch(incrementAsync(Number(incrementAmount) || 0))}
                >
                    Add Async
                </button>
            </div>
        </div>
    )
}