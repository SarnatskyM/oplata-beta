<script>
    import '../assets/styles/index.css';
    import CardHeader from '../components/cardHeader.svelte';

</script>

<svelte:head>
    <title>Payment</title>
    <link href="http://fonts.cdnfonts.com/css/bambino-2" rel="stylesheet">
</svelte:head>

<body>

    <div class="wrapper">
        <CardHeader></CardHeader>
        <section>
            <form id="form" action="check.html" method="get">
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
                                <label for="">Номер карты</label>
                                <input id="cardNum" pattern="[0-9]*" maxlength=16 name="cardnumber" class="card-front__digit inputmode"
                                    required autocomplete="cc-number" type="text">
                                <label for="">Введите номер карты</label>
                            </div>
                            <div class="card-front__date">
                                <label for=""> Действует до</label>
                                <div class="card-front__date-wrap">
                                    <input name="ccmonth" class="card-front__month inputmode card-front__date-st "
                                        pattern="[0-9]{2}" required type="text" placeholder="MM" maxlength=2>
                                    <label for=""> / </label>
                                    <input name="ccyear" class="card-front__year inputmode card-front__date-st" pattern="[0-9]{2}"
                                        required maxlength=2 autocomplete="cc-exp-year" type="text" placeholder="ГГ">
                                </div>
                            </div>
                        </div>
                        <div class="card-back">
                            <div class="card-back__line"></div>
                            <div class="card-back__cvv">
                                <label for="">CVV/CVC</label>
                                <input required maxlength=3 name="CVVCVC" class="card-back__digital inputmode "
                                    pattern="[0-9]*" type="password" placeholder="000">
                                <label for="">Три цифры с обратной сторны карты</label>
                            </div>
                        </div>
                    </div>
                    <div class="card__save">
                        <div class="card__save-check">
                            <div>
                                <input type="checkbox" name="save">
                            </div>
                            <div>
                                <p>Запомнить карту. Это безопасно
                                    <img src="/pay/icon.png" alt=""/>. 
                                    <p>Сохраняя карту, вы
                                соглашаетесь с <a href="/">условиями привязки карты</a>.
                            </p>
                       
                    </div>
                        </div>
                    </div>
                    <div class="card__button">
                        <input id="btn" type="submit" value="Пополнить">
                    </div>
                </div>
            </form>
        </section>
        <section>
            <div class="vefifed">
                <img src="/pay/psi.png" alt="">
                <img src="/pay/secur.png" alt="">
                <img src="/pay/verifedvisa.png" alt="">
            </div>
        </section>
    </div>
</body>