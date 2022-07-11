import React, { useRef} from "react";
import List from "./components/List";

function App() {
    const inputRef = useRef(null);
    const [list, setList] = React.useState([]);

    function deleteTimer(e, id) {
        e.preventDefault()
        const newList = list.filter((item) => item.id !== id);
        setList(newList);
    }

    function handleClick(e) {
        e.preventDefault()
        if (!inputRef.current.value) {
            inputRef.current.value = new Date().toLocaleDateString();
        }

        let item = {id: (new Date()).getTime() , value:inputRef.current.value}
        list.unshift(item);
        const newList = [...list]
        setList(newList);
        inputRef.current.value = null;
    }

  return (
    <div className="App">
        <div className='header'>
          <h1>tracker</h1>
        </div>
        <form>
          <input type="text" placeholder='Enter tracker name'  ref={inputRef} />
                <ul>
                    {list.map((item) => (
                        <List key={item.id} item = {item}  deleteTimer={deleteTimer}/>
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
