document.addEventListener("DOMContentLoaded", function() {  
    const hakkındaBtn = document.getElementById("hakkında-btn");  
    const hakkındaDiv = document.getElementById("hakkında-div");  

    hakkındaBtn.addEventListener("click", function() {  
        if (hakkındaDiv.style.display === "none" || hakkındaDiv.style.display === "") {  
            hakkındaDiv.style.display = "block";  
            hakkındaBtn.innerText = "Hakkında Kapat";  
        } else {  
            hakkındaDiv.style.display = "none";  
            hakkındaBtn.innerText = "Hakkında Göster";  
        }  
    });  
  
    const projelerListesi = document.querySelectorAll("#projelerim ul li");  
    projelerListesi.forEach(item => {  
        item.addEventListener("click", function() {  
            alert(Proje: ${this.innerText});  
        });  
    });  

    const iletişimFormu = document.getElementById("iletisim-formu");  
    iletişimFormu.addEventListener("submit", function(event) {  
        const ad = document.getElementById("ad").value;  
        if (!ad) {  
            alert("Lütfen adınızı girin.");  
            event.preventDefault();  
        }  
    });  
});