import * as ActionTypes from '../actions/Tweet';

const InitialState = {
    commentMessages: ''
}

const TweetReducer = (state = InitialState, action) => {
    let newState;
    switch (action.type) {
        case ActionTypes.ADD_TWEET:
            newState = {
                ...state,
                commentMessages: action.value,
            };
            return newState;
        case ActionTypes.DELETE_TWEET:
            const deleteTweet = state.commentMessages.filter((item) => item.id !== action.id)
            newState = {
                ...state,
                commentMessages: deleteTweet,
            };
            return newState;
        default:
            return state;
    }

}
export default TweetReducer;