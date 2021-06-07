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
                    {/* <div className="about">
                        <h2 className="title2">专业技能</h2>
                        <p>
                            React，Redux，Webpack ，TailwindCss， Koa，Less，Postcss，Mocha，Cypress ，Babel，TypeScript
                        </p>
                    </div> */}
                    <div className="about">
                        <h2 className="title2">工作经历</h2>
                        <div className="box">
                            <div className="year_company">
                                <h5>2019 - 至今</h5>
                                <h5 className="pl-4">上海诺映科技有限公司</h5>
                            </div>
                        </div>
                        <div className="box">
                            <div className="year_company">
                                <h5>2018.9 - 2019.3 </h5>
                                <h5 className="pl-4">北京宇信科技集团股份有限公司</h5>
                            </div>
                        </div>
                        <div className="box">
                            <div className="year_company">
                                <h5>2016.7 - 2018.8</h5>
                                <h5 className="pl-4">北京木王星科技有限公司</h5>
                            </div>
                        </div>
                    </div>
                    <div className="about">
                        <h2 className="title2">项目经历</h2>
                        <div className="project">
                            <h4>个人网站</h4>
                            <div className='project_content'>自己搭建的个人网站，用于对感兴趣和新鲜技术的落地，记录个人博客，学习服务器相关等。</div>
                            <h5>项目架构：</h5>
                            <div className='project_content'>web 使用 react生态 + webpack5 + tailwindcss + ts，没有使用市面上的cli，自己从0搭建的webpack5开发项目，文章部分使用react-markdown展示md文件。留言采用发送邮件到邮箱的方式, 用ngnix发布静态资源</div>
                            <div className='project_content'>BFF层使用koa+awilix 搭建，使用装饰器声明式事务管理的面向切面编程（IOC）思想，log4js中间件的日志记录，nodemailer发送留言邮件，pm2 + ts-node 部署保障项目稳定。</div>
                            <h5>项目构建及优化：</h5>
                            <div className='project_content'>充分利用webpack5的集成压缩优化，提取node_module模块，提取引导模块，使业务代码打包不受runtime 和moduleId的影响在打包时产生hash变化问题，使webpack的catch更高效，提高构建速度。使用原子css理念的tailwind，配合postcss做polyfill等让开发更专注于业务和逻辑。利用webpack插件使开发时热部署的反馈更简洁清晰。</div>
                            <h5>考虑点:</h5>
                            <div className='project_content'>数据的存储考虑由文件存储转为数据库存储，BFF端的心跳检测，定时任务过滤错误日志。</div>

                            <h4>商保一卡通</h4>
                            <div className='project_content'>普惠型医疗健康服务，整合全国范围内稀缺医疗绿通资源，为客户提供视频医生、在线问诊，住院/手术安排等服务。</div>
                            <h5>项目架构：</h5>
                            <div className='project_content'>主要架构react 生态 + antd-mobile ，视频对话部分包装开发腾讯的TRTC和TIM</div>
                            <h5>项目构建及优化：</h5>
                            <div className='project_content'>根据Oauth登陆模式和业务结构利用craco/ customize-cra二次修改react-scripts的配置，优化webpack的分包，提取公共模块，去除map文件和commit文件，减小生产打包时间和体积，小文件打包成base64，提升应用的首次渲染时间。</div>
                            <div className='project_content'>css避免深层嵌套，命名使用原子css和参考css MES的制定命名，使用PostCss插件，移动端打包时把px转换成rem，添加autoprefixer提升开发效率。</div>
                            <div className='project_content'>利用react的lazy实现部分页面懒加载，单独打包，减少应用首次渲染的js体积，利用react的memo和PureComponents减少不必要的渲染，优化使用体验，使CD的构建时间从3-5分钟缩短到1分钟。</div>
                            <h5>考虑点:</h5>
                            <div className='project_content'>对于医院选择的长列表渲染采取虚拟列表。</div>
                            <div className='project_content'>常用地址等用户数据的本地storage缓存。</div>
                            <div className='project_content'>微信H5的多型号手机和手机系统的适配，例如输入法吊起时在不同手机系统导致的页面布局变化表现不同，影响浮动元素和绝对定位元素，影响页面高度等。</div>
                            <div className='project_content'>微信API受不同操作系统的影响，不同微信版本或手机系统对JS的Polyfill程度不同，对webRTC的支持程度不同等，异常错误的捕获。</div>

                            <h4>中台系统</h4>
                            <div className='project_content'>中台系统是保险系统的中转和对外中心，负责案件回传和与第三方对接的数据传输以及数据进入系统的分配和调度,数据的可视化。</div>
                            <h5>项目架构：</h5>
                            <div className='project_content'>react 生态 + react hooks + antd-mobile + Echarts</div>
                            <h5>项目构建及优化：</h5>
                            <div className='project_content'>根据CRA搭建项目模版，利用craco调整优化项目结构，并和公司登陆业务结合，用yeoman开发了适用于公司业务的cli(<a target="_blank" href="https://www.npmjs.com/package/generator-puying">generator-puying</a>),实现一行命令搭建基础脚手架，提升开发新项目的效率。</div>
                            <div className='project_content'>公共组件开发，图片查看组件(<a target="_blank" href="https://www.npmjs.com/package/react-single-image-viewer">react-single-image-viewer</a>)，和后台cdn业务结合的图片上传组件等。</div>
                            <div className='project_content'>利用window.onerror，"error"、"unhandledrejection"、componentDidCatch 等监听事件实现错误的处理和捕获，并利用img标签上报不占用额外资源</div>
                            <h5>考虑点:</h5>
                            <div className='project_content'>业务上多套中台系统的公用，后台公共api和配置菜单的设计，配置多套config文件，在CI中对不同环境不同渠道使用不用的config文件构建项目，达到一套代码多个项目的目的。</div>
                            <div className='project_content'>查询列表页面的结构大体相似，可以抽出写成可配置可复用组件。</div>
                            <div className='project_content'>部分页面大量数据的展示，利用部分结构懒加载数据，并利用store缓存数据。</div>
                            <div className='project_content'>根据公司后台的接口数据结构对fetch方法的不同调用封装。例如请求类型，是否带有传文件，是否带token，及不同Content-Type的数据传输。</div>

                            <h4>公寓租赁</h4>
                            <div className='project_content'>交通银行的房屋租赁平台的金融服务方案,基于微信公众号的C端租赁服务和PC上B端公寓运营管理系统化。</div>
                            <h5>项目架构：</h5>
                            <div className='project_content'>C端架构主要使用 webpack,react，B端使用dva.js,antd,roadhog搭建</div>

                            <h4>Diablo 系统</h4>
                            <div className='project_content'>根据公司实际情况设计母公司自动化管理业务OA系统，有PC端与H5端两个产品。</div>
                            <h5>项目架构：</h5>
                            <div className='project_content'>PC端 (SSR) play1, Bootstrap, Jquery;H5端 Ionic3+Angular5搭建。</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume;