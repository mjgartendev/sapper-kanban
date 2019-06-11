<style>
	h1, h2{
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
	h2 {
		font-size: 2rem;
		margin: 1em auto;
	}
	section{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	a{
		padding: 1rem;
		background: mediumseagreen;
		border: 1px solid #ccc;
		box-shadow: var(--shadow, 0 2px 4px rgb(0,0,0,0.12));
		font-weight: bold;
		color: white;
		text-decoration: none;
		cursor: pointer;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper Kanban</title>
</svelte:head>

<h1>Sapper Kanban</h1>
<h2>Such basic, very static, much wow</h2>
<section>
<a href="boards" alt="go to boards">Get Started</a>
</section>