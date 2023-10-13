import axios from 'axios';



const getSearchResult = async (keyword) => {
    return await axios.request({
        method: 'get',
        url: 'http://localhost:8081/search/book/',
        headers: { Authorization: ` ${localStorage.getItem('authorization')}` },
        params: {
            keyword: keyword,
        },

    })
}
export const fetchSearchResult = async (searchKey, setSearchResult,setSearchLoading,setErrorMessage) => {
    setSearchLoading(true)
    try {
        const response = await getSearchResult(searchKey)
        if (response.status == 200) {
            setSearchResult(response.data.results)
            setSearchLoading(false)
        }
    } catch (error) {
        console.error("API Error:", error.response.data);
        if ( error.response.status === 400){
            setSearchLoading(false)
            setErrorMessage(error.response.data.message)

        }
    }
};