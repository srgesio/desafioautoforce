let body = document.getElementsByTagName('body')[0]


body.innerHTML += `
<style>
    .meuModal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.4);
    }

    .meuModal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }


    #close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
</style>


<div id="myModal" class="meuModal">
    <div class="meuModal-content">
        <span id="close">&times;</span>
        <img width="100%" src="http://2.bp.blogspot.com/-UjIel20Ifpk/T5xH1_64h-I/AAAAAAAAAO4/-xJE0r1D58g/s1600/Escudo+do+Palmeia.jpg" alt="escudo do palmeiras">
    </div>
</div>

`
var modal = document.getElementById("myModal");
var span = document.getElementById("close");

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "block";
    }
}

