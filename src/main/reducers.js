import { combineReducers } from 'redux'
import quadrinhosReducer from '../quadrinhos/quadrinhosReducer'
import { reducer as toastReducer} from 'react-redux-toastr'
import { reducer as modal } from 'redux-modal'

const rootReducer = combineReducers({
    quadrinhos: quadrinhosReducer,
    toastr: toastReducer,
    modal
})

export default rootReducer