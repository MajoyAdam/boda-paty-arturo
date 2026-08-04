/*  HOJA DE ARTURO Y PATY — pega TODO esto en Extensiones → Apps Script
    Guarda deseos, canciones y confirmaciones en 3 pestañas automáticas.
    Luego: Implementar → Nueva implementación → Aplicación web
           Ejecutar como: Yo   ·   Quién tiene acceso: Cualquier usuario
    Copia la URL que termina en /exec y pégala en el campo "api" del index.html  */

const HDRS = {
  deseos:    ["id","texto","autor","privado","me","fecha"],
  canciones: ["id","cancion","autor","fecha"],
  rsvp:      ["id","nombre","asiste","menu","alergias","mensaje","fecha"]
};

function sheetFor(name){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(name);
  if(!sh){ sh = ss.insertSheet(name); sh.appendRow(HDRS[name]); }
  else if(sh.getLastRow() === 0){ sh.appendRow(HDRS[name]); }
  return sh;
}

function readAll(name){
  const sh = sheetFor(name);
  const v = sh.getDataRange().getValues();
  const head = v.shift();
  return v.map(r => { const o = {}; head.forEach((h,i)=>o[h]=r[i]); return o; });
}

function doGet(e){
  // Prueba rápida: abrir la liga con /exec?test=1 escribe una fila de prueba en rsvp
  if(e && e.parameter && e.parameter.test){
    const sh = sheetFor("rsvp");
    sh.appendRow([Utilities.getUuid(),"PRUEBA","Sí, ahí estaré","Vegetariano","ninguna","fila de prueba",new Date()]);
    return ContentService.createTextOutput(JSON.stringify({ok:true, msg:"fila de prueba agregada a rsvp"}))
      .setMimeType(ContentService.MimeType.JSON);
  }
  const out = { deseos:readAll("deseos"), canciones:readAll("canciones"), rsvp:readAll("rsvp") };
  return ContentService.createTextOutput(JSON.stringify(out))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e){
  const b = JSON.parse(e.postData.contents);
  const sh = sheetFor(b.tipo);
  if(b.del){
    const v = sh.getDataRange().getValues();
    for(let i=1;i<v.length;i++){ if(String(v[i][0])===String(b.del)){ sh.deleteRow(i+1); break; } }
  } else {
    const row = HDRS[b.tipo].map(h =>
      h==="id"    ? Utilities.getUuid() :
      h==="fecha" ? new Date() :
      (b[h]!==undefined ? b[h] : ""));
    sh.appendRow(row);
  }
  return ContentService.createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
