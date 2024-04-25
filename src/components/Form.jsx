
import { useRef } from 'react';
import Myinput from './MyInput';
export default function Form() {

  const inputRef = useRef(null)
  const handleFocusInput =() => {
    inputRef.current.focus()
  }

  return (
    <>
      <Myinput ref={inputRef} placeholder="Enter your name" type="text"/>
      <button onClick={handleFocusInput}>
        Focus the input
      </button>
    </>
  );
}