export const CHANGE_USER = 'CHANGE_USER'
export const CLEAR_USER = 'CLEAR_USER'

export const change_user = (payload) => ({
	type: CHANGE_USER,
	payload,
})

export const clear_user = (payload) => ({
	type: CLEAR_USER,
	payload,
})
