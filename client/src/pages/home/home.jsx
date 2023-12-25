import { useEffect,useState } from 'react';
import { NavLink } from "react-router-dom";
import { RiArrowRightSLine } from 'react-icons/ri';
import Carousel, { consts } from 'react-elastic-carousel';


import TeamPNL from '../../components/team-pnl/team-pnl';
import ForexPNL from "../../components/forex-pnl/forex-pnl";
import CryptoPNL from "../../components/crypto-price/crypto-pnl";
import NewsCard from '../../components/news-card/news-card';
import AnalysisCard from '../../components/analysis-card/analysis-card';

import './home.css';


function Home(props) {

    //Backend
    const[top10Teams,setTop10Teams] = useState([]);
    const[top10Crypto,setTop10Crypto] = useState([]);
    const[top10Forex,setTop10Forex] = useState([]);
    const[topNews,setTopNews] = useState([]);
    const[topAnalysis,setTopAnalysis] = useState([]);

    const fetchTeamsData = async () => {
        const resault = await fetch('http://localhost:8080/teams/top10');
        const jsonResault = await resault.json();

        setTop10Teams(jsonResault);
    }

    const fetchCryptoData = async () => {
        const resault = await fetch('http://localhost:8080/crypto/top10');
        const jsonResault = await resault.json();

        setTop10Crypto(jsonResault);
    }

    const fetchForexData = async () => {
        const resault = await fetch('http://localhost:8080/forex/top10');
        const jsonResault = await resault.json();

        setTop10Forex(jsonResault);
    }

    const fetchNewsData = async () => {
        const resault = await fetch('http://localhost:8080/news/new');
        const jsonResault = await resault.json();

        setTopNews(jsonResault);
    }

    const fetchAnalysisData = async () => {
        const resault = await fetch('http://localhost:8080/analysis/new');
        const jsonResault = await resault.json();

        setTopAnalysis(jsonResault);
    }
    
    useEffect(()=>{
        fetchTeamsData();
        fetchForexData();
        fetchCryptoData();
        fetchNewsData();
        fetchAnalysisData();
    },[]);


    // carousel
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2},
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]
    //

    return (
        <>
            <div className='home-container home'>

                <div className='info-divs-title'>
                    <h4>Market Analysis</h4>
                </div>

                <div className="info-divs">
                    <div className="teams">
                        <div className='div-info'><span className='name'>Teams</span><span href="/test" className='more'><NavLink to="/team" >more<RiArrowRightSLine/></NavLink></span></div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>#</th>
                                    <th></th>
                                    <th>Name</th>
                                    <th>PNL</th>
                                </tr>
                                
                                {
                                    top10Teams.map((item,index) => (
                                        <TeamPNL key={index} number={index + 1} avatar={item.avatar} teamname = {item.teamname} pnl={item.pnl}/>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="crypto-price">
                        <div className='div-info'><span className='name'>Crypto</span><span href="/test" className='more'><NavLink to="/crypto" >more<RiArrowRightSLine/></NavLink></span></div>
                        <table>
                            <tbody>
                                <tr>
                                    <th>#</th>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Change</th>
                                </tr>

                                
                                {
                                    top10Crypto.map((item,index) => (
                                        <CryptoPNL key={index} number={index + 1} avatar={item.avatar} cryptoname = {item.cryptoname} pnl={item.pnl}/>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className="forex-price">
                        <div className='div-info'><span className='name'>Forex</span><span href="/test" className='more'><NavLink to="/forex" >more<RiArrowRightSLine/></NavLink></span></div>

                        <table>
                            <tbody>
                                <tr>
                                    <th>#</th>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Change</th>
                                </tr>

                                {
                                    top10Forex.map((item,index) => (
                                        <ForexPNL key={index} number={index + 1} avatar1={item.avatar1} avatar2={item.avatar2} forexname = {item.forexname} pnl={item.pnl}/>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>


                <hr style={{
                    background: "#0364F1",
                    height: "1px",
                    border: "none",
                }}/>


                <div className='news-div-title'>
                        <span><a href='/news'>News</a></span>
                        <a href='/news'>more<RiArrowRightSLine/></a>
                </div>

                <div className='news-div'>

                <Carousel 
                breakPoints={breakPoints}
                enableAutoPlay 
                autoPlaySpeed={10000}
                itemPosition={consts.CENTER}
                >
                    {
                        topNews.map((item,index) => (
                            
                            <NewsCard key={index} link={item.link} img={item.img} topic={item.topic} info={item.info} date={item.date} time={item.time}/>
                            
                        ))
                    }
                    
                </Carousel>


                </div>

                <hr style={{
                    background: "#0364F1",
                    height: "1px",
                    border: "none",
                }}/>


                <div className='analysis-div-title'>
                    <h4><a href='/'>Technical Analysis</a></h4>
                </div>

                <div className='analysis-div'>

                <Carousel 
                breakPoints={breakPoints}
                enableAutoPlay 
                autoPlaySpeed={15000}
                itemPosition={consts.CENTER}
                >
                    {
                        topAnalysis.map((item,index) => (
                            
                            <AnalysisCard key={index} link={item.link} img={item.img} topic={item.topic} currencyPairs={item.currencyPairs} senderUsername={item.senderUsername} senderAvatar={item.senderAvatar} info={item.info} date={item.date} time={item.time}/>
                            
                        ))
                    }
                    
                </Carousel>


                </div>


                {/* <hr style={{
                    background: "#0364F1",
                    height: "1px",
                    border: "none",
                }}/> */}

            </div>
        </>
    );
}
 
export default Home;