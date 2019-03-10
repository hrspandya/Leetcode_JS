import React from 'react';
// import { printSolution } from '../utils/helper';

function solution(a, target){
    // loop through the array
    // subtract array value with target and check if different exist in the map
    // 9 - 2 = 7, check if 7 exist in the map, if so 2 and 7 are two sum, 
    // if not, add the array value to the map (add 2 to the map)
    // go to the next array value.

    let map = {};
    let result = [];

    if (a && a.length > 2) {
        // loop through the array
        for (let i = 0; i < a.length; i++) {
            if (map[target - a[i]] != null) {
                result.push(map[target - a[i]]);
                result.push(i);
                break;
            } else {
                map[a[i]] = i;
            }
        }
    } else {
        return 'Not possible';
    }

    return result;
}

class TwoSum extends React.Component {
    render() {
        debugger;
        const a = [2, 7, 11, 15];
        const target = 9;
        const result = solution(a, target);
        return (
            <div className="problem">
                <div className="title">
                    Two Sum
                </div>
                <pre>{`
                Given an array of integers, return indices of the two numbers such that they add up to a specific target.

                You may assume that each input would have exactly one solution, and you may not use the same element twice.
                
                Example:
                
                Given nums = [2, 7, 11, 15], target = 9,
                
                Because nums[0] + nums[1] = 2 + 7 = 9,
                return [0, 1].
                `}</pre>

                <div className="solution">
                    Solution:  {JSON.stringify(result)}
                </div>
            </div>
        );
    }
}

export default TwoSum;