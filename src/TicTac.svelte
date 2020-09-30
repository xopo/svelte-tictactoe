<script>
    let lastValue;
    let elements;
    const asignValue = (index) => {
        const newValue = !lastValue || lastValue === 'o' ? 'x' : 'o';
        ([elements[index], lastValue] = [newValue, newValue]);
    }
    function reset() {
        debugger;
        elements = new Array(9).fill('');
    }
    reset();
</script>
<h3>Tic Tac magic</h3>
<div class="content">
    {#each elements as element, i}
        <div class="cell-{i + 1}" on:click={() => asignValue(i)}>{element}</div>
    {/each}
    <button type='button' on:click={reset}>Reset</button>
</div>

<style>
    [class^='cell-'] {
        width: 50px;
        height: 50px;
        border: 1px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
        text-transform: uppercase;
        cursor: pointer;
    }

    .content {
        display: flex;
        flex-wrap: wrap;
        width: 190px;
        margin: 0 auto;
    }
</style>