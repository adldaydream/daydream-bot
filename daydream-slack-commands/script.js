const commands = [
  {
    command: '/daydream-count',
    description: 'Returns the total number of submissions received for the daydream form.'
  },
  {
    command: '/responses',
    description: 'Provides a link to view the daydream responses.'
  },
  {
    command: '/github',
    description: 'Shares the GitHub repository link for the Daydream project.'
  },
  {
    command: '/days-until',
    description: 'Calculates and returns the number of days until September 27th.'
  }
];

function displayCommands() {
  const commandsList = document.getElementById('commands-list');
  commands.forEach(cmd => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${cmd.command}</strong>: ${cmd.description}`;
    commandsList.appendChild(listItem);
  });
}

document.addEventListener('DOMContentLoaded', displayCommands);