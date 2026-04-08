/**
 * @param {string[]} strs
 * @return {string}
 */
let compare = function(acc,ele) {
        let new1 ="";
        for(let i =0 ;i<(Math.min(acc.length,ele.length));i++){
            if(acc[i]===ele[i]){
                new1 += acc[i];
                continue;
            }
            break;
        }
    return new1;
}

var longestCommonPrefix = function(strs) {
    if (strs.length === 0)return "";
    return strs.reduce(compare);
}