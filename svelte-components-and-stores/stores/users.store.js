import { writable } from 'svelte/store';

function createUsers() {
  const { subscribe, update } = writable([
    {name: 'Danika Dywtgowm', email: 'danika.dywtgowm@email.com'},
    {name: 'Erica Bule', email: 'erica.bule@email.com'},
    {name: 'Jim Snales', email: 'jim.snales@email.com'},
    {name: 'Daria Thorobox', email: 'daria.thorobox@email.com'},
    {name: 'Mendikant Hargrove', email: 'mendikant.hargrove@email.com'},
    {name: 'Ephraim Lischok', email: 'ephraim.lischok@email.com'},
    {name: 'Lera Nedialkova', email: 'lera.nedialkova@email.com'},
  ])

  return {
    subscribe,
    select: (item) => {
      update(items => {
        items[items.findIndex(i => i.name === item.name)] = {
          ...item,
          selected: !item.selected
        }
        console.log(`${item.name} was ${item.selected ? 'de-selected' : 'selected'}`);
        return items
      })
    }
  }
}

export default createUsers()