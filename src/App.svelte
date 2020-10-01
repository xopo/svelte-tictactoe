<script>
	import { onDestroy } from 'svelte';
	import { nextMove, reset } from './requests';
	import gameStore from './tictactoeStore';

	import TicTac from './TicTac.svelte';

	let board = new Array(9).fill('');
	let myPlayer;
	let nextPlayer;
	let winner;
	let numberOfPeople;

	const subscribtion = gameStore.subscribe( data => {
		if (!data) return;
		
		({board, nextPlayer, winner, numberOfPeeps: numberOfPeople} = data);
		if (!myPlayer) {
			myPlayer = nextPlayer;
		}
	})
	$: myTurn = myPlayer === nextPlayer;

	$: console.log({board, myPlayer, winner, numberOfPeople})
	onDestroy(subscribtion);
</script>

<main>
	<h1>Tic Tac Toe</h1>
	<h3>Number of players: {numberOfPeople}</h3>
	{#if winner === 'TIE'}
		<h2>Tie Game !!!</h2> 
	{:else if winner}
		<h2>Player {winner} won!!!</h2>
		<button on:click={()=>reset()}>New Game</button>
	{:else}
		<TicTac {board} {reset} {nextMove } {myTurn}/>
	{/if}
</main>

<style>
</style>