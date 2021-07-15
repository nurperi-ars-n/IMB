import { CHANGE_USER } from '../actions/index'

const initialState = {
	weight: '',
	height: '',
	age: '',
	pol: true,
}

export const rootReducer = (state = initialState, action) => {
	const fat = (i) => {
		if (i > 13) {
			return '13,5%-24%'
		} else if (i > 21) {
			return '25%-39%'
		} else if (i > 41) {
			return '40,5%-54%'
		}
		console.log(i)
	}

	switch (action.type) {
		case CHANGE_USER:
			console.log(action)
			const res = fat(action.payload.imt)
			console.log(res)
			return {
				...state,
				weight: action.payload.weight,
				height: action.payload.height,
				age: action.payload.age,
				imt: Math.floor(
					action.payload.weight / (action.payload.height / 100) ** 2,
				),
				pol: action.payload.pol,

				fat: res,
				perfectVes:
					action.payload.pol === true
						? Math.floor((action.payload.height - 110) * 1.15)
						: Math.floor((action.payload.height - 100) * 1.15),
			}
		default:
			return state
	}
}
