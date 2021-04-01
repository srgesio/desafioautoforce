let conversion = document.getElementsByClassName('form-conversion__body')[0]

conversion.firstChild.innerHTML += `<div class="form-group">
    <div>
        <div class="choices">
            <div class="choices__inner">
                <select class="form-control choices__input" name="cars">
                    <option value="suv">SUV</option>
                    <option value="senda">Senda</option>
                    <option value="hatch">Hatch</option>
                    <option value="pickup">Pickup</option>
                </select>
            </div>
        </div>
    </div>
</div>
`
conversion.firstChild.innerHTML += `<div class="form-group">
    <div>
        <div>
            <textarea class="form-control" name="message" rows="5" cols="30">Mensagem</textarea>
        </div>
    </div>

</div>
`