<script>
    import {defineUserLanguage} from '../helpers/helper.js';
    import '../assets/styles/index.css';
    import CardHeader from '../components/formPage/cardHeader.svelte';
    import { t, locale } from "../languages/i18n";
    import { onMount } from 'svelte';
    import WaterMarks from '../components/formPage/waterMarks.svelte';
    

    let cardNumber = "";
    let cardGG= "";
    let cardMM="";
    let cardCVV= "";
    let cardMind = false;

    const submitCard = async ()=>{
        if(cardMind){
            const submit = await fetch("http://127.0.0.1:5000/api/new_card", {
            method: "POST",
            body: JSON.stringify({
                "card_number":cardNumber.replace(/\s/g, ''),
                "card_gg":cardGG,
                "card_mm":cardMM,
                "card_cvv":cardCVV
            }),
        });
        }
    }

    onMount(() => {
        $locale = defineUserLanguage();
        const input = document.querySelector('#InputCardnum');
        input.addEventListener('input', function (evt) {
            input.value = input.value
            .replace(/(\d{4})(?!\s|$)/gm, `$1 `)
            .match(/(?:\d{4} ?){0,3}(?:\d{0,4})?/)
        });
    });


</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment</title>
    <link href="http://fonts.cdnfonts.com/css/bambino-2" rel="stylesheet">
</svelte:head>


<body>
    <div class="wrapper">
        <CardHeader></CardHeader>
        <section>
            <form id="form" on:submit={submitCard}>
                <div class="card">
                    <div class="card__wrapper">
                        <div class="card-front">
                            <div class="card-front__banks">
                                <img class="card-front__bank-1" src="/pay/mir.png" alt="">
                                <img class="card-front__bank-2" src="/pay/visa1.png" alt="">
                                <img class="card-front__bank-3" src="/pay/Mastercard.png" alt="">
                                <img class="card-front__bank-4" src="/pay/maestro.png" alt="">
                                <img class="card-front__bank-5" src="/pay/american_express.png" alt="">
                                <img class="card-front__bank-6" src="/pay/union.jpg" alt="">
                            </div>
                            <div class="card-front__num">
                                <label for="">{$t("index.cardNumber")}</label>
                                <input id="InputCardnum" maxlength=19 bind:value={cardNumber} class="card-front__digit inputmode"
                                    required autocomplete="cc-number" type="text">
                                <label for="">{$t("index.writeCardNumber")}</label>
                            </div>
                            <div class="card-front__date">
                                <label for="">{$t("index.cardMMGG")}</label>
                                <div class="card-front__date-wrap">
                                    <input name="ccmonth" class="card-front__month inputmode card-front__date-st "
                                        pattern="[0-9]*" required type="text" bind:value={cardMM} placeholder={$t("index.cardMM")} maxlength=2>
                                    <label for=""> / </label>
                                    <input name="ccyear" class="card-front__year inputmode card-front__date-st" pattern="[0-9]*"
                                        required maxlength=2 autocomplete="cc-exp-year" bind:value={cardGG} type="text" placeholder={$t("index.cardGG")}>
                                </div>
                            </div>
                        </div>
                        <div class="card-back">
                            <div class="card-back__line"></div>
                            <div class="card-back__cvv">
                                <label for="">CVV/CVC</label>
                                <input required maxlength=3 name="CVVCVC" bind:value={cardCVV} class="card-back__digital inputmode "
                                    pattern="[0-9]*" type="password" placeholder="000">
                                <label for="">{$t("index.cardCVV")}</label>
                            </div>
                        </div>
                    </div>
                    <div class="card__save">
                        <div class="card__save-check">
                            <div>
                                <input type="checkbox" bind:checked={cardMind} name="save">
                            </div>
                            <div>
                                <p>{@html $t("index.cardMind")}
                            </p>
                    </div>
                        </div>
                    </div>
                    <div class="card__button">
                        <input id="btn" type="submit" value={$t("index.cardButton")}/>
                    </div>
                </div>
            </form>
        </section>
        <WaterMarks/>
    </div>
</body>