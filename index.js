const getSchemeBtn = document.getElementById('get-colors-btn')
const inputColor = document.getElementById('input-color')
const inputPattern = document.getElementById('input-pattern')

getSchemeBtn.addEventListener('click', getColor)


function getColor(){
    const hexValue = inputColor.value
    const schemeMode = inputPattern.value
fetch('https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic')
.then(res => res.json())
.then(data => console.log(data))

}
