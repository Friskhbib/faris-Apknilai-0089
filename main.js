
        document.getElementById('save-button').addEventListener('click', function() {
            const nim = document.getElementById('nim').value;
            const nama = document.getElementById('nama').value;
            const presensiTeori = document.getElementById('presensi-teori').value;
            const tugasTeori = document.getElementById('tugas-teori').value;
            const utsTeori = document.getElementById('uts-teori').value;
            const uasTeori = document.getElementById('uas-teori').value;
            const presensiPraktek = document.getElementById('presensi-praktek').value;
            const tugasPraktek = document.getElementById('tugas-praktek').value;
            const utsPraktek = document.getElementById('uts-praktek').value;
            const uasPraktek = document.getElementById('uas-praktek').value;

            

            const presensiTotal = parseFloat(presensiTeori) + parseFloat(presensiPraktek) / 2* 0.10;
            const tugasTotal = parseFloat(tugasTeori) + parseFloat(tugasPraktek) / 2 * 0.20 ;
            const utsTotal = parseFloat(utsTeori) + parseFloat(utsPraktek) / 2 * 0.30 ;
            const uasTotal = parseFloat(uasTeori) + parseFloat(uasPraktek) / 2 * 0.40 ;
            const nilaiAkhir = (
                (parseFloat(presensiTeori) + parseFloat(tugasTeori) + parseFloat(utsTeori) + parseFloat(uasTeori) +
                 parseFloat(presensiPraktek) + parseFloat(tugasPraktek) + parseFloat(utsPraktek) + parseFloat(uasPraktek)) / 8
            ).toFixed(2);
      

           
            let grade = '';
            if (nilaiAkhir >= 80) grade = 'A';
            else if (nilaiAkhir >= 70) grade = 'B';
            else if (nilaiAkhir >= 60) grade = 'C';
            else if (nilaiAkhir >= 50) grade = 'D';
            else grade = 'E';

            const tableBody = document.getElementById('table-body');
            const newRow = tableBody.insertRow();

            newRow.insertCell(0).textContent = tableBody.rows.length;
            newRow.insertCell(1).textContent = nim;
            newRow.insertCell(2).textContent = nama;
            newRow.insertCell(3).textContent = presensiTotal;
            newRow.insertCell(4).textContent = tugasTotal;
            newRow.insertCell(5).textContent = utsTotal;
            newRow.insertCell(6).textContent = uasTotal;
            newRow.insertCell(7).textContent = nilaiAkhir;
            newRow.insertCell(8).textContent = grade;
        });

        document.getElementById('clear-button').addEventListener('click', function() {
            document.getElementById('nim').value = '';
            document.getElementById('nama').value = '';
            document.getElementById('presensi-teori').value = '';
            document.getElementById('tugas-teori').value = '';
            document.getElementById('uts-teori').value = '';
            document.getElementById('uas-teori').value = '';
            document.getElementById('presensi-praktek').value = '';
            document.getElementById('tugas-praktek').value = '';
            document.getElementById('uts-praktek').value = '';
            document.getElementById('uas-praktek').value = '';
            
        });

        document.getElementById('reset-button').addEventListener('click', function() {
            document.getElementById('table-body').innerHTML = '';
        });
