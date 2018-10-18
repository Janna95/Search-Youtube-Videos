export default function videoReducer(prevState, action) {
    switch (action.type) {
        case 'GET_VIDEOS_SUCCESS':
        
            return {
                ...prevState,
                videos: action.videos.items,
                nextPageToken: action.nextPageToken
            };

        case 'NEXT_VIDEOS_SUCCESS':

            return {
                ...prevState,
                videos: [...prevState.videos, ...action.videos.items],
                nextPageToken: action.nextPageToken
            };

        default: 
            return prevState;
    }

}
