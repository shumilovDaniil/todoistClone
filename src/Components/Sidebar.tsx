import React, {FC} from 'react';
import { GrInbox,GrCalendar  } from "react-icons/gr";
import {Link} from 'react-router-dom'


const Sidebar: FC = () => {
    return (
        <div className={'border-r-2 pr-10'}>
            <ul className={'flex gap-3 flex-col'}>
                <li>
                    <Link to={'/'} className={'inline-flex items-center'}>
                        <GrInbox className={'mr-2'}/>Inbox
                    </Link>
                </li>
                <li>
                    <Link to={'/today'} className={'inline-flex items-center'}>
                        <GrCalendar className={'mr-2'}/>Today
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
