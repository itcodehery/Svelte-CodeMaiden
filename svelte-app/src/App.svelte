<script>
	import Nested from './nested.svelte';
	let count = 0;
	$: doubled = count * 2; //reruns this line when count changes
	$: if(count >= 10) {
		alert(`Count is dangerously high! Lmao`);
		count = 9;
	}

	import Packageinfo from './packageinfo.svelte';

	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};

	let numbers = [1, 2, 3, 4];

	//heres the navigate method
	import navigate from 'svelte-routing';



	function addNumber() {
		numbers = [...numbers, numbers.length + 1];
	}

	function subNumber(){
		numbers = numbers.slice(0, numbers.length - 1);
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

<button on:click={subNumber}>
	Subtract number
</button>

<hr>
<Nested answer={42}/>
<Nested/>

<Packageinfo {...pkg}/> 

<!--I'm putting the pkg object in here, and it's being spread out into the props of the Packageinfo component-->
<!--The next button leads to the ifelsemarkup page-->
<button on:click={() => navigate('')}>
	Next
</button>