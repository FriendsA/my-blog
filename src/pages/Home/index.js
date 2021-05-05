import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Bg from '../../assets/bg.jpg';
import Icon1 from '../../assets/icon1.png';
import Icon2 from '../../assets/icon2.png';
import Icon3 from '../../assets/icon3.png';
import Img1 from '../../assets/1.jpg';
import Img2 from '../../assets/2.jpg';
import Img3 from '../../assets/3.jpg';
import Img4 from '../../assets/4.jpg';
import FIcon from '../../assets/facebook.png';
import LIcon from '../../assets/linkedin.png';
import TIcon from '../../assets/twitter.png';
import './index.css';

const Home = () => {

    useEffect(() => {
        window.addEventListener('scroll', function () {
            const header = document.getElementById("header");
            header.classList.toggle("stricky", window.scrollY > 0)
        })
    }, []);

    function toggleHandle(){
        const header = document.getElementById("header");
        header.classList.toggle("active")
    }

    return (
        <div className="min-h-1000">
            <header id="header" className="">
                <a href="#" className="logo">Corazon</a>
                <ul>
                    <li className="header-ul-li"><a className="header-ul-li-a" onClick={toggleHandle} href="#home">首页</a></li>
                    <li className="header-ul-li"><a className="header-ul-li-a" onClick={toggleHandle} href="#about">关于</a></li>
                    <li className="header-ul-li"><a className="header-ul-li-a" onClick={toggleHandle} href="#services">网站</a></li>
                    <li className="header-ul-li"><a className="header-ul-li-a" onClick={toggleHandle} href="#portfolio">文章</a></li>
                    <li className="header-ul-li"><a className="header-ul-li-a" onClick={toggleHandle} href="#team">分类</a></li>
                    <li className="header-ul-li"><a className="header-ul-li-a" onClick={toggleHandle} href="#contact">留言</a></li>
                </ul>
                <div className="toggle" onClick={toggleHandle}></div>
            </header>

            <section className="banner" style={{ background: `url(${Bg})` }} id="home">
                <h2>Time waits for<br /><span className="text-regal-blue">no</span> one</h2>
            </section>

            <section className="sec" id="about">
                <div className="content">
                    <div className="mxw800p">
                        <h3>珍惜时间</h3>
                        <p>几天前，我意识到了一件令人惊讶的事情：浪费时间的最危险方法不是花时间在玩，而是花时间在做假工作。当你花时间玩乐时，你会知道自己在放纵。内心的警报很快就会发出。如果某天早晨我醒来后，整天坐在沙发上看电视，我很快会觉得自己一定是做错了什么。这样一想，就让人不舒服。你只需要在沙发上看电视2个小时，就会有这种不舒服的反应，更不用说整天看电视了。但是，还有一些天，你整天都在忙，等到晚上你问自己今天干了什么，回答是：虽然很忙，做的却没什么意义。
你的感觉也会因此不好，但是不像整天看电视那样糟糕。如果我整天看电视，我会觉得自己正在走向灭亡，但如果是忙忙碌碌做无意义的事情，这样的警报就不会响起。因为我所做的事情表面上看起来像是真正的工作，比如处理电子邮件。表面上看，你一天都在办公桌前工作，但其实你也是在浪费时间，因为这不会让你的生活发生真正的变化。而且由于你的内心不会发出警报，比起看电视，假工作才是浪费时间最危险的方法。时间要用来做对你真正重要的事情，不要落入假工作的陷阱。</p>
                        <Link className="btn" to="/">首页</Link>
                    </div>
                </div>
            </section>

            <section className="sec" id="services">
                <div className="content">
                    <div className="mxw800p">
                        <h3>珍惜时间</h3>
                        <p>几天前，我意识到了一件令人惊讶的事情：浪费时间的最危险方法不是花时间在玩，而是花时间在做假工作。当你花时间玩乐时，你会知道自己在放纵。内心的警报很快就会发出。如果某天早晨我醒来后，整天坐在沙发上看电视，我很快会觉得自己一定是做错了什么。这样一想，就让人不舒服。你只需要在沙发上看电视2个小时，就会有这种不舒服的反应，更不用说整天看电视了。但是，还有一些天，你整天都在忙，等到晚上你问自己今天干了什么，回答是：虽然很忙，做的却没什么意义。</p>
                    </div>
                    <div className="services">
                        <div className="box">
                            <div className="iconBx">
                                <img src={Icon1} />
                            </div>
                            <div className="content">
                                <h2>Design</h2>
                                <p>你的感觉也会因此不好，但是不像整天看电视那样糟糕。如果我整天看电视，我会觉得自己正在走向灭亡，但如果是忙忙碌碌做无意义的事情，这样的警报就不会响起。</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="iconBx">
                                <img src={Icon2} />
                            </div>
                            <div className="content">
                                <h2>Develop</h2>
                                <p>你的感觉也会因此不好，但是不像整天看电视那样糟糕。如果我整天看电视，我会觉得自己正在走向灭亡，但如果是忙忙碌碌做无意义的事情，这样的警报就不会响起。</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="iconBx">
                                <img src={Icon3} />
                            </div>
                            <div className="content">
                                <h2>Branding</h2>
                                <p>你的感觉也会因此不好，但是不像整天看电视那样糟糕。如果我整天看电视，我会觉得自己正在走向灭亡，但如果是忙忙碌碌做无意义的事情，这样的警报就不会响起。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec stats">
                <div className="content">
                    <div className="mxw800p">
                        <h3>珍惜时间</h3>
                        <p>几天前，我意识到了一件令人惊讶的事情：浪费时间的最危险方法不是花时间在玩，而是花时间在做假工作。当你花时间玩乐时，你会知道自己在放纵。内心的警报很快就会发出。如果某天早晨我醒来后，整天坐在沙发上看电视，我很快会觉得自己一定是做错了什么。这样一想，就让人不舒服。你只需要在沙发上看电视2个小时，就会有这种不舒服的反应，更不用说整天看电视了。但是，还有一些天，你整天都在忙，等到晚上你问自己今天干了什么，回答是：虽然很忙，做的却没什么意义。</p>
                    </div>
                    <div className="statsBox">
                        <div className="box">
                            <h2>1200+</h2>
                            <h4>projects</h4>
                        </div>
                        <div className="box">
                            <h2>800+</h2>
                            <h4>projects</h4>
                        </div>
                        <div className="box">
                            <h2>150+</h2>
                            <h4>projects</h4>
                        </div>
                        <div className="box">
                            <h2>120+</h2>
                            <h4>Awards</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec" id="portfolio">
                <div className="content">
                    <div className="mxw800p">
                        <h3>Recent work</h3>
                        <p>几天前，我意识到了一件令人惊讶的事情：浪费时间的最危险方法不是花时间在玩，而是花时间在做假工作。当你花时间玩乐时，你会知道自己在放纵。内心的警报很快就会发出。如果某天早晨我醒来后，整天坐在沙发上看电视，我很快会觉得自己一定是做错了什么。这样一想，就让人不舒服。你只需要在沙发上看电视2个小时，就会有这种不舒服的反应，更不用说整天看电视了。但是，还有一些天，你整天都在忙，等到晚上你问自己今天干了什么，回答是：虽然很忙，做的却没什么意义。</p>
                    </div>
                    <div className="workBx">
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                        <div className="brand">
                            <a href="#"><h2>Brand Name</h2></a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="sec" id="team">
                <div className="content">
                    <div className="mxw800p">
                        <h3>Meet our Export</h3>
                        <p>几天前，我意识到了一件令人惊讶的事情：浪费时间的最危险方法不是花时间在玩，而是花时间在做假工作。当你花时间玩乐时，你会知道自己在放纵。内心的警报很快就会发出。如果某天早晨我醒来后，整天坐在沙发上看电视，我很快会觉得自己一定是做错了什么。这样一想，就让人不舒服。你只需要在沙发上看电视2个小时，就会有这种不舒服的反应，更不用说整天看电视了。但是，还有一些天，你整天都在忙，等到晚上你问自己今天干了什么，回答是：虽然很忙，做的却没什么意义。</p>
                    </div>
                    <div className="teamBx">
                        <div className="member">
                            <div className="imgBx">
                                <img src={Img1} />
                            </div>
                            <div className="details">
                                <div>
                                    <h2>Json Dan<br /><span>Creative Director</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="member">
                            <div className="imgBx">
                                <img src={Img2} />
                            </div>
                            <div className="details">
                                <div>
                                    <h2>Json Dan<br /><span>Creative Director</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="member">
                            <div className="imgBx">
                                <img src={Img3} />
                            </div>
                            <div className="details">
                                <div>
                                    <h2>Json Dan<br /><span>Creative Director</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="member">
                            <div className="imgBx">
                                <img src={Img4} />
                            </div>
                            <div className="details">
                                <div>
                                    <h2>Json Dan<br /><span>Creative Director</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sec contact" id="contact">
                <div className="content">
                    <div className="mxw800p">
                        <h3>Send a message</h3>
                        <p>浪费时间的最危险方法不是花时间在玩，而是花时间在做假工作。</p>
                    </div>
                    <div className="contactForm">
                        <form>
                            <div className="row100">
                                <div className="inputBx50">
                                    <input name="" type="text" placeholder="Full name" />
                                </div>
                                <div className="inputBx50">
                                    <input name="" type="text" placeholder="Email Adress" />
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputBx100">
                                    <textarea placeholder="message"></textarea>
                                </div>
                            </div>
                            <div className="row100">
                                <div className="inputBx100">
                                    <input type="submit" name="" value="留言"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="sci">
                        <ul>
                            <li><a href="#"><img src={FIcon}/></a></li>
                            <li><a href="#"><img src={TIcon} /></a></li>
                            <li><a href="#"><img src={LIcon} /></a></li>
                        </ul>
                    </div>
                    <p className="copyright">Develop By <a href="#">Corazon</a></p>
                </div>
            </section>
        </div>
    )
}

export default Home;