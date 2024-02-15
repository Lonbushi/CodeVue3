<template>
    <div class="container">
        <p>新闻资讯</p>
        <div class="search">
            <el-popover placement="bottom" title="检索结果" :width="popoverWidth" :visible="visible">
                <template #reference>
                    <el-input v-model="searchText" class="w-50 m-2" placeholder="请输入新闻关键字" :prefix-icon="Search"
                        type="search" :size="SizeSource" @blur="visible = false" @focus="visible = true" />
                </template>
                <div v-if="searchnewslist.length" class="search_box">
                    <div v-for="data in searchnewslist" :key="data._id" class="search-item">
                        {{ data.title }}
                    </div>
                </div>
                <div v-else>
                    <el-empty description="暂无新闻" :image-size="50" />
                </div>
            </el-popover>
        </div>
        <div class="topnews">
            <div class="newsbody">
                <!-- <el-row :gutter="10" justify="center">
                    <el-col :span="8" v-for=" item in topNewsList" :key="item._id">
                        <el-card class="top_card" :body-style="{ padding: '0px' }" shadow="hover">
                            <div class="image" :style="{ backgroundImage: `url(http://localhost:3000${item.cover})` }">
                            </div>
                            <div style="padding: 14px">
                                <span class="news_Title">{{ item.title }}</span>
                                <div class="bottom">
                                    <time class="time">{{ whichTime(item.editTime) }}</time>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row> -->
                <el-tabs v-model="whichTab" class="demo-tabs">
                    <el-tab-pane v-for="item in tablist" :key="item.name" :label="item.label" :name="item.name">
                        <div v-for="data in tabnews[item.name]" :key="data._id" style="padding: 10px;">
                            <el-card :body-style="{ padding: '0px' }" shadow="hover">
                                <div class="tab_image"
                                    :style="{ backgroundImage: `url(http://localhost:3000${data.cover})` }">
                                </div>
                                <div style="padding: 14px">
                                    <span class="news_Title">{{ data.title }}</span>
                                    <div class="bottom">
                                        <time class="time">{{ whichTime(data.editTime) }}</time>
                                    </div>
                                </div>
                            </el-card>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>

    </div>
</template> 
<script setup>
import { ref, computed, onMounted } from 'vue';
import { Search } from '@element-plus/icons-vue'
import axios from 'axios'
import moment from 'moment'
import _ from 'lodash'
moment.locale("zh-cn")
const windowWidth = ref(window.innerWidth)
const searchText = ref()
const visible = ref(false)
const newslist = ref([])
const whichTab = ref(1)
onMounted(() => {
    window.addEventListener('resize', handleResize)
    console.log(topNewsList);
})
onMounted(async () => {
    var res = await axios.get('/webapi/news/list')
    // console.log(res.data.data);
    newslist.value = res.data.data
})
function handleResize() {
    windowWidth.value = window.innerWidth
}
const SizeSource = computed(() => {
    // console.log(windowWidth.value);
    return windowWidth.value <= 768 ? 'small' : 'large';
})
const popoverWidth = computed(() => {
    return windowWidth.value <= 768 ? '70%' : '50%'
})
const searchnewslist = computed(() => searchText.value ? newslist.value.filter(item => item.title.includes(searchText.value)) : [])
const topNewsList = computed(() => newslist.value)

const whichTime = time => {
    return moment(time).format('LLL')
}
const tablist = [
    {
        label: '最新动态',
        name: 1
    },
    {
        label: '典型案例',
        name: 2
    },
    {
        label: '通知公告',
        name: 3
    },
]

const tabnews = computed(() => _.groupBy(newslist.value, item => item.category))
</script>
<style scoped lang="scss">
.container {
    width: 100vw;
    height: 40vh;
    background: url(../../public/hero_iphone14pro_spring__9xo85pm6sbmm_largetall.jpg);
    background-size: cover;
    text-align: center;
    position: relative;

    p {
        height: 390px;
        color: #fff;
        font-size: .7rem;
        z-index: 10;
        padding-top: 30px;
    }
}

.search {
    height: 100px;
    position: absolute;
    top: 34%;
    width: 100vw;
    text-align: center;
    // padding-top: 20px;
}

.el-input {
    width: 50%;
    height: auto;
}

.el-input__prefix {
    background: transparent;
}

.search-item {
    height: 50px;
    line-height: 50px;

    &:hover {
        background: whitesmoke;
        color: red;
    }
}

.topnews {
    display: flex;
    width: 100vw;
    height: auto;
    justify-content: center;
    margin-top: 30px;

    .newsbody {
        width: 60%;
        height: 100%;

        .top_card {
            width: 320px;
            height: 370px;
            margin: 20px 0;
            position: relative;
        }

        .el-card {

            .image {
                width: 100%;
                height: 180px;
                // display: block;
                background-size: cover;
            }

            .bottom {
                margin-top: 13px;
                line-height: 12px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .tab_image {
                width: 250px;
                height: 150px;
                // display: block;
                background-size: cover;
                float: left;
            }

            .news_Title {
                font-size: 20px;
            }

            .time {
                position: absolute;
                bottom: 10px;
                font-size: 13px;
                color: #999;
            }
        }

        // background-color: red;
    }
}



.el-menu {
    width: 100%;
    height: 80px;
}

.el-menu-item {
    width: 100px;
    height: 100%;
}

//手机端
@media screen and (max-width:768px) {
    .container {
        background: url(../../public/hero_iphone14pro_spring__9xo85pm6sbmm_mediumtall.jpg);
        background-size: 100%;
        background-repeat: no-repeat;

        p {
            padding-top: .3rem;
            font-size: 0.55rem;
        }
    }

    .search {
        padding-top: .2rem;

        .el-input {
            width: 70vw;
        }
    }

    .search_box {
        overflow-x: scroll;
        display: grid;
    }

    .search-item {

        height: .75rem;
        line-height: .3rem;
        font-size: 0.2rem;

        &:hover {
            background: whitesmoke;
            color: black;
        }
    }
}

// @media screen and (min-width:769) {
//     .container {
//         width: 100%;
//         height: 100%;
//         position: relative;

//         p {
//             font-size: 0.6rem;
//             z-index: 10;
//         }
//     }

//     .search {
//         position: absolute;
//         top: 15%;
//         width: 100vw;
//         text-align: center;

//         .el-input {
//             width: 60vw;
//             // height: auto;
//         }
//     }

// }
</style>