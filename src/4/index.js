import React from 'react';


function solution(nums1, nums2) {
    // find length for both arrays, sum them up, 
    // find if odd or even length
    // if odd, array value at parseInt(length/2) is the median
    // if even, then array value at (length/2 + length/2 - 1)/2 is the median

    let median = 0;

    if (nums1 != null && nums2 != null) {
        const len1 = nums1.length;
        const len2 = nums2.length;
        const totalLen = len1 + len2;
        const remainder = totalLen % 2;
        const position = parseInt(totalLen/2, 10);
        let isEven = true;
        if (remainder > 0) {
            // odd
            isEven = false;
        }

        // merge two arrays
        let i1 = 0;
        let i2 = 0;
        let resultArray = [];
        while(i1 < len1 && i2 < len2) {
            if (nums1[i1] < nums2[i2]) {
                resultArray.push(nums1[i1]);
                i1 = i1 + 1;
            } else {
                resultArray.push(nums2[i2]);
                i2 = i2 + 1;
            }

            if(resultArray.length - 1 === position){
                if (isEven === true) {
                    median = (resultArray[position] + resultArray[position - 1])/2;
                } else {
                    median = (resultArray[position]);                    
                }
                break;
            }
        }

        while(i1 < len1) {
            resultArray.push(nums1[i1]);
            i1 = i1 + 1;

            if(resultArray.length - 1 === position){
                if (isEven === true) {
                    median = (resultArray[position] + resultArray[position - 1])/2;
                } else {
                    median = (resultArray[position]);                    
                }
                break;
            }
        }

        while(i2 < len2) {
            resultArray.push(nums2[i2]);
            i2 = i2 + 1;

            if(resultArray.length - 1 === position){
                if (isEven === true) {
                    median = (resultArray[position] + resultArray[position - 1])/2;
                } else {
                    median = (resultArray[position]);                    
                }
                break;
            }
        }
    }

    return median;
}

class SolutionClass extends React.Component {
    render() {
        debugger;

        let nums1 = [1, 3];
        let nums2 = [2];
        const result1 = solution(nums1, nums2);


        nums1 = [1, 2];
        nums2 = [3, 4];
        const result2 = solution(nums1, nums2);

        

        return (
            <div className="problem">
                <div className="title">
                    Median of Two Sorted Arrays    
                </div>
                <pre>{`
                There are two sorted arrays nums1 and nums2 of size m and n respectively.

                Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

                You may assume nums1 and nums2 cannot be both empty.



                Example 1:

                nums1 = [1, 3]
                nums2 = [2]

                The median is 2.0



                Example 2:

                nums1 = [1, 2]
                nums2 = [3, 4]

                The median is (2 + 3)/2 = 2.5
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