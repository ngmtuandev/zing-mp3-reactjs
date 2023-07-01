import icons from "./icons"

const {MdLibraryMusic,FaChartLine, MdFeed, PiChartDonutFill} = icons

export const optionSidebar = [
    {
        path: 'mymusic',
        contain: 'Cá nhân',
        icon: <MdLibraryMusic size='20px'></MdLibraryMusic>
    },
    {
        path: '/',
        contain: 'Khám phá',
        icon: <PiChartDonutFill size='20px'></PiChartDonutFill>
    },
    {
        path: 'zingchart',
        contain: 'Zing Chart',
        icon: <FaChartLine size='20px'></FaChartLine>
    },
    {
        path: 'news',
        contain: 'Tin tức',
        icon: <MdFeed size='20px'></MdFeed>
    }
]