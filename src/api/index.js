import axios from 'axios'

axios.default.timeoyt = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json'


const $htpp = axios.create()
function axiosLoginUser () {
    axios({
            url: url.loginUser,
            method: 'post',
            data:{
                userName:this.userName,
                password:this.password 
            }
        })
        .then(response => {
            if(response.data.code==200){
                this.isLoading = true
                localStorage.userInfo = this.userName
                setTimeout(()=>{
                    Toast.success('登录成功')
                    this.$router.push('/home')
                    this.isLoading = false
                },1000)
                return this.userName
               
        }else{
            this.isLoading= true
            setTimeout(()=> {
                this.isLoading = false
                Toast.fail(response.data.message)
            },1000)
        }    
    })
    .catch((error) => {   
        console.log(error)
        Toast.fail('登录失败')
    })
}

export default {
    UserLogin (data) {
        // /api 路由 express    
       this.axiosLoginUser()
    },
    UserRegister(data) {
        return $http.post('/api/register', data)
    },
    getUser () {
        return $http.get('/api/user')
    },
    delUser(data) {
        return $http.post('/api/delUser', data)
    }
}