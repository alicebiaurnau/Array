var frutas=[]
var f

do{
    f=prompt("Digite a fruta: ")
    frutas.push(f)
}while(f!=null)
    if(
        f=""
        alert("Nenhuma fruta foi indicada.")
    )

alert(frutas)

for(var i=0; i<frutas.length-1;i++)
{
    document.write("<h2>"+frutas[i]+"</h2>")
}