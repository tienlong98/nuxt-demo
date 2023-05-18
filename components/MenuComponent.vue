<template>
    <div class="custom-menu">
        <nav>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    User
                </li>
                <li>
                    LogIn
                </li>
            </ul>
        </nav>
    </div>
</template>
<style lang="scss" scoped>
.custom-menu{
    nav{
        ul{
            display: flex;
            justify-content: center;
            li{
                text-decoration: none;
                list-style: none;
                padding: 0 25px;
                font-weight: bold;
                font-size: 20px;
            }
        }
    }
}
</style>