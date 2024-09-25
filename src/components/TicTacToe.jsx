import React, { useState } from "react";
import Circle from "./assets/Circle.png";
import Cross from "./assets/Cross.png";
import "./TicTacToe.css";

const data = ["","","","","","","","",""]
function TicTacToe() {

    let [count,setcount] = useState(0);
    let [lock,setLock] = useState(false);

    let toggleFun = (event,num)=>{
        if(lock){
            return 0;
        }
        if(count%2==0){
            event.target.innerHTML = `<img src=${Cross}>`
            data[num] = "x";
            setcount(++count)
        }
        else{
            event.target.innerHTML = `<img src=${Circle}>`
            data[num] = "o";
            setcount(++count)
        }
    }
  return (
    <>
      <div className="container">
        <h1 className="title">
          Tic Tac Toe Game In <span>React</span>
        </h1>
        <div className="board">
            <div className="row1">
                <div className="box" onClick={(event)=>{toggleFun(event,0)}}></div>
                <div className="box" onClick={(event)=>{toggleFun(event,1)}}></div>
                <div className="box" onClick={(event)=>{toggleFun(event,2)}}></div>
            </div>
            <div className="row2">
                <div className="box" onClick={(event)=>{toggleFun(event,3)}}></div>
                <div className="box" onClick={(event)=>{toggleFun(event,4)}}></div>
                <div className="box" onClick={(event)=>{toggleFun(event,5)}}></div>
            </div>
            <div className="row3">
                <div className="box" onClick={(event)=>{toggleFun(event,6)}}></div>
                <div className="box" onClick={(event)=>{toggleFun(event,7)}}></div>
                <div className="box" onClick={(event)=>{toggleFun(event,8)}}></div>
            </div>
        </div>
        <button className="reset">Reset</button>
      </div>
    </>
  );
}

export default TicTacToe;