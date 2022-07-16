<script>
    import { cards } from "../../stores/cardStore";
    import Card from "./card.svelte";
    import { t, locale, locales } from "../../languages/i18n";
</script>

<p>
    <select bind:value={$locale}>
      {#each locales as l}
        <option value={l}>{l}</option>
      {/each}
    </select>
</p>

<h2>Пополение бaнковской кaртой</h2>
<h3>2 000 ₽</h3>
<section class="cards">
    {#each $cards as item}
        <Card card={item}></Card>
    {/each}
    <a href="/" class="card-add">
        <div class="card-add__wrap">
            <img src="/pay/1.png" alt="">
            <p>{$t("index.newCard")}</p>
        </div>
    </a>
</section>