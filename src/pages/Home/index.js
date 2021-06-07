import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Bg from '../../assets/bg.jpg';
import Icon1 from '../../assets/icon1.png';
import Icon2 from '../../assets/icon2.png';
import Icon3 from '../../assets/icon3.png';
import Study from '../../assets/study.jpeg';
import Formula from '../../assets/formula.png';
import Code from '../../assets/code.jpg';
import Wheel from '../../assets/wheel.jpeg';
import Yuque from '../../assets/yuque.png';
import Github from '../../assets/Github.png';
import Npm from '../../assets/npm.png';
import './index.css';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../../components/Spinner';
import requestPost from '../../httpServer';

const Home = () => {

    useEffect(() => {
        function scrollHandle() {
            const header = document.getElementById("header");
            header.classList.toggle("stricky", window.scrollY > 0)
        }
        window.addEventListener('scroll', scrollHandle)
        return () => window.removeEventListener("scroll", scrollHandle)
    }, []);

    const [loading, setLoading] = useState(false);

    function toggleHandle() {
        const header = document.getElementById("header");
        header.classList.toggle("active")
    }

    function showWaring(title) {
        toast.warn(title, {
            position: "top-right",
            autoClose: 1000,
            transition: Flip,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    function sendMessage() {
        const formDom = document.querySelector("form")
        let form = new FormData(formDom);
        let name = form.get("name");
        if (!name) {
            showWaring("请填写姓名!");
            return;
        }
        let email = form.get("email");
        if (!email) {
            showWaring("请填写邮箱!");
            return;
        }
        let message = form.get("message");
        if (!message) {
            showWaring("请填写留言!");
            return;
        }
        setLoading(true);
        requestPost('/email/message', { name, email, message }).then(res => {
            if (res.data.response.includes("OK")) {
                formDom.reset();
                //成功;
                toast.dark('感谢留言!', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.dark('留言失败!', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                //失败;
            }
            setLoading(false);
        })
    }
    return (
        <div className="min-h-1000">
            <header id="header" className="">
                <a href="#" className="logo">Corazon</a>
                <ul>
                    <li className="header-ul-li"><a className="header-ul-li-a" onClick={toggleHandle} href="#home">首页</a></li>
                    <li className="header-ul-li"><a className="header-ul-li-a" onClick={toggleHandle} href="#about">关于</a></li>
                    <li className="header-ul-li"><a className="header-ul-li-a" onClick={toggleHandle} href="#classify">分类</a></li>
                    <li className="header-ul-li"><a className="header-ul-li-a" onClick={toggleHandle} href="#article">文章</a></li>
                    <li className="header-ul-li"><a className="header-ul-li-a" onClick={toggleHandle} href="#dream">希望</a></li>
                    <li className="header-ul-li"><a className="header-ul-li-a" onClick={toggleHandle} href="#message">留言</a></li>
                </ul>
                <div className="toggle" onClick={toggleHandle}></div>
            </header>

            <section className="banner" style={{ background: `url(${Bg})` }} id="home">
                <h2>Time waits for<br /><span className="text-regal-blue">no</span> one</h2>
            </section>

            <section className="sec" id="about">
                <div className="content">
                    <div className="mxw800p">
                        <h3>胡言乱语</h3>
                        <p>很早以前就想在缤纷的世界里留下一点自己的足迹，又被庸庸碌碌冲淡了。今日建立此站，算是实现了早年的一个小小的梦想</p>
                        <Link className="btn" target="_blank" to="/resume">关于我</Link>
                    </div>
                </div>
            </section>

            <section className="sec" id="classify">
                <div className="content">
                    <div className="mxw800p">
                        <h3>珍惜时间</h3>
                        <p>浪费时间的最危险方法不是花时间在玩，而是花时间在做假工作。当你花时间玩乐时，你会知道自己在放纵。内心的警报很快就会发出。如果某天早晨我醒来后，整天坐在沙发上看电视，我很快会觉得自己一定是做错了什么。这样一想，就让人不舒服。你只需要在沙发上看电视2个小时，就会有这种不舒服的反应，更不用说整天看电视了。但是，还有一些天，你整天都在忙，等到晚上你问自己今天干了什么，回答是：虽然很忙，做的却没什么意义。</p>
                    </div>
                    <div className="services">
                        <div className="box">
                            <div className="iconBx">
                                <img src={Icon1} />
                            </div>
                            <div className="content">
                                <h2>写作</h2>
                                <p>行是知之始，知是行之成。</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="iconBx">
                                <img src={Icon2} />
                            </div>
                            <div className="content">
                                <h2>编码</h2>
                                <p>操千曲而后晓声，观千剑而后识器。</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="iconBx">
                                <img src={Icon3} />
                            </div>
                            <div className="content">
                                <h2>积累</h2>
                                <p>日拱一卒无有尽，功不唐捐终入海。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec stats">
                <div className="content">
                    <div className="mxw800p">
                        <h3>文章分类</h3>
                        <p>统计文章的种类和数量。</p>
                    </div>
                    <div className="statsBox">
                        <div className="box">
                            <h2>3</h2>
                            <h4>Javascript</h4>
                        </div>
                        <div className="box">
                            <h2>1</h2>
                            <h4>Computer</h4>
                        </div>
                        <div className="box">
                            <h2>1</h2>
                            <h4>Node</h4>
                        </div>
                        <div className="box">
                            <h2>0</h2>
                            <h4>Other</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec" id="article">
                <div className="content">
                    <div className="mxw800p">
                        <h3>文章列表</h3>
                        <p>不定期更新文章，随笔。</p>
                    </div>
                    <div className="workBx">
                        <div className="brand">
                            <Link to={{ pathname: "/article", state: { name: "errorArticle" } }}><h2>前端异常处理</h2></Link>
                        </div>
                        <div className="brand">
                            <Link to={{ pathname: "/article", state: { name: "pieArticle" } }}><h2>canvas画饼状图</h2></Link>
                        </div>
                        <div className="brand">
                            <Link to={{ pathname: "/article", state: { name: "netResource" } }}><h2>JS网络请求和资源</h2></Link>
                        </div>
                        <div className="brand">
                            <Link to={{ pathname: "/article", state: { name: "netWork" } }}><h2>计算机网络</h2></Link>
                        </div>
                        <div className="brand">
                            <Link to={{ pathname: "/article", state: { name: "pm2" } }}><h2>PM2部署ts项目</h2></Link>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>广告位招租</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>广告位招租</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>广告位招租</h2></a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="sec" id="dream">
                <div className="content">
                    <div className="mxw800p">
                        <h3>未来的梦</h3>
                        <p>记录未来想做的事，未完成的梦。</p>
                    </div>
                    <div className="teamBx">
                        <div className="member">
                            <div className="imgBx">
                                <img src={Study} />
                            </div>
                            <div className="details">
                                <div>
                                    <h2>考研<br /><span>考一个计算机专业的研究生</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="member">
                            <div className="imgBx">
                                <img src={Formula} />
                            </div>
                            <div className="details">
                                <div>
                                    <h2>刷题<br /><span>leetcode刷500道题</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="member">
                            <div className="imgBx">
                                <img src={Wheel} />
                            </div>
                            <div className="details">
                                <div>
                                    <h2>造轮子<br /><span>造一个精致的轮子</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="member">
                            <div className="imgBx">
                                <img src={Code} />
                            </div>
                            <div className="details">
                                <div>
                                    <h2>PHP<br /><span>掌握一门后端语言</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec contact" id="message">
                <div className="content">
                    <div className="mxw800p">
                        <h3>格言</h3>
                        <p>我的尸体，不会腐烂在泥土里，会像鸟儿一样，死在天空里。</p>
                    </div>
                    <div className="contactForm">
                        <form>
                            <div className="row100">
                                <div className="inputBx50">
                                    <input name="name" type="text" placeholder="Full name" />
                                </div>
                                <div className="inputBx50">
                                    <input name="email" type="text" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputBx100">
                                    <textarea name="message" placeholder="message"></textarea>
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputBx100">
                                    <div className="submit" onClick={sendMessage}>留言</div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="sci">
                        <ul>
                            <li><a href="https://www.yuque.com/corazon" target="_blank"><img src={Yuque} /></a></li>
                            <li><a href="https://github.com/FriendsA" target="_blank"><img src={Github} /></a></li>
                            <li><a href="https://www.npmjs.com/~corazon" target="_blank"><img src={Npm} /></a></li>
                        </ul>
                    </div>
                    <p className="copyright">Develop By <a href="#">Corazon</a></p>
                </div>
            </section>
            <ToastContainer />
            <Spinner loading={loading} />
        </div>
    )
}

export default Home;