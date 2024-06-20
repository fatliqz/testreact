import axios from "axios";
import { useState, useEffect } from "react";
import ListDr from "./ListDr";


function ItemDR(props) {

    return (
        <>
        
            <div className="row border rounded shadow-sm mt-3">
                <div className="col-2">
                    <h2> {props.data.ClassID} </h2>
                </div>
                <div className="col-4">
                    <h5 className="text-primary"> {props.data.ClassName} </h5>
                    {/* <Link to={/Dr/${props.data.ClassID}} className='btn btn-outline-primary me-3'> แก้ไข </Link> */}
                    {/* <button type="button" className="btn btn-outline-danger" onClick={onDelete}> ลบ </button> */}
                </div>
                <div className="col-6">  {props.data.ClassDetail}
                </div>
            </div >
        </>
    )
}
export default ItemDR;

