import React from 'react';

import ReactDOM from 'react-dom';
import Home from './components/home'
class App extends React.Component{
	
	render(){
		return(
			<div className="home">
			<header>
			<div className="wrap">
			
			<div className="zhuzhi clear">
			
			<div className="dizhi">
			<i className="icon iconfont icon-dizhi"></i>
			<span className="xinxi">浙江旺田商务楼</span>
			<i className="icon iconfont icon-xiala"></i>
			</div>
			<ul className="weath">
			<li>25℃<b>晴天</b></li>
			<li>
			<i className="icon iconfont icon-iconset0451"></i>
			
			</li>
			
			</ul>
			</div>
			<div className="button">
			<i className="icon iconfont icon-sousuo"></i>
			
	      <input type="text" placeholder="免费领取你的专属红包" />
			
			</div>
			<ul className="libiao">
			<li>肯德基</li>
			<li>鸭脖</li>
			<li>芒果</li>
			<li>水果狂欢减20</li>
			<li>会员领红包</li>
			<li>烤翅</li>
			
			<li>披萨</li>
			
			</ul>
			
			
			</div>
			
			</header>
			<section>

			</section>
			<footer className="foot">
			
			<span style={{color:'#00a7ff'}}><i style={{color:'#00a7ff'}} className="icon iconfont icon-changyonglogo40"></i>外卖</span>
			<span><i className="icon iconfont icon-weibiaoti-"></i>发现</span>
			<span><i className="icon iconfont icon-faxian"></i>订单</span>
			<span><i className="icon iconfont icon-wode"></i>我的</span>
			
			
			
			</footer>
		    </div>
			
			
		)
	}
	
}

ReactDOM.render(<App/>,document.getElementById('out'))

