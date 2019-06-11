<script>
  import Card from './Card.svelte';
  export let name;
  export let cards =[];
  let newCard = "";
  export let list;
  function handleNewCard(e){
    if(e.key == "Enter" && newCard !== ""){
      cards = [...cards, {title: newCard, list: name}]
      newCard = "";
      isAdding = false;
    }
  }
  function handleKeyup(e){
    console.log(e.key)
    if(e.key === "Escape"){
      isAdding = false;
    }
  }
  let isAdding = false;
</script>

<div>
  <header>
    {name}
  </header>
  <ol>
  {#if cards.length > 0}
    {#each cards as card, i}
      <li><Card {...card} list={name}/></li>
    {/each}
  {/if}
  </ol>
  <footer>
    <label class="create" on:click={() => isAdding = true}>
      {#if isAdding == false}
      Add Card
      {/if}
      <input 
        hidden 
        class:isAdding
        placeholder="enter card title" 
        bind:value={newCard} 
        on:keydown={handleNewCard} 
        on:keyup={handleKeyup}
      />
    </label>
  </footer>
</div>

<style>
  div{
    display: flex;
    flex-direction: column;
    background: var(--grey-light);
    border-radius: 5px;
    max-height: 75vh;
  }
  input{
    width: 100%;
    text-align: center;
    background: var(--grey);
    border: 1px solid var(--grey-darker);
    border-radius: 5px;
    font-weight: bold;
  }
  label{
    padding: 1rem;
    background: var(--grey-light);
    cursor: pointer;
  }
  label:hover {
    background: var(--grey);
  }
  header, footer, label, ol{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0;
  }
  ol{
    overflow: auto;
    padding: 0 .5rem;
    flex-direction: column;
  }
  li{
    align-self: stretch;
  }
  .isAdding {display: block}
  *, *::after, *::before {box-sizing: border-box}
</style>