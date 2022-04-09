let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

/* userName = userInput;　これはエラー */

if(typeof userInput === 'string') {
    userName = userInput;
}

// 絶対に値を返すことはないと言うことを示すのがnever
function generateError(message: string, code:number): never{
    throw {message: message, errorCode: code};
}

generateError('エラーが発生しました。',500);