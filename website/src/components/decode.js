function decodeText() {
    var text = document.getElementsByClassName('decode-text')[0];

    var state = [];
    for (var i = 0, j = text.children.length; i < j; i++) {
        text.children[i].classList.remove('state-1', 'state-2', 'state-3');
        state[i] = i;
    }

    var shuffled = shuffle(state);

    for (let i = 0, j = shuffled.length; i < j; i++) {
        var child = text.children[shuffled[i]];

        // Use classList directly without assigning to a variable
        var state1Time = Math.round(Math.random() * (2000 - 300)) + 50;
        if (child.classList.contains('text-animation')) {
            setTimeout(firstStages.bind(null, child), state1Time);
        }
    }
}

function firstStages(child) {
    // Use classList directly without assigning to a variable
    if (child.classList.contains('state-2')) {
        child.classList.add('state-3');
    } else if (child.classList.contains('state-1')) {
        child.classList.add('state-2');
    } else if (!child.classList.contains('state-1')) {
        child.classList.add('state-1');
        setTimeout(secondStages.bind(null, child), 100);
    }
}

function secondStages(child) {
    // Use classList directly without assigning to a variable
    if (child.classList.contains('state-1')) {
        child.classList.add('state-2');
        setTimeout(thirdStages.bind(null, child), 100);
    } else if (!child.classList.contains('state-1')) {
        child.classList.add('state-1');
    }
}

function thirdStages(child) {
    // Use classList directly without assigning to a variable
    if (child.classList.contains('state-2')) {
        child.classList.add('state-3');
    }
}

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Export the decode function for usage in your React components
export const decode = () => {
    decodeText();
    setInterval(() => decodeText(), 15000);
};
export default decode;
