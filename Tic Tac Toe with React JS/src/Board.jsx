import React, { useEffect, useState } from 'react'
import './css/board.css'

const Board = ({reset, setReset, winner, setWinner}) => {
    const [data, setData] = useState(Array(9).fill(''))
    const [current, setCurrent] = useState('X')

    useEffect(() => {
        if(reset) {
            setData(Array(9).fill(''))
            setWinner('')
            setReset(false)
        }
    }, [reset, setReset, setWinner, winner])

    const Draw = (index) => {
        if(data[index] === "") {
        const board = data;
        board[index] = current;
        setData(board)
        if(current === "X") {
            setCurrent("O")
        } else {
            setCurrent("X")
        }

        if(checkWin(board)) {
            if(current === "X") {
                setWinner("Player 1 winner")
            } else {
                setWinner("Player 2 winner")
            }
        }
        if(checkDraw(board)) {
            setWinner("Draw")
        }
    }
    }

    const checkDraw = (board) => {
        let count = 0;
        board.forEach(element => {
            if(element !== "") {
                count++;
            }
        })
        if(count >= 9) {
            return true;
        } else {
            return false;
        }
    }
    const checkWin = (board) => {
        const conditions=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        let flag = false;
        conditions.forEach(element => {
            if(board[element[0]] !== "" 
                && board[element[1]] !== "" && 
                board[element[2]] !== "") { 
                    if(board[element[0]] === board[element[1]] && 
                        board[element[1]] === board[element[2]]) {
                            flag = true;
                        }
                }
        })
        return flag;
    }
  return (
    <div className='board'>
        <div className='input input1' 
            onClick={() => Draw(0)}>{data[0]}</div>
        <div className='input input2' 
            onClick={() => Draw(1)}>{data[1]}</div>
        <div className='input input3' 
            onClick={() => Draw(2)}>{data[2]}</div>
        <div className='input input4' 
            onClick={() => Draw(3)}>{data[3]}</div>
        <div className='input input5' 
            onClick={() => Draw(4)}>{data[4]}</div>
        <div className='input input6' 
            onClick={() => Draw(5)}>{data[5]}</div>
        <div className='input input7' 
            onClick={() => Draw(6)}>{data[6]}</div>
        <div className='input input8' 
            onClick={() => Draw(7)}>{data[7]}</div>
        <div className='input input9' 
            onClick={() => Draw(8)}>{data[8]}</div>
    </div>
  )
}

export default Board