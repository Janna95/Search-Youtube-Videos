const API_KEY = 'AIzaSyCiIrLaQwOC811i3hH8HZBrPW-Ihf-nw_0';
const maxResults = 5;

export function getVideos(term) {
    
    let url = `https://www.googleapis.com/youtube/v3/search?q=${term}&key=${API_KEY}&part=snippet,id&order=date&maxResults=${maxResults}`

    return function (dispatch) {
        fetch(url)
        .then(res => res.json())
        .then(response => {
           dispatch(getVideosSuccess(response))
        })
        .catch(error => console.error('Error: ', error));
    };
};


function getVideosSuccess(data) {

    return {
        type: "GET_VIDEOS_SUCCESS",
        videos: data,
        nextPageToken: data.nextPageToken
    };
};

export function searchNextPage(term, token) {

    let url = `https://www.googleapis.com/youtube/v3/search?q=${term}&pageToken=${token}&key=${API_KEY}&part=snippet,id&order=date&maxResults=${maxResults}`

    return function(dispatch) {

        fetch(url)
        .then(res => res.json())
        .then(response => {
            dispatch(naxtPageSuccess(response))
        })
        .catch(error => console.error('Error: ', error));
    };
};

function naxtPageSuccess(data) {

    return {
        type: "NEXT_VIDEOS_SUCCESS",
        videos: data,
        nextPageToken: data.nextPageToken
    };
};
