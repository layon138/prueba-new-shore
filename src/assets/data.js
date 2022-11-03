let request=[
    {
        "rowIdProducto": "1-125S-1052",
        "numProducto": "163264949",
        "descripcion": "Cuenta Corriente Moneda Local",
        "familia": "01 - Cuentas Corrientes CTD",
        "estado": "Vigente o Activo",
        "codigoProducto": "CTD",
        "marca": "",
        "tipo": "",
        "tipoTarjeta": "",
        "moneda": "CLP",
        "tipoProducto": "CUENTA_CORRIENTE",
        "cuentaRelacionada": "10163264949",
    },
    {
        "rowIdProducto": "1-1XFT5-15",
        "numProducto": "89943491700",
        "descripcion": "Cuenta De Ahorro",
        "familia": "03 - Cuentas de Ahorro AHO",
        "estado": "Vigente o Activo",
        "codigoProducto": "AHO",
        "marca": "",
        "tipo": "",
        "tipoTarjeta": "",
        "moneda": "CLP",
        "tipoProducto": "CUENTA_AHORRO",
        "cuentaRelacionada": null
    },
    {
        "rowIdProducto": "1-182Q-601",
        "numProducto": "10163264949",
        "descripcion": "Linea De Credito Personas",
        "familia": "04 - Líneas de Crédito LCD",
        "estado": "Vigente o Activo",
        "codigoProducto": "LCD",
        "marca": "",
        "tipo": "",
        "tipoTarjeta": "",
        "moneda": "",
        "tipoProducto": "LINEA_CREDITO",
        "cuentaRelacionada": "163264949"
    },
    {
        "rowIdProducto": "2-8TWT-738",
        "numProducto": "5435642000380009",
        "descripcion": "Mastercard Internacional  Tct",
        "familia": "05 - Tarjetas de Crédito TNM",
        "estado": "Vigente o Activo",
        "codigoProducto": "TNM",
        "titularidad": "T",
        "marca": "Mastercard",
        "tipo": "MASTER",
        "tipoTarjeta": "",
        "moneda": "",
        "tipoProducto": "TARJETA_CREDITO",
        "cuentaRelacionada": "0005435640162789884"
    },
    {
        "rowIdProducto": "1-2XNUL-78",
        "numProducto": "4152831100149125",
        "descripcion": "Visa Dorada  Tct",
        "familia": "05 - Tarjetas de Crédito TNM",
        "estado": "Bloqueado",
        "codigoProducto": "TNM",
        "flagBloqueo": "O",
        "titularidad": "T",
        "marca": "Visa",
        "tipo": "VISA",
        "tipoTarjeta": "",
        "moneda": "",
        "tipoProducto": "TARJETA_CREDITO",
        "cuentaRelacionada": "0004152830506286523",
    },
    {
        "rowIdProducto": "2-64F9-31",
        "numProducto": "4152831100474861",
        "descripcion": "Visa Dorada  Tct",
        "familia": "05 - Tarjetas de Crédito TNM",
        "estado": "Bloqueado",
        "codigoProducto": "TNM",
        "flagBloqueo": "O",
        "titularidad": "T",
        "marca": "Visa",
        "tipo": "VISA",
        "tipoTarjeta": "",
        "moneda": "",
        "tipoProducto": "TARJETA_CREDITO",
        "cuentaRelacionada": "0004152830506286523",
    }
]
let prueba=[]
request=request.filter(data=>{
        let respuesta=false
        if(data.tipo=="VISA"){
            respuesta= true
        }
        return respuesta
})



