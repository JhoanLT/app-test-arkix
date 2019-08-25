const {REACT_APP_API_SERVER} = process.env;

/**
 * Esta clase permite realizar peticiones a la api.
 * @author Jhoan López <jhoanlt19@gmail.com>
 * @version 1.0.0
 * @since 1.0.0
 * @package services
 */
class ApiService {

    async fetch(endpoint="", data={}, method, token) {
        try {
            const request = async (token) => {
                const headers = {
                    "Content-type"  : "application/json",
                    "Authorization" : token ? token : null,
                };
                const url        = `${REACT_APP_API_SERVER}${endpoint}`;
                const headerData = {
                    method,
                    headers,
                    body : method === 'POST' ? JSON.stringify(data) : null
                };        
                const response = await fetch(url, headerData);
                return response.json();
                
            };
            let response = await request(token);
            return response;
        } catch(err) {
            return err;
        }
    }
}


export const Api = new ApiService();

export default  {
    Api
};