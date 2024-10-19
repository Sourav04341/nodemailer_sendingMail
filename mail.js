const http=require('http')
const nodemailer=require('nodemailer')

const server=http.createServer((request,response)=>{
    const auth=nodemailer.createTransport({
    service:"gmail",
    secure:true,
    port:465,
    auth:{
        user:"souravgoswami8945@gmail.com ",
        pass:"pjrx tukk rkze vquz "
    }
})

const receiver={
    from:"souravgoswami8945@gmail.com ",
    to:"debangi.chakraborty2004@gmail.com ",
    subject:"SUBHO BIJOYA SUVECHA",
    text:"sobai durga puja r bijoyar onek onek suvecha"
}

auth.sendMail(receiver,(error,email)=>{
    if(error)
        throw error,
    console.log("sucessfull")
})

}).listen(7001)