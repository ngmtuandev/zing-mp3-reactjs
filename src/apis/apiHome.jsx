import axiosInstanse from '../axios'

export const getHome = () => new Promise( async(resolve, reject) => {
    try {
        const rs = await axiosInstanse({
            url: '/home',
            method: 'GET',
        })
        resolve(rs)
    } catch (error) {
        reject(error)
    }
})