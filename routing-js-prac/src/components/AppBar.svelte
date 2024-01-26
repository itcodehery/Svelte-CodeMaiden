<script></script>

<style>
    body {
       margin: none;
        padding: none;

    }
    .appbar-wrapper {
        display: flex;
        flex-direction: row ;
        justify-content: space-between;
        align-items: center;
        background-image: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
        color: #fff;
        padding: 0 1rem;
        min-height: 20px;
        height: 3rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .appbar-right {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;
        align-items: center;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    a:hover {
        color: #fff;
        font-weight: 600;
        text-decoration: none;
    }
</style>
<body>
    <header>
        <div class="appbar-wrapper">
                <p>Studvisor</p>
                <div class="appbar-right">
                    <a href="/services">Services</a>
                    <a href="/wallet">My Wallet</a>
                    <a href="/news">New Today</a>
                </div>
        </div>
    </header>
</body>