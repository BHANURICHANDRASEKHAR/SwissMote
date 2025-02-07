import Cookie from 'js-cookie'
   
export default async function getCookie()
{
    const token=await Cookie.get('user-token') || null;  
    return token;
}
export function RemoveToken()
{
    Cookie.remove('user-token');  
    return;
}