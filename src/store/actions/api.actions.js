import { Api } from "../../services/ApiService";

/**
 * Esta función envía peticiones al servicio de API
 * @author Jhoan López <jhoanlt19@gmail.com>
 * @param {*} endpoint 
 * @param {*} data 
 * @param {*} method 
 */
 export const fetchApi = (endpoint, data={}, method='POST') => async(dispatch, getState) => {
     const request = async () => {
         const {session} = getState();
         let token = session.data ? session.data.token : null;
        try {
            const response = await Api.fetch(endpoint, data, method, token);
            return response;
        } catch (err) {
            return false;
        }
     };
     return await request();
 };