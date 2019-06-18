<script>
	let users = [
    {name: 'user 1', email: 'user.one@email.com'},
    {name: 'user 2', email: 'user.two@email.com'},
    {name: 'user 3', email: 'user.three@email.com'},
    {name: 'user 4', email: 'user.four@email.com'},
    {name: 'user 5', email: 'user.five@email.com'},
    {name: 'user 6', email: 'user.six@email.com'},
    {name: 'user 7', email: 'user.seven@email.com'},
  ]

  function selectUser(user) {
    users[users.findIndex(u => u.name === user.name)] = {
      ...user,
      selected: !user.selected
    }
    console.log(`${user.name} was ${user.selected ? 'selected' : 'de-selected'}`);
  }

  $: hasSelection = users.some(u => u.selected)
</script>

<style>
  tr:hover {
    cursor: pointer;
  }
</style>

<h1>Complex Multi-Select</h1>

<table class:hasSelection={hasSelection}>
  {#each users as user}
  <tr class:selected={user.selected} on:click={() => selectUser(user)}>
    <td>
      {#if user.selected}
        &#9745;
      {:else}
        &#9744;
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
