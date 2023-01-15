const getSchemeBtn = document.getElementById('get-colors-btn')
const inputColor = document.getElementById('input-color')
const inputPattern = document.getElementById('input-pattern')

getSchemeBtn.addEventListener('click', getColor)


function getColor() {
    const hexValue = inputColor.value.slice(1)
    const schemeMode = inputPattern.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${hexValue}&mode=${schemeMode}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let html =''
            for(let color of data.colors){
                html += `
                <div class='color-palette'style='background:${color.hex.value}'>
                <div class='color-names'>
                <p>${color.hex.value}</p>
                </div>
                </div>
                `
            }
            document.getElementById('content').innerHTML = html
        })


}

//calls the default display
function render() {
getColor()
}
render()