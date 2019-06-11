<script>
  import List from './List.svelte';
  export let lists = ['one', 'two', 'three'];
  export let slug;
  export let title;
  let newListTitle = "";
  function handleNewList(e){
    if(e.key == "Enter"){
      let newList = {
        name: newListTitle
      }
      lists = [...lists, newList];
      newListTitle = "";
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
  <label on:click={() => isAdding = true}>Add List
  <input hidden class:isAdding bind:value={newListTitle} on:keyup={handleNewList} />
  </label>
</div>
<style>
  div {
    display: flex;
    flex: 0 1 220px;
    padding: .5rem 0;
  }
  header{
    padding: .25rem;
    background: #f1f1f1;
    border-bottom: 1px solid #ccc;
  }
  input, label{
    text-align: center;
    height: 20px;
    width: 200px;
  }
  .isAdding{ display: block}
</style>