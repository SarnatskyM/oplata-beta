<script>
    export let card;
</script>

<a href="/card/{card.id}" class="card-bind">
    <div class="card-bind__wrap sber">
        <div class="card-bind__img">
            <img class="card-bind__logo" src="/pay/sbermobilelogo.png" alt="">
            <img class="card-bind__name" src="/pay/visa.png" alt="">
        </div>
        <div class="card-bind__text">
            <p>**** {String(card.card_number).slice(12)}</p>
            <p>{card.card_mm} / {card.card_gg}</p>
        </div>
    </div>
</a>