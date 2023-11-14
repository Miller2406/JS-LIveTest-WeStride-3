// หาผลรวมสุดท้ายของตัวเลขที่ได้รับมา
// 39 > 3*9=27, 2*7=14, 1*4=4 ans=4

let nums = 999; // num
let numsStr = '';

do {
    numsStr = nums.toString()
    let sum = 1
    for (let i = 0; i < numsStr.length; i++) {
        sum = sum * numsStr[i]
        console.log(sum);

    }
    nums = sum

} while (nums > 9)