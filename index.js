// code your solution here
const saturdayFun = function(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
};

const mondayWork = function(defaultStatement = "go to the office") {
    return `This Monday, I will ${defaultStatement}.`;
};


const wrapAdjective = function(wrapper) {
    return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
};
