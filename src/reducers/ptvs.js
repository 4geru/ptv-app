

const ptv = (state, action) => {
	switch (action.type) {
	case 'ADD_TODO':
		return {
			stop_id: action.stop_id,
			stop_type: action.stop_type,
		}

	default:
		return state
	}
}

const ptvs = (state = [], action) => {

	switch (action.type) {

	case 'ADD_TODO':
		return [
			...state,
			ptv(undefined, Object.assign(action, {
				stop_id: state.length
			}))
		]

	case 'GET_DATA_RECEIVED':

		return action.data

	default:
		return state
	}
}

export default ptvs
