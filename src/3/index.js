import React from 'react';


function solution(s) {
    // keep track of max substring count
    // keep track of map
    // loop through each character
    // check if it already exist in the map, if so reset the map, continue
    // if not in map, add in the map

    let max = 0;
    let count = 0;
    let map = {};

    for(let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        
        // if found in map
        // store result in max, and reset map
        if (map[c] != null) {
            max = Math.max(count, max);
            // reset the index also
            i = map[c];
            map = {};
            count = 0;
            continue;
        }

        map[c] = i;
        count = count + 1;
    }

    max = Math.max(count, max);

    return max;
}

/**
 * 
 * @param {*} s 
 * @param {*} index 
 * @param {*} map 
 */
//dvpdf
function solutionRecursion(s, index, map, result) {
    for (let i = index; i < s.length; i++) {
        const c = s.charAt(i);
        console.log(c);
        solutionRecursion(s, i + 1, map, result);
    }
}

// function solutionRecursion(s, index, map, result) {
//     // find exit condition
//     // we need map to find out duplicate
//     // loop so we need index

//     // exist condition,
//     // exit when index > s.length - 1
//     if (index > s.length - 1) {
//         return (Math.max(Object.keys(map).length, result))
//     }


//     const c = s.charAt(index);
//     if (map[c] != null) {
//         // duplicate found
//         // store result
//         // reset map
//         // increase index
//         result = Math.max(Object.keys(map).length, result);
//         map = {};
//         index = index + 1;
//         return result;

//     } else {
//         // keep looping
//         // keep adding c to map
//         map[c] = index;
//         result = solutionRecursion(s, index + 1, map, result);
//         //reset map
//         map = {};
//         result = solutionRecursion(s, index, map, result);
//     }
    
//     return result;
// }

class SolutionClass extends React.Component {
    render() {
        debugger;
        
        const result1 = solution("dvpdf");
        const result2 = solution("abcabcbb");
        const result3 = solution("bbbbb");
        const result4 = solution("pwwkew");

        const resultRecursion1 = solutionRecursion("dvpdf", 0, {}, []);
        

        return (
            <div className="problem">
                <div className="title">
                    Longest Substring Without Repeating Characters
                </div>
                <pre>{`
                Given a string, find the length of the longest substring without repeating characters.

                Example 1:

                Input: "dvpdf"
                Output: 4 
                Explanation: The answer is "vpdf", with the length of 4. 


                Example 2:

                Input: "abcabcbb"
                Output: 3 
                Explanation: The answer is "abc", with the length of 3. 
                

                Example 3:

                Input: "bbbbb"
                Output: 1
                Explanation: The answer is "b", with the length of 1.
                


                Example 4:

                Input: "pwwkew"
                Output: 3
                Explanation: The answer is "wke", with the length of 3. 
                            Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
                `}</pre>

                <div className="solution">
                    Solution:  
                    <br />
                    <br />
                    {JSON.stringify(result1)}           Solution 1 Recusion {JSON.stringify(resultRecursion1)}
                    <br />
                    <br />
                    {JSON.stringify(result2)}
                    <br />
                    <br />
                    {JSON.stringify(result3)}
                    <br />
                    <br />
                    {JSON.stringify(result4)}
                    
                </div>
            </div>
        );
    }
}

export default SolutionClass;