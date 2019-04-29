import React from 'react';


class SolutionClass extends React.Component {
    render() {
        debugger;

        var isSymmetric = function(root) {
    
        };

        return (
            <div className="problem">
                <div className="title">
                    Symmetric Tree
                </div>
                <pre>{`
                Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

                    For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

                        1
                    / \
                    2   2
                    / \ / \
                    3  4 4  3
                    But the following [1,2,2,null,3,null,3] is not:
                        1
                    / \
                    2   2
                    \   \
                    3    3
                    Note:
                    Bonus points if you could solve it both recursively and iteratively.
                `}</pre>

                <div className="solution">
                    Solution:  
                    <br />
                    <br />
                    {JSON.stringify("")}
                </div>
            </div>
        );
    }
}

export default SolutionClass;