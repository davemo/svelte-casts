<script>
  export let collection

  $: hasSelection = $collection.some(i => i.selected)
</script>

<style>
  :root {
    --unchecked-box: '\02610';
    --checked-box: '\02611';
    --snowman: '\02603';
  }

  td {
    padding: 5px;
  }

  tr:hover, tr:hover td {
    cursor: pointer;
    background-color: yellow;
  }

  .icon, .template-icon {
    display: flex;
    justify-content: center;
  }

  .icon:after {
    content: var(--snowman);
  }

  .selectable.hasSelection .selected .icon:after {
    content: var(--checked-box);
  }

  .selectable:not(.hasSelection) tr:hover .icon:after,
  .selectable.hasSelection .icon:after {
    content: var(--unchecked-box);
  }
</style>

<table cellspacing=0 class:hasSelection={hasSelection} class=selectable>
  {#each $collection as item}
    <tr class:selected={item.selected} on:click={() => collection.selectItem(item)}>
      <td class=icon height=20 width=20></td>
      <td>
        {item.name}
      </td>
      <td>
        {item.email}
      </td>
    </tr>
  {/each}
</table>
