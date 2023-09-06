const REACT_APP_RAPID_API_KEY='2bee11497dmshd50827756d7f314p102652jsn87503a20c9f5'

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData= async (url,options)=>{

    const response=await fetch(url,options);
    const data=await response.json();

    return data;
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};