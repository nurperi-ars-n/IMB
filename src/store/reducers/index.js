import { CHANGE_USER, CLEAR_USER } from '../actions/index'

const initialState = {
	weight: '',
	height: '',
	age: '',
	pol: true,
	imt: '',
	perfectWeight: '',
}

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_USER:
			console.log(action)

			return {
				...state,
				weight: action.payload.weight,
				height: action.payload.height,
				age: action.payload.age,
				imt: Math.floor(
					action.payload.weight / (action.payload.height / 100) ** 2),
				perfectVes: Math.floor((action.payload.height - 110) * 1.15),
				pol: action.payload.pol,
			}
		case CLEAR_USER:
			return {
				...state,
				age: '',
			}
		default:
			return state
	}
}
