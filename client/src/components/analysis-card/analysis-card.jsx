import './analysis-card.css';


export default AnalysisCard;


function AnalysisCard(props) {

    const {img,topic,currencyPairs,senderAvatar,senderUsername,info,time,date,link} = props;


    const handleTopic = () => {
        if(topic.length > 28) {
            return(
                <>
                    {topic.substr(0, 28)} ...
                </>
                
            )
        }
        else {
            return(
                <>
                    {topic}
                </>
            )
        }
    }
    return (
        <>
            <div className="AnalysisCard">
                <a href={`/news/${link}`}>
                    <img className="analysisImage" alt="" src={img}></img>
                    <div className="analysisInfo">
                        <h6 className="topic">{handleTopic()}</h6>
                        <span className='currencyPairs'>{currencyPairs}</span>
                        <div className='senderInfo'>
                            <img className='senderAvatar' src={senderAvatar} alt=''></img>
                            <span className='senderUsername'>{senderUsername}</span>
                        </div>
                        <p className="info">{info}</p>
                        <span className="date">{date}</span>
                        <span className="time">{time}</span>
                    </div>
                </a>
                
            </div>
            
        </>
    );
}
 
