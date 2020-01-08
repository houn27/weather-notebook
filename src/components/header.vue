<template>
    <el-row type="flex">
        <el-col :span="4">
            <img style="width: 25px; height: 25px;display: inline-block;margin-bottom:5px;" :src="require('../assets/icon-1.png')"  align="absmiddle"/>
            <div style="display: inline-block; ">Weather Notebook</div>
        </el-col>
        
        <el-col :span="16"></el-col>
        <el-col :span="4">
            <el-button-group v-show="!this.$store.state.signUp">
                <el-button type="primary" size="small" @click="dialogFormVisible = true">sign in<i class="el-icon-user-solid el-icon--right"></i></el-button>
                <el-button size="small" @click="registerFormVisible = true">register</el-button>
            </el-button-group> 
        </el-col>
        
        <div v-show="this.$store.state.signUp" style="display:inline-block">
            <el-dropdown @command="handleCommand">
                <el-button type="primary" icon="el-icon-user-solid" circle size="mini" class="el-dropdown-link"></el-button>
                <span>&ensp;{{$store.state.id}}</span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>Your Account</el-dropdown-item>
                    <el-dropdown-item command="signOut">Sign out</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <el-dialog title="sign up" :visible.sync="dialogFormVisible" width="400px">
            <el-form :model="form" >
                <el-form-item v-show="idError">
                    <el-alert title="id/password is wrong" type="error"></el-alert>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="form.id" autocomplete="off" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-input v-model="form.password" autocomplete="off" placeholder="password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false;idError=false;">cancel</el-button>
                <el-button type="primary" @click="verifyUser">sign up</el-button>
            </div>
        </el-dialog>
        <el-dialog title="register" :visible.sync="registerFormVisible" width="400px">
            <el-form :model="rigForm" >
                <el-form-item>
                    <el-alert title="id/password should contain letters and numbers" type="success" ></el-alert>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="rigForm.id" autocomplete="off" placeholder="username"></el-input>
                </el-form-item>
                <el-form-item >
                    <el-input v-model="rigForm.password" autocomplete="off" placeholder="password"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="registerFormVisible = false">cancel</el-button>
                <el-button type="primary" @click="registerUser">sign up</el-button>
            </div>
        </el-dialog>
    </el-row>
</template>
<script>
export default {
    data() {
      return {
        idError:false,
        dialogFormVisible: false,
        registerFormVisible:false,
        form: {
          id: '',
          password: '',
        },
        rigForm:{
            id: '',
            password: '',
        },
        formLabelWidth: '80px'
      }
    },
    methods:{
        verifyUser:function(){
            if(this.form.id=='abc' && this.form.password=='123'){
                this.dialogFormVisible = false;
                this.$store.commit('changeSign',this.form.id);
            }else{
                this.idError=true;
            }
            
        },
        registerUser:function(){
            this.registerFormVisible=false;
        },
        handleCommand(command) {
            if(command=='signOut'){
                this.$store.commit('changeSign',this.form.id);
            }
      }
    },
    
}
</script>
<style scoped>
.el-button-group{
    text-align: right;
}
.el-alert {
    padding: 0px;
}
.el-avatar, .el-drawer {
    overflow:visible;
}


</style>