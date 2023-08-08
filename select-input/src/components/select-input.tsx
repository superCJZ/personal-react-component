import React from 'react';
import { useRef, useState, useEffect } from 'react'

interface Props {
  dataList?: Array<any>;
  placeholder?: string;
  btnValue?: string;
  data?: string;
  searchFunction?: Function;
}

function SelectInput({ dataList, placeholder, data, btnValue, searchFunction }: Props) {

  const [ searchDictName, setSearchDictName ] = useState<string>('');
  const [ filterLists, setFilterLists ] = useState<Array<any>>([]);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [lists, setLists] = useState<Array<any>>([]);


  useEffect(() => {

    if(dataList) {
      setLists(dataList);
      setFilterLists(dataList);
    }

    const inputElem = document.getElementById('inputElem');
    const top = inputElem!.offsetTop;
    const left = inputElem!.offsetLeft;
    const right = inputElem!.offsetLeft + inputElem!.offsetWidth;
    const bottom = inputElem!.offsetHeight + inputElem!.offsetTop + 300;
    
    const handleWindowClick = (e: any) => {
      if(e.clientX <= left || e.clientX >= right || e.clientY <= top || e.clientY >= bottom) {
        if(listRef.current){
          listRef.current.style.display = 'none';
        }
      }
    }

    window.addEventListener('click', handleWindowClick)

    return () => {
      window.removeEventListener('click', handleWindowClick);
    }
  },[])

  return (
    <>
      <div className="search-box">
        <div className="my-select">
          <input 
            id='inputElem'
            ref={inputRef}
            onChange={(e)=>{
              setSearchDictName(e.target.value)
              if(e.target.value === '') {
                setFilterLists(lists);
              } else {
                const comparedLists = lists.filter((list: any) => list[data as string].includes(e.target.value));
                setFilterLists(comparedLists);
              }
            }}
            onKeyDown={(e) => {
              if(e.key === "Enter"){
                if(searchFunction){
                  searchFunction(searchDictName);
                }
              }
            }}
            onFocus={() => {
              if(listRef.current){
                inputRef.current!.style.borderBottomLeftRadius = "0px";
                listRef.current.style.display = 'block';
              }
            }}
            onBlur={() => {
              inputRef.current!.style.borderBottomLeftRadius = "5px";
            }}
            type="text" 
            className="form-control border border-dark-subtle" 
            placeholder={placeholder ? placeholder : ''}
            aria-describedby="button-addon2"
          />
          <button 
            onClick={() => {
              if(searchFunction) {
                searchFunction(searchDictName);
              }
            }}
            className="btn btn-primary btnElem" 
            type="button" 
            id="button-addon2">
              {btnValue ? btnValue : "查找"}
            </button>
        </div>
        {
          filterLists.length === 0 ? null :
          <div className="dict-list" id='listElem' ref={listRef}>
          {
            
            filterLists.map((list: any) => 
            <option 
            value={list[data as string]}  
            onClick={(e) => {
              if(e.target instanceof HTMLOptionElement) {
                inputRef.current!.value = e.target.value;
                setSearchDictName(e.target.value);
              }
              listRef.current!.style.display = "none";
            }}
            >
              {list[data as string]}
            </option>)
          }
        </div>
        }
      </div>
    </>
    
  );
}

export default SelectInput;
