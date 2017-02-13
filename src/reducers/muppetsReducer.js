var muppets = function(state, action){

    var muppetsArray = [
        {
            name: "Fozzie Bear",
            species: "Muppet Bear"
        },
        {
            name: "Kermit the Frog",
            species: "Muppet Frog"
        },
        {
            name: "Beeker",
            species: "Assistant Scientist Muppet"
        },
        {
            name: "Animal",
            species: "Muppet Drummer"
        },
        {
            name: "Miss Piggy",
            species: "Muppet Pig"
        },
        {
            name: "Swedish Chef",
            species: "Muppet Human"
        }
    ];
    // console.log(state);
    // console.log(action);
    // console.log(action.type);
    if(action.type == "PICK_MUPPET"){
        return action.payload;
    }else{
        return muppetsArray;
    }
}

export default muppets;
