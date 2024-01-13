<script>
import AppBar from "../../components/AppBar.svelte";
import Footer from "../../components/footer.svelte";

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		db.createTodo(cookies.get('userid'), data.get('description'));
	}
};

</script>

<style>
    @import '../../font-import.css';

    hr {
        width: 30%;
        color: rgba(255, 255, 255, 0.111);
    }

    body {
        color: #deeab8;
        font-family: 'SF Pro Display';
        font-weight: 600px;
        text-align: center;
        align-items: center;
        align-content: center;
        justify-content: center;
    }

    .main {
        padding: 50px 280px ;
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
        color: #deeab8;
    }

    /* make the h1 tag have a green highlight */
    h1 {
        display: inline-block;
        background-color: rgba(40, 53, 0, 0.5);
        color: #b3e02b;
        font-family: 'SF Pro Display';
        font-weight: 600px;
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    /* format the form tag with good gaps and padding*/
    form {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 10px;
    }

    /* format the input tags with good gaps and padding*/
    input {
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 8px 16px;
        border: rgba(106, 142, 35, 0.448) 1px solid;
        border-radius: 4px;
        cursor: pointer;
        background-color: rgba(40, 53, 0, 0.5);
        color: #deeab8;
        font-family: 'SF Pro Display';
        font-weight: 600px;
    }

    label {
        font-weight: bold;
    }

</style>

<body>
    <div class="main">
        <AppBar showNameBar="{false}" showJoinUsButton= {false}/>
    <div style="height: 50px"></div>
    <h1>So you're interested...</h1>
    <p>Answer some questions about yourself now and we'll reach out to you based on your response.</p>
    <div style="height: 50px;">
        <form method="POST">
            <label for="name">Name:*</label><br>
            <input type="text" id="name" name="name"  required><br>
            <label for="email">Email:*</label><br>
            <input type="text" id="email" name="email" required><br>
            <label for="phone">Phone:*</label><br>
            <input type="text" id="phone" name="phone" required><br>
            <label for="techpassion">Are you passionate about any topic related to the Computer Industry? If so, tell us about it shortly:</label><br>
            <input type="text" id="techpassion" name="techpassion" required><br>
            <label for="techskills">What technical skills do you have?:</label><br>
            <input type="radio" id="techskills" name="techskills" value="Programming (Code, Frontend, Backend, Full Stack, App Dev)">
            <input type="radio" id="techskills" name="techskills" value="Communication (People Skills, Team Management, Presentation)">
            <input type="radio" id="techskills" name="techskills" value="Technical (Problem Solving, System Design)">
            <input type="radio" id="techskills" name="techskills" value="Designing (UI/UX, Graphic Design, Brand Design, Social Post Design)">
            
        </form>
    </div>
    <p>Thanks for your interest! We'll reach out to you soon.</p>
</div>
    <hr/>
    
    
    
</body>
<footer>
    <Footer/>
</footer>