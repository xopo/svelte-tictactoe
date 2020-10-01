<script>
	import { onDestroy } from 'svelte';
	import TicTac from './TicTac.svelte';
	import gameStore from './tictactoeStore';

	let board = new Array(9).fill('');
	let myPlayer;
	let winner;
	let numberOfPeople;

	const subscribtion = gameStore.subscribe( data => {
		if (!data) return;
		
		({board, nextPlayer: myPlayer, winner, numberOfPeeps: numberOfPeople} = data);
	})
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
		<button>New Button</button>
	{:else}
		<TicTac {board} {myPlayer}/>
	{/if}
</main>

<style>
</style>