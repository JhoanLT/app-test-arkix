export const SET_SESSION    = '[SESSION] SET_SESSION';
export const REMOVE_SESSION = '[SESSION] REMOVE_SESSION';

export const setSession = payload => ({
    type : SET_SESSION,
    payload,
});

export const removeSession = payload => ({
    type : REMOVE_SESSION,
    payload,
});