import { IoCaretUpSharp,IoCaretDownSharp } from 'react-icons/io5';
import './forex-pnl.css'


const ForexPNL = (props) => {
    const {number,avatar1,avatar2,forexname,pnl} = props;


    const handlePNL = () => {
        if(pnl > 0) {
            return(
                <>
                    <span className='pnl-sign' style={{color: "#27ae60",fontSize: "14px"}}><IoCaretUpSharp/></span>
                    <span className='pnl-number' style={{color: "#27ae60"}}>{Math.abs(pnl)}</span>
                    <span style={{color: "#27ae60"}}>%</span>
                </>
                
            )
        }
        else if(pnl < 0) {
            return(
                <>
                    <span className='pnl-sign' style={{color: "#c0392b",fontSize: "14px"}}><IoCaretDownSharp/></span>
                    <span className='pnl-number' style={{color: "#c0392b"}}>{Math.abs(pnl)}</span>
                    <span style={{color: "#c0392b"}}>%</span>
                </>
            )
        }
        else {
            return(
                <>
                    <span className='pnl-number' style={{color: "#ecf0f1"}}>{Math.abs(pnl)}</span>
                    <span style={{color: "#ecf0f1"}}>%</span>
                </>
            )
        }
    }

    return (
        <>
            <tr className='forex' href="/tesy">
                <td className='number'><a href={`/forex/${forexname}`}>{number}</a></td>
                <td className='forex-img-box'>
                    <a href={`/forex/${forexname}`}>
                    <img className='forex-img1' src={avatar1} alt=''></img>
                    <img className='forex-img2' src={avatar2} alt=''></img>
                    </a>
                </td> 
                <td className='forexname'><span><a href={`/forex/${forexname}`}>{forexname}</a></span></td> 
                <td className='forexpnl'><a href={`/forex/${forexname}`}>{handlePNL()}</a></td>
            </tr>
        
        </>
    );
}
 
export default ForexPNL;