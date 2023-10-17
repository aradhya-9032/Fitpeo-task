import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import Dollar from '../assets/daller.png';
import Threed from '../assets/3d.png';
import Threed2 from '../assets/3d2.png';
import Customer from '../assets/customer.png';
import Grap from '../assets/grap.png';
import Orders from '../assets/orders.png';
import Total from '../assets/total.png';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
// import { ReactDOM } from "react";
const Dashbord = () => {
   return(
    <div>
        {/* Right side */}
        <div className="right-content">
        <h2>Hello Aradhya <span class="wave">👋,</span></h2>
        <div className="search-bar">
          <input type="text"placeholder="      Search" /> 
          <SearchIcon className="search-icon" />
        </div>
      </div>

      <div className="flex-container">
        <div className="flex-divs">
            <div className="currency-icons" >
             <img src={Dollar}/>
            </div>
              
              <div className="text">
                <h6 className="earnings">Earning</h6>
                <h3>$198k</h3>
                <h5>
                  <span style={{color:"green"}}>
                    <ArrowUpwardOutlinedIcon className="arrow"  />
                    37.8% 
                  </span>
                    this month
                </h5>
              </div>
        </div>

        <div className="flex-divs">
            <div className="currency-icons" >
              <img src={Orders}/>
            </div>
              
              <div className="text">
                <h6 className="orders">Orders</h6>
                <h3>$2.4k</h3>
                <h5>
                  <span style={{color:"red"}}>
                    <ArrowDownwardOutlinedIcon className="arrow" />
                    2% 
                  </span>
                    this month
                </h5>
              </div>
        </div>

        <div className="flex-divs">
            <div className="currency-icons" >
              <img src={Customer}/>
            </div>
              
              <div className="text">
                <h6 className="balance">Balance</h6>
                <h3>$2.4k</h3>
                <h5>
                  <span style={{color:"red"}}>
                    <ArrowDownwardOutlinedIcon className="arrow" />
                    2% 
                  </span>
                    this month
                </h5>
              </div>
        </div>

        <div className="flex-divs">
            <div className="currency-icons" >
              <img src={Total}/>
            </div>
              
              <div className="text">
                <h6 className="totals">Total Sales</h6>
                <h3>$89k</h3>
                <h5>
                  <span style={{color:"green"}}>
                    <ArrowUpwardOutlinedIcon  className="arrow"/>
                    11% 
                  </span>
                    this month
                </h5>
              </div>
        </div>

      </div>

    
      <div className='graph-bar'>
            <div className='left-graph'>
              <h2>Overview</h2>
              <p>Monthly Earning</p>
              <div className="quarterly">Quarterly
              <ExpandMoreOutlinedIcon className="down-arrow"/>
              </div>
            <div className="graphs">
                <div className="jan"></div> <span style={{marginLeft:"23px"}}>Jan</span> 
                <div className="feb"></div> <span style={{marginLeft:"5.6rem"}}>Feb</span> 
                <div className="mar"></div> <span style={{marginLeft:"10.4rem"}}>Mar</span>
                <div className="apr"></div> <span style={{marginLeft:"14.8rem"}}>Apr</span>
                <div className="may"></div> <span style={{marginLeft:"19.1rem"}}>May</span>
                <div className="jun"></div> <span style={{marginLeft:"23.5rem"}}>Jun</span>
                <div className="jul"></div> <span style={{marginLeft:"27.9rem"}}>Jul</span>
                <div className="aug"></div> <span style={{marginLeft:"31.6rem"}}>Aug</span>
                <div className="sep"></div> <span style={{marginLeft:"35.9rem"}}>Sep</span>
                <div className="oct"></div> <span style={{marginLeft:"39.8rem"}}>Oct</span>
                <div className="nov"></div> <span style={{marginLeft:"43.8rem"}}>Nov</span>
                <div className="dec"></div> <span style={{marginLeft:"47.8rem"}}>Dec</span>
            </div>
          </div>
            <div className='right-graph'>
            <h2>Customers</h2>
              <p>Customers thst buy products</p>
              <img src={Grap} className="graph-img"/>
            </div>
        </div>

   <div className="App">
      <div className="footer">
        <p className="left">Product Sell</p>
        <input type="text" placeholder="        Search" className="right1"/><SearchIcon className="footer-search-icon"/>
        <p className="right2">Last 30 days  <ExpandMoreOutlinedIcon className="drop-icon"/></p>
     </div> 

      <div className="small-nav">
      <div className="left-footer-bar">
        <p className="product-left">Product Name</p>
        <div className="right-footer-bar"> 
        <p className="product-right1">Stocks</p>
        <p className="product-right2" style={{ paddingLeft: '18px' }}>Price</p>
        <p className="product-right3" style={{ paddingRight: '9px' }}>Total sales</p>
       </div>
      </div>
    </div>

      <hr className="grey-hr" />


      <div className="table-div">
        <div className="img-p-div1">
          <img src={Threed} className="threed-image1"/>
          <p style={{color:"black",fontWeight:"bold"}}>Abstract 3D</p>
          <br/><br/>
           
           <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
         <div className="p-stock">
         <p>32 in stock</p>
          <p>$ 45.99</p>
          <p>20</p>
         </div>
         </div>
          
          
          <div className="img-p-div2">
          <img src={Threed2} className="threed-image1"/>
          <p style={{color:"black",fontWeight:"bold"}}>Abstract 3D</p>
          <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         <div className="p-stock">
         <p >32 in stock</p>
          <p>$ 45.99</p>
          <p>20</p>
         </div>
          </div>
       
      </div>
      
    </div>

   </div>
   )
}
export default Dashbord;








