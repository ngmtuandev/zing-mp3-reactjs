import axiosInstanse from '../axios'

export const getApiPlayList = (idPlaylist) => new Promise((resolve, reject) => {
    try {
        const rs = axiosInstanse({
            url: '/detailplaylist',
            method: 'GET',
            params: {id: idPlaylist}
        })
        resolve(rs)
    } catch (error) {
        reject(error)
    }
}) 