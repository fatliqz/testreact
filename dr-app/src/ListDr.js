import axios from "axios";
import { useState, useEffect } from "react";
import ItemDR from "./ItemDr";

function ListDr() {
    const [Dr, SetDr] = useState([]);

    useEffect(() => {
        async function fecthData() {
            const response = await fetch(
                "http://localhost:8080/api/sel",
                {
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        'Content-Type': 'application/json'
                    }
                }
            );
            let json = await response.json();
            SetDr(json.data);
            console.log(json.data)
        }
        fecthData();
    }, [])


    return (
        <>
            <div className="text-3xl font-bold underline">
                Hello word
            </div>
            

            {/* <ItemDR brand="ICT" /> */}
            <div >

            </div>
            {
                Dr.map(item => (
                  <div>
                    {/* {item.ClassID}
                     {item.ClassName}
                      {item.ClassDetail} */}
                    <ItemDR key = {item.ClassID} data = {item} />
                  </div>
                    // <ItemDR key= (item.ClassID) data = {item} onDelete={onDelete}/>
                    
                )
            )
            }
        </>
    )
}
export default ListDr;
