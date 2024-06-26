
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair = "*") {
    const adjective = "You are";
    return function(name = "special") {
        return `${adjective} ${visualFlair}${name}${visualFlair}!`;
    }
}
wrapAdjective("%")("a dedicated programmer");