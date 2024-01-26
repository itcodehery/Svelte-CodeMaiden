<script>
    let email = '';
    let password = '';
    let error = '';
</script>
<style>
    body {
        margin: none;
        padding: none;
        background-image: linear-gradient(-90deg, #fbc2eb 0%,#f3fbc2 30%, #a6c1ee 50%)
    }

    .login-box {
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    .login-box__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        min-width: 300px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        color: black;
        padding: 35px 25px;
        gap: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        width: 100%;
    }

    .login-box__container__form__input {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        gap: 10px;
    }
</style>

<body>
    <div class="login-box">
        <div class="login-box__container">
            <div class="login-box__container__header">
                <h1>Studvisor</h1>
            </div>
            <div class="login-box__container__form">
                <form>
                    <div class="login-box__container__form__input">
                        <label for="mobile">Mobile Number</label>
                        <input type="email" id="email" bind:value={email} />
                    </div>
                    <div class="login-box__container__form__input">
                        <label for="password">Password</label>
                        <input type="password" id="password" bind:value={password} />
                    </div>
                    <div class="login-box__container__form__input">
                        <button type="submit">Login</button>
                    </div>
                    <div class="login-box__container__form__input">
                        <p>{error}</p>
                    </div>
                </form>
            </div>
    </div>
</body>
    