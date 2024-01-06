<script>
    import AppBar from "../../components/AppBar.svelte";

    export let contacts = [
        { name: "Admin 1", email: "admin1@example.com" },
        { name: "Admin 2", email: "admin2@example.com" }
    ];
</script>

<body>
<AppBar/>
<h1>Contact Page</h1>

<h2>Admin Contacts:</h2>
<ul>
    {#each contacts as contact}
        <li>
            <strong>{contact.name}:</strong> {contact.email}
        </li>
    {/each}
</ul>
</body>