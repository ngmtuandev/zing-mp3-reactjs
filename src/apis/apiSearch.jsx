import axiosInstanse from '../axios'

export const getApiSearch = (keyword) => new Promise((resolve, reject) => {
    try {
        const rs = axiosInstanse({
            url: "/search",
            method: 'GET',
            params: {keyword}
        })
        resolve(rs)
    } catch (error) {
        reject(error)
    }
})