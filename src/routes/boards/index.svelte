<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`boards.json`).then(r => r.json()).then(boards => {
			return { boards };
		});
	}
</script>

<script>
	export let boards;
</script>

<style>
	ul {
		margin: 0;
		border-radius: var(--radius, 4px);
		padding: .5rem;
	}
	li {
		background: white;
		border: 1px solid #ccc;
		border-radius: var(--radius, 4px);
		list-style: none;
		padding: 0;
		margin-bottom: .5rem;
		display: flex;
	}
	a{
		width: 100%;
		padding: 1rem;
		text-decoration: none;
	}
	a:hover, li:hover {
		cursor: pointer;
		color: mediumseagreen;
		border-color: mediumseagreen;
	}
</style>

<svelte:head>
	<title>Boards</title>
</svelte:head>

<h1>Recent Boards</h1>

<ul>
	{#each boards as board}
		<li><a rel='prefetch' href='boards/{board.slug}'>{board.title}</a></li>
	{/each}
</ul>