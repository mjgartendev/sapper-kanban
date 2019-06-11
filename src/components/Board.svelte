<script>
  import List from './List.svelte';
  export let lists = ['one', 'two', 'three'];
  export let slug;
  export let title;
  let newListTitle = "";
  function handleNewList(e){
    if(e.key == "Enter" && newListTitle !== ""){
      let newList = {
        name: newListTitle
      }
      lists = [...lists, newList];
      newListTitle = "";
      isAdding = false;
    }
  }
  function handleKeyup(e){
    if(e.key === "Escape"){
      isAdding = false;
    }
  }
  let isAdding = false;
</script>
<header>{title}</header>
<div>
  {#each lists as list, i}
   <List {...list} board={title} />
  {/each}
    <label class="create" on:click={() => isAdding = true}>
      {#if isAdding === false}   
        Create List   
      {/if}
      <input 
        hidden 
        placeholder="new list title" 
        class:isAdding 
        bind:value={newListTitle} 
        on:keydown={handleNewList}
        on:keyup={handleKeyup}/>
    </label>
</div>

<style>
  div{
    min-height: 75vh;
    max-height: 100vh;
    padding: 2rem 1rem;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 250px;
    justify-content: flex-start;
    align-items: flex-start;
    grid-gap: 1rem;
    min-width: 300px;
    max-width: 100vw;
    overflow-x: auto;
  }
  label{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem .5rem;
    cursor: pointer;
  }
  header{
    opacity: 0.8;
    padding: .5rem;
    color: var(--light);
  }
</style>