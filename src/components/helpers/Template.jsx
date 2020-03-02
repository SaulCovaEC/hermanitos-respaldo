let i;

function tablaUsuarios(usuario, rol){
  var tabla = `<table class="highlight">
    <thead>
      <tr>
        <th>Id</th>
        <th>Correo</th>
        <th>Nombre</th>
        <th>Clave</th>`;
        
        if(rol === 'todos'){
          tabla = tabla + `<th>Rol</th>`;
        }
        else if(rol === 'cliente'){
          tabla = tabla + `<th>Empresa</th>`;
        }
        else if(rol === 'tecnico') {
          tabla = tabla + `<th>Departamento</th>`;
        }
        
        tabla = tabla + `<th></th>
      </tr>  
    </thead>

    <tbody class="tickets-table">`;      
      for(i = 0; i < usuario.length; i++){

        tabla = tabla + `<tr id="user-${usuario[i].id}">
          <td class="id">${usuario[i].id}</td>
          <td class="correo">${usuario[i].correo}</td>
          <td class="nombre">${usuario[i].nombre}</td>
          <td class="clave">${usuario[i].clave}</td>`;
          
          if(rol === 'todos'){
            tabla = tabla + `<td>${usuario[i].rol}</td>`;
          }
          else if(rol === 'cliente'){
            tabla = tabla + `<td>${usuario[i].empresa}</td>`;
          }
          else if(rol === 'tecnico'){
            tabla = tabla + `<td>${usuario[i].departamento}</td>`;
          }
        tabla = tabla + `<td><button type="button" class="btn-eliminar-user" data-id="${usuario[i].id}">Eliminar</button></td>
        </tr>`
      }
      tabla = tabla + `</tbody>
    </table>`
  return tabla;
}

function formatFecha(fecha){
  var f = new Date(fecha);
  var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
  var hora = f.getHours();
  var min = f.getMinutes();
  if(min < 10){
      min = '0' + min;
  }
  
  if(hora > 12){
    hora = hora - 12
    hora = hora+":"+min+" PM"
  } else {
    hora = hora+":"+min+" AM"
  }
  var nFecha = {
      'y': f.getFullYear(),
      'm': meses[f.getMonth()],
      'd': f.getDate(),
      'h': hora
  }
  return nFecha;
}

/*function fechaActual(){
    var f = new Date();
    return f.getFullYear()+'-'+((f.getMonth() < 10)? '0'+(f.getMonth()+1): f.getMonth()+1)+'-'+f.getDate()
}*/

export {
  tablaUsuarios,
  formatFecha
}