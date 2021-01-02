import React, { Component } from 'react';
import './Hire.css';
import sgjg from '../../images/sgjg.png'

class Hire extends Component {
    render() {
        return (
            <div className="hr_main">
                <div className="hr_wrapper">
                    <div className="hr_header clearfix">
                        <div className="hr_logo">
                            <h1>Find Your Next Career<span>Jobs</span></h1>
                        </div>
                        <ul className="hr_nav">
                            <li className="current">All Jobs</li>
                            <li>Full-Time</li>
                            <li>Part-Time</li>
                            <li>Freelancer</li>
                            <li>Contract</li>
                        </ul>
                    </div>

                    <ul className="timeline">
                        <ul>
                            <li className="listing clearfix">
                                <div className="image_wrapper">
                                    <img src={sgjg} alt='sgjg' />
                                </div>
                                <div className="job_full">
                                    <span className="job_title">UX Designer</span>
                                    <span className="job_info">ShigoJago<span>&bull;</span> Pangyo <span>&bull;</span> Jan 1st</span>
                                </div>
                                <span className="job_type part_time">Part-Time</span>


                            </li>

                        </ul>

                        <ul>
                            <li className="listing clearfix">
                                <div className="image_wrapper">
                                    <img src={sgjg} alt='sgjg' />
                                </div>
                                <div className="job_full">
                                    <span className="job_title">Data Scientist</span>
                                    <span className="job_info">ShigoJago<span>&bull;</span> Pangyo <span>&bull;</span> Jan 1st</span>
                                </div>
                                <span className="job_type full_time">Full-Time</span>


                            </li>

                        </ul>

                        <ul>
                            <li className="listing clearfix">
                                <div className="image_wrapper">
                                    <img src={sgjg} alt='Star' />
                                </div>
                                <div className="job_full">
                                    <span className="job_title">Frontend Engineer</span>
                                    <span className="job_info">ShigoJago<span>&bull;</span> Pangyo <span>&bull;</span> Jan 1st</span>
                                </div>
                                <span className="job_type freelance">Freelance</span>


                            </li>

                        </ul>

                        <ul>
                            <li className="listing clearfix">
                                <div className="image_wrapper">
                                    <img src={sgjg} alt='Star' />
                                </div>
                                <div className="job_full">
                                    <span className="job_title">Backend Engineer</span>
                                    <span className="job_info">ShigoJago<span>&bull;</span> Pangyo <span>&bull;</span> Jan 1st</span>
                                </div>
                                <span className="job_type full_time">Full-Time</span>


                            </li>

                        </ul>

                        <li className="job_date">Jan 1st</li>

                        <ul>
                            <li className="listing clearfix">
                                <div className="image_wrapper">
                                    <img src={sgjg} alt='Star' />
                                </div>
                                <div className="job_full">
                                    <span className="job_title">Product Manager</span>
                                    <span className="job_info">ShigoJago<span>&bull;</span> Pangyo <span>&bull;</span> Dec 31st</span>
                                </div>
                                <span className="job_type contract">contract</span>


                            </li>

                        </ul>

                        <ul>
                            <li className="listing clearfix">
                                <div className="image_wrapper">
                                    <img src={sgjg} alt='Star' />
                                </div>
                                <div className="job_full">
                                    <span className="job_title">Systems Engineer</span>
                                    <span className="job_info">ShigoJago<span>&bull;</span> Pangyo <span>&bull;</span> Dec 31st</span>
                                </div>
                                <span className="job_type full_time">Full-Time</span>


                            </li>

                        </ul>

                        <li className="job_date">Dec 31st</li>

                        <li className="load_more">
                            <button className="load_button">Load More</button>
                        </li>
                    </ul>



                </div>
            </div>


        )

    }
}

export default Hire