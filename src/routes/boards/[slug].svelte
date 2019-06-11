<script context="module">
	export async function preload({ params, query }) {
		const res = await this.fetch(`boards/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { board: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	import Board from '../../components/Board.svelte'
	export let board;
</script>

<svelte:head>
	<title>{board.title}</title>
</svelte:head>

<Board {...board} />