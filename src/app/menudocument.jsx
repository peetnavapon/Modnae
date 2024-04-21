import React from "react";
import { Navbar } from "../components/navbar";
import './menudocument.css'
import { Link } from "react-router-dom";

export function MenuDocument() {
    return (
        <>
        <Navbar/>
        <div className="allcontent">
            <div className="row">
                <div className="column top-left">
                    <Link to="/coursesyllabus" className="background-opacity"></Link>
                </div>
                <div className="column top-right">
                    <Link to="/coursebook" className="background-opacity"></Link>
                </div>
            </div>

            <div className="row">
                <div className="column bot-left">
                    <Link to="/calendar" className="background-opacity"></Link>
                </div>
                <div className="column bot-right">
                    <Link to="/contact" className="background-opacity"></Link>
                </div>
            </div>
        </div>

        </>
    );
}

