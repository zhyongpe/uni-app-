const mutations = {
	$_changeTheData(state, Data) {
		state[Data.key] = Data.value;
	}
}

export default mutations;
