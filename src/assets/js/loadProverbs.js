const fetchHeaders = new Headers();
fetchHeaders.append('Accept','application/json');
const url = '/proverbs.json';
export default async function() {
    const response = await fetch(url,{
        headers: fetchHeaders,
        mode: 'cors',
    });
   const proverbs = await response.json();
   return proverbs
}