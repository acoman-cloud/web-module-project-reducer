import React, { useReducer } from 'react';
import reducer, { initialState } from './../reducers';
import { applyNumber, changeOperation, clearDisplay, mPlus, mApply, mClear } from './../actions'

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNumber =e=>{
    dispatch(applyNumber(parseInt(e.target.value)));
  }
  const handleOperator =e=>{
    dispatch(changeOperation(e.target.value));
  }
  const handleClear=()=>{
    dispatch(clearDisplay());
  }
  const handleMemoryPlus=()=>{
    dispatch(mPlus());
  }
  const handleMemoryApply=()=>{
    dispatch(mApply());
  }
  const handleMemoryClear=()=>{
    dispatch(mClear());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={handleMemoryPlus} value={"M+"}/>
              <CalcButton onClick={handleMemoryApply} value={"MR"}/>
              <CalcButton onClick={handleMemoryClear} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleNumber} value={1}/>
              <CalcButton onClick={handleNumber} value={2}/>
              <CalcButton onClick={handleNumber} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleNumber} value={4}/>
              <CalcButton onClick={handleNumber} value={5}/>
              <CalcButton onClick={handleNumber} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleNumber} value={7}/>
              <CalcButton onClick={handleNumber} value={8}/>
              <CalcButton onClick={handleNumber} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={handleOperator} value={"+"}/>
              <CalcButton onClick={handleOperator} value={"*"}/>
              <CalcButton onClick={handleOperator} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton onClick={handleClear} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
