<template>
<header class="header">
    <div class="container">
        <div class="logo">
            <img src="../assets/Capture.PNG" alt="Logo">
        </div>
        <nav class="nav">
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>

                <li>
                    <RouterLink to="/SignUp">SignUp</RouterLink>
                </li>
                <li>
                    <RouterLink to="/LogIn">LogIn</RouterLink>
                </li>
                

            </ul>
        </nav>
        <div class="menu-toggle" @click="toggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</header>
<RouterView />
</template>

  
<script>
export default {
    name: 'Hader',
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            document.body.classList.toggle('menu-open', this.isMenuOpen);
        },
    },
};
</script>

  
<style scoped>

.header {
    background: #333;
    color: white;
    padding: 10px 0;
    margin: 0%;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0%;
    padding: 0 20px;
}

.logo img {
    max-height: 40px;
}

.nav ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
}

.nav ul li {
    margin-left: 15px;
}

.nav ul li a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.menu-toggle span {
    background: white;
    height: 3px;
    width: 25px;
    margin: 100px;
    transition: all 0.3s;
}

@media (max-width: 768px) {
    .nav ul {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 20px;
        background: #333;
        border-radius: 5px;
        padding: 10px;
        width: 200px;
    }

    .nav ul.show {
        display: flex;
    }

    .menu-toggle {
        display: flex;
    }
}
</style>
