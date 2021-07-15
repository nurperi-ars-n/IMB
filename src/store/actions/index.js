export const CHANGE_USER = 'CHANGE_USER'
export const CREATE_USER = 'CREATE_USER'

export const change_user = (payload) => ({
	type: CHANGE_USER,
	payload,
})

export const create_user = (payload) => ({
	type: CREATE_USER,
	payload,
})
