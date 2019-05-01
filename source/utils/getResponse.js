/**
 * @param response response value from props redux
 * @param id id of the responseHandler example request_id.login
 * @param index which index you're looking for to return example email,password,address
 * @return string a value if it's exist other ways will return null
 * */
export function getResponse(response, id, index) {
    if (response[id]) {
        if(response[id].data && response[id].data[index])
        {
            return response[id].data[index][0]
        }
    }
    return null;
}