import React from "react";
import { Navbar } from "./navbar";
import './menudocument.css'

export function MenuDocument() {
    return (
        <>
        <Navbar/>
        <div className="allcontent">
            <div className="row">
                <div className="column top-left">
                    <a href="#" className="background-opacity">
                        <div className="text">asjdnjasdb</div>
                    </a>
                </div>
                <div className="column top-right">
                    <a href="#" className="background-opacity">
                        <div className="text">asjdnjasdb</div>
                    </a>
                </div>
            </div>

            <div className="row">
                <div className="column bot-left">
                    <a href="#" className="background-opacity">
                        <div className="text">asjdnjasdb</div>
                    </a>
                </div>
                <div className="column bot-right">
                    <a href="#" className="background-opacity">
                        <div className="text">asjdnjasdb</div>
                    </a>
                </div>
            </div>
        </div>

        </>
    );
}

