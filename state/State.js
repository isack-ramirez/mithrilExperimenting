var state = {
    notes: [
        'asasas'
    ],
    name: 'name'
}

exports.getState= function(){
    return state
}

exports.setState = function(stateVar, index, value){
    state.stateVar[index]=value;
}