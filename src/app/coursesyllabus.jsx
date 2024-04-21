import './coursesyllabus.css'
import { Navbar } from '../components/navbar';
import { Link } from 'react-router-dom';

export function CourseSyllabus(){
    return(
        <>
            <Navbar/>
        <div className="allcontent">
            <div className="row">
                <div className="column pee-one">
                    <Link to="/peeone" className="background-opacity">
                        <div className="text">ปี 1</div>
                    </Link>
                </div>
                <div className="column pee-two">
                    <Link to="/peetwo" className="background-opacity">
                        <div className="text">ปี 2</div>
                    </Link>
                </div>
            </div>

            <div className="row">
                <div className="column pee-three">
                    <Link to="/peethree" className="background-opacity">
                        <div className="text">ปี 3</div>
                    </Link>
                </div>
                <div className="column pee-four">
                    <Link to="/peefour" className="background-opacity">
                        <div className="text">ปี 4</div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}