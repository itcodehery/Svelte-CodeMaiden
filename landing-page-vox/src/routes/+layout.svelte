<script>
    import AppBar from "../components/AppBar.svelte";
    import Footer from "../components/footer.svelte";
    export let showNameBar; 
    export let name;

</script>
<header>
    <AppBar showNameBar="{false}" bind:search={name} />
</header>

<slot />

<footer>
    <Footer />
</footer>