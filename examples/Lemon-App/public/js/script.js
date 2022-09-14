let Today = new Date();
var time = Today.getFullYear() + '-' + Today.getMonth() + '-' + Today.getDate() + ' | ' + Today.getHours() + ':' + Today.getMinutes() + ':' + Today.getSeconds()
var pop_up = (string) => {
    console.log(string)
    alert(time + ':\n' + string)
}
