import axiosInstanse from '../axios'


export const getApiInforSong = (idsong) => new Promise((resolve, reject) => {
    try {
        const rs = axiosInstanse({
            url: '/infosong',
            method: 'GET',
            params: {id: idsong}
        })
        resolve(rs)
    } catch (error) {
        reject(error)
    }
})

export const getApiSong = (idsong) => new Promise((resolve, reject) => {
    try {
        const rs = axiosInstanse({
            url: '/song',
            method: 'GET',
            params: {id: idsong}
        })     
        resolve(rs)
    } catch (error) {
        reject(error)
    }
})