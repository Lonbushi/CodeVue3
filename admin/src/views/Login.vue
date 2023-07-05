<template>
    <div>
        <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" :options="options" />
        <div class="formContainer">
            <div>
                <h3>企业门户网站管理系统</h3>
            </div>
            <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="loginrules" label-width="80px" class="loginform">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="loginForm.username" autocomplete="off" />
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginForm.password" type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
  
<script setup>
import { loadFull } from "tsparticles";
import { reactive,ref } from 'vue'
import { useRouter } from "vue-router";
import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '../store/index'
const particlesInit = async engine => {
    await loadFull(engine);
};
const particlesLoaded = async container => {
    // console.log("Particles container loaded", container);
};
const loginFormRef = ref()//表单引入对象
const loginForm = reactive({
    username:"",
    password:""
})//表单的响应式对象
const loginrules = reactive({
    username:[
        {
            required:true,
            message:"请输入用户名",
            trigger:"blur"
        },
        
    ],
    password:[
        {
            required:true,
            message:"请输入密码",
            trigger:"blur"
        },
        
    ]
})
const router = useRouter()
// 提交表单函数
const submitForm = ()=>{
    //1. 校验表单
    loginFormRef.value.validate((valid)=>{
        // console.log(valid);
        if (valid) {
            axios.post("/adminapi/user/login",loginForm).then(res=>{
                console.log(res.data);
                if(res.data.ActionType==="OK"){
                    // console.log(res.data);
                    store.commit("changeUserInfo",res.data.data)
                    router.push("/index")
                }else{
                    ElMessage.error('用户名和密码不匹配')
                }
            })
            // router.push("/index")
        }
    })
    //2. 拿到表单内容，提交后台
    //3. 设置token localStorage.setItem()
}

//配置Particles
const options = {
    background: {
        color: {
            value: 'linear-gradient(30deg, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);'
        }
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: 'push'
            },
            onHover: {
                enable: true,
                mode: 'repulse'
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    particles: {
        color: {
            value: '#ffffff'
        },
        links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
        },
        collisions: {
            enable: true
        },
        move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 6,
            straight: false
        },
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80
        },
        opacity: {
            value: 0.5
        },
        shape: {
            type: 'circle'
        },
        size: {
            random: true,
            value: 5
        }
    },
    detectRetina: true
}

</script>
  
<style lang="scss" scoped>
#tsparticles {
    width: 100%;
    position: fixed;
    height: 100%;
    display: grid;
    background: rgb(238, 174, 202);
    background: linear-gradient(30deg, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
}
.formContainer{
    width: 500px;
    height: 300px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background: linear-gradient(50deg, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.3);
}
.formContainer h3{
    display: flex;
    justify-content: center;
    font-size: 30px;
    color: rgb(255, 255, 255);
    margin-top: 40px;
    margin-left: 20px;
}
.loginform{
    width: 400px;
    margin-top: 20px;
    margin-left: 30px;
}
</style>
  