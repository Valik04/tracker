import React, { useRef ,useState} from "react";

function App() {
    const inputRef = useRef(null);
    const [message, setMessage] = useState('');
    const [list, setList] = React.useState([]);


    function handleClick(e) {
        e.preventDefault()
        setMessage(inputRef.current.value);

        const newList = list.concat(inputRef.current.value);
        setList(newList);

        inputRef.current.value = null
    }

  return (
    <div className="App">
        <div className='item'>
          <h1>tracker</h1>
        </div>

        <form>
          <input type="text" placeholder='Enter tracker name'  ref={inputRef} />


                <ul>
                    {list.map((item) => (
                        <li>{item}
                            <div className='tracker-buttons'>
                                <button className='start'>x</button>
                                <button className='stop'>x</button>
                            </div>
                        </li>
                    ))}
                </ul>



          <button type='submit' onClick={handleClick}>
            <span className="material-icons">
                not_started
            </span>
          </button>
        </form>
    </div>
  );
}

export default App;
