<script>
  let users = [
    {name: 'Danika Dywtgowm', email: 'danika.dywtgowm@email.com'},
    {name: 'Erica Bule', email: 'erica.bule@email.com'},
    {name: 'Jim Snales', email: 'jim.snales@email.com'},
    {name: 'Daria Thorobox', email: 'daria.thorobox@email.com'},
    {name: 'Mendikant Hargrove', email: 'mendikant.hargrove@email.com'},
    {name: 'Ephraim Lischok', email: 'ephraim.lischok@email.com'},
    {name: 'Lera Nedialkova', email: 'lera.nedialkova@email.com'},
  ]

  let snowman = '&#9731;'
  let uncheckedBox = '&#9744;'
  let checkedBox = '&#9745;'

  function selectUser(user) {
    users[users.findIndex(u => u.name === user.name)] = {
      ...user,
      selected: !user.selected
    }
    console.log(`${user.name} was ${user.selected ? 'de-selected' : 'selected'}`);
  }

  $: hasSelection = users.some(u => u.selected)
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

<h1>Complex Multi-Select</h1>

<h2>(css managing presentation)</h2>

<table cellspacing=0 class:hasSelection={hasSelection} class=selectable>
  {#each users as user}
  <tr class:selected={user.selected} on:click={() => selectUser(user)}>
    <td class=icon height=20 width=20></td>
    <td>
      {user.name}
    </td>
    <td>
      {user.email}
    </td>
  </tr>
  {/each}
</table>

<h2>(template managing presentation)</h2>

<table cellspacing=0 class:hasSelection={hasSelection} class=selectable>
  {#each users as user}
  <tr on:click={() => selectUser(user)}>
    <td class=template-icon height=20 width=20>
      {#if user.selected && hasSelection}
        {@html checkedBox}
      {:else if !user.selected && hasSelection}
        {@html uncheckedBox}
      {:else}
        {@html snowman}
      {/if}
    </td>
    <td>
      {user.name}
    </td>
    <td>
      {user.email}
    </td>
  </tr>
  {/each}
</table>
