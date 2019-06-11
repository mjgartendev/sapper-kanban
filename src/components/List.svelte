<script>
  import Card from './Card.svelte';
  export let name;
  export let cards =[];
  let newCard = "";
  export let list;
  function handleNewCard(e){
    if(e.key == "Enter"){
      cards = [...cards, {title: newCard, list: name}]
      newCard = "";
      isAdding = false;
    }
  }
  let isAdding = false;
</script>
<section>
  <header>
    {name}
  </header>
<ol>
  {#if cards.length > 0}
    {#each cards as card, i}
     <li><Card {...card} list={name}/></li>
    {/each}
  {:else}
	  <p>No cards! :(</p>
	{/if}
</ol>
<footer>
  <label on:click={() => isAdding = true}>Add List
    <input 
      hidden 
      class:isAdding 
      placeholder="enter card title" 
      bind:value={newCard} 
      on:keydown={handleNewCard} 
    />
  </label>
</footer>
</section>  

<style>
  input, button{
    width: 200px;
    background: #f1f1f1;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: .25rem .5rem;
    font-weight: bold;
  }
  section {
    background: white;
    min-width: 220px;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin: .5rem;
    box-shadow: 0 2px 4px rgb(0,0,0,0.1), 0 4px 8px -4px rgb(0,0,0,0.15);
  }
  ol {
    flex: 0 1 auto;
    height: 100%;
    width: 200px;
    background: #f1f1f1;
    padding: .5rem;
    margin: .25rem auto;
    border: 1px solid #f1f1f1;
  }
  li {
    list-style-type: none;
    padding: 0;
  }
  header, footer {
    min-width: 220px;
    text-align: center;
    padding: .5rem;
    border-radius: 4px;
  }
  .isAdding {display: block}
  *, *::after, *::before {box-sizing: border-box}
</style>