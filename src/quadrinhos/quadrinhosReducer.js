const INITIAL_STATE = { description: '', list: [], isLoading: true }


export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'MARK_AS_SELECTED':
            return { ...state, description: action.payload }
        case 'quadrinhos_SEARCHED':
            return { ...state, list: action.payload }
        case 'quadrinhos_CLEAR':
            return { ...state, description: '' }
        default:
            return state
    }
}