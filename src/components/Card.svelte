<script>
  export let title;
  export let description;
  export let tags;
  export let list;
</script>

<div data-list={list}>
  <header>{title}</header>
  {#if description}
    <p>{description}</p>
  {/if}
  {#if tags}
  <footer>{tags}</footer>
  {/if}
</div>

<style>
  header, p, footer{
    margin: 0;
  }
  div:hover{
    color: mediumseagreen;
    box-shadow: 0 4px 8px rgb(0,0,0,0.12);
    
  }
  div{
    min-height: 20px;
    cursor: pointer;
    border: 1px solid var(--light);
    border-radius: var(--radius, 4px);
    align-self: stretch;
    background: white;
    box-shadow: var(--shadow);
    margin-bottom: .25rem;
  }
</style>