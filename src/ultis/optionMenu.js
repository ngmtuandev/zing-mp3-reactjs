import icons from "./icons"

const {MdLibraryMusic,FaChartLine, MdFeed, PiChartDonutFill} = icons

export const optionSidebar = [
    {
        path: 'mymusic',
        contain: 'Cá nhân',
        icon: <MdLibraryMusic size='16px'></MdLibraryMusic>
    },
    {
        path: '/',
        contain: 'Khám phá',
        icon: <PiChartDonutFill size='16px'></PiChartDonutFill>
    },
    {
        path: 'zingchart',
        contain: 'Zing Chart',
        icon: <FaChartLine size='16px'></FaChartLine>
    },
    {
        path: 'news',
        contain: 'Tin tức',
        icon: <MdFeed size='16px'></MdFeed>
    }
]