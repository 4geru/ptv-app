import {
	combineReducers
} from 'redux'
import ptvs from './ptvs'

import visibilityFilter from './visibilityFilter'

const ptvApp = combineReducers({

	ptvs,
	visibilityFilter
})

export default ptvApp
