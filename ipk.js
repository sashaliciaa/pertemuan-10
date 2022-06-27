function addRow(){
	for(let i=1; i<=8; i++){
		let table = document.getElementById("nilai").getElementsByTagName('tbody')[0];;
		let row = table.insertRow();
		let cell1 = row.insertCell(0);
		let cell2 = row.insertCell(1);
		let cell3 = row.insertCell(2);
		let cell4 = row.insertCell(3);
		let cell5 = row.insertCell(4);
		let cell6 = row.insertCell(5);
		let cell7 = row.insertCell(6);
		cell1.innerHTML = `<td><input type="text" class="matkul${i}"></td>`;
		cell2.innerHTML = `<td><input type="number" class="sks${i} input-small" id="sks${i}" value="0" min="2" max="4"></td>`;
		cell3.innerHTML = `<td><input type="number" class="presensi${i} input-small" id="presensi${i}" value="0" min="0" max="100" maxlength="3"></td>`;
		cell4.innerHTML = `<td><input type="number" class="tugas${i} input-small" id="tugas${i}" value="0" min="0" max="100" maxlength="3"></td>`;
		cell5.innerHTML = `<td><input type="number" class="uts${i} input-small" id="uts${i}" value="0" min="0" max="100" maxlength="3"></td>`;
		cell6.innerHTML = `<td><input type="number" class="uas${i} input-small" id="uas${i}" value="0" min="0" max="100" maxlength="3"></td>`;
		cell7.innerHTML = `<td><span class="grade${i}" id="grade${i}">--</span></td>`;
	}
}

function hitungipk(){
	let table = document.getElementById("nilai");
	let total_matkul = table.tBodies[0].rows.length;
	let total_sks = 0;
	let total_nilai = 0;
	let name = document.getElementById("name").value;
	let nim = document.getElementById("nim").value; 

	for(let i=1; i<=8; i++){
		let sks = parseInt(document.getElementById(`sks${i}`).value);

		let presensi = 0.2 * parseInt(document.getElementById(`presensi${i}`).value);
		let tugas = 0.1 * parseInt(document.getElementById(`tugas${i}`).value);
		let uts = 0.3 * parseInt(document.getElementById(`uts${i}`).value);
		let uas = 0.4 * parseInt(document.getElementById(`uas${i}`).value);
		
		let nilai = presensi + tugas + uts + uas;
		
		if (nilai >= 85) grd = 'A';
		else if (nilai >= 75) grd = 'B';
		else if (nilai >= 60) grd = 'C';
		else if (nilai >= 35)grd = 'D';
		else grd = 'E';

		document.getElementById(`grade${i}`).innerHTML = grd
		total_sks += sks;
		
		if (grd == 'A') total_nilai += (sks * 4);
		else if (grd == 'B') total_nilai += (sks * 3);
		else if (grd == 'C') total_nilai += (sks * 2);
		else if (grd == 'D') total_nilai += (sks * 1);
		else total_nilai += (sks * 0);
	}
	
	let ipk = total_nilai / total_sks;

	document.getElementById("result_nim").innerHTML = nim
	document.getElementById("result_nama").innerHTML = name
	document.getElementById("result_sks").innerHTML = total_sks
	document.getElementById("result_matkul").innerHTML = total_matkul
	document.getElementById("result_ipk").innerHTML = ipk.toFixed(2)
}

$(document).ready(function(){

addRow();
	
});