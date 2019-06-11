<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
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
		padding: 1rem;
		text-decoration: none;
	}
	a:hover, li:hover {
		cursor: pointer;
		background: #f1f1f1;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each posts as post}
		<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
	{/each}
</ul>