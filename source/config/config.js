let apiUrl = 'http://192.168.0.105:8000/api'
const config = {
    apiUrl:apiUrl,
    route:(url)=>{
        return apiUrl+url
    },
    loginUrl:apiUrl+'auth'
}

export default config