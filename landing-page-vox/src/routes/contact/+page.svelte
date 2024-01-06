<script>
import AppBar from "../../components/AppBar.svelte";
import Footer from "../../components/footer.svelte";
let name = "world";
export let contacts = [{
        name: "Hari",
        email: "haririo321@gmail.com"
    },
    {
        name: "Vaibhav",
        email: "vaibhavmurugendra@gmail.com"
    }
];
</script>

<style>
@import '../../font-import.css';

hr {
    width: 30%;
    color: rgba(255, 255, 255, 0.111);
}

.container {
    background-color: #B3E02B;
    background-image: url('../../lib/images/primaryCardbg.png');
    background-size: cover;
    color: #000;
    align-self: center;
    padding: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 8px;
    justify-content: center;
}
</style>

<body>
    <AppBar bind:search="{name}"/>
        <div style="height: 65px;">

        </div>
        <div  class="container">
            <h1>Contact Us</h1>
            {#each contacts as contact}
            <strong>{contact.name}:</strong> <a href="{contact.email}">{contact.email}</a>
            <div style="height: 20px;"></div>
            {/each}
        </div>
        <hr/>
        <Footer/>
            </body>
