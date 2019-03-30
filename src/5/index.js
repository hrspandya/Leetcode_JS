import React from 'react';


function solution(s) {
    // first we loop through each char in string
    // for each value we check for LPS, expand from center for example: (a b a)
    // for position 1, 0 and 2 both have same values, so we know it is palindrom.
    
    // but use case, abaaba, in this usecase, before aa and after aa, are same, 
    // so we should check if previous value and current value are same, aa, 
    // if so loop for LPS before and after. 
}

class SolutionClass extends React.Component {
    render() {
        debugger;

        const result1 = solution("babad");

        const result2 = solution("cbbd");

        

        return (
            <div className="problem">
                <div className="title">
                    Longest Palindromic Substring
                </div>
                <pre>{`
                Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

                Example 1:

                Input: "babad"
                Output: "bab"
                Note: "aba" is also a valid answer.


                Example 2:

                Input: "cbbd"
                Output: "bb"


                Solution 1: Brute force: loop through string, for each char loop through others and check for palindrom
                n^2 looping * O(n) to check palindrom, So total N^3 solution 
                
                Solution 2: Expand from Center, manachers algorithm: https://www.geeksforgeeks.org/manachers-algorithm-linear-time-longest-palindromic-substring-part-1/


                `}</pre>

                <div className="solution">
                    Solution:  
                    <br />
                    <br />
                    {JSON.stringify(result1)}
                    <br />
                    <br />
                    {JSON.stringify(result2)}
                </div>
            </div>
        );
    }
}

export default SolutionClass;