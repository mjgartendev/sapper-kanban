<style>
	h1, h2{
		text-align: center;
	}
	h1 {
		font-size: 2.2em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.25em 0;
	}
	h2 {
		font-size: 1.8rem;
		margin: .5em auto;
		font-weight: 500;
	}
	section{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	a{
		width: 100px;
		padding: 1rem;
		border-radius: 5px;
		background: var(--dark);
		font-weight: bold;
		color: white;
		text-decoration: none;
		cursor: pointer;
		margin-bottom: 1.5rem;
		box-shadow: var(--shadow);
	}

	a:hover{
		box-shadow: 0 2px 8px rgb(0,0,0,0.12), 0 4px 8px -2px rgb(0,0,0,0.24);
	}
	img{
		width: 400px;
		border-radius: 5px;
		box-shadow: var(--shadow);
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
		h2 {
			font-size: 2.8rem;
		}
		img {
			width: 90%;
			max-width: 900px;
		}
	}


</style>

<svelte:head>
	<title>Sapper Kanban</title>
</svelte:head>

<h1>Sapper Kanban</h1>
<h2>Such basic, very wow, much ssr</h2>
<section>
	<a href="boards" alt="go to boards">Get Started</a>
	<img src="sapper-kanban-lighthouse.PNG" alt="lighthouse scores"/>
</section>