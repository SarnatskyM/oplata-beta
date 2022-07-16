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
    import { t } from "../../languages/i18n";
    import '../../assets/styles/savecard.css'
    import CardHeader from '../../components/formPage/cardHeader.svelte';
    import WaterMarks from '../../components/formPage/waterMarks.svelte';
    export let card;
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
                                <p class=" card__date-dt ">{$t('card_id')}</p>
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
                    <a href="check">
                        <button id="btn" type="submit">{$t('index.cardButton')}</button>
                    </a>
                </div>
            </div>
    </section>
    <WaterMarks/>
</div>