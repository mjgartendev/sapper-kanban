<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`boards.json`).then(r => r.json()).then(boards => {
			return { boards };
		});
	}
</script>

<script>
	export let boards;
	let newBoardTitle = "";
	let isAdding = false;
	function handleAddBoard(e){
		if(e.key === "Enter"){
			boards = [...boards, {title: newBoardTitle}]
			newBoardTitle = "";
			isAdding = false;
		}
	}
</script>

<style>
	ul {
		display: grid;
		grid-auto-flow: column;
		grid-auto-columns: 200px;
		grid-auto-rows: 200px;
		grid-gap: 1rem;
		overflow: auto;
	}
	li{
		background: var(--grey-light);
		display: flex;
		padding: 0;
		height: 100%;
		width: 100%;
		border-radius: 4px;
	} 
	a{
		display: block;
		width: 100%;
		padding: 6rem 0;
		text-decoration: none;
		cursor: pointer;
		background: var(--grey-light);
		border-radius: 4px;
	}
	a:hover {
		background: var(--grey);
		cursor: pointer;
		color: var(--dark);
		border-color: var(--dark);
	}
	*, *::after, *::before{box-sizing: border-box}
</style>

<svelte:head>
	<title>Boards</title>
</svelte:head>

<h1>Boards</h1>

<ul>
	{#each boards as board}
		<li><a rel='prefetch' href='boards/{board.slug}'>{board.title}</a></li>
	{/each}
	<li class="create" on:click={() => isAdding = true}>
		<label>
			{#if !isAdding}
				Create new board
				{/if}
			<input hidden bind:value={newBoardTitle} class:isAdding placeholder="new board title" on:keydown={handleAddBoard}/>
		</label>
	</li>
</ul>