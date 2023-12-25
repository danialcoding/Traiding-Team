import "./news-card.css"


export default NewsCard;

function NewsCard(props) {

    const {img,topic,info,time,date,link} = props;


    const handleTopic = () => {
        if(topic.length > 23) {
            return(
                <>
                    {topic.substr(0, 23)} ...
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
            <div className="NewsCard">
                <a href={`/news/${link}`}>
                    <img className="newsImage" alt="" src={img}></img>
                    <div className="newsInfo">
                        <h6 className="topic">{handleTopic()}</h6>
                        <p className="info">{info}</p>
                        <span className="date">{date}</span>
                        <span className="time">{time}</span>
                    </div>
                </a>
                
            </div>
            
        </>
    );
}
 
