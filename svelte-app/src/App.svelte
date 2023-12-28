<script>
	import Nested from './Nested.svelte';
	let count = 0;
	$: doubled = count * 2; //reruns this line when count changes
	$: if(count >= 10) {
		alert(`Count is dangerously high! Lmao`);
		count = 9;
	}

	let numbers = [1, 2, 3, 4];

	function addNumber() {
		numbers = [...numbers, numbers.length + 1];
	}

	$: sum = numbers.reduce((total, currentNumber) => total + currentNumber, 0);

	function increment() {
		count += 1;
	}

	function decrement() {
		if(count > 0) {
			count -= 1;
		}
	}
</script>

<button on:click={increment}>
	Increase
</button>
<p>Count is {count}, and {doubled} is the doubled value of it.</p>
<button on:click={decrement}>
	Decrease
</button>

<hr>
<p>{numbers.join(' + ')} = {sum}</p>
<button on:click={addNumber}>
	Add number
</button>

<hr>
<Nested answer={42}/>
<Nested/>