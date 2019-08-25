<script>
  import SelectableList from './SelectableList.svelte';
  import users from './stores/users.store.js';
</script>

<h2>(an extracted component, isolated store)</h2>

<SelectableList collection={users} />
