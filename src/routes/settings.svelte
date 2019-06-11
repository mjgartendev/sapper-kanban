<svelte:head>
  <title>Sapper Kanban | Settings</title>
</svelte:head>

<h1>Settings</h1>

<label>
  Primary Color <input type="color" bind:value={primary} />
</label>

<script>
  let primary;
</script>