import { useEffect,useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';

import NewsCard from '../../components/news-card/news-card';

import './news.css';


function News() {
    const[cryptoNews,setCryptoNews] = useState([]);
    const[forexNews,setForexNews] = useState([]);

    //backend
    const fetchCryptoNewsData = async () => {
        const resault = await fetch('http://localhost:8080/news/crypto_news');
        const jsonResault = await resault.json();

        setCryptoNews(jsonResault);
    }

    const fetchForexNewsData = async () => {
        const resault = await fetch('http://localhost:8080/news/forex_news');
        const jsonResault = await resault.json();

        setForexNews(jsonResault);
    }
    //

    useEffect(()=>{
        fetchCryptoNewsData();
        fetchForexNewsData();
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
        <div className='news news_container'>
                <div className='news-div-title'>
                        <h4>Crypto News</h4>
                </div>

                <div className='news-div'>

                    <Carousel 
                    breakPoints={breakPoints}
                    enableAutoPlay 
                    autoPlaySpeed={10000}
                    itemPosition={consts.CENTER}
                    >
                        {
                            cryptoNews.map((item,index) => (
                                
                                <NewsCard key={index} link={item.link} img={item.img} topic={item.topic} info={item.info} date={item.date} time={item.time}/>
                                
                            ))
                        }
                        
                    </Carousel>


            </div>

            <div className='news-div-title'>
                        <h4>Forex News</h4>
                </div>

                <div className='news-div'>

                    <Carousel 
                    breakPoints={breakPoints}
                    enableAutoPlay 
                    autoPlaySpeed={10000}
                    itemPosition={consts.CENTER}
                    >
                        {
                            forexNews.map((item,index) => (
                                
                                <NewsCard key={index} link={item.link} img={item.img} topic={item.topic} info={item.info} date={item.date} time={item.time}/>
                                
                            ))
                        }
                        
                    </Carousel>


            </div>
        </div>
    );
}
 
export default News;