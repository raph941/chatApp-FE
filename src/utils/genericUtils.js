
// function for truncating text
export const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

// move element from one index in an array to the other
export const moveArrayItemToNewIndex = (arr, old_index, new_index) => {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; 
};


// get the initials from fullname
export const getInitials = ( str ) => {
    if (str !== undefined ){
        let initials = ''
        const text = str.split(' ')

        text.map((part) => {
            initials.concat(part[0])
        })
    }
}