function inserir (num)
{
    var res = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = res + num;
}

function calculo ()
{
    var res = document.getElementById('resultado').innerHTML;
    if(res)
    {
        document.getElementById('resultado').innerHTML = eval(res);
    }
}

function voltar ()
{
    var res = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = res.substring(0, res.length -1);
}

function limpar ()
{
    document.getElementById('resultado').innerHTML = "";
}   