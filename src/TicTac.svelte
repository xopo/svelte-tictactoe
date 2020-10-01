<script>
    export let board;
    export let myTurn;
    export let reset;
    export let nextMove;

    // const asignValue = (index) => {
    //     const newValue = !lastValue || lastValue === 'o' ? 'x' : 'o';
    //     ([elements[index], lastValue] = [newValue, newValue]);
    // }
    $: console.log({board, myTurn});
    $: message = myTurn ? 'Your move' : 'Wait for other player';

    const applyMove = i => {
        if (myTurn) {
            nextMove(i)
        } else {
            message = '! wait for the other player to move';
        }
    }

</script>
<div class="content">
    {#each board as element, i}
        <div class="cell-{i + 1}" on:click={() => applyMove(i)}>{element}</div>
    {/each}
    <button type='button' on:click={() => reset()}>Reset</button>
    
    <h4>{message}</h4>
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