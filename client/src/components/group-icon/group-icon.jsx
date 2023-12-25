import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


import { HiUserGroup } from   'react-icons/hi';

import "./group-icon.css";


const GroupIcon = (props) => {
    const {name,image} = props;

    const handleIcon = () => {
        if(image == '') {
            return (
                <>
                    <Tippy content={name} delay={200} duration={500} theme='material' placement='right'>
                        <div className="group-icon">
                                <HiUserGroup className='group-avatar'/> 
                        </div>
                    </Tippy>
                </>
            )
        }
        else {
            return (
                <>
                    <Tippy content={name} delay={200} duration={500} theme='material' placement='right'>
                        <div className="group-icon-img">
                                <img src={image} alt="" className="group-image"/>
                        </div>
                    </Tippy>
                </>
            )
        }
    }

    return (
        <>
            {handleIcon()}
        </>
    )
}

export default GroupIcon;