<script context="module">

    export async function load({fetch, params}){
        const id = params.id;
        const url = 'http://127.0.0.1:5000/api/card';
        const res = await fetch(url, {method:"POST", body: JSON.stringify({'id':id})});
        const card = await res.json();
        return {props: {card}};
    }

</script>

<script>
    export let card;
    import '../../assets/styles/savecard.css'
    import CardHeader from '../../components/cardHeader.svelte';
</script>

<div class="wrapper">
    <CardHeader></CardHeader>
    <section>
            <div class="card">
                <div class="card__wrapper">
                    <div class="card__front">
                        <div class="card__banks">
                            <img class="card__bank-1" src="/saveCard/sberwhite.png" alt="">
                            <img class="card__bank-2" src="/saveCard/visawhite.png" alt="">
                        </div>
                        <div class="card__num">
                            <p class="card__digit"> .... .... .... {String(card[0].card_number).slice(11)}</p> 
                        </div>
                        <div class="card__date">
                            <div class="card__date-wrap">
                                <p class=" card__date-dt ">Действует до</p>
                                <p class=" card__date-st ">{card[0].card_gg} / {card[0].card_mm}</p>
                            </div>
                        </div>
                    </div>
                    <div class="card__back">
                        <div class="card__back-line">
                        </div>
                    </div>
                </div>
                <div class="card__button">
                    <button id="btn" type="submit">Пополнить</button>
                </div>
            </div>
    </section>
    <section>
        <div class="vefifed">
            <img src="/pay/psi.png" alt="">
            <img src="/pay/secur.png" alt="">
            <img src="/pay/verifedvisa.png" alt="">
            
        </div>
    </section>
</div>