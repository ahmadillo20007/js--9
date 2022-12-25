var elInp = document.querySelector('.inp')
var elBtn = document.querySelector('.btn')
var elTiile = document.querySelector('.title')

var arr = ['olma', 'behi', 'tarvuz','ananas','shaftoli','qulupnay','olxori','nok','qovun','uzum','gilos','kivi','banan', 'dolana','olcha','o`rik']
var bosh = []

elBtn.addEventListener('click', function(){
    for(var i = 0; i <= arr.length; i++){
       var inp = elInp.value
       if(arr[i].length == inp)
       bosh.push(arr[i])
       elTiile.textContent = bosh
    }
})