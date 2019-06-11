<script>
	export let segment;
</script>

<style>
header{
	display: grid;
 	grid-template-columns: auto 1fr auto;
	width: 100%;
	background: var(--primary-darker);
	box-shadow: var(--shadow);
	padding: 0 1rem;

}
	nav {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}
	.selected {
		color: var(--light);
	}
	div {
		display: flex;
		align-items: center;
		justify-content: center;
	}
	a {
		text-decoration: none;
		font-weight: bold;
		color: var(--primary-lighter);
		padding: 1em;
	}
	button{
		border-radius: 4px;
		font-weight: bold;
		color: var(--dark);
		padding: .5rem 1rem;
		border: none;
		background: var(--primary-lighter);
	}
	input {
		display: none;
	}
	@media (min-width: 700px) {
		input {
			display: block;
		}
	}
	*, *::after, *::before {box-sizing: border-box}
</style>

<header>
	<nav>
		<a class='{segment === undefined ? "selected" : ""}' href='.'>home</a>
		<a rel=prefetch class='{segment === "boards" ? "selected" : ""}' href='boards'>boards</a>
		<a rel=prefetch class='{segment === "settings" ? "selected" : ""}' href='settings'>settings</a>
	</nav>
	<div>
		<input hidden type="search" placeholder="search.." />
	</div>
	<div>
		<button>Login</button>
		<a rel=prefetch class='{segment === "profile" ? "selected" : ""}' href='profile'>profile</a>
</div>
</header>