/**
 * Created by jxr34 on 2017/9/4.
 */

/**
 * 输入两个整数序列，
 * 第一个序列表示栈的压入顺序，
 * 请判断第二个序列是否为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。
 * 例如序列1,2,3,4,5是某栈的压入顺序，
 * 序列4，5,3,2,1是该压栈序列对应的一个弹出序列，
 * 但4,3,5,1,2就不可能是该压栈序列的弹出序列。
 * （注意：这两个序列的长度是相等的）
 * @param pushV
 * @param popV
 * @constructor
 */
function IsPopOrder(pushV, popV) {
    let stack = [];
    let index = 0;
    for (let node of pushV) {
        stack.push(node);
        while (stack.length && stack[stack.length - 1] === popV[index]) {
            index ++;
            stack.pop();
        }
    }
    return stack.length === 0;
}

/**
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 * @param root
 * @constructor
 */
/* function TreeNode(x) {
 this.val = x;
 this.left = null;
 this.right = null;
 } */
function pushNode(array, node) {
    if (node.left) {
        array.push(node.left.val);
    }
    if (node.right) {
        array.push(node.right.val);
    }
    if (node.left) {
        pushNode(array, node.left);
    }
    if (node.right) {
        pushNode(array, node.right);
    }
}
function PrintFromTopToBottom(root) {
    let array = [];
    if (root) {
        array.push(root.val);
        pushNode(array, root);
    }
    return array;
}

function PrintFromTopToBottomBest(root) {
    let stack = [];
    let array = [];
    if (root) {
        stack.push(root);
    }
    while (stack.length) {
        let node = stack.shift();
        array.push(node.val);
        if (node.left) {
            stack.push(node.left);
        }
        if (node.right) {
            stack.push(node.right);
        }
    }
    return array;
}

function Node(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function BST() {
    this.root = null;
    this.insert = insert;
}

function insert(data) {
    let node = new Node(data, null, null);
    if (!this.root) {
        this.root = node;
    } else {
        let current = this.root;
        let parent;
        while (current) {
            parent = current;
            if (data < current.val) {
                current = parent.left;
                if (!current) {
                    parent.left = node;
                    break;
                }

            } else {
                if (!parent.right) {
                    parent.right = node;
                    break;
                }
                current = parent.right;
            }
        }
    }
}
let node = new BST();
node.insert(23);
node.insert(45);
node.insert(16);
node.insert(37);
node.insert(3);
node.insert(99);
node.insert(22);

let array = [];
array.push(node);

console.log("array: " + JSON.stringify(array));