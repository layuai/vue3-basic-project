<script setup>
// TODO: 编辑
import { ref } from "vue";
import axios from "axios";
// 弹框开关
const dialogVisible = ref(false);
const data = ref({});
const open = (row) => {
    dialogVisible.value = true;
    data.value = row;
    console.log(data.value);
};

const emit = defineEmits(["on-undate"]);
const onUpdate = async (id) => {
    await axios.patch(`/edit/${id}`, data);
    dialogVisible.value = false;
    emit("on-undate");
};

defineExpose({
    open,
});
</script>

<template>
    <el-dialog v-model="dialogVisible" title="编辑" width="400px">
        <el-form label-width="50px">
            <el-form-item label="姓名">
                <el-input placeholder="请输入姓名" v-model="data.name" />
            </el-form-item>
            <el-form-item label="籍贯">
                <el-input placeholder="请输入籍贯" v-model="data.place" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button type="primary" @click="onUpdate(data.id)"
                    >确认</el-button
                >
            </span>
        </template>
    </el-dialog>
</template>

<style scoped>
.el-input {
    width: 290px;
}
</style>
