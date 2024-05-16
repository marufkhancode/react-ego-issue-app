import './App.css'
import { useEffect, useState } from 'react'
type Item = {
  text: string;
  selected: boolean;
}
function App() {
  const EGO = "Ego";
  const [egoSelected, setEgoSeleceted] = useState(false);
  const [shakeEle, setShakeEle] = useState(false);
  const [items, setItems] = useState<Item[]>([
    {
      text: "Happiness",
      selected: false
    },
    {
      text: "Optimism",
      selected: false
    },
    {
      text: "Kindness",
      selected: false
    },
    {
      text: "Giving",
      selected: false
    },
    {
      text: "Respect",
      selected: false
    },
    {
      text: EGO,
      selected: false
    }
  ]);

  const toggleItem = (item: Item) => {
    if (egoSelected && item.text !== EGO) {
      setShakeEle(true);
      setTimeout(() => {
        setShakeEle(false);
      }, 300);
      return
    }
    setItems(items.map((itemEle) => {
      if (item.text === EGO) {
        setEgoSeleceted(!item.selected);
      }
      if (item.text !== itemEle.text) {
        return itemEle
      }
      return {
        ...itemEle,
        selected: !itemEle.selected
      }
    }));
  }

  useEffect(() => {
    if (egoSelected) {
      setItems((items) => {
        return items.map((itemEle) => {
          if (itemEle.text !== EGO) {
            return {
              ...itemEle,
              selected: false
            }
          }
          return itemEle
        })
      })
    }
  }, [egoSelected])

  return (
    <div className="container">
      <ul className="grid">
        {
          items.map((ele) => {
            return <li onClick={() => toggleItem(ele)} key={ele.text} className={`grid-item ${shakeEle ? 'shake-lr' : ""}`}>
              {ele.selected ?
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-6 h-6 ${ele.text === EGO ? 'check-red' : 'check-green'}`}>
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                </svg>
                : <div className="circle"></div>}

              <div className="text">{ele.text}</div>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default App
