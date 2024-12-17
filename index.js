// alert("Hello My Web Page");
/**
 * Quiz 1
 * 数字と文字の足し算の違い!!
 */
const apple  = 3
const pen    = 5
const goukei = apple + pen

console.log(goukei)

/**
 * Quiz 2
 * 配列の中の番号について!!
 */
const array = ["サッカー", "バトミントン", "テニス", "水泳"]
console.log(array.length)

/**
 * If条件分岐１
 */
const superApple = "ぶど"
let color = "???"

if (superApple == "りんご") {
    color = "赤"
} else if (superApple == "みかん") {
    color = "オレンジ"
} else if (superApple == "ぶどう") {
    color = "紫"
} else {
    color = "なし"
}

console.log(color)

/**
 * If条件分岐２
 */
const student_score = 98
const student_social_score = 14

if (student_score >= 90 && student_social_score >=95) {
    console.log("S")
} else if (student_score >= 80 || student_social_score >= 80) {
    console.log("A")
} else if (student_score >= 50) {
    console.log("B")
} else {
    console.log("C")
}

/**
 * for 繰り返し処理
 */
// for (a in array) {
//     console.log(array[a]) 
// }

// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])

for (let i = 0; array.length > i; i++) {
    console.log(array[i])
}

/**
 * じゃんけんゲーム
 * 相手：ぐー、ちょき、パー
 * 自分：ぐー、ちょき、パー
 */
function janken(myAnswer) {
    const enemyAnswers = ["ぐー", "ちょき", "ぱー"] 
    const enemyAnswer  = enemyAnswers[Math.floor(Math.random()*enemyAnswers.length)]
    console.log(`自分:${myAnswer} 相手:${enemyAnswer}`)

    let thisResult
    if ( myAnswer == enemyAnswer ) {
        thisResult = `<p id="jankenResult">自分:${myAnswer} 相手:${enemyAnswer}<br />アイコ！</p>`
    } else if ((myAnswer == "ぐー" && enemyAnswer == "ちょき") || (myAnswer == "ちょき" && enemyAnswer == "ぱー") || (myAnswer == "ぱー" && enemyAnswer == "ぐー")) {
        thisResult = `<p id="jankenResult">自分:${myAnswer} 相手:${enemyAnswer}<br />カチ！</p>`
    } else {
        thisResult = `<p id="jankenResult">自分:${myAnswer} 相手:${enemyAnswer}<br />マケ！</p>`
    }

    let result = document.getElementById("jankenResult")
    result.remove()
    result = document.getElementById("janken")
    result.insertAdjacentHTML("afterend", thisResult)
}