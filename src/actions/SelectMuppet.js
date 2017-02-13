var selectMuppet = function (muppet){
    console.log(muppet);
    return {
        type: "PICK_MUPPET",
        payload: muppet
    }
}

export default selectMuppet;
