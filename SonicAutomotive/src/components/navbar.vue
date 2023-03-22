<template>
    <div >
        <!-- <div class="containernav">

        </div> -->
    <header class="header">
        <nav class="nav ">
            <ul class="nav-links">
                <li class="link">
                    <router-link to="/bmw"><img class="HV" src="../assets/nav-Logo/bmw.png" alt="BMW" ></router-link>
                </li>
                <li class="link">
                    <router-link to="/ford"><img class="HV" src="../assets/nav-Logo/ford.png"></router-link>
                </li>
                <li class="link">
                    <router-link to="/luxes"><img class="HV" src="../assets/nav-Logo/lexus.png"></router-link>
                </li>
                <li class="link">
                    <router-link to="/mazda"><img class="HV" src="../assets/nav-Logo/mazda.png"></router-link>
                </li>
                <li class="link">
                    <router-link to="/mclaren"><img class="HV" src="../assets/nav-Logo/mclaren.png"></router-link>
                </li>
                <li class="link">
                    <router-link to="/mercedes"><img class="HV" src="../assets/nav-Logo/mercedesbenz.png"></router-link>
                </li>
                <li class="link">
                    <router-link to="/mitsubishi"><img class="HV" src="../assets/nav-Logo/mitsubishi.png"></router-link>
                </li>
                <li class="link">
                    <router-link to="/nissan"><img class="HV" src="../assets/nav-Logo/nissan.png"></router-link>
                </li>
                <li class="link">
                    <router-link to="/porsche"><img class="HV" src="../assets/nav-Logo/porsche_.png"></router-link>
                </li>
                <li class="link">
                    <router-link to="/toyota"><img class="HV" src="../assets/nav-Logo/toyota.png"></router-link>
                </li>
            </ul>
        </nav>
        <slot></slot>
    </header>
</div>
</template>

<script>
export default {
};
</script>

<style scoped>
.header {
    width: 100%;
    height: 70px;
    background-color: #cdcdcd;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    
    z-index: 2;
}

.nav {
    width: 100%;
    
}

.nav-links {
    margin-top: 2vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;    padding-inline-start: 0 !important;

}

.link {
    list-style: none;
    padding-left:50px ;
    
}
.HV:hover{
    -webkit-transform: scale(1);
	transform: scale(1);

    -webkit-transform: scale(1.2);
	transform: scale(1.2);
	-webkit-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
    
}
.link a {
    color: #fff;
    text-decoration: none;
}
</style>