<script>
    import AppBar from "../components/AppBar.svelte";
    import MainCard from "../components/mainCard.svelte";
    import SecondaryCard from "../components/secondaryCard.svelte";
    import TertiaryCard from "../components/tertiaryCard.svelte";
    import cardbg from "../lib/images/primaryCardbg.png";
</script>
<style>
    @import '../font-import.css';
    hr {
        width: 30%;
        color: rgba(255, 255, 255, 0.111);
    }

    /* .banner {
        display: flex;
        justify-content: center;
        align-items: center;
    } */

    
</style>
<body>

    <AppBar/>
    <div style="height: 50px;">

    </div>
    <hr/>
    <MainCard 
    mainText="The Vox Technologia Collective" 
    subText="A coder community of college students based in Bangalore, India!"/>
    <hr/>
    <SecondaryCard
        imagePath = "/images/logo-opac.png"
        mainText = "What is this?"
        subText = "Hey, we are Hari and Vaibhav, the founders of the tech Collective.
        We would like to provide an opportunity to students who are interested 
       in joining a Coding and Tech community of college students around 
       Bangalore, India. We're looking for new people and recruits to join us."/>
    <hr/>
    <!-- <div class="banner">
        <img src="{cardbg}" alt="logo" width="555px" height="222px"/>
    </div> -->
    <TertiaryCard
        imagePath = "/images/logo-opac.png"
        mainText = "This is for you if:"
        subText = "You are very passionate about technology, designing, marketing or coding, or you are currently doing a degree or course that is tech-related or incorporates tech, designing or coding in any way and you're open minded about meeting new people and forming collaborative groups with them. "/>
    <hr/>
</body>