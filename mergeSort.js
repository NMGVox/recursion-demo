function merge(l, r) {
    let new_arr = [];
    let l_inc = 0, r_inc = 0;
    while( l_inc < l.length || r_inc < r.length) {
        /*  If there are no more values in the left array
            push from right and increment right's counter  */
        if(l_inc >= l.length) {
            new_arr.push(r[r_inc++]);
        } 
        else if (r_inc >= r.length) {
            //Vice-versa
            new_arr.push(l[l_inc++]);
        } 
        else{
            if ( r[r_inc] < l[l_inc] ) {
                new_arr.push(r[r_inc++]);
                continue;
            }
            new_arr.push(l[l_inc++]);
            continue;
            /*  Check left and right arrays for smaller value.
                Increment the counter for the value with the smaller array.
                Accounts for ties by pushing left by default.  */
        }
    }
    return new_arr;
}

function mergeSort(arr) {
    if ( arr.length < 2 ) {
        return arr;
    }

    let mid = (arr.length) / 2;
    //Sort the left half of the list
    let left = mergeSort(arr.slice(0, mid));

    //Sort the right half of the list
    let right = mergeSort(arr.slice(mid, arr.length));

    //Merge
    return merge(left, right);
}

console.log(mergeSort([384, 119, 179, 299, 279, 302, 232, 20, 373, 
            29, 92, 352, 114, 24, 296, 242, 49, 62, 239, 105]));