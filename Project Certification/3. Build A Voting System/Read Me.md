Pada project certification ini saya membuat system voting dengan menggunakan Map dan Set. Project ini digunakan untuk memenuhi certification project javascript dari freecodecamp.org
Langkah-langkah pembuatannya yaitu dengan membuat sebuah Map baru yang bernama poll. Nantinya poll tersebut akan berisi beberapa opsi, di mana masing-masing opti akan menjadi 
keys pada map dan setiap keys akan berisikan sebuah set. 
1. Membuat fungsi addOption dengan parameter (option)
Fungsi ini dibuat dengan tujuan menambahkan keys pada Map poll. apabila option sudah menjadi sebuah keys. Maka option tidak dibuat, apabila belum maka option dibuat sebagai keys 
dengan values yaitu Set yang belum diisi nilainya. 
2. Membuat function vote
Function ini berisikan 2 parameter yaitu option (keys value pada Map poll) dan voteId yaitu voting Id yang akan diisikan pada set kosong yang sudah dibuat tadi. 
Karena values pada setiap keys adalah set maka setiap VoteId tidak boleh memiliki nilai yang sama satu sama lain. 
3. Membuat function displayResults
Function ini dibuat untuk menampilkan result beruba setiap keys dari map, dan jumlah vote pada masing-masing key. 
Sekian, terima kasih semoga bermanfaat. 
Apabila anda ingin mencoba juga silakan kunjungi freecodecamp.org
