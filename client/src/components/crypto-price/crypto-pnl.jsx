import { IoCaretUpSharp,IoCaretDownSharp } from 'react-icons/io5';
import './crypto-pnl.css'


const CryptoPNL = (props) => {
    const {number,avatar,cryptoname,pnl} = props;

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
            <tr className='crypto' href="/tesy">
                <td className='number'><a href={`/crypto/${cryptoname}`}>{number}</a></td>
                <td className='cryptoimgbox'><a href={`/crypto/${cryptoname}`}><img className='crypto-img' src={avatar} alt=''></img></a></td> 
                <td className='cryptoname'><span><a href={`/crypto/${cryptoname}`}>{cryptoname}</a></span></td> 
                <td className='cryptopnl'><a href={`/crypto/${cryptoname}`}>{handlePNL()}</a></td>
            </tr>
            
        </>
    );
}
 
export default CryptoPNL;