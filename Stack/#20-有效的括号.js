/*
    给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
    有效字符串需满足：
        左括号必须用相同类型的右括号闭合。
        左括号必须以正确的顺序闭合。
        注意空字符串可被认为是有效字符串。

    示例 1:
        输入: "()"
        输出: true
    示例 2:
        输入: "()[]{}"
        输出: true
    示例 3:
        输入: "(]"
        输出: false
    示例 4:
        输入: "([)]"
        输出: false
    示例 5:
        输入: "{[]}"
        输出: true

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/valid-parentheses
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * 解题思路
 *  - ({})
 *      - 入栈次序 ( , { , } , )  
 *          即当前传入字符与栈顶元素相对应
 *              ( -> ), { -> }
 */

var isValid = function (s) {
    let stack = [];
    let strLength = s.length;

    if (s.length % 2) return false; // 如果字符长度不是偶数直接返回false

    for (let i = 0; i < strLength; i++) {
        switch (s[i]) {
            case '(':
                stack.push(s[i]);
                break;
            case '[':
                stack.push(s[i]);
                break;
            case '{':
                stack.push(s[i]);
                break;
            case ')':
                if ('(' !== stack.pop()) return false;
                break;
            case ']':
                if ('[' !== stack.pop()) return false;
                break;
            case '}':
                if ('{' !== stack.pop()) return false;
                break;
        }
    }

    return !stack.length;
}

// test case
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));

/**
 * 解法2 参考于leetCode解析
 *  - 设置一个对象 存储对应匹配的值
 *  - 根据传入的字符串进行判断 以 () 为例 传入 ( 时入栈 ) 当传入 ) 时 则取出当前栈顶元素比较
 *  - 当全部匹配时stack为空
 */
function isValid1(s) {
    let map = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }

    let stack = [];
    let top;

    for (let char of s) {
        let value;
        if ((value = map[char])) {
            stack.push(value)
        } else {
            top = stack.pop();
            if (top !== char) {
                return false;
            }
        }
    }

    return !stack.length;
}