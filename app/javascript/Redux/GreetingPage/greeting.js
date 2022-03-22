const GET_DATA = 'store/greetingPage/GET_DATA'

const initialState = []

const fetchData = (data) => ({
    type: GET_DATA,
    payload:data
})

export const getData = () => async (dispatch) => {
    const data = await fetch('api/v1/greeting')
    const response = await data.json();
    dispatch(fetchData(response));
}

const greetingReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_DATA: 
        return [action.payload]

        default:
            return state;
    }

}

export default greetingReducer