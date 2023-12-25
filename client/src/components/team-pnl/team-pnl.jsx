import { BsMicrosoftTeams } from 'react-icons/bs';
import { IoCaretUpSharp,IoCaretDownSharp } from 'react-icons/io5';

import './team-pnl.css'


const TeamPNL = (props) => {
    const {number,avatar,teamname,pnl} = props;

    const handleAvatar = () => {
        if(avatar === "") {
            return(
                <div className='avatar-bg'>
                    <BsMicrosoftTeams/>
                </div>
            )
        }
        else {
            return(
                <img alt='' className='team-img' src={avatar}></img>
            )
        }
    }

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
            <tr className='team' href="/tesy">
                <td className='number'><a href={`/teams/${teamname}`}>{number}</a></td>
                <td className='teamimgbox'><a href={`/teams/${teamname}`}>{handleAvatar()}</a></td> 
                <td className='teamname'><span><a href={`/teams/${teamname}`}>{teamname}</a></span></td> 
                <td className='teampnl'><a href={`/teams/${teamname}`}>{handlePNL()}</a></td>
            </tr>
        </>
    );
}
 
export default TeamPNL;