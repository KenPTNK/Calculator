function plus() {
    let x = document.getElementById("firstNumber").value
    let y = document.getElementById("secondNumber").value
    if (typeof(x) == null || typeof(x)==NaN || typeof(y)==null || typeof(y)==NaN || typeof(x)=="" || typeof(y)=="" ||x==''||y=='') {
        alert('Hãy nhập vào các số muốn tính')
    }
    so1 = Number(x), so2 = Number(y)
    document.getElementById("answer").innerHTML = so1+so2
}
function minus() {
    let x = document.getElementById("firstNumber").value
    let y = document.getElementById("secondNumber").value
    if (typeof(x) == null || typeof(x)==NaN || typeof(y)==null || typeof(y)==NaN || typeof(x)=="" || typeof(y)=="" ||x==''||y=='') {
        alert('Hãy nhập vào các số muốn tính')
    }
    so1 = Number(x), so2 = Number(y)
    document.getElementById("answer").innerHTML = so1-so2
}

// // Ktra max
// function ktraMax(arr) {
//     let a = arr.length
//     let max = arr[0]
//     for(let i = 0; i<a; i++) {
//         if(max<=arr[i]){
//             max=arr[i]
//         }
//     }
//     return max
// }
// console.log("Kiểm tra max")
// let input = prompt("Nhập vào số mà bạn muốn kiểm tra: ")
// let cacSo = input.split(",")
// console.log(ktraMax(cacSo))
