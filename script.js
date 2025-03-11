function firstWord(s) {
     s = s.trim(); // Remove leading and trailing spaces
    const spaceIndex = s.indexOf(' ');
    return spaceIndex === -1 ? s : s.slice(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
