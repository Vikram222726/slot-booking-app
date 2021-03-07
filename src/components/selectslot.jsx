import React from 'react';
import { Link } from 'react-router-dom';

const SelectSlots = () => {
    return(
        <div className="bookslot">
            <div className="newslots">
                <div className="container">
                    <div className="row row6">
                        <div className="col-6 c1 c2 column">
                            <h2 className="selhead">From</h2>
                            <div className="ele1">
                                <div className="time1"><span className="t1">05</span><span className="t2">24</span></div>
                            </div>
                            <div className="ele1">
                                <div className="time1"><span className="t1">04</span><span className="t2">23</span></div>
                            </div>
                            <div className="ele1">
                                <div className="timeimp"><span className="t1imp">03</span><span className="t2imp">22</span><span className="Am">AM</span></div>
                            </div>
                            <div className="ele1">
                                <div className="time1"><span className="t1">02</span><span className="t2">21</span></div>
                            </div>
                            <div className="ele1">
                                <div className="time1"><span className="t1">01</span><span className="t2">20</span></div>
                            </div>
                            
                        </div>
                        <div className="col-6 c1 column">
                            <h2 className="selhead">To</h2>
                            <div className="ele1">
                                <div className="time1"><span className="t1">05</span><span className="t2">24</span></div>
                            </div>
                            <div className="ele1">
                                <div className="time1"><span className="t1">04</span><span className="t2">23</span></div>
                            </div>
                            <div className="ele1">
                                <div className="timeimp"><span className="t1imp">03</span><span className="t2imp">22</span><span className="Am">AM</span></div>
                            </div>
                            <div className="ele1">
                                <div className="time1"><span className="t1">02</span><span className="t2">21</span></div>
                            </div>
                            <div className="ele1">
                                <div className="time1"><span className="t1">01</span><span className="t2">20</span></div>
                            </div>
                        </div>
                        <div className="col-10 mx-auto">
                        <div className="savebtn"><Link className="btnsave" to="/">Save</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectSlots;