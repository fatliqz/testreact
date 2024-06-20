import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import ListDr from './ListDr';
// import'../tailwind.config';


function App() {
  const [count, Setcount] = useState(0);
  const [poke, Setpoke] = useState("");
  const [loading, setLoading] = useState("");
  // const [loadPoke, setloadPoke] = useState("");
  const [Dr, SetDr] = useState([]);

// BB
  useEffect(() => {
    async function loadPoke() {
      try {
        setLoading(true);
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/573");
        Setpoke(response.data);

        console.log(response.data);
        console.log(poke)
      }catch{
      }finally{
        setLoading(false);
      }

    }
    console.log("a");
    loadPoke();
    console.log("b");

  }, []);

  useEffect(() => {
    async function loadPoke() {
      try {
        setLoading(true);
        const response = await axios.get("/api/sel");
        SetDr(response.data);

        console.log(response.data);
        console.log(Dr)
      }catch{
      }finally{
        setLoading(false);
      }

    }
    console.log("a");
    loadPoke();
    console.log("b");

  }, []);

  function updatestate() {
    Setcount(count + 1);

  }

  function decreadstate() {
    Setcount(count - 1);
  }
  return (
    <div className='App'>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <h3> count is : {count}</h3>
      <div className='Button'>
        <button onClick={updatestate}>
          เพิ่ม
        </button>
        <button onClick={decreadstate}>
          ลบ
        </button>
      </div>

      {loading?<p> Loding .....</p>: 
      poke &&
      <>
        <h2> {poke.name} </h2>
        <img src={poke.sprites.other.home.front_default}></img> 
        </>
      }

      <ListDr/>
    </div>
  );
}

export default App;
