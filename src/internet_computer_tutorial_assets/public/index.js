import internet_computer_tutorial from 'ic:canisters/internet_computer_tutorial';

internet_computer_tutorial.greet(window.prompt("Enter your AWESOME name :P :")).then(greeting => {
  window.alert(greeting);
});
