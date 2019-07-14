const reducer = (state = 0, action) => {  //state по умолчанию равен 0
	switch (action.type) {		//используем конструкцию switch (условный оператор)
		case('INC'):
			return state + 1;   //если событие INC, то изменяем состояние прибавив единицу (инкремент)

		case('DEC'):
			return state - 1;

		case('RND'):
			return state + action.payload;

		default:
			return state;    //в остальных случаях возвращаем принятый в аргументах state
	}
};

export default reducer;