
atualPos = 0

i = 1

j = []
    
j[0] = []
j[1] = []
j[2] = []
j[3] = []
j[4] = []

j[0][0] = "NUMERO"
j[0][1] = "DESCRICAO"
j[0][2] = "TIPO"
j[0][3] = "LATITUDE"
j[0][4] = "LONGITUDE"

function sucess(pos){
    console.log(pos)

    atualPos = pos
}

//navigator.geolocation.getCurrentPosition(sucess)

document.querySelector(".button").addEventListener("click", function(){
    navigator.geolocation.getCurrentPosition(sucess)

    x = atualPos.coords.latitude
    y = atualPos.coords.longitude

    h = document.querySelector("#observacao").value

    ct = document.querySelector("#cto")
    ce = document.querySelector("#ceo")

    stsc = 0

    if(ct.checked == true){
        console.log("CTO SELECT")
        stsc = "CTO"
    }if(ce.checked == true){
        console.log("CEO SELECT")
        stsc = "CEO"
    }

    j[i] = []
    j[i][0] = i
    j[i][1] = h
    j[i][2] = stsc
    j[i][3] = x
    j[i][4] = y

    i = i + 1
    h = ""
})


const downloadXLSX = () => {
    const wb = XLSX.utils.book_new();
    wb.Prop = {
        Title: 'TITULO',
        Subject: 'SUBTITULO',
        Author: 'AUTOR',
        CreateData: new Date(),
    }
    wb.SheetNames.push("Relatorio")


    const ws = XLSX.utils.aoa_to_sheet(j)

    wb.Sheets['Relatorio'] = ws

    XLSX.writeFile(wb, 'PONTOS COLETADOS.xlsx', {bookType: 'xlsx', type: 'bynary'})
}



document.querySelector(".emitir").addEventListener("click", function(){
    
    
    alert("RELATORIO EMITIDO__")

    downloadXLSX()

})
