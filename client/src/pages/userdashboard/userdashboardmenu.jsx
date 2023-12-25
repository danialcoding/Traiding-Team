import { FaWallet } from 'react-icons/fa';
import { BsMicrosoftTeams } from 'react-icons/bs';
import { RiDashboard2Fill } from 'react-icons/ri';
import { IoNewspaperSharp } from 'react-icons/io5';

import Wallet from '../dashboardPages/wallet/wallet';
import News from '../dashboardPages/news/news';
import Teams from '../dashboardPages/teams/teams'

export const userDashboardMenu = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon:  <RiDashboard2Fill/>,
        page: <Wallet/>,
    },
    {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: <BsMicrosoftTeams/>,
        page: <Teams/>,
    },
    {
        title: 'News',
        path: '/dashboard/news',
        icon: <IoNewspaperSharp/>,
        page: <News/>,
    },
    {
        title: 'Wallet',
        path: '/dashboard/wallet',
        icon: <FaWallet/>,
        page: <Wallet/>,
    },
];
