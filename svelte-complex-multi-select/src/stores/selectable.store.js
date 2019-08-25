import { writable } from 'svelte/store';

function createSelectableStore(initialData) {
  const { subscribe, update } = writable(initialData);

  return {
    subscribe,
    selectItem: (item) => {
      update(items => {
        items[items.findIndex(i => i.name === item.name)] = {
          ...item,
          selected: !item.selected
        }
        return items
      })
    }
  }
}

export default createSelectableStore
