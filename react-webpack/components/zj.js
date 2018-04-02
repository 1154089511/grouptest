import React from 'react'
/*import ReactDOM from 'react-dom'*/



var pzyx={
		display:'flex',
		flexDirection:"column",
		width:'100%',
		height:'27vh',
		margin:'1vh 0 0 0',
		background:"#fff"
	}

var pzyx1={
		display:'flex',
		flexDirection:"row",
		height:'5vh',
		padding:'2vh'
	}

var p1={
	color:"#a58056",
	fontWeight:'bold',
	textAlign:'center',
	width:'88%',
	fontSize:'2.8vh',
}

var p2={
	color:"#8c8c8c",
	textAlign:'center',
	fontSize:'2vh',
	lineHeight:'5vh',
	width:'12%',
}

var pzyx2={
		display:'flex',
		flexDirection:"row",
		height:'25vh',
		padding:'0 2vh'
	}

var div={
	width:"25%"
}

var div1={
	border:"1px solid #ececec",
	borderRadius:"2px",
	width:"10vh",
	height:'10vh',
}

var p3={
	fontSize:'2vh',
	color:'#2e2e2e',
	width:"10vh",
	whiteSpace:'nowrap',
	overflow:'hidden',
	textOverflow:'ellipsis',
	marginTop:'1vh',
}

var span={
	border:'1px solid #4bf2ff',
	color:'#4bf2ff',
	fontSize:'1.5vh',
	marginLeft:'1vh'
}

var lbt={
	height:'10vh',
	background:'#fff',
	marginTop:'1vh',
	padding:'1.5vh'
}

var lbt1={
	height:'10vh',
	background:'#fff',
}

class Zj extends React.Component{
	
	render(){
		return(
			<div>
				<div style={pzyx}>
					<div style={pzyx1}>
						<p style={p1}>品质优选</p>
						<p style={p2}>更多> </p>
					</div>
					
					<div style={pzyx2}>
						<div style={div}>
							<div style={{margin:'0 auto',width:'11vh'}}>
								<div style={div1}>
									<img src="../image/image1.jpeg" style={{width:'100%',height:'100%'}}/>
								</div>
								<p style={p3}>杭州麦当劳文三餐厅</p>
								<span style={span}>大牌精选</span>
							</div>
						</div>
						<div style={div}>
							<div style={{margin:'0 auto',width:'11vh'}}>
								<div style={div1}>
									<img src="../image/image2.jpeg" style={{width:'100%',height:'100%'}}/>
								</div>
								<p style={p3}>必胜客(环城北路店)</p>
								<span style={span}>大牌精选</span>
							</div>
						</div>
						<div style={div}>
							<div style={{margin:'0 auto',width:'11vh'}}>
								<div style={div1}>
									<img src="../image/image3.jpeg" style={{width:'100%',height:'100%'}}/>
								</div>
								<p style={p3}>轰咖咖喱饭(湖墅店)</p>
								<span style={span}>大牌精选</span>
							</div>
						</div>
						<div style={div}>
							<div style={{margin:'0 auto',width:'11vh'}}>
								<div style={div1}>
									<img src="../image/image4.jpeg" style={{width:'100%',height:'100%'}}/>
								</div>
								<p style={p3}>慕芝蛋糕(湖墅南路店)</p>
								<span style={span}>大牌精选</span>
							</div>
						</div>
					</div>
				</div>
				<div style={lbt}>
					<div style={lbt1}>
						<img src="../image/image5.gif" style={{width:'100%',height:'100%'}}/>
					</div>
				</div>
			</div>
			
		)
	}
}

export default Zj
/*ReactDOM.render(<Zj/>,document.getElementById('app'))*/
