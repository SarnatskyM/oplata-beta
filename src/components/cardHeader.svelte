<script>
    import { cards } from "../stores/cardStore";
     import Card from "../components/card.svelte";
</script>

<h2>Пополение бaнковской кaртой</h2>
<h3>2 000 ₽</h3>
<section class="cards">
    {#each $cards as item}
        <Card card={item}></Card>
    {/each}
    <a href="/" class="card-add">
        <div class="card-add__wrap">
            <img src="/pay/1.png" alt="">
            <p>Новая карта</p>
        </div>
    </a>
</section>