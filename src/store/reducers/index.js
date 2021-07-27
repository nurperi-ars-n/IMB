import { CHANGE_USER } from '../actions/index.js'

const initialState = {
	weight: '',
	height: '',
	age: '',
	pol: true,
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
					action.payload.weight / (action.payload.height / 100) ** 2,
				),
				pol: action.payload.pol,
				perfectVes:
					action.payload.pol === true
						? Math.floor((action.payload.height - 110) * 1.15)
						: Math.floor((action.payload.height - 100) * 1.15),
			}
		default:
			return state
	}
}