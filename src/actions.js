const inc = () => {
	return { type: 'INC' }
}

const dec = () => {
	return { type: 'DEC' }
}

const rnd = () => {
	return {
		type: 'RND',
		payload: Math.floor(Math.random()*10),
 	};
}

export {
	inc,
	dec,
	rnd
}