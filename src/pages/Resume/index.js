import React from 'react';
import './index.css';
import Mine from '../../assets/mine.png';

const Resume = () => {

    return (
        <div className="resume">
            <div className="container">
                <div className="left_Side">
                    <div className="profileText">
                        <div className="imgBx">
                            <img src={Mine} />
                        </div>
                        <h2>谭明雨<br /><span>前端开发工程师</span></h2>
                    </div>

                    <div className="contextInfo">
                        <h3 className="title">联系方式</h3>
                        <ul>
                            <li>
                                <span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
                                <span className="text">176 0073 9820</span>
                            </li>
                            <li>
                                <span className="icon"><i className="fa fa-envelope-o" aria-hidden="true"></i></span>
                                <span className="text">981604445@qq.com</span>
                            </li>
                            <li>
                                <span className="icon"><i className="fa fa-github" aria-hidden="true"></i></span>
                                <span className="text">github.com/FriendsA</span>
                            </li>
                        </ul>
                    </div>

                    <div className="contextInfo education">
                        <h3 className="title">教育经历</h3>
                        <ul>
                            <li>
                                <h5>2012-2016</h5>
                                <h4>数学科学学院 信息与计算科学</h4>
                                <h4>黑龙江大学</h4>
                            </li>
                        </ul>
                    </div>

                    <div className="contextInfo skill">
                        <h3 className="title">职业技能</h3>
                        <ul>
                            <li>
                                <span className="text">Javascript</span>
                                <span className="percent">
                                    <div style={{ width: "90%" }}></div>
                                </span>
                            </li>
                            <li>
                                <span className="text">React</span>
                                <span className="percent">
                                    <div style={{ width: "90%" }}></div>
                                </span>
                            </li>
                            <li>
                                <span className="text">Vue</span>
                                <span className="percent">
                                    <div style={{ width: "75%" }}></div>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right_Side">
                    <div className="about">
                        <h2 className="title2">Profile</h2>
                        <p>
                            fdsafdsafdafdsafdaffdsafdsafdsafdsafdsafasf
                            <br></br>
                            fdsafdsafdafdsafdaffdsafdsafdsafdsafdsafasf
                        </p>
                    </div>
                    <div className="about">
                        <h2 className="title2">Experience</h2>
                        <div className="box">
                            <div className="year_company">
                                <h5>2019 - 至今</h5>
                                <h5>上海诺映科技有限公司</h5>
                            </div>
                            <div className="text">
                                <h4>fdafa</h4>
                                <p>fdasfdsa fdsfdsafasfdsafdsaf</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;