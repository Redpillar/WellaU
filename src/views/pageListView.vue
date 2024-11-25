<template>
    <div class="listWrap">
        <div class="top">화면설계서 버전 : v1.15, 총 페이지 : {{pageList.length}}</div>
        <table cellspacing="0" cellapdding="0">
            <colgroup>
                <col style="width:20%" />
                <col style="width:20%" />
                <col style="width:20%" />
                <col style="width:10%" />
                <col style="width:20%" />
                <col style="width:10%" />
            </colgroup>
            <thead>
                <tr>
                    <th>
                        카테고리
                    </th>
                    <th>
                        OS
                    </th>
                    <th>
                        이름
                    </th>
                    <th>
                        피피티 번호
                    </th>
                    <th>
                        Path
                    </th>
                    <th>
                        완료
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(page,index) in pageList" :key="'list' + index" :class="categoryLine(index)" @click="trClick(page.path)">
                    <td>
                        {{page.category}}
                    </td>
                    <td>
                        {{page.os}}
                    </td>
                    <td>
                        {{page.name}}
                    </td>
                    <td>
                        {{page.page}}
                    </td>
                    <td>
                        {{page.path}}
                    </td>
                    <td>
                        {{page.status ? page.status : "-"}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import pageListData from './pageList'

    const pageList = ref(pageListData)
    const categoryLine = (index)=>{
        let temp = "";
        const index2 = index - 1;
        if(index > 0 && pageList.value[index2].category !== pageList.value[index].category){
            temp = "categoryLine"
        }
        return temp;
    }
    const router = useRouter();
    const trClick = (path)=>{
        router.push(path);
    }
</script>
<style type="scss" scoped>
    .listWrap{
        padding:0 0 10rem 0;
        background:rgba(0,0,0,0.7);
    }
    table{
        width:calc(100% - 20rem);
        margin:0 auto;
        font-size:12rem;
        border-collapse:collapse;
        td, th{
            border:1px solid rgba(255,255,255,0.15);
        }
        thead{
            th, td{
                height:40rem;
                font-weight:bold;
                color:#ccc;
                background:rgba(0,0,0,0.55);
            }
        }
        tbody{
            td{
                padding:10rem;
                font-size:15rem;
                color:#fff;
                word-break:break-all;
                background:rgba(0,0,0,0.35);
                &:first-child{
                    text-align:center;
                }
            }
        }
    }
    .categoryLine{
        border-top:2rem double rgba(255,255,255,0.5);
    }
    .top{
        padding:10rem;
        font-size:14rem;
        text-align:right;
        color:rgba(255,255,255,0.8);
    }
    .subTit{
        padding:10rem;
        font-size:14rem;
        text-align:right;
        color:rgba(255,255,255,0.8);
    }
</style>