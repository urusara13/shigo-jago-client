import React, { Component } from 'react';

class Hire extends Component {
    render() {
        return (
            <div className="sg-main">
                <div className="sg-content">
                    <h1>채용정보</h1>
                    <div className="sg-main__scarcity">
                        <span>What's your next destination?</span>
                    </div>
                    <div className="job-board">
                        <div className="jobs-board__departments">
                            <h6 class="jobs-board__subtitle">Departments</h6>
                            <ul class="jobs-board__departments__list">
                                <li class="jobs-board__departments__item">
                                    <button tabindex="0" class="jobs-board__departments__item__button" type="button">All Departments (83)</button>
                                </li>
                                <li class="jobs-board__departments__item">
                                    <button tabindex="0" class="jobs-board__departments__item__button" type="button">Finance (9)</button>
                                </li>
                                <li class="jobs-board__departments__item">
                                    <button tabindex="0" class="jobs-board__departments__item__button" type="button">Data Science/Analytics(4)</button>
                                </li>
                                <li class="jobs-board__departments__item">
                                    <button tabindex="0" class="jobs-board__departments__item__button" type="button">Design (9)</button>
                                </li>
                                <li class="jobs-board__departments__item">
                                    <button tabindex="0" class="jobs-board__departments__item__button" type="button">Engineering (60)</button>
                                </li>
                                <li class="jobs-board__departments__item">
                                    <button tabindex="0" class="jobs-board__departments__item__button" type="button">Marketing (1)</button>
                                </li>
                                <li class="jobs-board__departments__item">
                                    <button tabindex="0" class="jobs-board__departments__item__button" type="button">Information Technology (1)</button>
                                </li>
                                <li class="jobs-board__departments__item">
                                    <button tabindex="0" class="jobs-board__departments__item__button" type="button">Public Policy/Communications (4)</button>
                                </li>


                                </ul>
                        </div>

                    </div>
                </div>
                </div>
        )
    }
}

export default Hire