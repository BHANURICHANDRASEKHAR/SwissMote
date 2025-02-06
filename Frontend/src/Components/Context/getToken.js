import Cookie from 'js-cookie'
   
export default function getCookie()
{
    return Cookie.get('user-token') || null;  
}
export function RemoveToken()
{
    Cookie.remove('user-token');  
    return;
}