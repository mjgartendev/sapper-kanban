<script>
  export let title;
  export let description = "a card";
  export let tags = ["tag"];
  export let list;
</script>

<div data-list={list}>
  <header>{title}</header>
  <p>{description}</p>
  <footer>{tags}</footer>
</div>

<style>
  header, p, footer{
    padding: .1rem;
    margin: 0;
    width: 100%;
  }
  div{
    flex: 0 1 auto;
    width: 100%;
    border: 1px solid #f1f1f1;
    border-radius: var(--radius, 4px);
    display: flex;
    flex-direction: column;
    align-items: space-around;
    justify-content: center;
    background: white;
    box-shadow: 0 2px 4px rgb(0,0,0,0.15);
    margin-bottom: .25rem;
  }
</style>