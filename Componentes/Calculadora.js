app.component('mostrar-calculadora', {
    template:
    `   
        <div class="mostrar-calculadora">
            <div class="contenedor">
                <form>
                    <label for="nombre">Nombre y Apellido:</label>
                    <input type="text" name="Nombre" id="Nombre" v-model="nombre">
                    <br>
                    <label for="sueldo">Sueldo:</label>
                    <input type="number" name="sueldo" id="sueldo" value="0" v-model="sueldo"> 
                    <br>
                    <label>Afiliado en sindicato</label>
                    <input type="checkbox" name="sindicato" id="false" v-model="sindicato">
                    <br>
                    <button type="button" type="submit" v-on:click="Datos">Calcular</button>    
                </form>
                <table v-if="mostrar">
            <tr>
                <td>Concepto</td>
                <td>Monto</td>
            </tr>
            <tr>
                <td>Sueldo Bruto</td><td>{{ sueldo }}</td>
            </tr>
            <tr>
                <td>Jubilacion (11%)</td><td>{{ jubilacion }}</td>
            </tr>
            <tr>
                <td>Ley 19032 (3%)</td><td>{{ Ley }}</td>
            </tr>
            <tr>
                <td>Obra social (3%)</td><td>{{ ObraSocial }}</td>
            </tr>
            <tr>
                <td>Sindicato</td><td>{{ CostoSindicato }}</td>
            </tr>
            <tr>
                <td>Impuesto a las ganancias</td><td>{{ impuestoGanancias }}</td>
            </tr>
            <tr>
                <td>Sueldo Neto</td><td>{{ sueldoNeto }}</td>
            </tr>
        </table>
            </div>
        </div>
    `,
    data(){
        return{
            sueldo:null,
            nombre:'',
            sindicato:false,
            sueldoNeto:null,
            jubilacion:null,
            Ley:null,
            ObraSocial:null,
            CostoSindicato:null,
            impuestoGanancias:null,
            mostrar:false
        }
    },
    methods:{
        Datos(){
            if (this.nombre.trim() ==="" && this.nombre.trim()===""){
                alert("Debe ingresar un nombre");
                comprobanteNombre=false;
            }else {comprobanteNombre=true;}
            if (this.sueldo<=0){
                alert("El monto ingresado debe ser como minimo $1000 ");
                comprobanteSueldo = false;
            }else {comprobanteSueldo=true;}
            if(comprobanteNombre===true && comprobanteSueldo===true && this.sindicato===true){
                this.mostrar=true
                this.jubilacion=(this.sueldo*0.11)
                this.Ley=(this.sueldo*0.03)
                this.ObraSocial=(this.sueldo*0.03)
                this.CostoSindicato=(this.sueldo*0.015)
                if(this.sueldo>=200000){
                this.impuestoGanancias=(this.sueldo-200000)*0.35
                }else{this.impuestoGanancias=0}
                this.sueldoNeto=(this.sueldo-this.jubilacion-this.Ley-this.ObraSocial-this.CostoSindicato-this.impuestoGanancias)
            }
            if(comprobanteNombre===true && comprobanteSueldo===true && this.sindicato===false){
                this.mostrar=true
                this.jubilacion=(this.sueldo*0.11)
                this.Ley=(this.sueldo*0.03)
                this.ObraSocial=(this.sueldo*0.03)
                this.CostoSindicato=0
                if(this.sueldo>=200000){
                this.impuestoGanancias=(this.sueldo-200000)*0.35
                }else{this.impuestoGanancias=0}
                this.sueldoNeto=(this.sueldo-this.jubilacion-this.Ley-this.ObraSocial-this.CostoSindicato-this.impuestoGanancias)
            }
        }
    }

})