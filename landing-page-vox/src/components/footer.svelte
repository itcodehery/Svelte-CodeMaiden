<script>
    import { goto } from '$app/navigation';
    import logo from '../lib/images/logo.png';
    const routes = [
        { name: 'Home', path: '/' },
        { name: 'Members', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    function navigateTo(path) {
        goto(path);
    }
</script>

<footer>
    <div class="head">
        <a href='/'><img src={logo} alt="logo" width="80px" height="80px"/></a>
        <div style="margin-left: 10px;"></div>
        <p>Since November 2023</p>
    </div>
    <div class="footer-buttons">
        {#each routes as route}
            <button on:click={() => navigateTo(route.path)}>{route.name}</button>
        {/each}
    </div>
    <p>Made with love by the souls @ The Vox Technologia Collective.</p>
</footer>

<style>
    footer {
        background-color: transparent;
        color: #376200;
        font-family: 'SF Pro Display';
        font-size: smaller;
        padding: 20px;
        border-radius: 8px;
        text-align: left;
        align-self: flex-end;
    }

    .head {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        color: #5ea600;
    }

    .footer-buttons {
        margin-bottom: 10px;
        background-color: transparent;
        color: #c9ff82;
    }

    .footer-buttons button {
        margin-right: 10px;
        background-color: transparent;
        color: #d3fd9d;
        border: none;
        cursor: pointer;
        font-family: 'SF Pro Display';
        font-size: medium;
        font-weight: normal;
    }

    .footer-buttons button:hover {
        text-decoration: underline;
        font-weight: bold;
    }
</style>