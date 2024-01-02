<script>
    let count = 0;
    let colors = ['red', 'green', 'blue'];
    $: doubled = count * 2; //reruns this line when count changes

    function increment() {
        count += 1;
    }

    function decrement() {
        if (count > 0) {
            count -= 1;
        }
    }
</script>

<button on:click={increment}>
    Increase
</button>
<h1>{count}</h1>
{#if count > 10}
    <p>Count is dangerously high! Lmao</p> <!--This changes everything!!!!--> 
{:else}
    <p>Count is {count}, and {doubled} is the doubled value of it.</p>
{/if}
<button on:click={decrement}>
    Decrease
</button>

<!--This demonstrates the for each thing in svelte. Not possible in html-->
<div>
    {#each colors as color , i}
        <p style="color: {color}">{i}: {color}</p>
    {/each}
</div>

<input bind:value={count}/>
