import React from 'react';
/**
consider all usecases then it is simple solution to write
check out my javascript solution

if both are empty return true;
if only one of them is empty then return false;
if both are non-empty, go further and write code

text / pattern
"" / a      false
"" / *      true
a / a       true
aa / a*     true
ab / a.     true
ab / .b     true     
ab / .*     true
aaa / .*    true
aaa / a*    true
aaa / c*a*  true
aaa / c*.*  true
 */

/**
 * 
 * @param {*} text 
 * @param {*} pattern 
 */
function isMatch(text, pattern) {
    if (!pattern && !text) {
        return true;
    } else if (!pattern && text) {
        return false;
    }
    
    //write code
    const first_match = (text && text.charAt(0) === pattern.charAt(0) || pattern.charAt(0) === ".");
    if (pattern.length >= 2 && pattern.charAt(1) === "*") {
        if (isMatch(text, pattern.substring(2))) {
            return true;
        } else if (first_match && isMatch(text.substring(1), pattern)) {
            return true;
        } else {
            return false;
        }

    } else {
        return (first_match && isMatch(text.substring(1), pattern.substring(1)));
    }
}

class SolutionClass extends React.Component {
    render() {
        debugger;

        const result1 = isMatch("aa", "a");

        const result2 = isMatch("aaaaa", "a*");

        const result3 = isMatch("ab", ".*");

        const result4 = isMatch("aab", "c*a*b");

        const result5 = isMatch("mississippi", "mis*is*p*.");

        return (
            <div className="problem">
                <div className="title">
                    Regular Expression Matching
                </div>
                <pre>{`
                Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

                '.' Matches any single character.
                '*' Matches zero or more of the preceding element.
                The matching should cover the entire input string (not partial).

                Note:

                s could be empty and contains only lowercase letters a-z.
                p could be empty and contains only lowercase letters a-z, and characters like . or *.
                Example 1:

                Input:
                s = "aa"
                p = "a"
                Output: false
                Explanation: "a" does not match the entire string "aa".
                Example 2:

                Input:
                s = "aa"
                p = "a*"
                Output: true
                Explanation: '*' means zero or more of the precedeng element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
                Example 3:

                Input:
                s = "ab"
                p = ".*"
                Output: true
                Explanation: ".*" means "zero or more (*) of any character (.)".
                Example 4:

                Input:
                s = "aab"
                p = "c*a*b"
                Output: true
                Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore it matches "aab".
                Example 5:

                Input:
                s = "mississippi"
                p = "mis*is*p*."
                Output: false
                `}</pre>

                <div className="solution">
                    Solution:  
                    <br />
                    <br />
                    {JSON.stringify(result1)}
                    <br />
                    <br />
                    {JSON.stringify(result2)}
                    <br />
                    <br />
                    {JSON.stringify(result3)}
                    <br />
                    <br />
                    {JSON.stringify(result4)}
                    <br />
                    <br />
                    {JSON.stringify(result5)}
                </div>
            </div>
        );
    }
}

export default SolutionClass;