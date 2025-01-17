//リスト
let list = ['大吉','中吉','小吉','吉','末吉','凶','大凶']
let r = Math.random() * list.length
let r2 =Math.floor(r)
console.log(r2)
console.log(list[r2])

//htmlタグ内に表示させるやつ
let fin = document.getElementById('fin')
fin.innerText = '今日の運勢は、'+list[r2]
