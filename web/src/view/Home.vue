<template>
    <div class="homeBox">
        <div class="canvas3d">
            <SplineScene />
            <div class="title">
                <h1>iPhone 13 Pro - Spline 3D 数 字 形 象 展 示</h1>
                <h2>逼真、细节丰富的3D旗舰</h2>
            </div>
        </div>
        <div class="SplineIphone">
            <SplineIphone />
            <div class="productTilte">
                <h1>iphone 13</h1>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, onBeforeMount } from 'vue';
import SplineScene from '../components/SplineScene.vue';
import SplineIphone from '../components/SplineIphone.vue';
</script>
<style lang="scss" scoped>
.homeBox {
    width: 100vw;
    height: 100vh;
    background-color: #0B0C17;

    .canvas3d {
        width: 100vw;
        height: auto;
        position: relative;

        .title {
            position: absolute;
            top: 300px;
            left: 10%;
            width: 45%;
            color: #fff;
            font-size: 35px;
            z-index: 10;
            background: transparent;

            h1 {
                background: transparent;
            }

            h2 {
                margin-top: 20px;
                font-size: 25px;
                background: transparent;
            }

        }
    }

    .SplineIphone {
        width: 100vw;
        height: auto;
        position: relative; 
        background-color: #3d3e50;
        .productTilte {
            position: absolute;
            top: 30%; 
            left: 60%;
            color: #fff;
            background-color: #0B0C17;
            font-size: 40px;
            // border: ;
            width: 100%;
            background: transparent;
            z-index: 10;
            h1 {
                background: transparent;
            }
        }
    }

}

//手机端
@media screen and (max-width:768px) {
    .homeBox {
        .canvas3d { 
            height: 30vh;
            position: relative;
            .title {
                width: 60%;
                position: absolute;
                top: 20%;
                font-size: .2rem;

                h2 {
                    font-size: .175rem;
                }
            }
        }
        .SplineIphone{
            height: 30vh;
            .productTilte{
                left: 50%;
                font-size: 0.2rem;
            }
        }
    }
}
</style>