import {
	connect
} from 'react-redux'
import {
	toggleTodo
} from '../../../actions'
import PtvList from './PtvList'

const getVisibleTodos = (ptvs, filter) => {
	switch (filter) {
	case 'SHOW_ALL':
		return ptvs
	}
}

const mapStateToProps = (state) => {
	return {
		ptvs: getVisibleTodos(state.ptvs, state.visibilityFilter)

	}
}


const VisibleList = connect(

	mapStateToProps

)(PtvList)

export default VisibleList
